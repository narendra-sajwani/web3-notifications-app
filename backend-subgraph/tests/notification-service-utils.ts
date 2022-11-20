import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  ChannelCreated,
  ChannelDeleted,
  ChannelMuted,
  ChannelUnmuted,
  DelegateAdded,
  DelegateRemoved,
  NotificationEvent,
  UserSubscribed,
  UserUnsubscribed
} from "../generated/NotificationService/NotificationService"

export function createChannelCreatedEvent(
  channelId: BigInt,
  admin: Address,
  channelName: string,
  channelDescription: string
): ChannelCreated {
  let channelCreatedEvent = changetype<ChannelCreated>(newMockEvent())

  channelCreatedEvent.parameters = new Array()

  channelCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "channelId",
      ethereum.Value.fromUnsignedBigInt(channelId)
    )
  )
  channelCreatedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  channelCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "channelName",
      ethereum.Value.fromString(channelName)
    )
  )
  channelCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "channelDescription",
      ethereum.Value.fromString(channelDescription)
    )
  )

  return channelCreatedEvent
}

export function createChannelDeletedEvent(admin: Address): ChannelDeleted {
  let channelDeletedEvent = changetype<ChannelDeleted>(newMockEvent())

  channelDeletedEvent.parameters = new Array()

  channelDeletedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )

  return channelDeletedEvent
}

export function createChannelMutedEvent(admin: Address): ChannelMuted {
  let channelMutedEvent = changetype<ChannelMuted>(newMockEvent())

  channelMutedEvent.parameters = new Array()

  channelMutedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )

  return channelMutedEvent
}

export function createChannelUnmutedEvent(admin: Address): ChannelUnmuted {
  let channelUnmutedEvent = changetype<ChannelUnmuted>(newMockEvent())

  channelUnmutedEvent.parameters = new Array()

  channelUnmutedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )

  return channelUnmutedEvent
}

export function createDelegateAddedEvent(
  admin: Address,
  delegate: Address
): DelegateAdded {
  let delegateAddedEvent = changetype<DelegateAdded>(newMockEvent())

  delegateAddedEvent.parameters = new Array()

  delegateAddedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  delegateAddedEvent.parameters.push(
    new ethereum.EventParam("delegate", ethereum.Value.fromAddress(delegate))
  )

  return delegateAddedEvent
}

export function createDelegateRemovedEvent(
  admin: Address,
  delegate: Address
): DelegateRemoved {
  let delegateRemovedEvent = changetype<DelegateRemoved>(newMockEvent())

  delegateRemovedEvent.parameters = new Array()

  delegateRemovedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  delegateRemovedEvent.parameters.push(
    new ethereum.EventParam("delegate", ethereum.Value.fromAddress(delegate))
  )

  return delegateRemovedEvent
}

export function createNotificationEventEvent(
  notification: ethereum.Tuple
): NotificationEvent {
  let notificationEventEvent = changetype<NotificationEvent>(newMockEvent())

  notificationEventEvent.parameters = new Array()

  notificationEventEvent.parameters.push(
    new ethereum.EventParam(
      "notification",
      ethereum.Value.fromTuple(notification)
    )
  )

  return notificationEventEvent
}

export function createUserSubscribedEvent(
  _channelId: BigInt,
  subscriber: Address
): UserSubscribed {
  let userSubscribedEvent = changetype<UserSubscribed>(newMockEvent())

  userSubscribedEvent.parameters = new Array()

  userSubscribedEvent.parameters.push(
    new ethereum.EventParam(
      "_channelId",
      ethereum.Value.fromUnsignedBigInt(_channelId)
    )
  )
  userSubscribedEvent.parameters.push(
    new ethereum.EventParam(
      "subscriber",
      ethereum.Value.fromAddress(subscriber)
    )
  )

  return userSubscribedEvent
}

export function createUserUnsubscribedEvent(
  _channelId: BigInt,
  subscriber: Address
): UserUnsubscribed {
  let userUnsubscribedEvent = changetype<UserUnsubscribed>(newMockEvent())

  userUnsubscribedEvent.parameters = new Array()

  userUnsubscribedEvent.parameters.push(
    new ethereum.EventParam(
      "_channelId",
      ethereum.Value.fromUnsignedBigInt(_channelId)
    )
  )
  userUnsubscribedEvent.parameters.push(
    new ethereum.EventParam(
      "subscriber",
      ethereum.Value.fromAddress(subscriber)
    )
  )

  return userUnsubscribedEvent
}
