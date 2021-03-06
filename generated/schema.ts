// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Factory extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("poolsCount", Value.fromBigInt(BigInt.zero()));
    this.set("activePools", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Factory entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Factory entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Factory", id.toString(), this);
    }
  }

  static load(id: string): Factory | null {
    return changetype<Factory | null>(store.get("Factory", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get poolsCount(): BigInt {
    let value = this.get("poolsCount");
    return value!.toBigInt();
  }

  set poolsCount(value: BigInt) {
    this.set("poolsCount", Value.fromBigInt(value));
  }

  get activePools(): BigInt {
    let value = this.get("activePools");
    return value!.toBigInt();
  }

  set activePools(value: BigInt) {
    this.set("activePools", Value.fromBigInt(value));
  }
}

export class Category extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("name", Value.fromString(""));
    this.set("status", Value.fromI32(0));
    this.set("activePools", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Category entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Category entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Category", id.toString(), this);
    }
  }

  static load(id: string): Category | null {
    return changetype<Category | null>(store.get("Category", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get status(): i32 {
    let value = this.get("status");
    return value!.toI32();
  }

  set status(value: i32) {
    this.set("status", Value.fromI32(value));
  }

  get activePools(): BigInt {
    let value = this.get("activePools");
    return value!.toBigInt();
  }

  set activePools(value: BigInt) {
    this.set("activePools", Value.fromBigInt(value));
  }

  get groups(): Array<string> | null {
    let value = this.get("groups");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set groups(value: Array<string> | null) {
    if (!value) {
      this.unset("groups");
    } else {
      this.set("groups", Value.fromStringArray(<Array<string>>value));
    }
  }
}

export class Group extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("name", Value.fromString(""));
    this.set("status", Value.fromI32(0));
    this.set("country", Value.fromString(""));
    this.set("category", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Group entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Group entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Group", id.toString(), this);
    }
  }

  static load(id: string): Group | null {
    return changetype<Group | null>(store.get("Group", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get status(): i32 {
    let value = this.get("status");
    return value!.toI32();
  }

  set status(value: i32) {
    this.set("status", Value.fromI32(value));
  }

  get country(): string {
    let value = this.get("country");
    return value!.toString();
  }

  set country(value: string) {
    this.set("country", Value.fromString(value));
  }

  get category(): string {
    let value = this.get("category");
    return value!.toString();
  }

  set category(value: string) {
    this.set("category", Value.fromString(value));
  }
}

export class Pool extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("count", Value.fromBigInt(BigInt.zero()));
    this.set("name", Value.fromString(""));
    this.set("category", Value.fromString(""));
    this.set("startTimestamp", Value.fromBigInt(BigInt.zero()));
    this.set("endTimestamp", Value.fromBigInt(BigInt.zero()));
    this.set("acceptDraw", Value.fromBoolean(false));
    this.set("riskLevel", Value.fromI32(0));
    this.set("url", Value.fromString(""));
    this.set("description", Value.fromString(""));
    this.set("venue", Value.fromString(""));
    this.set("homeLabel", Value.fromString(""));
    this.set("awayLabel", Value.fromString(""));
    this.set("result", Value.fromI32(0));
    this.set("status", Value.fromI32(0));
    this.set("creator", Value.fromBytes(Bytes.empty()));
    this.set("betsCount", Value.fromI32(0));
    this.set("homeCounter", Value.fromI32(0));
    this.set("awayCounter", Value.fromI32(0));
    this.set("drawCounter", Value.fromI32(0));
    this.set("homeBetsAmount", Value.fromBigInt(BigInt.zero()));
    this.set("awayBetsAmount", Value.fromBigInt(BigInt.zero()));
    this.set("drawBetsAmount", Value.fromBigInt(BigInt.zero()));
    this.set("volume", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Pool entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Pool entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Pool", id.toString(), this);
    }
  }

  static load(id: string): Pool | null {
    return changetype<Pool | null>(store.get("Pool", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value!.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get category(): string {
    let value = this.get("category");
    return value!.toString();
  }

  set category(value: string) {
    this.set("category", Value.fromString(value));
  }

  get group(): string | null {
    let value = this.get("group");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set group(value: string | null) {
    if (!value) {
      this.unset("group");
    } else {
      this.set("group", Value.fromString(<string>value));
    }
  }

  get startTimestamp(): BigInt {
    let value = this.get("startTimestamp");
    return value!.toBigInt();
  }

  set startTimestamp(value: BigInt) {
    this.set("startTimestamp", Value.fromBigInt(value));
  }

  get endTimestamp(): BigInt {
    let value = this.get("endTimestamp");
    return value!.toBigInt();
  }

  set endTimestamp(value: BigInt) {
    this.set("endTimestamp", Value.fromBigInt(value));
  }

  get acceptDraw(): boolean {
    let value = this.get("acceptDraw");
    return value!.toBoolean();
  }

  set acceptDraw(value: boolean) {
    this.set("acceptDraw", Value.fromBoolean(value));
  }

  get riskLevel(): i32 {
    let value = this.get("riskLevel");
    return value!.toI32();
  }

  set riskLevel(value: i32) {
    this.set("riskLevel", Value.fromI32(value));
  }

  get url(): string {
    let value = this.get("url");
    return value!.toString();
  }

  set url(value: string) {
    this.set("url", Value.fromString(value));
  }

  get description(): string {
    let value = this.get("description");
    return value!.toString();
  }

  set description(value: string) {
    this.set("description", Value.fromString(value));
  }

  get venue(): string {
    let value = this.get("venue");
    return value!.toString();
  }

  set venue(value: string) {
    this.set("venue", Value.fromString(value));
  }

  get homeLabel(): string {
    let value = this.get("homeLabel");
    return value!.toString();
  }

  set homeLabel(value: string) {
    this.set("homeLabel", Value.fromString(value));
  }

  get awayLabel(): string {
    let value = this.get("awayLabel");
    return value!.toString();
  }

  set awayLabel(value: string) {
    this.set("awayLabel", Value.fromString(value));
  }

  get result(): i32 {
    let value = this.get("result");
    return value!.toI32();
  }

  set result(value: i32) {
    this.set("result", Value.fromI32(value));
  }

  get status(): i32 {
    let value = this.get("status");
    return value!.toI32();
  }

  set status(value: i32) {
    this.set("status", Value.fromI32(value));
  }

  get creator(): Bytes {
    let value = this.get("creator");
    return value!.toBytes();
  }

  set creator(value: Bytes) {
    this.set("creator", Value.fromBytes(value));
  }

  get betsCount(): i32 {
    let value = this.get("betsCount");
    return value!.toI32();
  }

  set betsCount(value: i32) {
    this.set("betsCount", Value.fromI32(value));
  }

  get homeCounter(): i32 {
    let value = this.get("homeCounter");
    return value!.toI32();
  }

  set homeCounter(value: i32) {
    this.set("homeCounter", Value.fromI32(value));
  }

  get awayCounter(): i32 {
    let value = this.get("awayCounter");
    return value!.toI32();
  }

  set awayCounter(value: i32) {
    this.set("awayCounter", Value.fromI32(value));
  }

  get drawCounter(): i32 {
    let value = this.get("drawCounter");
    return value!.toI32();
  }

  set drawCounter(value: i32) {
    this.set("drawCounter", Value.fromI32(value));
  }

  get homeBetsAmount(): BigInt {
    let value = this.get("homeBetsAmount");
    return value!.toBigInt();
  }

  set homeBetsAmount(value: BigInt) {
    this.set("homeBetsAmount", Value.fromBigInt(value));
  }

  get awayBetsAmount(): BigInt {
    let value = this.get("awayBetsAmount");
    return value!.toBigInt();
  }

  set awayBetsAmount(value: BigInt) {
    this.set("awayBetsAmount", Value.fromBigInt(value));
  }

  get drawBetsAmount(): BigInt {
    let value = this.get("drawBetsAmount");
    return value!.toBigInt();
  }

  set drawBetsAmount(value: BigInt) {
    this.set("drawBetsAmount", Value.fromBigInt(value));
  }

  get volume(): BigInt {
    let value = this.get("volume");
    return value!.toBigInt();
  }

  set volume(value: BigInt) {
    this.set("volume", Value.fromBigInt(value));
  }

  get bets(): Array<string> | null {
    let value = this.get("bets");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set bets(value: Array<string> | null) {
    if (!value) {
      this.unset("bets");
    } else {
      this.set("bets", Value.fromStringArray(<Array<string>>value));
    }
  }
}

export class Bet extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("poolID", Value.fromBytes(Bytes.empty()));
    this.set("owner", Value.fromBytes(Bytes.empty()));
    this.set("selection", Value.fromI32(0));
    this.set("amount", Value.fromBigInt(BigInt.zero()));
    this.set("status", Value.fromI32(0));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Bet entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Bet entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Bet", id.toString(), this);
    }
  }

  static load(id: string): Bet | null {
    return changetype<Bet | null>(store.get("Bet", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get pool(): string | null {
    let value = this.get("pool");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set pool(value: string | null) {
    if (!value) {
      this.unset("pool");
    } else {
      this.set("pool", Value.fromString(<string>value));
    }
  }

  get poolID(): Bytes {
    let value = this.get("poolID");
    return value!.toBytes();
  }

  set poolID(value: Bytes) {
    this.set("poolID", Value.fromBytes(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get selection(): i32 {
    let value = this.get("selection");
    return value!.toI32();
  }

  set selection(value: i32) {
    this.set("selection", Value.fromI32(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get status(): i32 {
    let value = this.get("status");
    return value!.toI32();
  }

  set status(value: i32) {
    this.set("status", Value.fromI32(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}
