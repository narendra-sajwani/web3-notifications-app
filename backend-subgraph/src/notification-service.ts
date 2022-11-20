import { BigInt, Address } from "@graphprotocol/graph-ts"
import {
  ChannelCreated as ChannelCreatedEvent,
  ChannelDeleted as ChannelDeletedEvent,
  ChannelMuted as ChannelMutedEvent,
  ChannelUnmuted as ChannelUnmutedEvent,
  DelegateAdded as DelegateAddedEvent,
  DelegateRemoved as DelegateRemovedEvent,
  NotificationEvent as NotificationEventAsEvent,
  UserSubscribed as UserSubscribedEvent,
  UserUnsubscribed as UserUnsubscribedEvent
} from "../generated/NotificationService/NotificationService"
import { ChannelCreated,  NotificationEvent, NotificationMessage} from "../generated/schema"

export function handleChannelCreated(event: ChannelCreatedEvent): void {
  // Save that event in our graph
  // update our channels

  // get or create the channelCreated object

  // ChannelCreatedEvent : just the raw event
  // ChannelCreatedObject: What we save

}

export function handleChannelDeleted(event: ChannelDeletedEvent): void {}

export function handleChannelMuted(event: ChannelMutedEvent): void {}

export function handleChannelUnmuted(event: ChannelUnmutedEvent): void {}

export function handleDelegateAdded(event: DelegateAddedEvent): void {}

export function handleDelegateRemoved(event: DelegateRemovedEvent): void {}

export function handleNotificationEvent(event: NotificationEventAsEvent): void {}

export function handleUserSubscribed(event: UserSubscribedEvent): void {}

export function handleUserUnsubscribed(event: UserUnsubscribedEvent): void {}

function getIdFromEventParams(channelId: BigInt, admin: Address): string {
  return channelId.toHexString() + admin.toHexString()
}
