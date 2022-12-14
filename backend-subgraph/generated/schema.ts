// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class NotificationMessage extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NotificationMessage entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type NotificationMessage must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("NotificationMessage", id.toString(), this);
    }
  }

  static load(id: string): NotificationMessage | null {
    return changetype<NotificationMessage | null>(
      store.get("NotificationMessage", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get channelId(): BigInt {
    let value = this.get("channelId");
    return value!.toBigInt();
  }

  set channelId(value: BigInt) {
    this.set("channelId", Value.fromBigInt(value));
  }

  get admin(): Bytes {
    let value = this.get("admin");
    return value!.toBytes();
  }

  set admin(value: Bytes) {
    this.set("admin", Value.fromBytes(value));
  }

  get recipient(): Bytes {
    let value = this.get("recipient");
    return value!.toBytes();
  }

  set recipient(value: Bytes) {
    this.set("recipient", Value.fromBytes(value));
  }

  get message(): string {
    let value = this.get("message");
    return value!.toString();
  }

  set message(value: string) {
    this.set("message", Value.fromString(value));
  }
}

export class Channel extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Channel entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Channel must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Channel", id.toString(), this);
    }
  }

  static load(id: string): Channel | null {
    return changetype<Channel | null>(store.get("Channel", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get admin(): Bytes {
    let value = this.get("admin");
    return value!.toBytes();
  }

  set admin(value: Bytes) {
    this.set("admin", Value.fromBytes(value));
  }

  get channelName(): string {
    let value = this.get("channelName");
    return value!.toString();
  }

  set channelName(value: string) {
    this.set("channelName", Value.fromString(value));
  }

  get channelDescription(): string {
    let value = this.get("channelDescription");
    return value!.toString();
  }

  set channelDescription(value: string) {
    this.set("channelDescription", Value.fromString(value));
  }

  get channelState(): string {
    let value = this.get("channelState");
    return value!.toString();
  }

  set channelState(value: string) {
    this.set("channelState", Value.fromString(value));
  }

  get channelId(): BigInt {
    let value = this.get("channelId");
    return value!.toBigInt();
  }

  set channelId(value: BigInt) {
    this.set("channelId", Value.fromBigInt(value));
  }
}

export class NotificationEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NotificationEvent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type NotificationEvent must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("NotificationEvent", id.toString(), this);
    }
  }

  static load(id: string): NotificationEvent | null {
    return changetype<NotificationEvent | null>(
      store.get("NotificationEvent", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get notification(): string {
    let value = this.get("notification");
    return value!.toString();
  }

  set notification(value: string) {
    this.set("notification", Value.fromString(value));
  }
}

export class ChannelCreated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ChannelCreated entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ChannelCreated must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ChannelCreated", id.toString(), this);
    }
  }

  static load(id: string): ChannelCreated | null {
    return changetype<ChannelCreated | null>(store.get("ChannelCreated", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get channelId(): BigInt {
    let value = this.get("channelId");
    return value!.toBigInt();
  }

  set channelId(value: BigInt) {
    this.set("channelId", Value.fromBigInt(value));
  }

  get admin(): Bytes {
    let value = this.get("admin");
    return value!.toBytes();
  }

  set admin(value: Bytes) {
    this.set("admin", Value.fromBytes(value));
  }

  get channelName(): string {
    let value = this.get("channelName");
    return value!.toString();
  }

  set channelName(value: string) {
    this.set("channelName", Value.fromString(value));
  }

  get channelDescription(): string {
    let value = this.get("channelDescription");
    return value!.toString();
  }

  set channelDescription(value: string) {
    this.set("channelDescription", Value.fromString(value));
  }
}
