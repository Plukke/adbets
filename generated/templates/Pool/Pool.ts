// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class BetPlaced extends ethereum.Event {
  get params(): BetPlaced__Params {
    return new BetPlaced__Params(this);
  }
}

export class BetPlaced__Params {
  _event: BetPlaced;

  constructor(event: BetPlaced) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get user(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get pool(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get selection(): i32 {
    return this._event.parameters[4].value.toI32();
  }
}

export class BetRemoved extends ethereum.Event {
  get params(): BetRemoved__Params {
    return new BetRemoved__Params(this);
  }
}

export class BetRemoved__Params {
  _event: BetRemoved;

  constructor(event: BetRemoved) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get user(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get pool(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get selection(): i32 {
    return this._event.parameters[4].value.toI32();
  }
}

export class PoolResultAdded extends ethereum.Event {
  get params(): PoolResultAdded__Params {
    return new PoolResultAdded__Params(this);
  }
}

export class PoolResultAdded__Params {
  _event: PoolResultAdded;

  constructor(event: PoolResultAdded) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get user(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get result(): i32 {
    return this._event.parameters[2].value.toI32();
  }

  get homeScore(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get awayScore(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class PoolUpdated extends ethereum.Event {
  get params(): PoolUpdated__Params {
    return new PoolUpdated__Params(this);
  }
}

export class PoolUpdated__Params {
  _event: PoolUpdated;

  constructor(event: PoolUpdated) {
    this._event = event;
  }

  get _address(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get status(): i32 {
    return this._event.parameters[1].value.toI32();
  }

  get factory(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class Pool__betsResult {
  value0: Address;
  value1: i32;
  value2: BigInt;
  value3: i32;
  value4: BigInt;

  constructor(
    value0: Address,
    value1: i32,
    value2: BigInt,
    value3: i32,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set(
      "value1",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value1))
    );
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set(
      "value3",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value3))
    );
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }
}

export class Pool__listBetsResultValue0Struct extends ethereum.Tuple {
  get owner(): Address {
    return this[0].toAddress();
  }

  get selection(): i32 {
    return this[1].toI32();
  }

  get amount(): BigInt {
    return this[2].toBigInt();
  }

  get status(): i32 {
    return this[3].toI32();
  }

  get timestamp(): BigInt {
    return this[4].toBigInt();
  }
}

export class Pool__listResultsResultValue0Struct extends ethereum.Tuple {
  get validator(): Address {
    return this[0].toAddress();
  }

  get res(): i32 {
    return this[1].toI32();
  }

  get homeScore(): BigInt {
    return this[2].toBigInt();
  }

  get awayScore(): BigInt {
    return this[3].toBigInt();
  }

  get status(): i32 {
    return this[4].toI32();
  }
}

export class Pool__resultsResult {
  value0: Address;
  value1: i32;
  value2: BigInt;
  value3: BigInt;
  value4: i32;

  constructor(
    value0: Address,
    value1: i32,
    value2: BigInt,
    value3: BigInt,
    value4: i32
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set(
      "value1",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value1))
    );
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set(
      "value4",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value4))
    );
    return map;
  }
}

export class Pool extends ethereum.SmartContract {
  static bind(address: Address): Pool {
    return new Pool("Pool", address);
  }

  MAX_BET_AMOUNT(): BigInt {
    let result = super.call("MAX_BET_AMOUNT", "MAX_BET_AMOUNT():(uint256)", []);

    return result[0].toBigInt();
  }

  try_MAX_BET_AMOUNT(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "MAX_BET_AMOUNT",
      "MAX_BET_AMOUNT():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  MIN_BET_AMOUNT(): BigInt {
    let result = super.call("MIN_BET_AMOUNT", "MIN_BET_AMOUNT():(uint256)", []);

    return result[0].toBigInt();
  }

  try_MIN_BET_AMOUNT(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "MIN_BET_AMOUNT",
      "MIN_BET_AMOUNT():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _awayCounter(): BigInt {
    let result = super.call("_awayCounter", "_awayCounter():(uint256)", []);

    return result[0].toBigInt();
  }

  try__awayCounter(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("_awayCounter", "_awayCounter():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _betIds(): BigInt {
    let result = super.call("_betIds", "_betIds():(uint256)", []);

    return result[0].toBigInt();
  }

  try__betIds(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("_betIds", "_betIds():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _drawCounter(): BigInt {
    let result = super.call("_drawCounter", "_drawCounter():(uint256)", []);

    return result[0].toBigInt();
  }

  try__drawCounter(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("_drawCounter", "_drawCounter():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _homeCounter(): BigInt {
    let result = super.call("_homeCounter", "_homeCounter():(uint256)", []);

    return result[0].toBigInt();
  }

  try__homeCounter(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("_homeCounter", "_homeCounter():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _resultIds(): BigInt {
    let result = super.call("_resultIds", "_resultIds():(uint256)", []);

    return result[0].toBigInt();
  }

  try__resultIds(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("_resultIds", "_resultIds():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  acceptDraw(): boolean {
    let result = super.call("acceptDraw", "acceptDraw():(bool)", []);

    return result[0].toBoolean();
  }

  try_acceptDraw(): ethereum.CallResult<boolean> {
    let result = super.tryCall("acceptDraw", "acceptDraw():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  bets(param0: BigInt): Pool__betsResult {
    let result = super.call(
      "bets",
      "bets(uint256):(address,uint8,uint256,uint8,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Pool__betsResult(
      result[0].toAddress(),
      result[1].toI32(),
      result[2].toBigInt(),
      result[3].toI32(),
      result[4].toBigInt()
    );
  }

  try_bets(param0: BigInt): ethereum.CallResult<Pool__betsResult> {
    let result = super.tryCall(
      "bets",
      "bets(uint256):(address,uint8,uint256,uint8,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Pool__betsResult(
        value[0].toAddress(),
        value[1].toI32(),
        value[2].toBigInt(),
        value[3].toI32(),
        value[4].toBigInt()
      )
    );
  }

  category(): BigInt {
    let result = super.call("category", "category():(uint256)", []);

    return result[0].toBigInt();
  }

  try_category(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("category", "category():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  claimPayment(): BigInt {
    let result = super.call("claimPayment", "claimPayment():(uint256)", []);

    return result[0].toBigInt();
  }

  try_claimPayment(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("claimPayment", "claimPayment():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  creator(): Address {
    let result = super.call("creator", "creator():(address)", []);

    return result[0].toAddress();
  }

  try_creator(): ethereum.CallResult<Address> {
    let result = super.tryCall("creator", "creator():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  endTimestamp(): BigInt {
    let result = super.call("endTimestamp", "endTimestamp():(uint256)", []);

    return result[0].toBigInt();
  }

  try_endTimestamp(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("endTimestamp", "endTimestamp():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  factoryAddress(): Address {
    let result = super.call("factoryAddress", "factoryAddress():(address)", []);

    return result[0].toAddress();
  }

  try_factoryAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "factoryAddress",
      "factoryAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getBalance(): BigInt {
    let result = super.call("getBalance", "getBalance():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getBalance(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getBalance", "getBalance():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getCreator(): Address {
    let result = super.call("getCreator", "getCreator():(address)", []);

    return result[0].toAddress();
  }

  try_getCreator(): ethereum.CallResult<Address> {
    let result = super.tryCall("getCreator", "getCreator():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  group(): BigInt {
    let result = super.call("group", "group():(uint256)", []);

    return result[0].toBigInt();
  }

  try_group(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("group", "group():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  listBets(): Array<Pool__listBetsResultValue0Struct> {
    let result = super.call(
      "listBets",
      "listBets():((address,uint8,uint256,uint8,uint256)[])",
      []
    );

    return result[0].toTupleArray<Pool__listBetsResultValue0Struct>();
  }

  try_listBets(): ethereum.CallResult<Array<Pool__listBetsResultValue0Struct>> {
    let result = super.tryCall(
      "listBets",
      "listBets():((address,uint8,uint256,uint8,uint256)[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<Pool__listBetsResultValue0Struct>()
    );
  }

  listResults(): Array<Pool__listResultsResultValue0Struct> {
    let result = super.call(
      "listResults",
      "listResults():((address,uint8,uint256,uint256,uint8)[])",
      []
    );

    return result[0].toTupleArray<Pool__listResultsResultValue0Struct>();
  }

  try_listResults(): ethereum.CallResult<
    Array<Pool__listResultsResultValue0Struct>
  > {
    let result = super.tryCall(
      "listResults",
      "listResults():((address,uint8,uint256,uint256,uint8)[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<Pool__listResultsResultValue0Struct>()
    );
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  result(): i32 {
    let result = super.call("result", "result():(uint8)", []);

    return result[0].toI32();
  }

  try_result(): ethereum.CallResult<i32> {
    let result = super.tryCall("result", "result():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  results(param0: BigInt): Pool__resultsResult {
    let result = super.call(
      "results",
      "results(uint256):(address,uint8,uint256,uint256,uint8)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Pool__resultsResult(
      result[0].toAddress(),
      result[1].toI32(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toI32()
    );
  }

  try_results(param0: BigInt): ethereum.CallResult<Pool__resultsResult> {
    let result = super.tryCall(
      "results",
      "results(uint256):(address,uint8,uint256,uint256,uint8)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Pool__resultsResult(
        value[0].toAddress(),
        value[1].toI32(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toI32()
      )
    );
  }

  riskLevel(): i32 {
    let result = super.call("riskLevel", "riskLevel():(uint8)", []);

    return result[0].toI32();
  }

  try_riskLevel(): ethereum.CallResult<i32> {
    let result = super.tryCall("riskLevel", "riskLevel():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  startTimestamp(): BigInt {
    let result = super.call("startTimestamp", "startTimestamp():(uint256)", []);

    return result[0].toBigInt();
  }

  try_startTimestamp(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "startTimestamp",
      "startTimestamp():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  status(): i32 {
    let result = super.call("status", "status():(uint8)", []);

    return result[0].toI32();
  }

  try_status(): ethereum.CallResult<i32> {
    let result = super.tryCall("status", "status():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  url(): string {
    let result = super.call("url", "url():(string)", []);

    return result[0].toString();
  }

  try_url(): ethereum.CallResult<string> {
    let result = super.tryCall("url", "url():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  userBetSelections(param0: Address, param1: BigInt): i32 {
    let result = super.call(
      "userBetSelections",
      "userBetSelections(address,uint256):(uint8)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toI32();
  }

  try_userBetSelections(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "userBetSelections",
      "userBetSelections(address,uint256):(uint8)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  validators(param0: BigInt): Address {
    let result = super.call("validators", "validators(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_validators(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("validators", "validators(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _url(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _categoryId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _groupId(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _acceptDraw(): boolean {
    return this._call.inputValues[4].value.toBoolean();
  }

  get _riskLevel(): i32 {
    return this._call.inputValues[5].value.toI32();
  }

  get _startTimestamp(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get _endTimestamp(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }

  get _creator(): Address {
    return this._call.inputValues[8].value.toAddress();
  }

  get _factoryAddress(): Address {
    return this._call.inputValues[9].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CancelPoolCall extends ethereum.Call {
  get inputs(): CancelPoolCall__Inputs {
    return new CancelPoolCall__Inputs(this);
  }

  get outputs(): CancelPoolCall__Outputs {
    return new CancelPoolCall__Outputs(this);
  }
}

export class CancelPoolCall__Inputs {
  _call: CancelPoolCall;

  constructor(call: CancelPoolCall) {
    this._call = call;
  }
}

export class CancelPoolCall__Outputs {
  _call: CancelPoolCall;

  constructor(call: CancelPoolCall) {
    this._call = call;
  }
}

export class ChangeCreatorCall extends ethereum.Call {
  get inputs(): ChangeCreatorCall__Inputs {
    return new ChangeCreatorCall__Inputs(this);
  }

  get outputs(): ChangeCreatorCall__Outputs {
    return new ChangeCreatorCall__Outputs(this);
  }
}

export class ChangeCreatorCall__Inputs {
  _call: ChangeCreatorCall;

  constructor(call: ChangeCreatorCall) {
    this._call = call;
  }

  get _newCreator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ChangeCreatorCall__Outputs {
  _call: ChangeCreatorCall;

  constructor(call: ChangeCreatorCall) {
    this._call = call;
  }
}

export class ChangeNameCall extends ethereum.Call {
  get inputs(): ChangeNameCall__Inputs {
    return new ChangeNameCall__Inputs(this);
  }

  get outputs(): ChangeNameCall__Outputs {
    return new ChangeNameCall__Outputs(this);
  }
}

export class ChangeNameCall__Inputs {
  _call: ChangeNameCall;

  constructor(call: ChangeNameCall) {
    this._call = call;
  }

  get _newValue(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class ChangeNameCall__Outputs {
  _call: ChangeNameCall;

  constructor(call: ChangeNameCall) {
    this._call = call;
  }
}

export class ChangeUrlCall extends ethereum.Call {
  get inputs(): ChangeUrlCall__Inputs {
    return new ChangeUrlCall__Inputs(this);
  }

  get outputs(): ChangeUrlCall__Outputs {
    return new ChangeUrlCall__Outputs(this);
  }
}

export class ChangeUrlCall__Inputs {
  _call: ChangeUrlCall;

  constructor(call: ChangeUrlCall) {
    this._call = call;
  }

  get _newValue(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class ChangeUrlCall__Outputs {
  _call: ChangeUrlCall;

  constructor(call: ChangeUrlCall) {
    this._call = call;
  }
}

export class ClaimPaymentCall extends ethereum.Call {
  get inputs(): ClaimPaymentCall__Inputs {
    return new ClaimPaymentCall__Inputs(this);
  }

  get outputs(): ClaimPaymentCall__Outputs {
    return new ClaimPaymentCall__Outputs(this);
  }
}

export class ClaimPaymentCall__Inputs {
  _call: ClaimPaymentCall;

  constructor(call: ClaimPaymentCall) {
    this._call = call;
  }
}

export class ClaimPaymentCall__Outputs {
  _call: ClaimPaymentCall;

  constructor(call: ClaimPaymentCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class ForceCancelPoolCall extends ethereum.Call {
  get inputs(): ForceCancelPoolCall__Inputs {
    return new ForceCancelPoolCall__Inputs(this);
  }

  get outputs(): ForceCancelPoolCall__Outputs {
    return new ForceCancelPoolCall__Outputs(this);
  }
}

export class ForceCancelPoolCall__Inputs {
  _call: ForceCancelPoolCall;

  constructor(call: ForceCancelPoolCall) {
    this._call = call;
  }
}

export class ForceCancelPoolCall__Outputs {
  _call: ForceCancelPoolCall;

  constructor(call: ForceCancelPoolCall) {
    this._call = call;
  }
}

export class ForceResultCall extends ethereum.Call {
  get inputs(): ForceResultCall__Inputs {
    return new ForceResultCall__Inputs(this);
  }

  get outputs(): ForceResultCall__Outputs {
    return new ForceResultCall__Outputs(this);
  }
}

export class ForceResultCall__Inputs {
  _call: ForceResultCall;

  constructor(call: ForceResultCall) {
    this._call = call;
  }

  get _result(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get _homeScore(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _awayScore(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class ForceResultCall__Outputs {
  _call: ForceResultCall;

  constructor(call: ForceResultCall) {
    this._call = call;
  }
}

export class PlaceBetCall extends ethereum.Call {
  get inputs(): PlaceBetCall__Inputs {
    return new PlaceBetCall__Inputs(this);
  }

  get outputs(): PlaceBetCall__Outputs {
    return new PlaceBetCall__Outputs(this);
  }
}

export class PlaceBetCall__Inputs {
  _call: PlaceBetCall;

  constructor(call: PlaceBetCall) {
    this._call = call;
  }

  get _selection(): i32 {
    return this._call.inputValues[0].value.toI32();
  }
}

export class PlaceBetCall__Outputs {
  _call: PlaceBetCall;

  constructor(call: PlaceBetCall) {
    this._call = call;
  }
}

export class RemoveBetCall extends ethereum.Call {
  get inputs(): RemoveBetCall__Inputs {
    return new RemoveBetCall__Inputs(this);
  }

  get outputs(): RemoveBetCall__Outputs {
    return new RemoveBetCall__Outputs(this);
  }
}

export class RemoveBetCall__Inputs {
  _call: RemoveBetCall;

  constructor(call: RemoveBetCall) {
    this._call = call;
  }

  get betId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RemoveBetCall__Outputs {
  _call: RemoveBetCall;

  constructor(call: RemoveBetCall) {
    this._call = call;
  }
}

export class SetResultCall extends ethereum.Call {
  get inputs(): SetResultCall__Inputs {
    return new SetResultCall__Inputs(this);
  }

  get outputs(): SetResultCall__Outputs {
    return new SetResultCall__Outputs(this);
  }
}

export class SetResultCall__Inputs {
  _call: SetResultCall;

  constructor(call: SetResultCall) {
    this._call = call;
  }

  get _result(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get _homeScore(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _awayScore(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SetResultCall__Outputs {
  _call: SetResultCall;

  constructor(call: SetResultCall) {
    this._call = call;
  }
}
