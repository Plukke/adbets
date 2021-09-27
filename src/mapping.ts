import { BigInt } from "@graphprotocol/graph-ts";
import { ipfs, json, Address } from "@graphprotocol/graph-ts";
import {
  PoolFactory,
  PoolCreated,
  PoolUpdated,
} from "../generated/PoolFactory/PoolFactory";
import { Pool } from "../generated/templates/Pool/Pool";
import { Pool as EntityPool, Category, Group } from "../generated/schema";

function handleCategory(
  factoryContract: PoolFactory,
  poolContract: Pool
): void {
  let categoryEntity = Category.load(poolContract.category().toString());

  if (!categoryEntity) {
    categoryEntity = new Category(poolContract.category().toString());

    const categoryData = factoryContract.categories(poolContract.category());

    categoryEntity.name = categoryData.value1;
    categoryEntity.status = categoryData.value3;
  }

  categoryEntity.save();
}

function handleGroup(factoryContract: PoolFactory, poolContract: Pool): void {
  let groupEntity = Group.load(poolContract.group().toString());

  if (!groupEntity) {
    groupEntity = new Group(poolContract.group().toString());

    const categoryData = factoryContract.groups(poolContract.group());

    groupEntity.category = categoryData.value1.toString();
    groupEntity.name = categoryData.value2;
    groupEntity.country = categoryData.value3;
    groupEntity.status = categoryData.value5;
  }

  groupEntity.save();
}

export function handlePoolCreated(event: PoolCreated): void {
  let entity = EntityPool.load(event.params._address.toHex());

  if (!entity) {
    entity = new EntityPool(event.params._address.toHex());
    entity.count = BigInt.fromI32(0);
  }

  entity.count = entity.count.plus(BigInt.fromI32(1));

  let factoryContract = PoolFactory.bind(
    Address.fromString("0xCce024598962C74aD36337569321570C95d7e3d1")
  );
  let poolContract = Pool.bind(event.params._address);

  entity.name = poolContract.name();
  entity.startTimestamp = poolContract.startTimestamp();
  entity.endTimestamp = poolContract.endTimestamp();
  entity.acceptDraw = poolContract.acceptDraw();
  entity.riskLevel = poolContract.riskLevel();
  entity.url = poolContract.url();
  entity.result = 0;
  entity.status = poolContract.status();
  entity.creator = poolContract.creator();

  // check if category & group exists or needs to be created
  handleCategory(factoryContract, poolContract);
  handleGroup(factoryContract, poolContract);

  entity.category = poolContract.category().toString();
  entity.group = poolContract.group().toString();

  // retrieve pool metadata
  const hash = entity.url.replace("https://api.thegraph.com/ipfs/", "");
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

  entity.save();
}

export function handlePoolUpdated(event: PoolUpdated): void {}
