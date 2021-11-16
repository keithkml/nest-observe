// package: nestlabs.gateway.v1
// file: nestlabs/gateway/v1.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as nest_messages_pb from "../../nest/messages_pb";
import * as weave_common_pb from "../../weave/common_pb";
import * as rpc_pb from "../../rpc_pb";

export class TraitStateNotification extends jspb.Message {
  hasState(): boolean;
  clearState(): void;
  getState(): google_protobuf_any_pb.Any | undefined;
  setState(value?: google_protobuf_any_pb.Any): void;

  hasStatemask(): boolean;
  clearStatemask(): void;
  getStatemask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setStatemask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  getMonotonicversion(): number;
  setMonotonicversion(value: number): void;

  getNotificationcontext(): TraitStateNotification.NotificationContextMap[keyof TraitStateNotification.NotificationContextMap];
  setNotificationcontext(value: TraitStateNotification.NotificationContextMap[keyof TraitStateNotification.NotificationContextMap]): void;

  getPublisherversion(): number;
  setPublisherversion(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TraitStateNotification.AsObject;
  static toObject(includeInstance: boolean, msg: TraitStateNotification): TraitStateNotification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TraitStateNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TraitStateNotification;
  static deserializeBinaryFromReader(message: TraitStateNotification, reader: jspb.BinaryReader): TraitStateNotification;
}

export namespace TraitStateNotification {
  export type AsObject = {
    state?: google_protobuf_any_pb.Any.AsObject,
    statemask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    monotonicversion: number,
    notificationcontext: TraitStateNotification.NotificationContextMap[keyof TraitStateNotification.NotificationContextMap],
    publisherversion: number,
  }

  export interface NotificationContextMap {
    NOTIFICATION_CONTEXT_UNSPECIFIED: 0;
    INITIAL_OBSERVE_RESPONSE: 1;
  }

  export const NotificationContext: NotificationContextMap;
}

export class TraitEventsNotification extends jspb.Message {
  clearEventsList(): void;
  getEventsList(): Array<Event>;
  setEventsList(value: Array<Event>): void;
  addEvents(value?: Event, index?: number): Event;

  hasRequestutctimestamp(): boolean;
  clearRequestutctimestamp(): void;
  getRequestutctimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRequestutctimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getRequestsystemtimeoffsetmillis(): number;
  setRequestsystemtimeoffsetmillis(value: number): void;

  hasServicereceivedtimestamp(): boolean;
  clearServicereceivedtimestamp(): void;
  getServicereceivedtimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setServicereceivedtimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TraitEventsNotification.AsObject;
  static toObject(includeInstance: boolean, msg: TraitEventsNotification): TraitEventsNotification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TraitEventsNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TraitEventsNotification;
  static deserializeBinaryFromReader(message: TraitEventsNotification, reader: jspb.BinaryReader): TraitEventsNotification;
}

export namespace TraitEventsNotification {
  export type AsObject = {
    eventsList: Array<Event.AsObject>,
    requestutctimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    requestsystemtimeoffsetmillis: number,
    servicereceivedtimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Event extends jspb.Message {
  hasData(): boolean;
  clearData(): void;
  getData(): google_protobuf_any_pb.Any | undefined;
  setData(value?: google_protobuf_any_pb.Any): void;

  getImportance(): weave_common_pb.EventImportanceMap[keyof weave_common_pb.EventImportanceMap];
  setImportance(value: weave_common_pb.EventImportanceMap[keyof weave_common_pb.EventImportanceMap]): void;

  getEventid(): number;
  setEventid(value: number): void;

  getRelatedeventimportance(): weave_common_pb.EventImportanceMap[keyof weave_common_pb.EventImportanceMap];
  setRelatedeventimportance(value: weave_common_pb.EventImportanceMap[keyof weave_common_pb.EventImportanceMap]): void;

  getRelatedeventid(): number;
  setRelatedeventid(value: number): void;

  hasUtctimestamp(): boolean;
  clearUtctimestamp(): void;
  getUtctimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUtctimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getSystemtimeoffsetmillis(): number;
  setSystemtimeoffsetmillis(value: number): void;

  getRelaybyresourceid(): string;
  setRelaybyresourceid(value: string): void;

  getSubjectresourceid(): string;
  setSubjectresourceid(value: string): void;

  getSubjectpairerid(): string;
  setSubjectpairerid(value: string): void;

  getSubjecttypename(): string;
  setSubjecttypename(value: string): void;

  getSubjectinstanceid(): string;
  setSubjectinstanceid(value: string): void;

  hasSchemaversion(): boolean;
  clearSchemaversion(): void;
  getSchemaversion(): nest_messages_pb.SchemaVersion | undefined;
  setSchemaversion(value?: nest_messages_pb.SchemaVersion): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Event.AsObject;
  static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Event;
  static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
  export type AsObject = {
    data?: google_protobuf_any_pb.Any.AsObject,
    importance: weave_common_pb.EventImportanceMap[keyof weave_common_pb.EventImportanceMap],
    eventid: number,
    relatedeventimportance: weave_common_pb.EventImportanceMap[keyof weave_common_pb.EventImportanceMap],
    relatedeventid: number,
    utctimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    systemtimeoffsetmillis: number,
    relaybyresourceid: string,
    subjectresourceid: string,
    subjectpairerid: string,
    subjecttypename: string,
    subjectinstanceid: string,
    schemaversion?: nest_messages_pb.SchemaVersion.AsObject,
  }
}

export class TraitRequest extends jspb.Message {
  getResourceid(): string;
  setResourceid(value: string): void;

  getTraitlabel(): string;
  setTraitlabel(value: string): void;

  getRequestid(): string;
  setRequestid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TraitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TraitRequest): TraitRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TraitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TraitRequest;
  static deserializeBinaryFromReader(message: TraitRequest, reader: jspb.BinaryReader): TraitRequest;
}

export namespace TraitRequest {
  export type AsObject = {
    resourceid: string,
    traitlabel: string,
    requestid: string,
  }
}

export class TraitOperation extends jspb.Message {
  hasTraitrequest(): boolean;
  clearTraitrequest(): void;
  getTraitrequest(): TraitRequest | undefined;
  setTraitrequest(value?: TraitRequest): void;

  getProgress(): TraitOperation.StateMap[keyof TraitOperation.StateMap];
  setProgress(value: TraitOperation.StateMap[keyof TraitOperation.StateMap]): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): rpc_pb.Status | undefined;
  setStatus(value?: rpc_pb.Status): void;

  hasEvent(): boolean;
  clearEvent(): void;
  getEvent(): TraitEvent | undefined;
  setEvent(value?: TraitEvent): void;

  getPublisheracceptedstateversion(): number;
  setPublisheracceptedstateversion(value: number): void;

  hasCommand(): boolean;
  clearCommand(): void;
  getCommand(): TraitCommand | undefined;
  setCommand(value?: TraitCommand): void;

  hasUpdate(): boolean;
  clearUpdate(): void;
  getUpdate(): TraitUpdateStateRequest | undefined;
  setUpdate(value?: TraitUpdateStateRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TraitOperation.AsObject;
  static toObject(includeInstance: boolean, msg: TraitOperation): TraitOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TraitOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TraitOperation;
  static deserializeBinaryFromReader(message: TraitOperation, reader: jspb.BinaryReader): TraitOperation;
}

export namespace TraitOperation {
  export type AsObject = {
    traitrequest?: TraitRequest.AsObject,
    progress: TraitOperation.StateMap[keyof TraitOperation.StateMap],
    status?: rpc_pb.Status.AsObject,
    event?: TraitEvent.AsObject,
    publisheracceptedstateversion: number,
    command?: TraitCommand.AsObject,
    update?: TraitUpdateStateRequest.AsObject,
  }

  export interface RequestCaseMap {
    REQUEST_NOT_SET: 0;
    COMMAND: 6;
    UPDATE: 7;
  }

  export const RequestCase: RequestCaseMap;

  export interface StateMap {
    STATE_UNSPECIFIED: 0;
    QUEUED: 1;
    PENDING: 2;
    STARTED: 3;
    COMPLETE: 4;
  }

  export const State: StateMap;
}

export class TraitObserveRequest extends jspb.Message {
  hasTraitrequest(): boolean;
  clearTraitrequest(): void;
  getTraitrequest(): TraitRequest | undefined;
  setTraitrequest(value?: TraitRequest): void;

  hasFieldmask(): boolean;
  clearFieldmask(): void;
  getFieldmask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldmask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  getMonotonicversionfilter(): number;
  setMonotonicversionfilter(value: number): void;

  getIncludeconfirmedstate(): boolean;
  setIncludeconfirmedstate(value: boolean): void;

  getIncludependingoperations(): boolean;
  setIncludependingoperations(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TraitObserveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TraitObserveRequest): TraitObserveRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TraitObserveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TraitObserveRequest;
  static deserializeBinaryFromReader(message: TraitObserveRequest, reader: jspb.BinaryReader): TraitObserveRequest;
}

export namespace TraitObserveRequest {
  export type AsObject = {
    traitrequest?: TraitRequest.AsObject,
    fieldmask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    monotonicversionfilter: number,
    includeconfirmedstate: boolean,
    includependingoperations: boolean,
  }
}

export class TraitObserveResponse extends jspb.Message {
  hasTraitrequest(): boolean;
  clearTraitrequest(): void;
  getTraitrequest(): TraitRequest | undefined;
  setTraitrequest(value?: TraitRequest): void;

  hasAcceptedstate(): boolean;
  clearAcceptedstate(): void;
  getAcceptedstate(): TraitStateNotification | undefined;
  setAcceptedstate(value?: TraitStateNotification): void;

  hasTraitinfo(): boolean;
  clearTraitinfo(): void;
  getTraitinfo(): TraitInfo | undefined;
  setTraitinfo(value?: TraitInfo): void;

  hasConfirmedstate(): boolean;
  clearConfirmedstate(): void;
  getConfirmedstate(): TraitStateNotification | undefined;
  setConfirmedstate(value?: TraitStateNotification): void;

  clearPendingoperationsList(): void;
  getPendingoperationsList(): Array<TraitOperation>;
  setPendingoperationsList(value: Array<TraitOperation>): void;
  addPendingoperations(value?: TraitOperation, index?: number): TraitOperation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TraitObserveResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TraitObserveResponse): TraitObserveResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TraitObserveResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TraitObserveResponse;
  static deserializeBinaryFromReader(message: TraitObserveResponse, reader: jspb.BinaryReader): TraitObserveResponse;
}

export namespace TraitObserveResponse {
  export type AsObject = {
    traitrequest?: TraitRequest.AsObject,
    acceptedstate?: TraitStateNotification.AsObject,
    traitinfo?: TraitInfo.AsObject,
    confirmedstate?: TraitStateNotification.AsObject,
    pendingoperationsList: Array<TraitOperation.AsObject>,
  }
}

export class TraitGetStateRequest extends jspb.Message {
  hasTraitrequest(): boolean;
  clearTraitrequest(): void;
  getTraitrequest(): TraitRequest | undefined;
  setTraitrequest(value?: TraitRequest): void;

  hasFieldmask(): boolean;
  clearFieldmask(): void;
  getFieldmask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldmask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  getMonotonicversionfilter(): number;
  setMonotonicversionfilter(value: number): void;

  getIncludeconfirmedstate(): boolean;
  setIncludeconfirmedstate(value: boolean): void;

  getIncludependingoperations(): boolean;
  setIncludependingoperations(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TraitGetStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TraitGetStateRequest): TraitGetStateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TraitGetStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TraitGetStateRequest;
  static deserializeBinaryFromReader(message: TraitGetStateRequest, reader: jspb.BinaryReader): TraitGetStateRequest;
}

export namespace TraitGetStateRequest {
  export type AsObject = {
    traitrequest?: TraitRequest.AsObject,
    fieldmask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    monotonicversionfilter: number,
    includeconfirmedstate: boolean,
    includependingoperations: boolean,
  }
}

export class TraitGetStateResponse extends jspb.Message {
  hasTraitrequest(): boolean;
  clearTraitrequest(): void;
  getTraitrequest(): TraitRequest | undefined;
  setTraitrequest(value?: TraitRequest): void;

  hasAcceptedstate(): boolean;
  clearAcceptedstate(): void;
  getAcceptedstate(): TraitStateNotification | undefined;
  setAcceptedstate(value?: TraitStateNotification): void;

  hasTraitinfo(): boolean;
  clearTraitinfo(): void;
  getTraitinfo(): TraitInfo | undefined;
  setTraitinfo(value?: TraitInfo): void;

  hasConfirmedstate(): boolean;
  clearConfirmedstate(): void;
  getConfirmedstate(): TraitStateNotification | undefined;
  setConfirmedstate(value?: TraitStateNotification): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TraitGetStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TraitGetStateResponse): TraitGetStateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TraitGetStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TraitGetStateResponse;
  static deserializeBinaryFromReader(message: TraitGetStateResponse, reader: jspb.BinaryReader): TraitGetStateResponse;
}

export namespace TraitGetStateResponse {
  export type AsObject = {
    traitrequest?: TraitRequest.AsObject,
    acceptedstate?: TraitStateNotification.AsObject,
    traitinfo?: TraitInfo.AsObject,
    confirmedstate?: TraitStateNotification.AsObject,
  }
}

export class TraitInfo extends jspb.Message {
  getTraittype(): string;
  setTraittype(value: string): void;

  hasSchemaversion(): boolean;
  clearSchemaversion(): void;
  getSchemaversion(): nest_messages_pb.SchemaVersion | undefined;
  setSchemaversion(value?: nest_messages_pb.SchemaVersion): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TraitInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TraitInfo): TraitInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TraitInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TraitInfo;
  static deserializeBinaryFromReader(message: TraitInfo, reader: jspb.BinaryReader): TraitInfo;
}

export namespace TraitInfo {
  export type AsObject = {
    traittype: string,
    schemaversion?: nest_messages_pb.SchemaVersion.AsObject,
  }
}

export class TraitUpdateStateRequest extends jspb.Message {
  hasTraitrequest(): boolean;
  clearTraitrequest(): void;
  getTraitrequest(): TraitRequest | undefined;
  setTraitrequest(value?: TraitRequest): void;

  hasState(): boolean;
  clearState(): void;
  getState(): google_protobuf_any_pb.Any | undefined;
  setState(value?: google_protobuf_any_pb.Any): void;

  hasStatemask(): boolean;
  clearStatemask(): void;
  getStatemask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setStatemask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  getMatchpublisherversion(): number;
  setMatchpublisherversion(value: number): void;

  hasSchemaversion(): boolean;
  clearSchemaversion(): void;
  getSchemaversion(): nest_messages_pb.SchemaVersion | undefined;
  setSchemaversion(value?: nest_messages_pb.SchemaVersion): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TraitUpdateStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TraitUpdateStateRequest): TraitUpdateStateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TraitUpdateStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TraitUpdateStateRequest;
  static deserializeBinaryFromReader(message: TraitUpdateStateRequest, reader: jspb.BinaryReader): TraitUpdateStateRequest;
}

export namespace TraitUpdateStateRequest {
  export type AsObject = {
    traitrequest?: TraitRequest.AsObject,
    state?: google_protobuf_any_pb.Any.AsObject,
    statemask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    matchpublisherversion: number,
    schemaversion?: nest_messages_pb.SchemaVersion.AsObject,
  }
}

export class TraitNotifyRequest extends jspb.Message {
  hasTraitrequest(): boolean;
  clearTraitrequest(): void;
  getTraitrequest(): TraitRequest | undefined;
  setTraitrequest(value?: TraitRequest): void;

  hasConfirmedstate(): boolean;
  clearConfirmedstate(): void;
  getConfirmedstate(): TraitStateNotification | undefined;
  setConfirmedstate(value?: TraitStateNotification): void;

  hasEvents(): boolean;
  clearEvents(): void;
  getEvents(): TraitEventsNotification | undefined;
  setEvents(value?: TraitEventsNotification): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TraitNotifyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TraitNotifyRequest): TraitNotifyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TraitNotifyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TraitNotifyRequest;
  static deserializeBinaryFromReader(message: TraitNotifyRequest, reader: jspb.BinaryReader): TraitNotifyRequest;
}

export namespace TraitNotifyRequest {
  export type AsObject = {
    traitrequest?: TraitRequest.AsObject,
    confirmedstate?: TraitStateNotification.AsObject,
    events?: TraitEventsNotification.AsObject,
  }
}

export class TraitNotifyResponse extends jspb.Message {
  hasTraitrequest(): boolean;
  clearTraitrequest(): void;
  getTraitrequest(): TraitRequest | undefined;
  setTraitrequest(value?: TraitRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TraitNotifyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TraitNotifyResponse): TraitNotifyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TraitNotifyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TraitNotifyResponse;
  static deserializeBinaryFromReader(message: TraitNotifyResponse, reader: jspb.BinaryReader): TraitNotifyResponse;
}

export namespace TraitNotifyResponse {
  export type AsObject = {
    traitrequest?: TraitRequest.AsObject,
  }
}

export class TraitEvent extends jspb.Message {
  hasEvent(): boolean;
  clearEvent(): void;
  getEvent(): google_protobuf_any_pb.Any | undefined;
  setEvent(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TraitEvent.AsObject;
  static toObject(includeInstance: boolean, msg: TraitEvent): TraitEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TraitEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TraitEvent;
  static deserializeBinaryFromReader(message: TraitEvent, reader: jspb.BinaryReader): TraitEvent;
}

export namespace TraitEvent {
  export type AsObject = {
    event?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class TraitCommand extends jspb.Message {
  hasTraitrequest(): boolean;
  clearTraitrequest(): void;
  getTraitrequest(): TraitRequest | undefined;
  setTraitrequest(value?: TraitRequest): void;

  hasCommand(): boolean;
  clearCommand(): void;
  getCommand(): google_protobuf_any_pb.Any | undefined;
  setCommand(value?: google_protobuf_any_pb.Any): void;

  hasExpirytime(): boolean;
  clearExpirytime(): void;
  getExpirytime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpirytime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getAuthenticator(): Uint8Array | string;
  getAuthenticator_asU8(): Uint8Array;
  getAuthenticator_asB64(): string;
  setAuthenticator(value: Uint8Array | string): void;

  getMatchpublisherversion(): number;
  setMatchpublisherversion(value: number): void;

  hasSchemaversion(): boolean;
  clearSchemaversion(): void;
  getSchemaversion(): nest_messages_pb.SchemaVersion | undefined;
  setSchemaversion(value?: nest_messages_pb.SchemaVersion): void;

  getNamespaceid(): string;
  setNamespaceid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TraitCommand.AsObject;
  static toObject(includeInstance: boolean, msg: TraitCommand): TraitCommand.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TraitCommand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TraitCommand;
  static deserializeBinaryFromReader(message: TraitCommand, reader: jspb.BinaryReader): TraitCommand;
}

export namespace TraitCommand {
  export type AsObject = {
    traitrequest?: TraitRequest.AsObject,
    command?: google_protobuf_any_pb.Any.AsObject,
    expirytime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    authenticator: Uint8Array | string,
    matchpublisherversion: number,
    schemaversion?: nest_messages_pb.SchemaVersion.AsObject,
    namespaceid: string,
  }
}

export class WeaveStatusReport extends jspb.Message {
  getProfileid(): number;
  setProfileid(value: number): void;

  getStatuscode(): number;
  setStatuscode(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WeaveStatusReport.AsObject;
  static toObject(includeInstance: boolean, msg: WeaveStatusReport): WeaveStatusReport.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WeaveStatusReport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WeaveStatusReport;
  static deserializeBinaryFromReader(message: WeaveStatusReport, reader: jspb.BinaryReader): WeaveStatusReport;
}

export namespace WeaveStatusReport {
  export type AsObject = {
    profileid: number,
    statuscode: number,
  }
}

export class ResourceRequest extends jspb.Message {
  getResourceid(): string;
  setResourceid(value: string): void;

  getRequestid(): string;
  setRequestid(value: string): void;

  getNamespaceid(): string;
  setNamespaceid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceRequest): ResourceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceRequest;
  static deserializeBinaryFromReader(message: ResourceRequest, reader: jspb.BinaryReader): ResourceRequest;
}

export namespace ResourceRequest {
  export type AsObject = {
    resourceid: string,
    requestid: string,
    namespaceid: string,
  }
}

export class ResourceObserveRequest extends jspb.Message {
  hasResourcerequest(): boolean;
  clearResourcerequest(): void;
  getResourcerequest(): ResourceRequest | undefined;
  setResourcerequest(value?: ResourceRequest): void;

  clearTraitstateobservesList(): void;
  getTraitstateobservesList(): Array<TraitStateObserve>;
  setTraitstateobservesList(value: Array<TraitStateObserve>): void;
  addTraitstateobserves(value?: TraitStateObserve, index?: number): TraitStateObserve;

  getIncludeconfirmedstate(): boolean;
  setIncludeconfirmedstate(value: boolean): void;

  getIncludependingoperations(): boolean;
  setIncludependingoperations(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceObserveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceObserveRequest): ResourceObserveRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceObserveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceObserveRequest;
  static deserializeBinaryFromReader(message: ResourceObserveRequest, reader: jspb.BinaryReader): ResourceObserveRequest;
}

export namespace ResourceObserveRequest {
  export type AsObject = {
    resourcerequest?: ResourceRequest.AsObject,
    traitstateobservesList: Array<TraitStateObserve.AsObject>,
    includeconfirmedstate: boolean,
    includependingoperations: boolean,
  }
}

export class TraitStateObserve extends jspb.Message {
  getTraitlabel(): string;
  setTraitlabel(value: string): void;

  hasFieldmask(): boolean;
  clearFieldmask(): void;
  getFieldmask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldmask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  getMonotonicversionfilter(): number;
  setMonotonicversionfilter(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TraitStateObserve.AsObject;
  static toObject(includeInstance: boolean, msg: TraitStateObserve): TraitStateObserve.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TraitStateObserve, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TraitStateObserve;
  static deserializeBinaryFromReader(message: TraitStateObserve, reader: jspb.BinaryReader): TraitStateObserve;
}

export namespace TraitStateObserve {
  export type AsObject = {
    traitlabel: string,
    fieldmask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    monotonicversionfilter: number,
  }
}

export class ResourceObserveResponse extends jspb.Message {
  hasResourcerequest(): boolean;
  clearResourcerequest(): void;
  getResourcerequest(): ResourceRequest | undefined;
  setResourcerequest(value?: ResourceRequest): void;

  hasResourceinfo(): boolean;
  clearResourceinfo(): void;
  getResourceinfo(): ResourceInfo | undefined;
  setResourceinfo(value?: ResourceInfo): void;

  clearTraitresponsesList(): void;
  getTraitresponsesList(): Array<TraitObserveResponse>;
  setTraitresponsesList(value: Array<TraitObserveResponse>): void;
  addTraitresponses(value?: TraitObserveResponse, index?: number): TraitObserveResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceObserveResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceObserveResponse): ResourceObserveResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceObserveResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceObserveResponse;
  static deserializeBinaryFromReader(message: ResourceObserveResponse, reader: jspb.BinaryReader): ResourceObserveResponse;
}

export namespace ResourceObserveResponse {
  export type AsObject = {
    resourcerequest?: ResourceRequest.AsObject,
    resourceinfo?: ResourceInfo.AsObject,
    traitresponsesList: Array<TraitObserveResponse.AsObject>,
  }
}

export class ResourceInfo extends jspb.Message {
  getResourcetype(): string;
  setResourcetype(value: string): void;

  getTraitinfosMap(): jspb.Map<string, TraitInfo>;
  clearTraitinfosMap(): void;
  clearIfaceinfosList(): void;
  getIfaceinfosList(): Array<IfaceInfo>;
  setIfaceinfosList(value: Array<IfaceInfo>): void;
  addIfaceinfos(value?: IfaceInfo, index?: number): IfaceInfo;

  getCurrentschemaversion(): number;
  setCurrentschemaversion(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceInfo): ResourceInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceInfo;
  static deserializeBinaryFromReader(message: ResourceInfo, reader: jspb.BinaryReader): ResourceInfo;
}

export namespace ResourceInfo {
  export type AsObject = {
    resourcetype: string,
    traitinfosMap: Array<[string, TraitInfo.AsObject]>,
    ifaceinfosList: Array<IfaceInfo.AsObject>,
    currentschemaversion: number,
  }
}

export class IfaceInfo extends jspb.Message {
  getIfacetype(): string;
  setIfacetype(value: string): void;

  clearIfacetraitinfosList(): void;
  getIfacetraitinfosList(): Array<IfaceTraitInfo>;
  setIfacetraitinfosList(value: Array<IfaceTraitInfo>): void;
  addIfacetraitinfos(value?: IfaceTraitInfo, index?: number): IfaceTraitInfo;

  hasSchemaversion(): boolean;
  clearSchemaversion(): void;
  getSchemaversion(): nest_messages_pb.SchemaVersion | undefined;
  setSchemaversion(value?: nest_messages_pb.SchemaVersion): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IfaceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: IfaceInfo): IfaceInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IfaceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IfaceInfo;
  static deserializeBinaryFromReader(message: IfaceInfo, reader: jspb.BinaryReader): IfaceInfo;
}

export namespace IfaceInfo {
  export type AsObject = {
    ifacetype: string,
    ifacetraitinfosList: Array<IfaceTraitInfo.AsObject>,
    schemaversion?: nest_messages_pb.SchemaVersion.AsObject,
  }
}

export class IfaceTraitInfo extends jspb.Message {
  getIfacetraitlabel(): string;
  setIfacetraitlabel(value: string): void;

  getResourcetraitlabel(): string;
  setResourcetraitlabel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IfaceTraitInfo.AsObject;
  static toObject(includeInstance: boolean, msg: IfaceTraitInfo): IfaceTraitInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IfaceTraitInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IfaceTraitInfo;
  static deserializeBinaryFromReader(message: IfaceTraitInfo, reader: jspb.BinaryReader): IfaceTraitInfo;
}

export namespace IfaceTraitInfo {
  export type AsObject = {
    ifacetraitlabel: string,
    resourcetraitlabel: string,
  }
}

export class ResourceGetStateRequest extends jspb.Message {
  hasResourcerequest(): boolean;
  clearResourcerequest(): void;
  getResourcerequest(): ResourceRequest | undefined;
  setResourcerequest(value?: ResourceRequest): void;

  clearResourcegetstatesList(): void;
  getResourcegetstatesList(): Array<ResourceGetState>;
  setResourcegetstatesList(value: Array<ResourceGetState>): void;
  addResourcegetstates(value?: ResourceGetState, index?: number): ResourceGetState;

  getIncludeconfirmedstate(): boolean;
  setIncludeconfirmedstate(value: boolean): void;

  getIncludependingoperations(): boolean;
  setIncludependingoperations(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceGetStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceGetStateRequest): ResourceGetStateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceGetStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceGetStateRequest;
  static deserializeBinaryFromReader(message: ResourceGetStateRequest, reader: jspb.BinaryReader): ResourceGetStateRequest;
}

export namespace ResourceGetStateRequest {
  export type AsObject = {
    resourcerequest?: ResourceRequest.AsObject,
    resourcegetstatesList: Array<ResourceGetState.AsObject>,
    includeconfirmedstate: boolean,
    includependingoperations: boolean,
  }
}

export class ResourceGetState extends jspb.Message {
  getTraitlabel(): string;
  setTraitlabel(value: string): void;

  hasFieldmask(): boolean;
  clearFieldmask(): void;
  getFieldmask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldmask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  getMonotonicversionfilter(): number;
  setMonotonicversionfilter(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceGetState.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceGetState): ResourceGetState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceGetState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceGetState;
  static deserializeBinaryFromReader(message: ResourceGetState, reader: jspb.BinaryReader): ResourceGetState;
}

export namespace ResourceGetState {
  export type AsObject = {
    traitlabel: string,
    fieldmask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    monotonicversionfilter: number,
  }
}

export class ResourceGetStateResponse extends jspb.Message {
  hasResourcerequest(): boolean;
  clearResourcerequest(): void;
  getResourcerequest(): ResourceRequest | undefined;
  setResourcerequest(value?: ResourceRequest): void;

  hasResourceinfo(): boolean;
  clearResourceinfo(): void;
  getResourceinfo(): ResourceInfo | undefined;
  setResourceinfo(value?: ResourceInfo): void;

  clearTraitresponsesList(): void;
  getTraitresponsesList(): Array<TraitGetStateResponse>;
  setTraitresponsesList(value: Array<TraitGetStateResponse>): void;
  addTraitresponses(value?: TraitGetStateResponse, index?: number): TraitGetStateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceGetStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceGetStateResponse): ResourceGetStateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceGetStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceGetStateResponse;
  static deserializeBinaryFromReader(message: ResourceGetStateResponse, reader: jspb.BinaryReader): ResourceGetStateResponse;
}

export namespace ResourceGetStateResponse {
  export type AsObject = {
    resourcerequest?: ResourceRequest.AsObject,
    resourceinfo?: ResourceInfo.AsObject,
    traitresponsesList: Array<TraitGetStateResponse.AsObject>,
  }
}

export class ResourceNotifyRequest extends jspb.Message {
  hasResourcerequest(): boolean;
  clearResourcerequest(): void;
  getResourcerequest(): ResourceRequest | undefined;
  setResourcerequest(value?: ResourceRequest): void;

  clearResourcestatenotifiesList(): void;
  getResourcestatenotifiesList(): Array<ResourceStateNotify>;
  setResourcestatenotifiesList(value: Array<ResourceStateNotify>): void;
  addResourcestatenotifies(value?: ResourceStateNotify, index?: number): ResourceStateNotify;

  clearResourceeventsnotifiesList(): void;
  getResourceeventsnotifiesList(): Array<ResourceEventsNotify>;
  setResourceeventsnotifiesList(value: Array<ResourceEventsNotify>): void;
  addResourceeventsnotifies(value?: ResourceEventsNotify, index?: number): ResourceEventsNotify;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceNotifyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceNotifyRequest): ResourceNotifyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceNotifyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceNotifyRequest;
  static deserializeBinaryFromReader(message: ResourceNotifyRequest, reader: jspb.BinaryReader): ResourceNotifyRequest;
}

export namespace ResourceNotifyRequest {
  export type AsObject = {
    resourcerequest?: ResourceRequest.AsObject,
    resourcestatenotifiesList: Array<ResourceStateNotify.AsObject>,
    resourceeventsnotifiesList: Array<ResourceEventsNotify.AsObject>,
  }
}

export class ResourceStateNotify extends jspb.Message {
  getTraitlabel(): string;
  setTraitlabel(value: string): void;

  hasConfirmedstate(): boolean;
  clearConfirmedstate(): void;
  getConfirmedstate(): TraitStateNotification | undefined;
  setConfirmedstate(value?: TraitStateNotification): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceStateNotify.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceStateNotify): ResourceStateNotify.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceStateNotify, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceStateNotify;
  static deserializeBinaryFromReader(message: ResourceStateNotify, reader: jspb.BinaryReader): ResourceStateNotify;
}

export namespace ResourceStateNotify {
  export type AsObject = {
    traitlabel: string,
    confirmedstate?: TraitStateNotification.AsObject,
  }
}

export class ResourceEventsNotify extends jspb.Message {
  getTraitlabel(): string;
  setTraitlabel(value: string): void;

  hasEvents(): boolean;
  clearEvents(): void;
  getEvents(): TraitEventsNotification | undefined;
  setEvents(value?: TraitEventsNotification): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceEventsNotify.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceEventsNotify): ResourceEventsNotify.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceEventsNotify, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceEventsNotify;
  static deserializeBinaryFromReader(message: ResourceEventsNotify, reader: jspb.BinaryReader): ResourceEventsNotify;
}

export namespace ResourceEventsNotify {
  export type AsObject = {
    traitlabel: string,
    events?: TraitEventsNotification.AsObject,
  }
}

export class ResourceNotifyResponse extends jspb.Message {
  hasResourcerequest(): boolean;
  clearResourcerequest(): void;
  getResourcerequest(): ResourceRequest | undefined;
  setResourcerequest(value?: ResourceRequest): void;

  clearTraitresponsesList(): void;
  getTraitresponsesList(): Array<TraitNotifyResponse>;
  setTraitresponsesList(value: Array<TraitNotifyResponse>): void;
  addTraitresponses(value?: TraitNotifyResponse, index?: number): TraitNotifyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceNotifyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceNotifyResponse): ResourceNotifyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceNotifyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceNotifyResponse;
  static deserializeBinaryFromReader(message: ResourceNotifyResponse, reader: jspb.BinaryReader): ResourceNotifyResponse;
}

export namespace ResourceNotifyResponse {
  export type AsObject = {
    resourcerequest?: ResourceRequest.AsObject,
    traitresponsesList: Array<TraitNotifyResponse.AsObject>,
  }
}

export class ResourceCommandRequest extends jspb.Message {
  hasResourcerequest(): boolean;
  clearResourcerequest(): void;
  getResourcerequest(): ResourceRequest | undefined;
  setResourcerequest(value?: ResourceRequest): void;

  clearResourcecommandsList(): void;
  getResourcecommandsList(): Array<ResourceCommand>;
  setResourcecommandsList(value: Array<ResourceCommand>): void;
  addResourcecommands(value?: ResourceCommand, index?: number): ResourceCommand;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceCommandRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceCommandRequest): ResourceCommandRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceCommandRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceCommandRequest;
  static deserializeBinaryFromReader(message: ResourceCommandRequest, reader: jspb.BinaryReader): ResourceCommandRequest;
}

export namespace ResourceCommandRequest {
  export type AsObject = {
    resourcerequest?: ResourceRequest.AsObject,
    resourcecommandsList: Array<ResourceCommand.AsObject>,
  }
}

export class ResourceCommand extends jspb.Message {
  getTraitlabel(): string;
  setTraitlabel(value: string): void;

  hasCommand(): boolean;
  clearCommand(): void;
  getCommand(): google_protobuf_any_pb.Any | undefined;
  setCommand(value?: google_protobuf_any_pb.Any): void;

  hasExpirytime(): boolean;
  clearExpirytime(): void;
  getExpirytime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpirytime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getAuthenticator(): Uint8Array | string;
  getAuthenticator_asU8(): Uint8Array;
  getAuthenticator_asB64(): string;
  setAuthenticator(value: Uint8Array | string): void;

  getMatchpublisherversion(): number;
  setMatchpublisherversion(value: number): void;

  hasSchemaversion(): boolean;
  clearSchemaversion(): void;
  getSchemaversion(): nest_messages_pb.SchemaVersion | undefined;
  setSchemaversion(value?: nest_messages_pb.SchemaVersion): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceCommand.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceCommand): ResourceCommand.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceCommand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceCommand;
  static deserializeBinaryFromReader(message: ResourceCommand, reader: jspb.BinaryReader): ResourceCommand;
}

export namespace ResourceCommand {
  export type AsObject = {
    traitlabel: string,
    command?: google_protobuf_any_pb.Any.AsObject,
    expirytime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    authenticator: Uint8Array | string,
    matchpublisherversion: number,
    schemaversion?: nest_messages_pb.SchemaVersion.AsObject,
  }
}

export class ResourceCommandResponse extends jspb.Message {
  hasResourcerequest(): boolean;
  clearResourcerequest(): void;
  getResourcerequest(): ResourceRequest | undefined;
  setResourcerequest(value?: ResourceRequest): void;

  clearTraitoperationsList(): void;
  getTraitoperationsList(): Array<TraitOperation>;
  setTraitoperationsList(value: Array<TraitOperation>): void;
  addTraitoperations(value?: TraitOperation, index?: number): TraitOperation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceCommandResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceCommandResponse): ResourceCommandResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceCommandResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceCommandResponse;
  static deserializeBinaryFromReader(message: ResourceCommandResponse, reader: jspb.BinaryReader): ResourceCommandResponse;
}

export namespace ResourceCommandResponse {
  export type AsObject = {
    resourcerequest?: ResourceRequest.AsObject,
    traitoperationsList: Array<TraitOperation.AsObject>,
  }
}

export class BatchTraitUpdateStateRequest extends jspb.Message {
  clearRequestsList(): void;
  getRequestsList(): Array<TraitUpdateStateRequest>;
  setRequestsList(value: Array<TraitUpdateStateRequest>): void;
  addRequests(value?: TraitUpdateStateRequest, index?: number): TraitUpdateStateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchTraitUpdateStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchTraitUpdateStateRequest): BatchTraitUpdateStateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchTraitUpdateStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchTraitUpdateStateRequest;
  static deserializeBinaryFromReader(message: BatchTraitUpdateStateRequest, reader: jspb.BinaryReader): BatchTraitUpdateStateRequest;
}

export namespace BatchTraitUpdateStateRequest {
  export type AsObject = {
    requestsList: Array<TraitUpdateStateRequest.AsObject>,
  }
}

export class BatchTraitOperation extends jspb.Message {
  clearTraitoperationList(): void;
  getTraitoperationList(): Array<TraitOperation>;
  setTraitoperationList(value: Array<TraitOperation>): void;
  addTraitoperation(value?: TraitOperation, index?: number): TraitOperation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchTraitOperation.AsObject;
  static toObject(includeInstance: boolean, msg: BatchTraitOperation): BatchTraitOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchTraitOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchTraitOperation;
  static deserializeBinaryFromReader(message: BatchTraitOperation, reader: jspb.BinaryReader): BatchTraitOperation;
}

export namespace BatchTraitOperation {
  export type AsObject = {
    traitoperationList: Array<TraitOperation.AsObject>,
  }
}

export class ResourceCommandResponseFromAPI extends jspb.Message {
  clearResoucecommandresponseList(): void;
  getResoucecommandresponseList(): Array<ResourceCommandResponse>;
  setResoucecommandresponseList(value: Array<ResourceCommandResponse>): void;
  addResoucecommandresponse(value?: ResourceCommandResponse, index?: number): ResourceCommandResponse;

  getUnknown(): string;
  setUnknown(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceCommandResponseFromAPI.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceCommandResponseFromAPI): ResourceCommandResponseFromAPI.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceCommandResponseFromAPI, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceCommandResponseFromAPI;
  static deserializeBinaryFromReader(message: ResourceCommandResponseFromAPI, reader: jspb.BinaryReader): ResourceCommandResponseFromAPI;
}

export namespace ResourceCommandResponseFromAPI {
  export type AsObject = {
    resoucecommandresponseList: Array<ResourceCommandResponse.AsObject>,
    unknown: string,
  }
}

