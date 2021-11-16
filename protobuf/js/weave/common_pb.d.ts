// package: weave.common
// file: weave/common.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Timer extends jspb.Message {
  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_duration_pb.Duration | undefined;
  setTime(value?: google_protobuf_duration_pb.Duration): void;

  hasTimebasis(): boolean;
  clearTimebasis(): void;
  getTimebasis(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimebasis(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Timer.AsObject;
  static toObject(includeInstance: boolean, msg: Timer): Timer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Timer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Timer;
  static deserializeBinaryFromReader(message: Timer, reader: jspb.BinaryReader): Timer;
}

export namespace Timer {
  export type AsObject = {
    time?: google_protobuf_duration_pb.Duration.AsObject,
    timebasis?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class TimeOfDay extends jspb.Message {
  getHour(): number;
  setHour(value: number): void;

  getMinute(): number;
  setMinute(value: number): void;

  getSecond(): number;
  setSecond(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeOfDay.AsObject;
  static toObject(includeInstance: boolean, msg: TimeOfDay): TimeOfDay.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimeOfDay, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeOfDay;
  static deserializeBinaryFromReader(message: TimeOfDay, reader: jspb.BinaryReader): TimeOfDay;
}

export namespace TimeOfDay {
  export type AsObject = {
    hour: number,
    minute: number,
    second: number,
  }
}

export class ResourceId extends jspb.Message {
  getResourceid(): string;
  setResourceid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceId.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceId): ResourceId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceId;
  static deserializeBinaryFromReader(message: ResourceId, reader: jspb.BinaryReader): ResourceId;
}

export namespace ResourceId {
  export type AsObject = {
    resourceid: string,
  }
}

export class ResourceName extends jspb.Message {
  getResourcename(): string;
  setResourcename(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceName.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceName): ResourceName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceName;
  static deserializeBinaryFromReader(message: ResourceName, reader: jspb.BinaryReader): ResourceName;
}

export namespace ResourceName {
  export type AsObject = {
    resourcename: string,
  }
}

export class TraitTypeId extends jspb.Message {
  getTraittypeid(): number;
  setTraittypeid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TraitTypeId.AsObject;
  static toObject(includeInstance: boolean, msg: TraitTypeId): TraitTypeId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TraitTypeId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TraitTypeId;
  static deserializeBinaryFromReader(message: TraitTypeId, reader: jspb.BinaryReader): TraitTypeId;
}

export namespace TraitTypeId {
  export type AsObject = {
    traittypeid: number,
  }
}

export class TraitTypeInstance extends jspb.Message {
  hasTraittypeid(): boolean;
  clearTraittypeid(): void;
  getTraittypeid(): TraitTypeId | undefined;
  setTraittypeid(value?: TraitTypeId): void;

  getInstanceid(): number;
  setInstanceid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TraitTypeInstance.AsObject;
  static toObject(includeInstance: boolean, msg: TraitTypeInstance): TraitTypeInstance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TraitTypeInstance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TraitTypeInstance;
  static deserializeBinaryFromReader(message: TraitTypeInstance, reader: jspb.BinaryReader): TraitTypeInstance;
}

export namespace TraitTypeInstance {
  export type AsObject = {
    traittypeid?: TraitTypeId.AsObject,
    instanceid: number,
  }
}

export class TraitInstanceId extends jspb.Message {
  getTraitinstancelabel(): string;
  setTraitinstancelabel(value: string): void;

  hasTraitinstanceid(): boolean;
  clearTraitinstanceid(): void;
  getTraitinstanceid(): TraitTypeInstance | undefined;
  setTraitinstanceid(value?: TraitTypeInstance): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TraitInstanceId.AsObject;
  static toObject(includeInstance: boolean, msg: TraitInstanceId): TraitInstanceId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TraitInstanceId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TraitInstanceId;
  static deserializeBinaryFromReader(message: TraitInstanceId, reader: jspb.BinaryReader): TraitInstanceId;
}

export namespace TraitInstanceId {
  export type AsObject = {
    traitinstancelabel: string,
    traitinstanceid?: TraitTypeInstance.AsObject,
  }

  export interface TraitInstanceCaseMap {
    TRAIT_INSTANCE_NOT_SET: 0;
    TRAIT_INSTANCE_LABEL: 1;
    TRAIT_INSTANCE_ID: 2;
  }

  export const TraitInstanceCase: TraitInstanceCaseMap;
}

export class FullTraitInstanceId extends jspb.Message {
  hasResourceid(): boolean;
  clearResourceid(): void;
  getResourceid(): ResourceId | undefined;
  setResourceid(value?: ResourceId): void;

  hasTraitinstanceid(): boolean;
  clearTraitinstanceid(): void;
  getTraitinstanceid(): TraitInstanceId | undefined;
  setTraitinstanceid(value?: TraitInstanceId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FullTraitInstanceId.AsObject;
  static toObject(includeInstance: boolean, msg: FullTraitInstanceId): FullTraitInstanceId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FullTraitInstanceId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FullTraitInstanceId;
  static deserializeBinaryFromReader(message: FullTraitInstanceId, reader: jspb.BinaryReader): FullTraitInstanceId;
}

export namespace FullTraitInstanceId {
  export type AsObject = {
    resourceid?: ResourceId.AsObject,
    traitinstanceid?: TraitInstanceId.AsObject,
  }
}

export class InterfaceName extends jspb.Message {
  getInterfacename(): string;
  setInterfacename(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InterfaceName.AsObject;
  static toObject(includeInstance: boolean, msg: InterfaceName): InterfaceName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InterfaceName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InterfaceName;
  static deserializeBinaryFromReader(message: InterfaceName, reader: jspb.BinaryReader): InterfaceName;
}

export namespace InterfaceName {
  export type AsObject = {
    interfacename: string,
  }
}

export class EventId extends jspb.Message {
  hasResourceid(): boolean;
  clearResourceid(): void;
  getResourceid(): ResourceId | undefined;
  setResourceid(value?: ResourceId): void;

  getImportance(): EventImportanceMap[keyof EventImportanceMap];
  setImportance(value: EventImportanceMap[keyof EventImportanceMap]): void;

  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventId.AsObject;
  static toObject(includeInstance: boolean, msg: EventId): EventId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventId;
  static deserializeBinaryFromReader(message: EventId, reader: jspb.BinaryReader): EventId;
}

export namespace EventId {
  export type AsObject = {
    resourceid?: ResourceId.AsObject,
    importance: EventImportanceMap[keyof EventImportanceMap],
    id: number,
  }
}

export class ProfileSpecificStatusCode extends jspb.Message {
  getProfileid(): number;
  setProfileid(value: number): void;

  getStatuscode(): number;
  setStatuscode(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileSpecificStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileSpecificStatusCode): ProfileSpecificStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProfileSpecificStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileSpecificStatusCode;
  static deserializeBinaryFromReader(message: ProfileSpecificStatusCode, reader: jspb.BinaryReader): ProfileSpecificStatusCode;
}

export namespace ProfileSpecificStatusCode {
  export type AsObject = {
    profileid: number,
    statuscode: number,
  }
}

export class StringRef extends jspb.Message {
  getLiteral(): string;
  setLiteral(value: string): void;

  getReference(): number;
  setReference(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringRef.AsObject;
  static toObject(includeInstance: boolean, msg: StringRef): StringRef.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StringRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringRef;
  static deserializeBinaryFromReader(message: StringRef, reader: jspb.BinaryReader): StringRef;
}

export namespace StringRef {
  export type AsObject = {
    literal: string,
    reference: number,
  }

  export interface StringRefCaseMap {
    STRING_REF_NOT_SET: 0;
    LITERAL: 1;
    REFERENCE: 2;
  }

  export const StringRefCase: StringRefCaseMap;
}

export interface DayOfWeekMap {
  DAY_OF_WEEK_UNSPECIFIED: 0;
  DAY_OF_WEEK_SUNDAY: 1;
  DAY_OF_WEEK_MONDAY: 2;
  DAY_OF_WEEK_TUESDAY: 4;
  DAY_OF_WEEK_WEDNESDAY: 8;
  DAY_OF_WEEK_THURSDAY: 16;
  DAY_OF_WEEK_FRIDAY: 32;
  DAY_OF_WEEK_SATURDAY: 64;
}

export const DayOfWeek: DayOfWeekMap;

export interface MonthOfYearMap {
  MONTH_OF_YEAR_UNSPECIFIED: 0;
  MONTH_OF_YEAR_JANUARY: 1;
  MONTH_OF_YEAR_FEBRUARY: 2;
  MONTH_OF_YEAR_MARCH: 4;
  MONTH_OF_YEAR_APRIL: 8;
  MONTH_OF_YEAR_MAY: 16;
  MONTH_OF_YEAR_JUNE: 32;
  MONTH_OF_YEAR_JULY: 64;
  MONTH_OF_YEAR_AUGUST: 128;
  MONTH_OF_YEAR_SEPTEMBER: 256;
  MONTH_OF_YEAR_OCTOBER: 512;
  MONTH_OF_YEAR_NOVEMBER: 1024;
  MONTH_OF_YEAR_DECEMBER: 2048;
}

export const MonthOfYear: MonthOfYearMap;

export interface ResourceTypeMap {
  RESOURCE_TYPE_UNSPECIFIED: 0;
  RESOURCE_TYPE_DEVICE: 1;
  RESOURCE_TYPE_USER: 2;
  RESOURCE_TYPE_ACCOUNT: 3;
  RESOURCE_TYPE_AREA: 4;
  RESOURCE_TYPE_FIXTURE: 5;
  RESOURCE_TYPE_GROUP: 6;
  RESOURCE_TYPE_ANNOTATION: 7;
  RESOURCE_TYPE_STRUCTURE: 8;
  RESOURCE_TYPE_GUEST: 9;
  RESOURCE_TYPE_SERVICE: 10;
}

export const ResourceType: ResourceTypeMap;

export interface QuantityTypeMap {
  QUANTITY_TYPE_UNSPECIFIED: 0;
  LENGTH: 1;
  MASS: 2;
  DURATION: 3;
  CURRENT: 4;
  TEMPERATURE: 5;
  LUMINOUS_INTENSITY: 6;
  AREA: 7;
  VOLUME: 8;
  VELOCITY: 9;
  ACCELERATION: 10;
  FREQUENCY: 27;
  ENERGY: 30;
  ELECTRIC_CHARGE: 32;
  VOLTAGE: 33;
  RESISTANCE: 34;
  MAGNETIC_FLUX_DENSITY: 38;
  ILLUMINANCE: 42;
  HUMIDITY: 46;
  DBM: 47;
  PPM: 48;
  PIRMEASUREMENT: 256;
  NORMALIZED: 257;
}

export const QuantityType: QuantityTypeMap;

export interface EventImportanceMap {
  EVENT_IMPORTANCE_UNSPECIFIED: 0;
  EVENT_IMPORTANCE_PRODUCTION_CRITICAL: 1;
  EVENT_IMPORTANCE_PRODUCTION_STANDARD: 2;
  EVENT_IMPORTANCE_INFO: 3;
  EVENT_IMPORTANCE_DEBUG: 4;
}

export const EventImportance: EventImportanceMap;

