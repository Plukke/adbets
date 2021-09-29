import { BigInt, ipfs, json } from "@graphprotocol/graph-ts";
import { PoolFactory, PoolCreated } from "../generated/PoolFactory/PoolFactory";
import {
  Pool,
  PoolUpdated,
  BetPlaced,
  BetRemoved,
} from "../generated/templates/Pool/Pool";
import { Pool as PoolTemplate } from "../generated/templates";
import { Pool as EntityPool, Factory, Bet } from "../generated/schema";
import handleCategory from "./utils/handleCategory";
import handleGroup from "./utils/handleGroup";

export function handlePoolCreated(event: PoolCreated): void {
  // inicializar factory
  let factory = Factory.load(event.params.factory.toHex());
  if (factory === null) {
    factory = new Factory(event.params.factory.toHex());
    factory.poolsCount = BigInt.fromI32(0);
    factory.activePools = BigInt.fromI32(0);
  }

  factory.poolsCount = factory.poolsCount.plus(BigInt.fromI32(1));
  factory.activePools = factory.activePools.plus(BigInt.fromI32(1));
  factory.save();

  let entity = EntityPool.load(event.params._address.toHex());

  if (!entity) {
    entity = new EntityPool(event.params._address.toHex());
    entity.count = BigInt.fromI32(0);
  }

  entity.count = entity.count.plus(BigInt.fromI32(1));

  let factoryContract = PoolFactory.bind(event.params.factory);
  let poolContract = Pool.bind(event.params._address);

  entity.name = event.params.name;
  entity.startTimestamp = poolContract.startTimestamp();
  entity.endTimestamp = poolContract.endTimestamp();
  entity.acceptDraw = poolContract.acceptDraw();
  entity.riskLevel = poolContract.riskLevel();
  entity.url = poolContract.url();
  entity.result = 0;
  entity.status = poolContract.status();
  entity.creator = poolContract.creator();
  entity.betsCount = 0;
  entity.homeCounter = 0;
  entity.awayCounter = 0;
  entity.drawCounter = 0;
  entity.homeBetsAmount = BigInt.fromI32(0);
  entity.awayBetsAmount = BigInt.fromI32(0);
  entity.drawBetsAmount = BigInt.fromI32(0);
  entity.volume = BigInt.fromI32(0);

  // aumentar contador de la category a la que pertenece la pool
  // check if category & group exists or needs to be created
  handleCategory(factoryContract, poolContract, "plus");
  handleGroup(factoryContract, poolContract);

  entity.category = poolContract.category().toString();
  entity.group = poolContract.group().toString();

  // retrieve pool metadata
  // const hash = entity.url.replace("https://api.thegraph.com/ipfs/", "");
  const hash = entity.url.split("/").pop();
  let data = ipfs.cat(hash);
  if (!!data) {
    let value = json.fromBytes(data);
    if (!value.isNull()) {
      let obj = value.toObject();
      let description = obj.get("description");
      let venue = obj.get("venue");
      let homeLabel = obj.get("homeLabel");
      let awayLabel = obj.get("awayLabel");

      if (description) {
        entity.description = description.toString();
      }
      if (venue) {
        entity.venue = venue.toString();
      }
      if (homeLabel) {
        entity.homeLabel = homeLabel.toString();
      }
      if (awayLabel) {
        entity.awayLabel = awayLabel.toString();
      }
    }
  }

  PoolTemplate.create(event.params._address);

  entity.save();
}

export function handlePoolUpdated(event: PoolUpdated): void {
  let factory = Factory.load(event.params.factory.toHex());
  if (factory) {
    factory.activePools = factory.activePools.minus(BigInt.fromI32(1));
    factory.save();
  }

  // checar de que categoria es la pool para restar de su contador
  let factoryContract = PoolFactory.bind(event.params.factory);
  let poolContract = Pool.bind(event.params._address);
  if (factoryContract && poolContract) {
    handleCategory(factoryContract, poolContract, "minus");
  }
}

export function handleBetPlaced(event: BetPlaced): void {
  // aumentar betsCount de la pool
  // aumentar volume de la pool
  let entity = EntityPool.load(event.params.pool.toHex());
  if (!entity) {
    entity = new EntityPool(event.params.pool.toHex());
  }
  entity.betsCount = entity.betsCount + 1;

  entity.volume = entity.volume.plus(event.params.amount);

  let poolContract = Pool.bind(event.params.pool);
  if (poolContract) {
    entity.homeCounter = poolContract._homeCounter().toI32();
    entity.awayCounter = poolContract._awayCounter().toI32();
    entity.drawCounter = poolContract._drawCounter().toI32();

    if (event.params.selection === 1) {
      entity.homeBetsAmount = entity.homeBetsAmount.plus(event.params.amount);
    } else if (event.params.selection === 2) {
      entity.awayBetsAmount = entity.awayBetsAmount.plus(event.params.amount);
    } else if (event.params.selection === 3) {
      entity.drawBetsAmount = entity.drawBetsAmount.plus(event.params.amount);
    }
  }

  let bet = Bet.load(event.params.id.toString());
  if (!bet) {
    bet = new Bet(event.params.id.toString());
  }

  bet.pool = event.params.pool.toString();
  bet.owner = event.params.user;
  bet.selection = event.params.selection;
  bet.amount = event.params.amount;
  bet.status = 0;
  bet.timestamp = event.block.timestamp;

  bet.save();
  entity.save();
}

export function handleBetRemoved(event: BetRemoved): void {
  // restar betsCount de la pool
  // reducir volume de la pool
  let entity = EntityPool.load(event.params.pool.toHex());
  if (!entity) {
    entity = new EntityPool(event.params.pool.toHex());
  }
  entity.betsCount = entity.betsCount + 1;
  entity.volume = entity.volume.minus(event.params.amount);

  let poolContract = Pool.bind(event.params.pool);
  if (poolContract) {
    entity.homeCounter = poolContract._homeCounter().toI32();
    entity.awayCounter = poolContract._awayCounter().toI32();
    entity.drawCounter = poolContract._drawCounter().toI32();

    if (event.params.selection === 1) {
      entity.homeBetsAmount = entity.homeBetsAmount.minus(event.params.amount);
    } else if (event.params.selection === 2) {
      entity.awayBetsAmount = entity.awayBetsAmount.minus(event.params.amount);
    } else if (event.params.selection === 3) {
      entity.drawBetsAmount = entity.drawBetsAmount.minus(event.params.amount);
    }
  }

  let bet = Bet.load(event.params.id.toString());
  if (!bet) {
    bet = new Bet(event.params.id.toString());
  }

  bet.status = 2;

  bet.save();
  entity.save();
}
