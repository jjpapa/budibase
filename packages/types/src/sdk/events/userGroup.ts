import { BaseEvent } from "./event"

export interface GroupCreatedEvent extends BaseEvent {
  groupId: string
  name: string
}

export interface GroupUpdatedEvent extends BaseEvent {
  groupId: string
  name: string
}

export interface GroupDeletedEvent extends BaseEvent {
  groupId: string
  name: string
}

export interface GroupUsersAddedEvent extends BaseEvent {
  count: number
  groupId: string
  name: string
}

export interface GroupUsersDeletedEvent extends BaseEvent {
  count: number
  groupId: string
  name: string
}

export interface GroupAddedOnboardingEvent extends BaseEvent {
  groupId: string
  onboarding: boolean
}

export interface GroupPermissionsEditedEvent extends BaseEvent {
  permissions: Record<string, string>
  name: string
  groupId: string
}
