// package: nest.trait.occupancy
// file: nest/trait/occupancy.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as weave_common_pb from "../../weave/common_pb";

export class StructureModeTrait extends jspb.Message {
  getStructuremode(): StructureModeTrait.StructureModeMap[keyof StructureModeTrait.StructureModeMap];
  setStructuremode(value: StructureModeTrait.StructureModeMap[keyof StructureModeTrait.StructureModeMap]): void;

  hasOccupancy(): boolean;
  clearOccupancy(): void;
  getOccupancy(): StructureModeTrait.Occupancy | undefined;
  setOccupancy(value?: StructureModeTrait.Occupancy): void;

  hasAllowance(): boolean;
  clearAllowance(): void;
  getAllowance(): StructureModeTrait.Allowance | undefined;
  setAllowance(value?: StructureModeTrait.Allowance): void;

  getStructuremodereason(): StructureModeTrait.StructureModeReasonMap[keyof StructureModeTrait.StructureModeReasonMap];
  setStructuremodereason(value: StructureModeTrait.StructureModeReasonMap[keyof StructureModeTrait.StructureModeReasonMap]): void;

  hasStructuremodesetter(): boolean;
  clearStructuremodesetter(): void;
  getStructuremodesetter(): weave_common_pb.ResourceId | undefined;
  setStructuremodesetter(value?: weave_common_pb.ResourceId): void;

  hasStructuremodeeffectivetime(): boolean;
  clearStructuremodeeffectivetime(): void;
  getStructuremodeeffectivetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStructuremodeeffectivetime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getActivityagnosticstructuremode(): StructureModeTrait.StructureModeMap[keyof StructureModeTrait.StructureModeMap];
  setActivityagnosticstructuremode(value: StructureModeTrait.StructureModeMap[keyof StructureModeTrait.StructureModeMap]): void;

  hasActivityagnosticstructuremodeeffectivetime(): boolean;
  clearActivityagnosticstructuremodeeffectivetime(): void;
  getActivityagnosticstructuremodeeffectivetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setActivityagnosticstructuremodeeffectivetime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasPrivatestate(): boolean;
  clearPrivatestate(): void;
  getPrivatestate(): StructureModeTrait.PrivateTraitHandlerState | undefined;
  setPrivatestate(value?: StructureModeTrait.PrivateTraitHandlerState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureModeTrait.AsObject;
  static toObject(includeInstance: boolean, msg: StructureModeTrait): StructureModeTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructureModeTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureModeTrait;
  static deserializeBinaryFromReader(message: StructureModeTrait, reader: jspb.BinaryReader): StructureModeTrait;
}

export namespace StructureModeTrait {
  export type AsObject = {
    structuremode: StructureModeTrait.StructureModeMap[keyof StructureModeTrait.StructureModeMap],
    occupancy?: StructureModeTrait.Occupancy.AsObject,
    allowance?: StructureModeTrait.Allowance.AsObject,
    structuremodereason: StructureModeTrait.StructureModeReasonMap[keyof StructureModeTrait.StructureModeReasonMap],
    structuremodesetter?: weave_common_pb.ResourceId.AsObject,
    structuremodeeffectivetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    activityagnosticstructuremode: StructureModeTrait.StructureModeMap[keyof StructureModeTrait.StructureModeMap],
    activityagnosticstructuremodeeffectivetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    privatestate?: StructureModeTrait.PrivateTraitHandlerState.AsObject,
  }

  export class Occupancy extends jspb.Message {
    getActivity(): StructureModeTrait.ActivityMap[keyof StructureModeTrait.ActivityMap];
    setActivity(value: StructureModeTrait.ActivityMap[keyof StructureModeTrait.ActivityMap]): void;

    getPresence(): StructureModeTrait.PresenceMap[keyof StructureModeTrait.PresenceMap];
    setPresence(value: StructureModeTrait.PresenceMap[keyof StructureModeTrait.PresenceMap]): void;

    hasLastactivitytime(): boolean;
    clearLastactivitytime(): void;
    getLastactivitytime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLastactivitytime(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasActivityholdoff(): boolean;
    clearActivityholdoff(): void;
    getActivityholdoff(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setActivityholdoff(value?: google_protobuf_timestamp_pb.Timestamp): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Occupancy.AsObject;
    static toObject(includeInstance: boolean, msg: Occupancy): Occupancy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Occupancy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Occupancy;
    static deserializeBinaryFromReader(message: Occupancy, reader: jspb.BinaryReader): Occupancy;
  }

  export namespace Occupancy {
    export type AsObject = {
      activity: StructureModeTrait.ActivityMap[keyof StructureModeTrait.ActivityMap],
      presence: StructureModeTrait.PresenceMap[keyof StructureModeTrait.PresenceMap],
      lastactivitytime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      activityholdoff?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

  export class Allowance extends jspb.Message {
    getModestickiness(): StructureModeTrait.ModeStickinessMap[keyof StructureModeTrait.ModeStickinessMap];
    setModestickiness(value: StructureModeTrait.ModeStickinessMap[keyof StructureModeTrait.ModeStickinessMap]): void;

    hasModestickinessexpiration(): boolean;
    clearModestickinessexpiration(): void;
    getModestickinessexpiration(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModestickinessexpiration(value?: google_protobuf_timestamp_pb.Timestamp): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Allowance.AsObject;
    static toObject(includeInstance: boolean, msg: Allowance): Allowance.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Allowance, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Allowance;
    static deserializeBinaryFromReader(message: Allowance, reader: jspb.BinaryReader): Allowance;
  }

  export namespace Allowance {
    export type AsObject = {
      modestickiness: StructureModeTrait.ModeStickinessMap[keyof StructureModeTrait.ModeStickinessMap],
      modestickinessexpiration?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

  export class PrivateTraitHandlerState extends jspb.Message {
    getIsczupdatestateok(): boolean;
    setIsczupdatestateok(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PrivateTraitHandlerState.AsObject;
    static toObject(includeInstance: boolean, msg: PrivateTraitHandlerState): PrivateTraitHandlerState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PrivateTraitHandlerState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PrivateTraitHandlerState;
    static deserializeBinaryFromReader(message: PrivateTraitHandlerState, reader: jspb.BinaryReader): PrivateTraitHandlerState;
  }

  export namespace PrivateTraitHandlerState {
    export type AsObject = {
      isczupdatestateok: boolean,
    }
  }

  export class StructureModeChangeRequest extends jspb.Message {
    getStructuremode(): StructureModeTrait.StructureModeMap[keyof StructureModeTrait.StructureModeMap];
    setStructuremode(value: StructureModeTrait.StructureModeMap[keyof StructureModeTrait.StructureModeMap]): void;

    getReason(): StructureModeTrait.StructureModeReasonMap[keyof StructureModeTrait.StructureModeReasonMap];
    setReason(value: StructureModeTrait.StructureModeReasonMap[keyof StructureModeTrait.StructureModeReasonMap]): void;

    hasUserid(): boolean;
    clearUserid(): void;
    getUserid(): weave_common_pb.ResourceId | undefined;
    setUserid(value?: weave_common_pb.ResourceId): void;

    hasNonpropagatingchangedetails(): boolean;
    clearNonpropagatingchangedetails(): void;
    getNonpropagatingchangedetails(): StructureModeTrait.NonPropagatingChangeDetails | undefined;
    setNonpropagatingchangedetails(value?: StructureModeTrait.NonPropagatingChangeDetails): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StructureModeChangeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StructureModeChangeRequest): StructureModeChangeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StructureModeChangeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StructureModeChangeRequest;
    static deserializeBinaryFromReader(message: StructureModeChangeRequest, reader: jspb.BinaryReader): StructureModeChangeRequest;
  }

  export namespace StructureModeChangeRequest {
    export type AsObject = {
      structuremode: StructureModeTrait.StructureModeMap[keyof StructureModeTrait.StructureModeMap],
      reason: StructureModeTrait.StructureModeReasonMap[keyof StructureModeTrait.StructureModeReasonMap],
      userid?: weave_common_pb.ResourceId.AsObject,
      nonpropagatingchangedetails?: StructureModeTrait.NonPropagatingChangeDetails.AsObject,
    }
  }

  export class NonPropagatingChangeDetails extends jspb.Message {
    getSourcetype(): StructureModeTrait.NonPropagatingChangeSourceTypeMap[keyof StructureModeTrait.NonPropagatingChangeSourceTypeMap];
    setSourcetype(value: StructureModeTrait.NonPropagatingChangeSourceTypeMap[keyof StructureModeTrait.NonPropagatingChangeSourceTypeMap]): void;

    hasChangetime(): boolean;
    clearChangetime(): void;
    getChangetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setChangetime(value?: google_protobuf_timestamp_pb.Timestamp): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NonPropagatingChangeDetails.AsObject;
    static toObject(includeInstance: boolean, msg: NonPropagatingChangeDetails): NonPropagatingChangeDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NonPropagatingChangeDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NonPropagatingChangeDetails;
    static deserializeBinaryFromReader(message: NonPropagatingChangeDetails, reader: jspb.BinaryReader): NonPropagatingChangeDetails;
  }

  export namespace NonPropagatingChangeDetails {
    export type AsObject = {
      sourcetype: StructureModeTrait.NonPropagatingChangeSourceTypeMap[keyof StructureModeTrait.NonPropagatingChangeSourceTypeMap],
      changetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

  export class StructureModeChangeResponse extends jspb.Message {
    getResponsetype(): StructureModeTrait.StructureModeChangeResponseTypeMap[keyof StructureModeTrait.StructureModeChangeResponseTypeMap];
    setResponsetype(value: StructureModeTrait.StructureModeChangeResponseTypeMap[keyof StructureModeTrait.StructureModeChangeResponseTypeMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StructureModeChangeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StructureModeChangeResponse): StructureModeChangeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StructureModeChangeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StructureModeChangeResponse;
    static deserializeBinaryFromReader(message: StructureModeChangeResponse, reader: jspb.BinaryReader): StructureModeChangeResponse;
  }

  export namespace StructureModeChangeResponse {
    export type AsObject = {
      responsetype: StructureModeTrait.StructureModeChangeResponseTypeMap[keyof StructureModeTrait.StructureModeChangeResponseTypeMap],
    }
  }

  export class StructureModeCompleteUpdateRequest extends jspb.Message {
    getStructuremode(): StructureModeTrait.StructureModeMap[keyof StructureModeTrait.StructureModeMap];
    setStructuremode(value: StructureModeTrait.StructureModeMap[keyof StructureModeTrait.StructureModeMap]): void;

    hasOccupancy(): boolean;
    clearOccupancy(): void;
    getOccupancy(): StructureModeTrait.Occupancy | undefined;
    setOccupancy(value?: StructureModeTrait.Occupancy): void;

    hasAllowance(): boolean;
    clearAllowance(): void;
    getAllowance(): StructureModeTrait.Allowance | undefined;
    setAllowance(value?: StructureModeTrait.Allowance): void;

    getStructuremodereason(): StructureModeTrait.StructureModeReasonMap[keyof StructureModeTrait.StructureModeReasonMap];
    setStructuremodereason(value: StructureModeTrait.StructureModeReasonMap[keyof StructureModeTrait.StructureModeReasonMap]): void;

    hasStructuremodesetter(): boolean;
    clearStructuremodesetter(): void;
    getStructuremodesetter(): weave_common_pb.ResourceId | undefined;
    setStructuremodesetter(value?: weave_common_pb.ResourceId): void;

    hasStructuremodeeffectivetime(): boolean;
    clearStructuremodeeffectivetime(): void;
    getStructuremodeeffectivetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStructuremodeeffectivetime(value?: google_protobuf_timestamp_pb.Timestamp): void;

    getActivityagnosticstructuremode(): StructureModeTrait.StructureModeMap[keyof StructureModeTrait.StructureModeMap];
    setActivityagnosticstructuremode(value: StructureModeTrait.StructureModeMap[keyof StructureModeTrait.StructureModeMap]): void;

    hasActivityagnosticstructuremodeeffectivetime(): boolean;
    clearActivityagnosticstructuremodeeffectivetime(): void;
    getActivityagnosticstructuremodeeffectivetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setActivityagnosticstructuremodeeffectivetime(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasRevisionid(): boolean;
    clearRevisionid(): void;
    getRevisionid(): google_protobuf_wrappers_pb.UInt64Value | undefined;
    setRevisionid(value?: google_protobuf_wrappers_pb.UInt64Value): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StructureModeCompleteUpdateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StructureModeCompleteUpdateRequest): StructureModeCompleteUpdateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StructureModeCompleteUpdateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StructureModeCompleteUpdateRequest;
    static deserializeBinaryFromReader(message: StructureModeCompleteUpdateRequest, reader: jspb.BinaryReader): StructureModeCompleteUpdateRequest;
  }

  export namespace StructureModeCompleteUpdateRequest {
    export type AsObject = {
      structuremode: StructureModeTrait.StructureModeMap[keyof StructureModeTrait.StructureModeMap],
      occupancy?: StructureModeTrait.Occupancy.AsObject,
      allowance?: StructureModeTrait.Allowance.AsObject,
      structuremodereason: StructureModeTrait.StructureModeReasonMap[keyof StructureModeTrait.StructureModeReasonMap],
      structuremodesetter?: weave_common_pb.ResourceId.AsObject,
      structuremodeeffectivetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      activityagnosticstructuremode: StructureModeTrait.StructureModeMap[keyof StructureModeTrait.StructureModeMap],
      activityagnosticstructuremodeeffectivetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      revisionid?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    }
  }

  export class StructureModeCompleteUpdateResponse extends jspb.Message {
    getResponsetype(): StructureModeTrait.StructureModeChangeResponseTypeMap[keyof StructureModeTrait.StructureModeChangeResponseTypeMap];
    setResponsetype(value: StructureModeTrait.StructureModeChangeResponseTypeMap[keyof StructureModeTrait.StructureModeChangeResponseTypeMap]): void;

    getCompleteresponsetype(): StructureModeTrait.StructureModeCompleteUpdateResponseTypeMap[keyof StructureModeTrait.StructureModeCompleteUpdateResponseTypeMap];
    setCompleteresponsetype(value: StructureModeTrait.StructureModeCompleteUpdateResponseTypeMap[keyof StructureModeTrait.StructureModeCompleteUpdateResponseTypeMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StructureModeCompleteUpdateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StructureModeCompleteUpdateResponse): StructureModeCompleteUpdateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StructureModeCompleteUpdateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StructureModeCompleteUpdateResponse;
    static deserializeBinaryFromReader(message: StructureModeCompleteUpdateResponse, reader: jspb.BinaryReader): StructureModeCompleteUpdateResponse;
  }

  export namespace StructureModeCompleteUpdateResponse {
    export type AsObject = {
      responsetype: StructureModeTrait.StructureModeChangeResponseTypeMap[keyof StructureModeTrait.StructureModeChangeResponseTypeMap],
      completeresponsetype: StructureModeTrait.StructureModeCompleteUpdateResponseTypeMap[keyof StructureModeTrait.StructureModeCompleteUpdateResponseTypeMap],
    }
  }

  export class LegacyStructureModeChangeRequest extends jspb.Message {
    getStructuremode(): StructureModeTrait.StructureModeMap[keyof StructureModeTrait.StructureModeMap];
    setStructuremode(value: StructureModeTrait.StructureModeMap[keyof StructureModeTrait.StructureModeMap]): void;

    getReason(): StructureModeTrait.StructureModeReasonMap[keyof StructureModeTrait.StructureModeReasonMap];
    setReason(value: StructureModeTrait.StructureModeReasonMap[keyof StructureModeTrait.StructureModeReasonMap]): void;

    hasUserid(): boolean;
    clearUserid(): void;
    getUserid(): weave_common_pb.ResourceId | undefined;
    setUserid(value?: weave_common_pb.ResourceId): void;

    hasWwnid(): boolean;
    clearWwnid(): void;
    getWwnid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setWwnid(value?: google_protobuf_wrappers_pb.StringValue): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LegacyStructureModeChangeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LegacyStructureModeChangeRequest): LegacyStructureModeChangeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LegacyStructureModeChangeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LegacyStructureModeChangeRequest;
    static deserializeBinaryFromReader(message: LegacyStructureModeChangeRequest, reader: jspb.BinaryReader): LegacyStructureModeChangeRequest;
  }

  export namespace LegacyStructureModeChangeRequest {
    export type AsObject = {
      structuremode: StructureModeTrait.StructureModeMap[keyof StructureModeTrait.StructureModeMap],
      reason: StructureModeTrait.StructureModeReasonMap[keyof StructureModeTrait.StructureModeReasonMap],
      userid?: weave_common_pb.ResourceId.AsObject,
      wwnid?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
  }

  export class ConsumeOccupancyStateBeliefRequest extends jspb.Message {
    getActiveprobability(): number;
    setActiveprobability(value: number): void;

    getSleepprobability(): number;
    setSleepprobability(value: number): void;

    getVacantprobability(): number;
    setVacantprobability(value: number): void;

    getIdentifiedpresenceprobability(): number;
    setIdentifiedpresenceprobability(value: number): void;

    hasLastmotioneventtimestamp(): boolean;
    clearLastmotioneventtimestamp(): void;
    getLastmotioneventtimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLastmotioneventtimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConsumeOccupancyStateBeliefRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ConsumeOccupancyStateBeliefRequest): ConsumeOccupancyStateBeliefRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConsumeOccupancyStateBeliefRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConsumeOccupancyStateBeliefRequest;
    static deserializeBinaryFromReader(message: ConsumeOccupancyStateBeliefRequest, reader: jspb.BinaryReader): ConsumeOccupancyStateBeliefRequest;
  }

  export namespace ConsumeOccupancyStateBeliefRequest {
    export type AsObject = {
      activeprobability: number,
      sleepprobability: number,
      vacantprobability: number,
      identifiedpresenceprobability: number,
      lastmotioneventtimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

  export class ConsumeSecurityArmStateChangeRequest extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConsumeSecurityArmStateChangeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ConsumeSecurityArmStateChangeRequest): ConsumeSecurityArmStateChangeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConsumeSecurityArmStateChangeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConsumeSecurityArmStateChangeRequest;
    static deserializeBinaryFromReader(message: ConsumeSecurityArmStateChangeRequest, reader: jspb.BinaryReader): ConsumeSecurityArmStateChangeRequest;
  }

  export namespace ConsumeSecurityArmStateChangeRequest {
    export type AsObject = {
    }
  }

  export class ConsumeBoltActuatorStateChangeRequest extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConsumeBoltActuatorStateChangeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ConsumeBoltActuatorStateChangeRequest): ConsumeBoltActuatorStateChangeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConsumeBoltActuatorStateChangeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConsumeBoltActuatorStateChangeRequest;
    static deserializeBinaryFromReader(message: ConsumeBoltActuatorStateChangeRequest, reader: jspb.BinaryReader): ConsumeBoltActuatorStateChangeRequest;
  }

  export namespace ConsumeBoltActuatorStateChangeRequest {
    export type AsObject = {
    }
  }

  export class ConsumeLegacyStructureModeChangeRequest extends jspb.Message {
    getAway(): StructureModeTrait.LegacyAwayStateMap[keyof StructureModeTrait.LegacyAwayStateMap];
    setAway(value: StructureModeTrait.LegacyAwayStateMap[keyof StructureModeTrait.LegacyAwayStateMap]): void;

    getAwaysetter(): StructureModeTrait.LegacyAwaySetterMap[keyof StructureModeTrait.LegacyAwaySetterMap];
    setAwaysetter(value: StructureModeTrait.LegacyAwaySetterMap[keyof StructureModeTrait.LegacyAwaySetterMap]): void;

    hasManualawaytimestamp(): boolean;
    clearManualawaytimestamp(): void;
    getManualawaytimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setManualawaytimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

    getTouchedby(): StructureModeTrait.LegacyTouchedByMap[keyof StructureModeTrait.LegacyTouchedByMap];
    setTouchedby(value: StructureModeTrait.LegacyTouchedByMap[keyof StructureModeTrait.LegacyTouchedByMap]): void;

    hasTouchedid(): boolean;
    clearTouchedid(): void;
    getTouchedid(): weave_common_pb.ResourceId | undefined;
    setTouchedid(value?: weave_common_pb.ResourceId): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConsumeLegacyStructureModeChangeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ConsumeLegacyStructureModeChangeRequest): ConsumeLegacyStructureModeChangeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConsumeLegacyStructureModeChangeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConsumeLegacyStructureModeChangeRequest;
    static deserializeBinaryFromReader(message: ConsumeLegacyStructureModeChangeRequest, reader: jspb.BinaryReader): ConsumeLegacyStructureModeChangeRequest;
  }

  export namespace ConsumeLegacyStructureModeChangeRequest {
    export type AsObject = {
      away: StructureModeTrait.LegacyAwayStateMap[keyof StructureModeTrait.LegacyAwayStateMap],
      awaysetter: StructureModeTrait.LegacyAwaySetterMap[keyof StructureModeTrait.LegacyAwaySetterMap],
      manualawaytimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      touchedby: StructureModeTrait.LegacyTouchedByMap[keyof StructureModeTrait.LegacyTouchedByMap],
      touchedid?: weave_common_pb.ResourceId.AsObject,
    }
  }

  export class StructureModeChangeEvent extends jspb.Message {
    getStructuremode(): StructureModeTrait.StructureModeMap[keyof StructureModeTrait.StructureModeMap];
    setStructuremode(value: StructureModeTrait.StructureModeMap[keyof StructureModeTrait.StructureModeMap]): void;

    getPriorstructuremode(): StructureModeTrait.StructureModeMap[keyof StructureModeTrait.StructureModeMap];
    setPriorstructuremode(value: StructureModeTrait.StructureModeMap[keyof StructureModeTrait.StructureModeMap]): void;

    getReason(): StructureModeTrait.StructureModeReasonMap[keyof StructureModeTrait.StructureModeReasonMap];
    setReason(value: StructureModeTrait.StructureModeReasonMap[keyof StructureModeTrait.StructureModeReasonMap]): void;

    hasUserid(): boolean;
    clearUserid(): void;
    getUserid(): weave_common_pb.ResourceId | undefined;
    setUserid(value?: weave_common_pb.ResourceId): void;

    hasDeviceid(): boolean;
    clearDeviceid(): void;
    getDeviceid(): weave_common_pb.ResourceId | undefined;
    setDeviceid(value?: weave_common_pb.ResourceId): void;

    hasRtsdeviceid(): boolean;
    clearRtsdeviceid(): void;
    getRtsdeviceid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setRtsdeviceid(value?: google_protobuf_wrappers_pb.StringValue): void;

    hasControleventtypeurl(): boolean;
    clearControleventtypeurl(): void;
    getControleventtypeurl(): google_protobuf_wrappers_pb.StringValue | undefined;
    setControleventtypeurl(value?: google_protobuf_wrappers_pb.StringValue): void;

    hasWwnid(): boolean;
    clearWwnid(): void;
    getWwnid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setWwnid(value?: google_protobuf_wrappers_pb.StringValue): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StructureModeChangeEvent.AsObject;
    static toObject(includeInstance: boolean, msg: StructureModeChangeEvent): StructureModeChangeEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StructureModeChangeEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StructureModeChangeEvent;
    static deserializeBinaryFromReader(message: StructureModeChangeEvent, reader: jspb.BinaryReader): StructureModeChangeEvent;
  }

  export namespace StructureModeChangeEvent {
    export type AsObject = {
      structuremode: StructureModeTrait.StructureModeMap[keyof StructureModeTrait.StructureModeMap],
      priorstructuremode: StructureModeTrait.StructureModeMap[keyof StructureModeTrait.StructureModeMap],
      reason: StructureModeTrait.StructureModeReasonMap[keyof StructureModeTrait.StructureModeReasonMap],
      userid?: weave_common_pb.ResourceId.AsObject,
      deviceid?: weave_common_pb.ResourceId.AsObject,
      rtsdeviceid?: google_protobuf_wrappers_pb.StringValue.AsObject,
      controleventtypeurl?: google_protobuf_wrappers_pb.StringValue.AsObject,
      wwnid?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
  }

  export class OccupancyChangeEvent extends jspb.Message {
    hasOccupancy(): boolean;
    clearOccupancy(): void;
    getOccupancy(): StructureModeTrait.Occupancy | undefined;
    setOccupancy(value?: StructureModeTrait.Occupancy): void;

    hasPrioroccupancy(): boolean;
    clearPrioroccupancy(): void;
    getPrioroccupancy(): StructureModeTrait.Occupancy | undefined;
    setPrioroccupancy(value?: StructureModeTrait.Occupancy): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OccupancyChangeEvent.AsObject;
    static toObject(includeInstance: boolean, msg: OccupancyChangeEvent): OccupancyChangeEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OccupancyChangeEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OccupancyChangeEvent;
    static deserializeBinaryFromReader(message: OccupancyChangeEvent, reader: jspb.BinaryReader): OccupancyChangeEvent;
  }

  export namespace OccupancyChangeEvent {
    export type AsObject = {
      occupancy?: StructureModeTrait.Occupancy.AsObject,
      prioroccupancy?: StructureModeTrait.Occupancy.AsObject,
    }
  }

  export class AllowanceChangeEvent extends jspb.Message {
    hasAllowance(): boolean;
    clearAllowance(): void;
    getAllowance(): StructureModeTrait.Allowance | undefined;
    setAllowance(value?: StructureModeTrait.Allowance): void;

    hasPriorallowance(): boolean;
    clearPriorallowance(): void;
    getPriorallowance(): StructureModeTrait.Allowance | undefined;
    setPriorallowance(value?: StructureModeTrait.Allowance): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AllowanceChangeEvent.AsObject;
    static toObject(includeInstance: boolean, msg: AllowanceChangeEvent): AllowanceChangeEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AllowanceChangeEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AllowanceChangeEvent;
    static deserializeBinaryFromReader(message: AllowanceChangeEvent, reader: jspb.BinaryReader): AllowanceChangeEvent;
  }

  export namespace AllowanceChangeEvent {
    export type AsObject = {
      allowance?: StructureModeTrait.Allowance.AsObject,
      priorallowance?: StructureModeTrait.Allowance.AsObject,
    }
  }

  export class AutoAsk extends jspb.Message {
    getAutoaskarm(): StructureModeTrait.AutoAskArmMap[keyof StructureModeTrait.AutoAskArmMap];
    setAutoaskarm(value: StructureModeTrait.AutoAskArmMap[keyof StructureModeTrait.AutoAskArmMap]): void;

    getAutoasklock(): StructureModeTrait.AutoAskLockMap[keyof StructureModeTrait.AutoAskLockMap];
    setAutoasklock(value: StructureModeTrait.AutoAskLockMap[keyof StructureModeTrait.AutoAskLockMap]): void;

    getAutoaskstructuremode(): StructureModeTrait.AutoAskStructureModeMap[keyof StructureModeTrait.AutoAskStructureModeMap];
    setAutoaskstructuremode(value: StructureModeTrait.AutoAskStructureModeMap[keyof StructureModeTrait.AutoAskStructureModeMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AutoAsk.AsObject;
    static toObject(includeInstance: boolean, msg: AutoAsk): AutoAsk.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AutoAsk, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AutoAsk;
    static deserializeBinaryFromReader(message: AutoAsk, reader: jspb.BinaryReader): AutoAsk;
  }

  export namespace AutoAsk {
    export type AsObject = {
      autoaskarm: StructureModeTrait.AutoAskArmMap[keyof StructureModeTrait.AutoAskArmMap],
      autoasklock: StructureModeTrait.AutoAskLockMap[keyof StructureModeTrait.AutoAskLockMap],
      autoaskstructuremode: StructureModeTrait.AutoAskStructureModeMap[keyof StructureModeTrait.AutoAskStructureModeMap],
    }
  }

  export class AutoAskEvent extends jspb.Message {
    getAsktype(): StructureModeTrait.AutoAskTypeMap[keyof StructureModeTrait.AutoAskTypeMap];
    setAsktype(value: StructureModeTrait.AutoAskTypeMap[keyof StructureModeTrait.AutoAskTypeMap]): void;

    clearUseridList(): void;
    getUseridList(): Array<weave_common_pb.ResourceId>;
    setUseridList(value: Array<weave_common_pb.ResourceId>): void;
    addUserid(value?: weave_common_pb.ResourceId, index?: number): weave_common_pb.ResourceId;

    hasDeviceid(): boolean;
    clearDeviceid(): void;
    getDeviceid(): weave_common_pb.ResourceId | undefined;
    setDeviceid(value?: weave_common_pb.ResourceId): void;

    getDryrun(): boolean;
    setDryrun(value: boolean): void;

    hasAutoask(): boolean;
    clearAutoask(): void;
    getAutoask(): StructureModeTrait.AutoAsk | undefined;
    setAutoask(value?: StructureModeTrait.AutoAsk): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AutoAskEvent.AsObject;
    static toObject(includeInstance: boolean, msg: AutoAskEvent): AutoAskEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AutoAskEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AutoAskEvent;
    static deserializeBinaryFromReader(message: AutoAskEvent, reader: jspb.BinaryReader): AutoAskEvent;
  }

  export namespace AutoAskEvent {
    export type AsObject = {
      asktype: StructureModeTrait.AutoAskTypeMap[keyof StructureModeTrait.AutoAskTypeMap],
      useridList: Array<weave_common_pb.ResourceId.AsObject>,
      deviceid?: weave_common_pb.ResourceId.AsObject,
      dryrun: boolean,
      autoask?: StructureModeTrait.AutoAsk.AsObject,
    }
  }

  export class ActivityAgnosticStructureModeChangeEvent extends jspb.Message {
    getActivityagnosticstructuremode(): StructureModeTrait.StructureModeMap[keyof StructureModeTrait.StructureModeMap];
    setActivityagnosticstructuremode(value: StructureModeTrait.StructureModeMap[keyof StructureModeTrait.StructureModeMap]): void;

    getPrioractivityagnosticstructuremode(): StructureModeTrait.StructureModeMap[keyof StructureModeTrait.StructureModeMap];
    setPrioractivityagnosticstructuremode(value: StructureModeTrait.StructureModeMap[keyof StructureModeTrait.StructureModeMap]): void;

    getReason(): StructureModeTrait.StructureModeReasonMap[keyof StructureModeTrait.StructureModeReasonMap];
    setReason(value: StructureModeTrait.StructureModeReasonMap[keyof StructureModeTrait.StructureModeReasonMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActivityAgnosticStructureModeChangeEvent.AsObject;
    static toObject(includeInstance: boolean, msg: ActivityAgnosticStructureModeChangeEvent): ActivityAgnosticStructureModeChangeEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActivityAgnosticStructureModeChangeEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActivityAgnosticStructureModeChangeEvent;
    static deserializeBinaryFromReader(message: ActivityAgnosticStructureModeChangeEvent, reader: jspb.BinaryReader): ActivityAgnosticStructureModeChangeEvent;
  }

  export namespace ActivityAgnosticStructureModeChangeEvent {
    export type AsObject = {
      activityagnosticstructuremode: StructureModeTrait.StructureModeMap[keyof StructureModeTrait.StructureModeMap],
      prioractivityagnosticstructuremode: StructureModeTrait.StructureModeMap[keyof StructureModeTrait.StructureModeMap],
      reason: StructureModeTrait.StructureModeReasonMap[keyof StructureModeTrait.StructureModeReasonMap],
    }
  }

  export class StructureModeTraceEventState extends jspb.Message {
    getStructuremode(): StructureModeTrait.StructureModeMap[keyof StructureModeTrait.StructureModeMap];
    setStructuremode(value: StructureModeTrait.StructureModeMap[keyof StructureModeTrait.StructureModeMap]): void;

    hasOccupancy(): boolean;
    clearOccupancy(): void;
    getOccupancy(): StructureModeTrait.Occupancy | undefined;
    setOccupancy(value?: StructureModeTrait.Occupancy): void;

    hasAllowance(): boolean;
    clearAllowance(): void;
    getAllowance(): StructureModeTrait.Allowance | undefined;
    setAllowance(value?: StructureModeTrait.Allowance): void;

    getStructuremodereason(): StructureModeTrait.StructureModeReasonMap[keyof StructureModeTrait.StructureModeReasonMap];
    setStructuremodereason(value: StructureModeTrait.StructureModeReasonMap[keyof StructureModeTrait.StructureModeReasonMap]): void;

    hasStructuremodesetter(): boolean;
    clearStructuremodesetter(): void;
    getStructuremodesetter(): weave_common_pb.ResourceId | undefined;
    setStructuremodesetter(value?: weave_common_pb.ResourceId): void;

    hasStructuremodeeffectivetime(): boolean;
    clearStructuremodeeffectivetime(): void;
    getStructuremodeeffectivetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStructuremodeeffectivetime(value?: google_protobuf_timestamp_pb.Timestamp): void;

    getActivityagnosticstructuremode(): StructureModeTrait.StructureModeMap[keyof StructureModeTrait.StructureModeMap];
    setActivityagnosticstructuremode(value: StructureModeTrait.StructureModeMap[keyof StructureModeTrait.StructureModeMap]): void;

    hasActivityagnosticstructuremodeeffectivetime(): boolean;
    clearActivityagnosticstructuremodeeffectivetime(): void;
    getActivityagnosticstructuremodeeffectivetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setActivityagnosticstructuremodeeffectivetime(value?: google_protobuf_timestamp_pb.Timestamp): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StructureModeTraceEventState.AsObject;
    static toObject(includeInstance: boolean, msg: StructureModeTraceEventState): StructureModeTraceEventState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StructureModeTraceEventState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StructureModeTraceEventState;
    static deserializeBinaryFromReader(message: StructureModeTraceEventState, reader: jspb.BinaryReader): StructureModeTraceEventState;
  }

  export namespace StructureModeTraceEventState {
    export type AsObject = {
      structuremode: StructureModeTrait.StructureModeMap[keyof StructureModeTrait.StructureModeMap],
      occupancy?: StructureModeTrait.Occupancy.AsObject,
      allowance?: StructureModeTrait.Allowance.AsObject,
      structuremodereason: StructureModeTrait.StructureModeReasonMap[keyof StructureModeTrait.StructureModeReasonMap],
      structuremodesetter?: weave_common_pb.ResourceId.AsObject,
      structuremodeeffectivetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      activityagnosticstructuremode: StructureModeTrait.StructureModeMap[keyof StructureModeTrait.StructureModeMap],
      activityagnosticstructuremodeeffectivetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

  export class StructureModeTraceEventStateChange extends jspb.Message {
    hasFrom(): boolean;
    clearFrom(): void;
    getFrom(): StructureModeTrait.StructureModeTraceEventState | undefined;
    setFrom(value?: StructureModeTrait.StructureModeTraceEventState): void;

    hasTo(): boolean;
    clearTo(): void;
    getTo(): StructureModeTrait.StructureModeTraceEventState | undefined;
    setTo(value?: StructureModeTrait.StructureModeTraceEventState): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StructureModeTraceEventStateChange.AsObject;
    static toObject(includeInstance: boolean, msg: StructureModeTraceEventStateChange): StructureModeTraceEventStateChange.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StructureModeTraceEventStateChange, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StructureModeTraceEventStateChange;
    static deserializeBinaryFromReader(message: StructureModeTraceEventStateChange, reader: jspb.BinaryReader): StructureModeTraceEventStateChange;
  }

  export namespace StructureModeTraceEventStateChange {
    export type AsObject = {
      from?: StructureModeTrait.StructureModeTraceEventState.AsObject,
      to?: StructureModeTrait.StructureModeTraceEventState.AsObject,
    }
  }

  export class StructureModeTraceEventStep extends jspb.Message {
    hasTime(): boolean;
    clearTime(): void;
    getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StructureModeTraceEventStep.AsObject;
    static toObject(includeInstance: boolean, msg: StructureModeTraceEventStep): StructureModeTraceEventStep.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StructureModeTraceEventStep, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StructureModeTraceEventStep;
    static deserializeBinaryFromReader(message: StructureModeTraceEventStep, reader: jspb.BinaryReader): StructureModeTraceEventStep;
  }

  export namespace StructureModeTraceEventStep {
    export type AsObject = {
      time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      labelsMap: Array<[string, string]>,
    }
  }

  export class StructureModeTraceEvent extends jspb.Message {
    getTrigger(): string;
    setTrigger(value: string): void;

    getTriggeragent(): string;
    setTriggeragent(value: string): void;

    getTriggereventkey(): string;
    setTriggereventkey(value: string): void;

    hasTriggertime(): boolean;
    clearTriggertime(): void;
    getTriggertime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTriggertime(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasStarttime(): boolean;
    clearStarttime(): void;
    getStarttime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStarttime(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasStatechange(): boolean;
    clearStatechange(): void;
    getStatechange(): StructureModeTrait.StructureModeTraceEventStateChange | undefined;
    setStatechange(value?: StructureModeTrait.StructureModeTraceEventStateChange): void;

    clearStepsList(): void;
    getStepsList(): Array<StructureModeTrait.StructureModeTraceEventStep>;
    setStepsList(value: Array<StructureModeTrait.StructureModeTraceEventStep>): void;
    addSteps(value?: StructureModeTrait.StructureModeTraceEventStep, index?: number): StructureModeTrait.StructureModeTraceEventStep;

    clearScenarioidList(): void;
    getScenarioidList(): Array<string>;
    setScenarioidList(value: Array<string>): void;
    addScenarioid(value: string, index?: number): string;

    getError(): string;
    setError(value: string): void;

    getRtsstructureid(): string;
    setRtsstructureid(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StructureModeTraceEvent.AsObject;
    static toObject(includeInstance: boolean, msg: StructureModeTraceEvent): StructureModeTraceEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StructureModeTraceEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StructureModeTraceEvent;
    static deserializeBinaryFromReader(message: StructureModeTraceEvent, reader: jspb.BinaryReader): StructureModeTraceEvent;
  }

  export namespace StructureModeTraceEvent {
    export type AsObject = {
      trigger: string,
      triggeragent: string,
      triggereventkey: string,
      triggertime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      starttime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      statechange?: StructureModeTrait.StructureModeTraceEventStateChange.AsObject,
      stepsList: Array<StructureModeTrait.StructureModeTraceEventStep.AsObject>,
      scenarioidList: Array<string>,
      error: string,
      rtsstructureid: string,
    }
  }

  export interface StructureModeMap {
    STRUCTURE_MODE_UNSPECIFIED: 0;
    STRUCTURE_MODE_HOME: 1;
    STRUCTURE_MODE_AWAY: 2;
    STRUCTURE_MODE_SLEEP: 3;
    STRUCTURE_MODE_VACATION: 4;
  }

  export const StructureMode: StructureModeMap;

  export interface ActivityMap {
    ACTIVITY_UNSPECIFIED: 0;
    ACTIVITY_ACTIVE: 1;
    ACTIVITY_INACTIVE: 2;
  }

  export const Activity: ActivityMap;

  export interface PresenceMap {
    PRESENCE_UNSPECIFIED: 0;
    PRESENCE_UNAVAILABLE: 1;
    PRESENCE_PRESENT: 2;
    PRESENCE_ABSENT: 3;
  }

  export const Presence: PresenceMap;

  export interface ModeStickinessMap {
    MODE_STICKINESS_UNSPECIFIED: 0;
    MODE_STICKINESS_NONE: 1;
    MODE_STICKINESS_TIMED: 2;
    MODE_STICKINESS_CONDITIONAL_TIMED: 3;
  }

  export const ModeStickiness: ModeStickinessMap;

  export interface StructureModeReasonMap {
    STRUCTURE_MODE_REASON_UNSPECIFIED: 0;
    STRUCTURE_MODE_REASON_EXPLICIT_INTENT: 1;
    STRUCTURE_MODE_REASON_IMPLICIT_INTENT: 2;
    STRUCTURE_MODE_REASON_ACTIVITY: 3;
    STRUCTURE_MODE_REASON_EXTENDED_INACTIVITY: 4;
    STRUCTURE_MODE_REASON_IDENTIFIED_PRESENCE: 5;
    STRUCTURE_MODE_REASON_IDENTIFIED_ABSENCE: 6;
    STRUCTURE_MODE_REASON_SCHEDULE: 7;
  }

  export const StructureModeReason: StructureModeReasonMap;

  export interface NonPropagatingChangeSourceTypeMap {
    NON_PROPAGATING_CHANGE_SOURCE_TYPE_UNSPECIFIED: 0;
    NON_PROPAGATING_CHANGE_SOURCE_TYPE_CZ: 1;
  }

  export const NonPropagatingChangeSourceType: NonPropagatingChangeSourceTypeMap;

  export interface StructureModeChangeResponseTypeMap {
    STRUCTURE_MODE_CHANGE_RESPONSE_TYPE_UNSPECIFIED: 0;
    STRUCTURE_MODE_CHANGE_RESPONSE_TYPE_SUCCESS: 1;
    STRUCTURE_MODE_CHANGE_RESPONSE_TYPE_FAIL_ALREADY: 2;
  }

  export const StructureModeChangeResponseType: StructureModeChangeResponseTypeMap;

  export interface StructureModeCompleteUpdateResponseTypeMap {
    STRUCTURE_MODE_COMPLETE_UPDATE_RESPONSE_TYPE_UNSPECIFIED: 0;
    STRUCTURE_MODE_COMPLETE_UPDATE_RESPONSE_TYPE_SUCCESS: 1;
    STRUCTURE_MODE_COMPLETE_UPDATE_RESPONSE_TYPE_FAIL_ALREADY: 2;
    STRUCTURE_MODE_COMPLETE_UPDATE_RESPONSE_TYPE_FAIL_VERSION: 3;
    STRUCTURE_MODE_COMPLETE_UPDATE_RESPONSE_TYPE_FAIL_OTHER: 4;
  }

  export const StructureModeCompleteUpdateResponseType: StructureModeCompleteUpdateResponseTypeMap;

  export interface LegacyAwayStateMap {
    LEGACY_AWAY_STATE_UNSPECIFIED: 0;
    LEGACY_AWAY_STATE_TRUE: 1;
    LEGACY_AWAY_STATE_FALSE: 2;
  }

  export const LegacyAwayState: LegacyAwayStateMap;

  export interface LegacyAwaySetterMap {
    LEGACY_AWAY_SETTER_UNSPECIFIED: 0;
    LEGACY_AWAY_SETTER_CLIENT: 1;
    LEGACY_AWAY_SETTER_CONTROL: 2;
    LEGACY_AWAY_SETTER_CLOUD: 3;
  }

  export const LegacyAwaySetter: LegacyAwaySetterMap;

  export interface LegacyTouchedByMap {
    LEGACY_TOUCHED_BY_UNSPECIFIED: 0;
    LEGACY_TOUCHED_BY_NOBODY: 1;
    LEGACY_TOUCHED_BY_LEARNING: 2;
    LEGACY_TOUCHED_BY_LOCAL: 3;
    LEGACY_TOUCHED_BY_REMOTE: 4;
    LEGACY_TOUCHED_BY_WEB: 5;
    LEGACY_TOUCHED_BY_ANDROID: 6;
    LEGACY_TOUCHED_BY_IOS: 7;
    LEGACY_TOUCHED_BY_WIN_MOBILE: 8;
    LEGACY_TOUCHED_BY_TUNE_UP: 9;
    LEGACY_TOUCHED_BY_DR: 10;
    LEGACY_TOUCHED_BY_TOU: 11;
    LEGACY_TOUCHED_BY_TOPAZ_CO: 12;
    LEGACY_TOUCHED_BY_PROGRAMMER: 13;
    LEGACY_TOUCHED_BY_TOPAZ_SMOKE: 14;
    LEGACY_TOUCHED_BY_DEMAND_CHARGE: 15;
  }

  export const LegacyTouchedBy: LegacyTouchedByMap;

  export interface AutoAskTypeMap {
    AUTO_ASK_TYPE_UNSPECIFIED: 0;
    AUTO_ASK_TYPE_AWAY_AND_ARM: 1;
    AUTO_ASK_TYPE_HOME_AND_DISARM: 2;
    AUTO_ASK_TYPE_ARM: 3;
    AUTO_ASK_TYPE_DISARM: 4;
  }

  export const AutoAskType: AutoAskTypeMap;

  export interface AutoAskArmMap {
    AUTO_ASK_ARM_UNSPECIFIED: 0;
    AUTO_ASK_ARM_TYPE_ARM: 1;
    AUTO_ASK_ARM_TYPE_DISARM: 2;
  }

  export const AutoAskArm: AutoAskArmMap;

  export interface AutoAskLockMap {
    AUTO_ASK_LOCK_UNSPECIFIED: 0;
    AUTO_ASK_LOCK_TYPE_LOCK: 1;
    AUTO_ASK_LOCK_TYPE_UNLOCK: 2;
  }

  export const AutoAskLock: AutoAskLockMap;

  export interface AutoAskStructureModeMap {
    AUTO_ASK_STRUCTURE_MODE_UNSPECIFIED: 0;
    AUTO_ASK_STRUCTURE_MODE_TYPE_HOME: 1;
    AUTO_ASK_STRUCTURE_MODE_TYPE_AWAY: 2;
  }

  export const AutoAskStructureMode: AutoAskStructureModeMap;
}

export class StructureModeSettingsTrait extends jspb.Message {
  getEnableautosleep(): boolean;
  setEnableautosleep(value: boolean): void;

  clearSleepscheduleList(): void;
  getSleepscheduleList(): Array<StructureModeSettingsTrait.DayTimeSpan>;
  setSleepscheduleList(value: Array<StructureModeSettingsTrait.DayTimeSpan>): void;
  addSleepschedule(value?: StructureModeSettingsTrait.DayTimeSpan, index?: number): StructureModeSettingsTrait.DayTimeSpan;

  hasDeriveddailysleepschedule(): boolean;
  clearDeriveddailysleepschedule(): void;
  getDeriveddailysleepschedule(): StructureModeSettingsTrait.TimeSpan | undefined;
  setDeriveddailysleepschedule(value?: StructureModeSettingsTrait.TimeSpan): void;

  hasOccupancysensorarmtimestamp(): boolean;
  clearOccupancysensorarmtimestamp(): void;
  getOccupancysensorarmtimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setOccupancysensorarmtimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureModeSettingsTrait.AsObject;
  static toObject(includeInstance: boolean, msg: StructureModeSettingsTrait): StructureModeSettingsTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructureModeSettingsTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureModeSettingsTrait;
  static deserializeBinaryFromReader(message: StructureModeSettingsTrait, reader: jspb.BinaryReader): StructureModeSettingsTrait;
}

export namespace StructureModeSettingsTrait {
  export type AsObject = {
    enableautosleep: boolean,
    sleepscheduleList: Array<StructureModeSettingsTrait.DayTimeSpan.AsObject>,
    deriveddailysleepschedule?: StructureModeSettingsTrait.TimeSpan.AsObject,
    occupancysensorarmtimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export class TimeSpan extends jspb.Message {
    hasStarttime(): boolean;
    clearStarttime(): void;
    getStarttime(): weave_common_pb.TimeOfDay | undefined;
    setStarttime(value?: weave_common_pb.TimeOfDay): void;

    hasEndtime(): boolean;
    clearEndtime(): void;
    getEndtime(): weave_common_pb.TimeOfDay | undefined;
    setEndtime(value?: weave_common_pb.TimeOfDay): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimeSpan.AsObject;
    static toObject(includeInstance: boolean, msg: TimeSpan): TimeSpan.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TimeSpan, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimeSpan;
    static deserializeBinaryFromReader(message: TimeSpan, reader: jspb.BinaryReader): TimeSpan;
  }

  export namespace TimeSpan {
    export type AsObject = {
      starttime?: weave_common_pb.TimeOfDay.AsObject,
      endtime?: weave_common_pb.TimeOfDay.AsObject,
    }
  }

  export class DayTimeSpan extends jspb.Message {
    getStartday(): weave_common_pb.DayOfWeekMap[keyof weave_common_pb.DayOfWeekMap];
    setStartday(value: weave_common_pb.DayOfWeekMap[keyof weave_common_pb.DayOfWeekMap]): void;

    hasStarttime(): boolean;
    clearStarttime(): void;
    getStarttime(): weave_common_pb.TimeOfDay | undefined;
    setStarttime(value?: weave_common_pb.TimeOfDay): void;

    getEndday(): weave_common_pb.DayOfWeekMap[keyof weave_common_pb.DayOfWeekMap];
    setEndday(value: weave_common_pb.DayOfWeekMap[keyof weave_common_pb.DayOfWeekMap]): void;

    hasEndtime(): boolean;
    clearEndtime(): void;
    getEndtime(): weave_common_pb.TimeOfDay | undefined;
    setEndtime(value?: weave_common_pb.TimeOfDay): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DayTimeSpan.AsObject;
    static toObject(includeInstance: boolean, msg: DayTimeSpan): DayTimeSpan.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DayTimeSpan, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DayTimeSpan;
    static deserializeBinaryFromReader(message: DayTimeSpan, reader: jspb.BinaryReader): DayTimeSpan;
  }

  export namespace DayTimeSpan {
    export type AsObject = {
      startday: weave_common_pb.DayOfWeekMap[keyof weave_common_pb.DayOfWeekMap],
      starttime?: weave_common_pb.TimeOfDay.AsObject,
      endday: weave_common_pb.DayOfWeekMap[keyof weave_common_pb.DayOfWeekMap],
      endtime?: weave_common_pb.TimeOfDay.AsObject,
    }
  }

  export class BuildUniformDailySleepScheduleRequest extends jspb.Message {
    hasTimespan(): boolean;
    clearTimespan(): void;
    getTimespan(): StructureModeSettingsTrait.TimeSpan | undefined;
    setTimespan(value?: StructureModeSettingsTrait.TimeSpan): void;

    hasUserid(): boolean;
    clearUserid(): void;
    getUserid(): weave_common_pb.ResourceId | undefined;
    setUserid(value?: weave_common_pb.ResourceId): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BuildUniformDailySleepScheduleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BuildUniformDailySleepScheduleRequest): BuildUniformDailySleepScheduleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BuildUniformDailySleepScheduleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BuildUniformDailySleepScheduleRequest;
    static deserializeBinaryFromReader(message: BuildUniformDailySleepScheduleRequest, reader: jspb.BinaryReader): BuildUniformDailySleepScheduleRequest;
  }

  export namespace BuildUniformDailySleepScheduleRequest {
    export type AsObject = {
      timespan?: StructureModeSettingsTrait.TimeSpan.AsObject,
      userid?: weave_common_pb.ResourceId.AsObject,
    }
  }

  export class BuildUniformDailySleepScheduleResponse extends jspb.Message {
    getResponsetype(): StructureModeSettingsTrait.BuildUniformDailySleepScheduleResponseTypeMap[keyof StructureModeSettingsTrait.BuildUniformDailySleepScheduleResponseTypeMap];
    setResponsetype(value: StructureModeSettingsTrait.BuildUniformDailySleepScheduleResponseTypeMap[keyof StructureModeSettingsTrait.BuildUniformDailySleepScheduleResponseTypeMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BuildUniformDailySleepScheduleResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BuildUniformDailySleepScheduleResponse): BuildUniformDailySleepScheduleResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BuildUniformDailySleepScheduleResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BuildUniformDailySleepScheduleResponse;
    static deserializeBinaryFromReader(message: BuildUniformDailySleepScheduleResponse, reader: jspb.BinaryReader): BuildUniformDailySleepScheduleResponse;
  }

  export namespace BuildUniformDailySleepScheduleResponse {
    export type AsObject = {
      responsetype: StructureModeSettingsTrait.BuildUniformDailySleepScheduleResponseTypeMap[keyof StructureModeSettingsTrait.BuildUniformDailySleepScheduleResponseTypeMap],
    }
  }

  export class SleepScheduleChangeEvent extends jspb.Message {
    getEnableautosleep(): boolean;
    setEnableautosleep(value: boolean): void;

    getPriorenableautosleep(): boolean;
    setPriorenableautosleep(value: boolean): void;

    clearSleepscheduleList(): void;
    getSleepscheduleList(): Array<StructureModeSettingsTrait.DayTimeSpan>;
    setSleepscheduleList(value: Array<StructureModeSettingsTrait.DayTimeSpan>): void;
    addSleepschedule(value?: StructureModeSettingsTrait.DayTimeSpan, index?: number): StructureModeSettingsTrait.DayTimeSpan;

    clearPriorsleepscheduleList(): void;
    getPriorsleepscheduleList(): Array<StructureModeSettingsTrait.DayTimeSpan>;
    setPriorsleepscheduleList(value: Array<StructureModeSettingsTrait.DayTimeSpan>): void;
    addPriorsleepschedule(value?: StructureModeSettingsTrait.DayTimeSpan, index?: number): StructureModeSettingsTrait.DayTimeSpan;

    hasUserid(): boolean;
    clearUserid(): void;
    getUserid(): weave_common_pb.ResourceId | undefined;
    setUserid(value?: weave_common_pb.ResourceId): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SleepScheduleChangeEvent.AsObject;
    static toObject(includeInstance: boolean, msg: SleepScheduleChangeEvent): SleepScheduleChangeEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SleepScheduleChangeEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SleepScheduleChangeEvent;
    static deserializeBinaryFromReader(message: SleepScheduleChangeEvent, reader: jspb.BinaryReader): SleepScheduleChangeEvent;
  }

  export namespace SleepScheduleChangeEvent {
    export type AsObject = {
      enableautosleep: boolean,
      priorenableautosleep: boolean,
      sleepscheduleList: Array<StructureModeSettingsTrait.DayTimeSpan.AsObject>,
      priorsleepscheduleList: Array<StructureModeSettingsTrait.DayTimeSpan.AsObject>,
      userid?: weave_common_pb.ResourceId.AsObject,
    }
  }

  export interface BuildUniformDailySleepScheduleResponseTypeMap {
    BUILD_UNIFORM_DAILY_SLEEP_SCHEDULE_RESPONSE_TYPE_UNSPECIFIED: 0;
    BUILD_UNIFORM_DAILY_SLEEP_SCHEDULE_RESPONSE_TYPE_SUCCESS: 1;
    BUILD_UNIFORM_DAILY_SLEEP_SCHEDULE_RESPONSE_TYPE_FAIL_ALREADY: 2;
  }

  export const BuildUniformDailySleepScheduleResponseType: BuildUniformDailySleepScheduleResponseTypeMap;
}

export class StructureGeofencingTrait extends jspb.Message {
  getGeofenceenhancedautoawaystatus(): StructureGeofencingTrait.GeofenceEnhancedAutoAwayStatusMap[keyof StructureGeofencingTrait.GeofenceEnhancedAutoAwayStatusMap];
  setGeofenceenhancedautoawaystatus(value: StructureGeofencingTrait.GeofenceEnhancedAutoAwayStatusMap[keyof StructureGeofencingTrait.GeofenceEnhancedAutoAwayStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureGeofencingTrait.AsObject;
  static toObject(includeInstance: boolean, msg: StructureGeofencingTrait): StructureGeofencingTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructureGeofencingTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureGeofencingTrait;
  static deserializeBinaryFromReader(message: StructureGeofencingTrait, reader: jspb.BinaryReader): StructureGeofencingTrait;
}

export namespace StructureGeofencingTrait {
  export type AsObject = {
    geofenceenhancedautoawaystatus: StructureGeofencingTrait.GeofenceEnhancedAutoAwayStatusMap[keyof StructureGeofencingTrait.GeofenceEnhancedAutoAwayStatusMap],
  }

  export class StructureGeofenceStateAssertionEvent extends jspb.Message {
    getState(): Geofencing.GeofenceStateMap[keyof Geofencing.GeofenceStateMap];
    setState(value: Geofencing.GeofenceStateMap[keyof Geofencing.GeofenceStateMap]): void;

    hasUserid(): boolean;
    clearUserid(): void;
    getUserid(): weave_common_pb.ResourceId | undefined;
    setUserid(value?: weave_common_pb.ResourceId): void;

    hasRtsfenceid(): boolean;
    clearRtsfenceid(): void;
    getRtsfenceid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setRtsfenceid(value?: google_protobuf_wrappers_pb.StringValue): void;

    hasRtsmobiledeviceid(): boolean;
    clearRtsmobiledeviceid(): void;
    getRtsmobiledeviceid(): google_protobuf_wrappers_pb.StringValue | undefined;
    setRtsmobiledeviceid(value?: google_protobuf_wrappers_pb.StringValue): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StructureGeofenceStateAssertionEvent.AsObject;
    static toObject(includeInstance: boolean, msg: StructureGeofenceStateAssertionEvent): StructureGeofenceStateAssertionEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StructureGeofenceStateAssertionEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StructureGeofenceStateAssertionEvent;
    static deserializeBinaryFromReader(message: StructureGeofenceStateAssertionEvent, reader: jspb.BinaryReader): StructureGeofenceStateAssertionEvent;
  }

  export namespace StructureGeofenceStateAssertionEvent {
    export type AsObject = {
      state: Geofencing.GeofenceStateMap[keyof Geofencing.GeofenceStateMap],
      userid?: weave_common_pb.ResourceId.AsObject,
      rtsfenceid?: google_protobuf_wrappers_pb.StringValue.AsObject,
      rtsmobiledeviceid?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
  }

  export interface GeofenceEnhancedAutoAwayStatusMap {
    GEOFENCE_ENHANCED_AUTO_AWAY_STATUS_UNSPECIFIED: 0;
    GEOFENCE_ENHANCED_AUTO_AWAY_STATUS_NOT_SET: 1;
    GEOFENCE_ENHANCED_AUTO_AWAY_STATUS_ENABLED: 2;
    GEOFENCE_ENHANCED_AUTO_AWAY_STATUS_DISABLED: 3;
  }

  export const GeofenceEnhancedAutoAwayStatus: GeofenceEnhancedAutoAwayStatusMap;
}

export class Geofencing extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Geofencing.AsObject;
  static toObject(includeInstance: boolean, msg: Geofencing): Geofencing.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Geofencing, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Geofencing;
  static deserializeBinaryFromReader(message: Geofencing, reader: jspb.BinaryReader): Geofencing;
}

export namespace Geofencing {
  export type AsObject = {
  }

  export interface GeofenceStateMap {
    GEOFENCE_STATE_UNSPECIFIED: 0;
    GEOFENCE_STATE_INSIDE: 1;
    GEOFENCE_STATE_OUTSIDE: 2;
    GEOFENCE_STATE_UNKNOWN: 3;
  }

  export const GeofenceState: GeofenceStateMap;
}

export class OccupancyInputSettingsTrait extends jspb.Message {
  getDeviceactivityconsidered(): boolean;
  setDeviceactivityconsidered(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OccupancyInputSettingsTrait.AsObject;
  static toObject(includeInstance: boolean, msg: OccupancyInputSettingsTrait): OccupancyInputSettingsTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OccupancyInputSettingsTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OccupancyInputSettingsTrait;
  static deserializeBinaryFromReader(message: OccupancyInputSettingsTrait, reader: jspb.BinaryReader): OccupancyInputSettingsTrait;
}

export namespace OccupancyInputSettingsTrait {
  export type AsObject = {
    deviceactivityconsidered: boolean,
  }
}

export class StructureModeCapabilitiesTrait extends jspb.Message {
  getSleepstructuremodeenabled(): boolean;
  setSleepstructuremodeenabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureModeCapabilitiesTrait.AsObject;
  static toObject(includeInstance: boolean, msg: StructureModeCapabilitiesTrait): StructureModeCapabilitiesTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructureModeCapabilitiesTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureModeCapabilitiesTrait;
  static deserializeBinaryFromReader(message: StructureModeCapabilitiesTrait, reader: jspb.BinaryReader): StructureModeCapabilitiesTrait;
}

export namespace StructureModeCapabilitiesTrait {
  export type AsObject = {
    sleepstructuremodeenabled: boolean,
  }
}

