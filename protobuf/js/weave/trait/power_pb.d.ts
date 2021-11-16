// package: weave.trait.power
// file: weave/trait/power.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as weave_common_pb from "../../weave/common_pb";

export class PowerSourceCapabilitiesTrait extends jspb.Message {
  getType(): PowerSourceCapabilitiesTrait.PowerSourceTypeMap[keyof PowerSourceCapabilitiesTrait.PowerSourceTypeMap];
  setType(value: PowerSourceCapabilitiesTrait.PowerSourceTypeMap[keyof PowerSourceCapabilitiesTrait.PowerSourceTypeMap]): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): weave_common_pb.StringRef | undefined;
  setDescription(value?: weave_common_pb.StringRef): void;

  getNominalvoltage(): number;
  setNominalvoltage(value: number): void;

  hasMaximumcurrent(): boolean;
  clearMaximumcurrent(): void;
  getMaximumcurrent(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setMaximumcurrent(value?: google_protobuf_wrappers_pb.FloatValue): void;

  getCurrenttype(): PowerSourceCapabilitiesTrait.PowerSourceCurrentTypeMap[keyof PowerSourceCapabilitiesTrait.PowerSourceCurrentTypeMap];
  setCurrenttype(value: PowerSourceCapabilitiesTrait.PowerSourceCurrentTypeMap[keyof PowerSourceCapabilitiesTrait.PowerSourceCurrentTypeMap]): void;

  getOrder(): number;
  setOrder(value: number): void;

  getRemovable(): boolean;
  setRemovable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PowerSourceCapabilitiesTrait.AsObject;
  static toObject(includeInstance: boolean, msg: PowerSourceCapabilitiesTrait): PowerSourceCapabilitiesTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PowerSourceCapabilitiesTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PowerSourceCapabilitiesTrait;
  static deserializeBinaryFromReader(message: PowerSourceCapabilitiesTrait, reader: jspb.BinaryReader): PowerSourceCapabilitiesTrait;
}

export namespace PowerSourceCapabilitiesTrait {
  export type AsObject = {
    type: PowerSourceCapabilitiesTrait.PowerSourceTypeMap[keyof PowerSourceCapabilitiesTrait.PowerSourceTypeMap],
    description?: weave_common_pb.StringRef.AsObject,
    nominalvoltage: number,
    maximumcurrent?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    currenttype: PowerSourceCapabilitiesTrait.PowerSourceCurrentTypeMap[keyof PowerSourceCapabilitiesTrait.PowerSourceCurrentTypeMap],
    order: number,
    removable: boolean,
  }

  export interface PowerSourceTypeMap {
    POWER_SOURCE_TYPE_UNSPECIFIED: 0;
    POWER_SOURCE_TYPE_BATTERY: 1;
  }

  export const PowerSourceType: PowerSourceTypeMap;

  export interface PowerSourceCurrentTypeMap {
    POWER_SOURCE_CURRENT_TYPE_UNSPECIFIED: 0;
    POWER_SOURCE_CURRENT_TYPE_DC: 1;
    POWER_SOURCE_CURRENT_TYPE_AC: 2;
  }

  export const PowerSourceCurrentType: PowerSourceCurrentTypeMap;
}

export class PowerSourceTrait extends jspb.Message {
  getType(): PowerSourceCapabilitiesTrait.PowerSourceTypeMap[keyof PowerSourceCapabilitiesTrait.PowerSourceTypeMap];
  setType(value: PowerSourceCapabilitiesTrait.PowerSourceTypeMap[keyof PowerSourceCapabilitiesTrait.PowerSourceTypeMap]): void;

  hasAssessedvoltage(): boolean;
  clearAssessedvoltage(): void;
  getAssessedvoltage(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setAssessedvoltage(value?: google_protobuf_wrappers_pb.FloatValue): void;

  hasAssessedcurrent(): boolean;
  clearAssessedcurrent(): void;
  getAssessedcurrent(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setAssessedcurrent(value?: google_protobuf_wrappers_pb.FloatValue): void;

  hasAssessedfrequency(): boolean;
  clearAssessedfrequency(): void;
  getAssessedfrequency(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setAssessedfrequency(value?: google_protobuf_wrappers_pb.FloatValue): void;

  getCondition(): PowerSourceTrait.PowerSourceConditionMap[keyof PowerSourceTrait.PowerSourceConditionMap];
  setCondition(value: PowerSourceTrait.PowerSourceConditionMap[keyof PowerSourceTrait.PowerSourceConditionMap]): void;

  getStatus(): PowerSourceTrait.PowerSourceStatusMap[keyof PowerSourceTrait.PowerSourceStatusMap];
  setStatus(value: PowerSourceTrait.PowerSourceStatusMap[keyof PowerSourceTrait.PowerSourceStatusMap]): void;

  getPresent(): boolean;
  setPresent(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PowerSourceTrait.AsObject;
  static toObject(includeInstance: boolean, msg: PowerSourceTrait): PowerSourceTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PowerSourceTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PowerSourceTrait;
  static deserializeBinaryFromReader(message: PowerSourceTrait, reader: jspb.BinaryReader): PowerSourceTrait;
}

export namespace PowerSourceTrait {
  export type AsObject = {
    type: PowerSourceCapabilitiesTrait.PowerSourceTypeMap[keyof PowerSourceCapabilitiesTrait.PowerSourceTypeMap],
    assessedvoltage?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    assessedcurrent?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    assessedfrequency?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    condition: PowerSourceTrait.PowerSourceConditionMap[keyof PowerSourceTrait.PowerSourceConditionMap],
    status: PowerSourceTrait.PowerSourceStatusMap[keyof PowerSourceTrait.PowerSourceStatusMap],
    present: boolean,
  }

  export class PowerSourceChangedEvent extends jspb.Message {
    getCondition(): PowerSourceTrait.PowerSourceConditionMap[keyof PowerSourceTrait.PowerSourceConditionMap];
    setCondition(value: PowerSourceTrait.PowerSourceConditionMap[keyof PowerSourceTrait.PowerSourceConditionMap]): void;

    getStatus(): PowerSourceTrait.PowerSourceStatusMap[keyof PowerSourceTrait.PowerSourceStatusMap];
    setStatus(value: PowerSourceTrait.PowerSourceStatusMap[keyof PowerSourceTrait.PowerSourceStatusMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PowerSourceChangedEvent.AsObject;
    static toObject(includeInstance: boolean, msg: PowerSourceChangedEvent): PowerSourceChangedEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PowerSourceChangedEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PowerSourceChangedEvent;
    static deserializeBinaryFromReader(message: PowerSourceChangedEvent, reader: jspb.BinaryReader): PowerSourceChangedEvent;
  }

  export namespace PowerSourceChangedEvent {
    export type AsObject = {
      condition: PowerSourceTrait.PowerSourceConditionMap[keyof PowerSourceTrait.PowerSourceConditionMap],
      status: PowerSourceTrait.PowerSourceStatusMap[keyof PowerSourceTrait.PowerSourceStatusMap],
    }
  }

  export interface PowerSourceConditionMap {
    POWER_SOURCE_CONDITION_UNSPECIFIED: 0;
    POWER_SOURCE_CONDITION_NOMINAL: 1;
    POWER_SOURCE_CONDITION_CRITICAL: 2;
  }

  export const PowerSourceCondition: PowerSourceConditionMap;

  export interface PowerSourceStatusMap {
    POWER_SOURCE_STATUS_UNSPECIFIED: 0;
    POWER_SOURCE_STATUS_ACTIVE: 1;
    POWER_SOURCE_STATUS_STANDBY: 2;
    POWER_SOURCE_STATUS_INACTIVE: 3;
  }

  export const PowerSourceStatus: PowerSourceStatusMap;
}

export class BatteryPowerSourceTrait extends jspb.Message {
  getType(): PowerSourceCapabilitiesTrait.PowerSourceTypeMap[keyof PowerSourceCapabilitiesTrait.PowerSourceTypeMap];
  setType(value: PowerSourceCapabilitiesTrait.PowerSourceTypeMap[keyof PowerSourceCapabilitiesTrait.PowerSourceTypeMap]): void;

  hasAssessedvoltage(): boolean;
  clearAssessedvoltage(): void;
  getAssessedvoltage(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setAssessedvoltage(value?: google_protobuf_wrappers_pb.FloatValue): void;

  hasAssessedcurrent(): boolean;
  clearAssessedcurrent(): void;
  getAssessedcurrent(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setAssessedcurrent(value?: google_protobuf_wrappers_pb.FloatValue): void;

  hasAssessedfrequency(): boolean;
  clearAssessedfrequency(): void;
  getAssessedfrequency(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setAssessedfrequency(value?: google_protobuf_wrappers_pb.FloatValue): void;

  getCondition(): PowerSourceTrait.PowerSourceConditionMap[keyof PowerSourceTrait.PowerSourceConditionMap];
  setCondition(value: PowerSourceTrait.PowerSourceConditionMap[keyof PowerSourceTrait.PowerSourceConditionMap]): void;

  getStatus(): PowerSourceTrait.PowerSourceStatusMap[keyof PowerSourceTrait.PowerSourceStatusMap];
  setStatus(value: PowerSourceTrait.PowerSourceStatusMap[keyof PowerSourceTrait.PowerSourceStatusMap]): void;

  getPresent(): boolean;
  setPresent(value: boolean): void;

  getReplacementindicator(): BatteryPowerSourceTrait.BatteryReplacementIndicatorMap[keyof BatteryPowerSourceTrait.BatteryReplacementIndicatorMap];
  setReplacementindicator(value: BatteryPowerSourceTrait.BatteryReplacementIndicatorMap[keyof BatteryPowerSourceTrait.BatteryReplacementIndicatorMap]): void;

  hasRemaining(): boolean;
  clearRemaining(): void;
  getRemaining(): BatteryPowerSourceTrait.BatteryRemaining | undefined;
  setRemaining(value?: BatteryPowerSourceTrait.BatteryRemaining): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatteryPowerSourceTrait.AsObject;
  static toObject(includeInstance: boolean, msg: BatteryPowerSourceTrait): BatteryPowerSourceTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatteryPowerSourceTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatteryPowerSourceTrait;
  static deserializeBinaryFromReader(message: BatteryPowerSourceTrait, reader: jspb.BinaryReader): BatteryPowerSourceTrait;
}

export namespace BatteryPowerSourceTrait {
  export type AsObject = {
    type: PowerSourceCapabilitiesTrait.PowerSourceTypeMap[keyof PowerSourceCapabilitiesTrait.PowerSourceTypeMap],
    assessedvoltage?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    assessedcurrent?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    assessedfrequency?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    condition: PowerSourceTrait.PowerSourceConditionMap[keyof PowerSourceTrait.PowerSourceConditionMap],
    status: PowerSourceTrait.PowerSourceStatusMap[keyof PowerSourceTrait.PowerSourceStatusMap],
    present: boolean,
    replacementindicator: BatteryPowerSourceTrait.BatteryReplacementIndicatorMap[keyof BatteryPowerSourceTrait.BatteryReplacementIndicatorMap],
    remaining?: BatteryPowerSourceTrait.BatteryRemaining.AsObject,
  }

  export class BatteryRemaining extends jspb.Message {
    hasRemainingpercent(): boolean;
    clearRemainingpercent(): void;
    getRemainingpercent(): google_protobuf_wrappers_pb.FloatValue | undefined;
    setRemainingpercent(value?: google_protobuf_wrappers_pb.FloatValue): void;

    hasRemainingtime(): boolean;
    clearRemainingtime(): void;
    getRemainingtime(): weave_common_pb.Timer | undefined;
    setRemainingtime(value?: weave_common_pb.Timer): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatteryRemaining.AsObject;
    static toObject(includeInstance: boolean, msg: BatteryRemaining): BatteryRemaining.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatteryRemaining, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatteryRemaining;
    static deserializeBinaryFromReader(message: BatteryRemaining, reader: jspb.BinaryReader): BatteryRemaining;
  }

  export namespace BatteryRemaining {
    export type AsObject = {
      remainingpercent?: google_protobuf_wrappers_pb.FloatValue.AsObject,
      remainingtime?: weave_common_pb.Timer.AsObject,
    }
  }

  export class BatteryChangedEvent extends jspb.Message {
    getCondition(): PowerSourceTrait.PowerSourceConditionMap[keyof PowerSourceTrait.PowerSourceConditionMap];
    setCondition(value: PowerSourceTrait.PowerSourceConditionMap[keyof PowerSourceTrait.PowerSourceConditionMap]): void;

    getStatus(): PowerSourceTrait.PowerSourceStatusMap[keyof PowerSourceTrait.PowerSourceStatusMap];
    setStatus(value: PowerSourceTrait.PowerSourceStatusMap[keyof PowerSourceTrait.PowerSourceStatusMap]): void;

    getReplacementindicator(): BatteryPowerSourceTrait.BatteryReplacementIndicatorMap[keyof BatteryPowerSourceTrait.BatteryReplacementIndicatorMap];
    setReplacementindicator(value: BatteryPowerSourceTrait.BatteryReplacementIndicatorMap[keyof BatteryPowerSourceTrait.BatteryReplacementIndicatorMap]): void;

    hasRemaining(): boolean;
    clearRemaining(): void;
    getRemaining(): BatteryPowerSourceTrait.BatteryRemaining | undefined;
    setRemaining(value?: BatteryPowerSourceTrait.BatteryRemaining): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatteryChangedEvent.AsObject;
    static toObject(includeInstance: boolean, msg: BatteryChangedEvent): BatteryChangedEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatteryChangedEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatteryChangedEvent;
    static deserializeBinaryFromReader(message: BatteryChangedEvent, reader: jspb.BinaryReader): BatteryChangedEvent;
  }

  export namespace BatteryChangedEvent {
    export type AsObject = {
      condition: PowerSourceTrait.PowerSourceConditionMap[keyof PowerSourceTrait.PowerSourceConditionMap],
      status: PowerSourceTrait.PowerSourceStatusMap[keyof PowerSourceTrait.PowerSourceStatusMap],
      replacementindicator: BatteryPowerSourceTrait.BatteryReplacementIndicatorMap[keyof BatteryPowerSourceTrait.BatteryReplacementIndicatorMap],
      remaining?: BatteryPowerSourceTrait.BatteryRemaining.AsObject,
    }
  }

  export interface BatteryReplacementIndicatorMap {
    BATTERY_REPLACEMENT_INDICATOR_UNSPECIFIED: 0;
    BATTERY_REPLACEMENT_INDICATOR_NOT_AT_ALL: 1;
    BATTERY_REPLACEMENT_INDICATOR_SOON: 2;
    BATTERY_REPLACEMENT_INDICATOR_IMMEDIATELY: 3;
  }

  export const BatteryReplacementIndicator: BatteryReplacementIndicatorMap;
}

