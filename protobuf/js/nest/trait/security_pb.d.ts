// package: nest.trait.security
// file: nest/trait/security.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as nest_trait_detector_pb from "../../nest/trait/detector_pb";
import * as nest_trait_occupancy_pb from "../../nest/trait/occupancy_pb";
import * as weave_common_pb from "../../weave/common_pb";

export class SecurityArmTrait extends jspb.Message {
  getArmstate(): SecurityArmTrait.SecurityArmStateMap[keyof SecurityArmTrait.SecurityArmStateMap];
  setArmstate(value: SecurityArmTrait.SecurityArmStateMap[keyof SecurityArmTrait.SecurityArmStateMap]): void;

  getSecurityarmsessionid(): number;
  setSecurityarmsessionid(value: number): void;

  getAllowancestate(): SecurityArmTrait.SecurityAllowanceStateMap[keyof SecurityArmTrait.SecurityAllowanceStateMap];
  setAllowancestate(value: SecurityArmTrait.SecurityAllowanceStateMap[keyof SecurityArmTrait.SecurityAllowanceStateMap]): void;

  hasAllowanceexpirationtime(): boolean;
  clearAllowanceexpirationtime(): void;
  getAllowanceexpirationtime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAllowanceexpirationtime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasExitallowanceduration(): boolean;
  clearExitallowanceduration(): void;
  getExitallowanceduration(): google_protobuf_duration_pb.Duration | undefined;
  setExitallowanceduration(value?: google_protobuf_duration_pb.Duration): void;

  hasArmactor(): boolean;
  clearArmactor(): void;
  getArmactor(): SecurityActor.SecurityActorStruct | undefined;
  setArmactor(value?: SecurityActor.SecurityActorStruct): void;

  hasArmtime(): boolean;
  clearArmtime(): void;
  getArmtime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setArmtime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecurityArmTrait.AsObject;
  static toObject(includeInstance: boolean, msg: SecurityArmTrait): SecurityArmTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SecurityArmTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecurityArmTrait;
  static deserializeBinaryFromReader(message: SecurityArmTrait, reader: jspb.BinaryReader): SecurityArmTrait;
}

export namespace SecurityArmTrait {
  export type AsObject = {
    armstate: SecurityArmTrait.SecurityArmStateMap[keyof SecurityArmTrait.SecurityArmStateMap],
    securityarmsessionid: number,
    allowancestate: SecurityArmTrait.SecurityAllowanceStateMap[keyof SecurityArmTrait.SecurityAllowanceStateMap],
    allowanceexpirationtime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    exitallowanceduration?: google_protobuf_duration_pb.Duration.AsObject,
    armactor?: SecurityActor.SecurityActorStruct.AsObject,
    armtime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export class SecurityArmRequest extends jspb.Message {
    getArmstate(): SecurityArmTrait.SecurityArmStateMap[keyof SecurityArmTrait.SecurityArmStateMap];
    setArmstate(value: SecurityArmTrait.SecurityArmStateMap[keyof SecurityArmTrait.SecurityArmStateMap]): void;

    hasArmactor(): boolean;
    clearArmactor(): void;
    getArmactor(): SecurityActor.SecurityActorStruct | undefined;
    setArmactor(value?: SecurityActor.SecurityActorStruct): void;

    clearAcknowledgedissuessetList(): void;
    getAcknowledgedissuessetList(): Array<SecurityDecisionFact.SecurityDecisionFactStruct>;
    setAcknowledgedissuessetList(value: Array<SecurityDecisionFact.SecurityDecisionFactStruct>): void;
    addAcknowledgedissuesset(value?: SecurityDecisionFact.SecurityDecisionFactStruct, index?: number): SecurityDecisionFact.SecurityDecisionFactStruct;

    hasLocationscope(): boolean;
    clearLocationscope(): void;
    getLocationscope(): weave_common_pb.ResourceId | undefined;
    setLocationscope(value?: weave_common_pb.ResourceId): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SecurityArmRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SecurityArmRequest): SecurityArmRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SecurityArmRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SecurityArmRequest;
    static deserializeBinaryFromReader(message: SecurityArmRequest, reader: jspb.BinaryReader): SecurityArmRequest;
  }

  export namespace SecurityArmRequest {
    export type AsObject = {
      armstate: SecurityArmTrait.SecurityArmStateMap[keyof SecurityArmTrait.SecurityArmStateMap],
      armactor?: SecurityActor.SecurityActorStruct.AsObject,
      acknowledgedissuessetList: Array<SecurityDecisionFact.SecurityDecisionFactStruct.AsObject>,
      locationscope?: weave_common_pb.ResourceId.AsObject,
    }
  }

  export class SecurityArmResponse extends jspb.Message {
    getResponsetype(): SecurityArmTrait.SecurityArmResponseTypeMap[keyof SecurityArmTrait.SecurityArmResponseTypeMap];
    setResponsetype(value: SecurityArmTrait.SecurityArmResponseTypeMap[keyof SecurityArmTrait.SecurityArmResponseTypeMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SecurityArmResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SecurityArmResponse): SecurityArmResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SecurityArmResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SecurityArmResponse;
    static deserializeBinaryFromReader(message: SecurityArmResponse, reader: jspb.BinaryReader): SecurityArmResponse;
  }

  export namespace SecurityArmResponse {
    export type AsObject = {
      responsetype: SecurityArmTrait.SecurityArmResponseTypeMap[keyof SecurityArmTrait.SecurityArmResponseTypeMap],
    }
  }

  export class SecurityArmCancelRequest extends jspb.Message {
    hasArmactor(): boolean;
    clearArmactor(): void;
    getArmactor(): SecurityActor.SecurityActorStruct | undefined;
    setArmactor(value?: SecurityActor.SecurityActorStruct): void;

    hasLocationscope(): boolean;
    clearLocationscope(): void;
    getLocationscope(): weave_common_pb.ResourceId | undefined;
    setLocationscope(value?: weave_common_pb.ResourceId): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SecurityArmCancelRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SecurityArmCancelRequest): SecurityArmCancelRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SecurityArmCancelRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SecurityArmCancelRequest;
    static deserializeBinaryFromReader(message: SecurityArmCancelRequest, reader: jspb.BinaryReader): SecurityArmCancelRequest;
  }

  export namespace SecurityArmCancelRequest {
    export type AsObject = {
      armactor?: SecurityActor.SecurityActorStruct.AsObject,
      locationscope?: weave_common_pb.ResourceId.AsObject,
    }
  }

  export class SecurityArmCancelResponse extends jspb.Message {
    getResponsetype(): SecurityArmTrait.SecurityArmCancelResponseTypeMap[keyof SecurityArmTrait.SecurityArmCancelResponseTypeMap];
    setResponsetype(value: SecurityArmTrait.SecurityArmCancelResponseTypeMap[keyof SecurityArmTrait.SecurityArmCancelResponseTypeMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SecurityArmCancelResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SecurityArmCancelResponse): SecurityArmCancelResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SecurityArmCancelResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SecurityArmCancelResponse;
    static deserializeBinaryFromReader(message: SecurityArmCancelResponse, reader: jspb.BinaryReader): SecurityArmCancelResponse;
  }

  export namespace SecurityArmCancelResponse {
    export type AsObject = {
      responsetype: SecurityArmTrait.SecurityArmCancelResponseTypeMap[keyof SecurityArmTrait.SecurityArmCancelResponseTypeMap],
    }
  }

  export class SecurityArmStateChangeEvent extends jspb.Message {
    getArmstate(): SecurityArmTrait.SecurityArmStateMap[keyof SecurityArmTrait.SecurityArmStateMap];
    setArmstate(value: SecurityArmTrait.SecurityArmStateMap[keyof SecurityArmTrait.SecurityArmStateMap]): void;

    getPriorarmstate(): SecurityArmTrait.SecurityArmStateMap[keyof SecurityArmTrait.SecurityArmStateMap];
    setPriorarmstate(value: SecurityArmTrait.SecurityArmStateMap[keyof SecurityArmTrait.SecurityArmStateMap]): void;

    hasArmactor(): boolean;
    clearArmactor(): void;
    getArmactor(): SecurityActor.SecurityActorStruct | undefined;
    setArmactor(value?: SecurityActor.SecurityActorStruct): void;

    getSecurityarmsessionid(): number;
    setSecurityarmsessionid(value: number): void;

    getChangereason(): SecurityArmTrait.SecurityArmStateChangeReasonMap[keyof SecurityArmTrait.SecurityArmStateChangeReasonMap];
    setChangereason(value: SecurityArmTrait.SecurityArmStateChangeReasonMap[keyof SecurityArmTrait.SecurityArmStateChangeReasonMap]): void;

    getAllowancestate(): SecurityArmTrait.SecurityAllowanceStateMap[keyof SecurityArmTrait.SecurityAllowanceStateMap];
    setAllowancestate(value: SecurityArmTrait.SecurityAllowanceStateMap[keyof SecurityArmTrait.SecurityAllowanceStateMap]): void;

    getPriorallowancestate(): SecurityArmTrait.SecurityAllowanceStateMap[keyof SecurityArmTrait.SecurityAllowanceStateMap];
    setPriorallowancestate(value: SecurityArmTrait.SecurityAllowanceStateMap[keyof SecurityArmTrait.SecurityAllowanceStateMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SecurityArmStateChangeEvent.AsObject;
    static toObject(includeInstance: boolean, msg: SecurityArmStateChangeEvent): SecurityArmStateChangeEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SecurityArmStateChangeEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SecurityArmStateChangeEvent;
    static deserializeBinaryFromReader(message: SecurityArmStateChangeEvent, reader: jspb.BinaryReader): SecurityArmStateChangeEvent;
  }

  export namespace SecurityArmStateChangeEvent {
    export type AsObject = {
      armstate: SecurityArmTrait.SecurityArmStateMap[keyof SecurityArmTrait.SecurityArmStateMap],
      priorarmstate: SecurityArmTrait.SecurityArmStateMap[keyof SecurityArmTrait.SecurityArmStateMap],
      armactor?: SecurityActor.SecurityActorStruct.AsObject,
      securityarmsessionid: number,
      changereason: SecurityArmTrait.SecurityArmStateChangeReasonMap[keyof SecurityArmTrait.SecurityArmStateChangeReasonMap],
      allowancestate: SecurityArmTrait.SecurityAllowanceStateMap[keyof SecurityArmTrait.SecurityAllowanceStateMap],
      priorallowancestate: SecurityArmTrait.SecurityAllowanceStateMap[keyof SecurityArmTrait.SecurityAllowanceStateMap],
    }
  }

  export class SecurityAllowanceStateChangeEvent extends jspb.Message {
    getAllowancestate(): SecurityArmTrait.SecurityAllowanceStateMap[keyof SecurityArmTrait.SecurityAllowanceStateMap];
    setAllowancestate(value: SecurityArmTrait.SecurityAllowanceStateMap[keyof SecurityArmTrait.SecurityAllowanceStateMap]): void;

    getPriorallowancestate(): SecurityArmTrait.SecurityAllowanceStateMap[keyof SecurityArmTrait.SecurityAllowanceStateMap];
    setPriorallowancestate(value: SecurityArmTrait.SecurityAllowanceStateMap[keyof SecurityArmTrait.SecurityAllowanceStateMap]): void;

    getSecurityarmsessionid(): number;
    setSecurityarmsessionid(value: number): void;

    hasDuration(): boolean;
    clearDuration(): void;
    getDuration(): google_protobuf_duration_pb.Duration | undefined;
    setDuration(value?: google_protobuf_duration_pb.Duration): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SecurityAllowanceStateChangeEvent.AsObject;
    static toObject(includeInstance: boolean, msg: SecurityAllowanceStateChangeEvent): SecurityAllowanceStateChangeEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SecurityAllowanceStateChangeEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SecurityAllowanceStateChangeEvent;
    static deserializeBinaryFromReader(message: SecurityAllowanceStateChangeEvent, reader: jspb.BinaryReader): SecurityAllowanceStateChangeEvent;
  }

  export namespace SecurityAllowanceStateChangeEvent {
    export type AsObject = {
      allowancestate: SecurityArmTrait.SecurityAllowanceStateMap[keyof SecurityArmTrait.SecurityAllowanceStateMap],
      priorallowancestate: SecurityArmTrait.SecurityAllowanceStateMap[keyof SecurityArmTrait.SecurityAllowanceStateMap],
      securityarmsessionid: number,
      duration?: google_protobuf_duration_pb.Duration.AsObject,
    }
  }

  export interface SecurityArmStateMap {
    SECURITY_ARM_STATE_UNSPECIFIED: 0;
    SECURITY_ARM_STATE_DISARMED: 1;
    SECURITY_ARM_STATE_SL1: 2;
    SECURITY_ARM_STATE_SL2: 3;
  }

  export const SecurityArmState: SecurityArmStateMap;

  export interface SecurityAllowanceStateMap {
    SECURITY_ALLOWANCE_STATE_UNSPECIFIED: 0;
    SECURITY_ALLOWANCE_STATE_OFF: 1;
    SECURITY_ALLOWANCE_STATE_TIMED_ALLOWANCE: 2;
  }

  export const SecurityAllowanceState: SecurityAllowanceStateMap;

  export interface StatusCodeMap {
    STATUS_CODE_UNSPECIFIED: 0;
    STATUS_CODE_ALREADY: 1;
    STATUS_CODE_UNACKNOWLEDGED_ISSUES: 2;
    STATUS_CODE_BLOCKING_ISSUES: 3;
    STATUS_CODE_OUT_OF_SCHEDULE: 4;
    STATUS_CODE_UNAUTHORIZED_STATE_CHANGE: 5;
    STATUS_CODE_LOCATION_OUT_OF_SCOPE: 6;
  }

  export const StatusCode: StatusCodeMap;

  export interface SecurityArmResponseTypeMap {
    SECURITY_ARM_RESPONSE_TYPE_UNSPECIFIED: 0;
    SECURITY_ARM_RESPONSE_TYPE_SUCCESS: 1;
    SECURITY_ARM_RESPONSE_TYPE_FAIL_ALREADY: 2;
    SECURITY_ARM_RESPONSE_TYPE_FAIL_UNACKNOWLEDGED_ISSUES: 3;
    SECURITY_ARM_RESPONSE_TYPE_FAIL_BLOCKING_ISSUES: 4;
    SECURITY_ARM_RESPONSE_TYPE_FAIL_OUT_OF_SCHEDULE: 5;
    SECURITY_ARM_RESPONSE_TYPE_FAIL_UNAUTHORIZED_STATE_CHANGE: 6;
    SECURITY_ARM_RESPONSE_TYPE_FAIL_LOCATION_OUT_OF_SCOPE: 7;
  }

  export const SecurityArmResponseType: SecurityArmResponseTypeMap;

  export interface SecurityArmCancelResponseTypeMap {
    SECURITY_ARM_CANCEL_RESPONSE_TYPE_UNSPECIFIED: 0;
    SECURITY_ARM_CANCEL_RESPONSE_TYPE_SUCCESS: 1;
    SECURITY_ARM_CANCEL_RESPONSE_TYPE_FAIL_ALREADY: 2;
    SECURITY_ARM_CANCEL_RESPONSE_TYPE_TOO_LATE: 3;
    SECURITY_ARM_CANCEL_RESPONSE_TYPE_FAIL_UNAUTHORIZED_STATE_CHANGE: 4;
    SECURITY_ARM_CANCEL_RESPONSE_TYPE_FAIL_LOCATION_OUT_OF_SCOPE: 5;
  }

  export const SecurityArmCancelResponseType: SecurityArmCancelResponseTypeMap;

  export interface SecurityArmStateChangeReasonMap {
    SECURITY_ARM_STATE_CHANGE_REASON_UNSPECIFIED: 0;
    SECURITY_ARM_STATE_CHANGE_REASON_ARM_REQUEST: 1;
    SECURITY_ARM_STATE_CHANGE_REASON_ARM_CANCELLED: 2;
  }

  export const SecurityArmStateChangeReason: SecurityArmStateChangeReasonMap;
}

export class AlarmSupervisorTrait extends jspb.Message {
  getAlarmsupervisorstate(): AlarmSupervisorTrait.AlarmSupervisorStateMap[keyof AlarmSupervisorTrait.AlarmSupervisorStateMap];
  setAlarmsupervisorstate(value: AlarmSupervisorTrait.AlarmSupervisorStateMap[keyof AlarmSupervisorTrait.AlarmSupervisorStateMap]): void;

  hasAlarmingstatetime(): boolean;
  clearAlarmingstatetime(): void;
  getAlarmingstatetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAlarmingstatetime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasAlarmacknowledegeactor(): boolean;
  clearAlarmacknowledegeactor(): void;
  getAlarmacknowledegeactor(): SecurityActor.SecurityActorStruct | undefined;
  setAlarmacknowledegeactor(value?: SecurityActor.SecurityActorStruct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AlarmSupervisorTrait.AsObject;
  static toObject(includeInstance: boolean, msg: AlarmSupervisorTrait): AlarmSupervisorTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AlarmSupervisorTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AlarmSupervisorTrait;
  static deserializeBinaryFromReader(message: AlarmSupervisorTrait, reader: jspb.BinaryReader): AlarmSupervisorTrait;
}

export namespace AlarmSupervisorTrait {
  export type AsObject = {
    alarmsupervisorstate: AlarmSupervisorTrait.AlarmSupervisorStateMap[keyof AlarmSupervisorTrait.AlarmSupervisorStateMap],
    alarmingstatetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    alarmacknowledegeactor?: SecurityActor.SecurityActorStruct.AsObject,
  }

  export class AlarmSupervisorStateChangeEvent extends jspb.Message {
    getPrioralarmingstate(): AlarmSupervisorTrait.AlarmSupervisorStateMap[keyof AlarmSupervisorTrait.AlarmSupervisorStateMap];
    setPrioralarmingstate(value: AlarmSupervisorTrait.AlarmSupervisorStateMap[keyof AlarmSupervisorTrait.AlarmSupervisorStateMap]): void;

    getAlarmingstate(): AlarmSupervisorTrait.AlarmSupervisorStateMap[keyof AlarmSupervisorTrait.AlarmSupervisorStateMap];
    setAlarmingstate(value: AlarmSupervisorTrait.AlarmSupervisorStateMap[keyof AlarmSupervisorTrait.AlarmSupervisorStateMap]): void;

    clearDevicealarmreasonList(): void;
    getDevicealarmreasonList(): Array<SecurityDecisionFact.SecurityDecisionFactStruct>;
    setDevicealarmreasonList(value: Array<SecurityDecisionFact.SecurityDecisionFactStruct>): void;
    addDevicealarmreason(value?: SecurityDecisionFact.SecurityDecisionFactStruct, index?: number): SecurityDecisionFact.SecurityDecisionFactStruct;

    getAlarmsupervisorreason(): AlarmSupervisorTrait.AlarmSupervisorDecisionReasonMap[keyof AlarmSupervisorTrait.AlarmSupervisorDecisionReasonMap];
    setAlarmsupervisorreason(value: AlarmSupervisorTrait.AlarmSupervisorDecisionReasonMap[keyof AlarmSupervisorTrait.AlarmSupervisorDecisionReasonMap]): void;

    hasTriggeringactor(): boolean;
    clearTriggeringactor(): void;
    getTriggeringactor(): SecurityActor.SecurityActorStruct | undefined;
    setTriggeringactor(value?: SecurityActor.SecurityActorStruct): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AlarmSupervisorStateChangeEvent.AsObject;
    static toObject(includeInstance: boolean, msg: AlarmSupervisorStateChangeEvent): AlarmSupervisorStateChangeEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AlarmSupervisorStateChangeEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AlarmSupervisorStateChangeEvent;
    static deserializeBinaryFromReader(message: AlarmSupervisorStateChangeEvent, reader: jspb.BinaryReader): AlarmSupervisorStateChangeEvent;
  }

  export namespace AlarmSupervisorStateChangeEvent {
    export type AsObject = {
      prioralarmingstate: AlarmSupervisorTrait.AlarmSupervisorStateMap[keyof AlarmSupervisorTrait.AlarmSupervisorStateMap],
      alarmingstate: AlarmSupervisorTrait.AlarmSupervisorStateMap[keyof AlarmSupervisorTrait.AlarmSupervisorStateMap],
      devicealarmreasonList: Array<SecurityDecisionFact.SecurityDecisionFactStruct.AsObject>,
      alarmsupervisorreason: AlarmSupervisorTrait.AlarmSupervisorDecisionReasonMap[keyof AlarmSupervisorTrait.AlarmSupervisorDecisionReasonMap],
      triggeringactor?: SecurityActor.SecurityActorStruct.AsObject,
    }
  }

  export class AlarmingAcknowledgeResponse extends jspb.Message {
    getResponsetype(): AlarmSupervisorTrait.AlarmSupervisorResponseTypeMap[keyof AlarmSupervisorTrait.AlarmSupervisorResponseTypeMap];
    setResponsetype(value: AlarmSupervisorTrait.AlarmSupervisorResponseTypeMap[keyof AlarmSupervisorTrait.AlarmSupervisorResponseTypeMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AlarmingAcknowledgeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AlarmingAcknowledgeResponse): AlarmingAcknowledgeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AlarmingAcknowledgeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AlarmingAcknowledgeResponse;
    static deserializeBinaryFromReader(message: AlarmingAcknowledgeResponse, reader: jspb.BinaryReader): AlarmingAcknowledgeResponse;
  }

  export namespace AlarmingAcknowledgeResponse {
    export type AsObject = {
      responsetype: AlarmSupervisorTrait.AlarmSupervisorResponseTypeMap[keyof AlarmSupervisorTrait.AlarmSupervisorResponseTypeMap],
    }
  }

  export class AlarmingAcknowledgeRequest extends jspb.Message {
    hasAckactor(): boolean;
    clearAckactor(): void;
    getAckactor(): SecurityActor.SecurityActorStruct | undefined;
    setAckactor(value?: SecurityActor.SecurityActorStruct): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AlarmingAcknowledgeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AlarmingAcknowledgeRequest): AlarmingAcknowledgeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AlarmingAcknowledgeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AlarmingAcknowledgeRequest;
    static deserializeBinaryFromReader(message: AlarmingAcknowledgeRequest, reader: jspb.BinaryReader): AlarmingAcknowledgeRequest;
  }

  export namespace AlarmingAcknowledgeRequest {
    export type AsObject = {
      ackactor?: SecurityActor.SecurityActorStruct.AsObject,
    }
  }

  export class SetPrealarmTimerResponse extends jspb.Message {
    getResponsetype(): AlarmSupervisorTrait.AlarmSupervisorResponseTypeMap[keyof AlarmSupervisorTrait.AlarmSupervisorResponseTypeMap];
    setResponsetype(value: AlarmSupervisorTrait.AlarmSupervisorResponseTypeMap[keyof AlarmSupervisorTrait.AlarmSupervisorResponseTypeMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetPrealarmTimerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SetPrealarmTimerResponse): SetPrealarmTimerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetPrealarmTimerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetPrealarmTimerResponse;
    static deserializeBinaryFromReader(message: SetPrealarmTimerResponse, reader: jspb.BinaryReader): SetPrealarmTimerResponse;
  }

  export namespace SetPrealarmTimerResponse {
    export type AsObject = {
      responsetype: AlarmSupervisorTrait.AlarmSupervisorResponseTypeMap[keyof AlarmSupervisorTrait.AlarmSupervisorResponseTypeMap],
    }
  }

  export class SetPrealarmTimerRequest extends jspb.Message {
    hasReason(): boolean;
    clearReason(): void;
    getReason(): SecurityDecisionFact.SecurityDecisionFactStruct | undefined;
    setReason(value?: SecurityDecisionFact.SecurityDecisionFactStruct): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetPrealarmTimerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetPrealarmTimerRequest): SetPrealarmTimerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetPrealarmTimerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetPrealarmTimerRequest;
    static deserializeBinaryFromReader(message: SetPrealarmTimerRequest, reader: jspb.BinaryReader): SetPrealarmTimerRequest;
  }

  export namespace SetPrealarmTimerRequest {
    export type AsObject = {
      reason?: SecurityDecisionFact.SecurityDecisionFactStruct.AsObject,
    }
  }

  export class RemovePrealarmTimerResponse extends jspb.Message {
    getResponsetype(): AlarmSupervisorTrait.AlarmSupervisorResponseTypeMap[keyof AlarmSupervisorTrait.AlarmSupervisorResponseTypeMap];
    setResponsetype(value: AlarmSupervisorTrait.AlarmSupervisorResponseTypeMap[keyof AlarmSupervisorTrait.AlarmSupervisorResponseTypeMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemovePrealarmTimerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RemovePrealarmTimerResponse): RemovePrealarmTimerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemovePrealarmTimerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemovePrealarmTimerResponse;
    static deserializeBinaryFromReader(message: RemovePrealarmTimerResponse, reader: jspb.BinaryReader): RemovePrealarmTimerResponse;
  }

  export namespace RemovePrealarmTimerResponse {
    export type AsObject = {
      responsetype: AlarmSupervisorTrait.AlarmSupervisorResponseTypeMap[keyof AlarmSupervisorTrait.AlarmSupervisorResponseTypeMap],
    }
  }

  export class RemovePrealarmTimerRequest extends jspb.Message {
    hasReason(): boolean;
    clearReason(): void;
    getReason(): SecurityDecisionFact.SecurityDecisionFactStruct | undefined;
    setReason(value?: SecurityDecisionFact.SecurityDecisionFactStruct): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemovePrealarmTimerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RemovePrealarmTimerRequest): RemovePrealarmTimerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemovePrealarmTimerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemovePrealarmTimerRequest;
    static deserializeBinaryFromReader(message: RemovePrealarmTimerRequest, reader: jspb.BinaryReader): RemovePrealarmTimerRequest;
  }

  export namespace RemovePrealarmTimerRequest {
    export type AsObject = {
      reason?: SecurityDecisionFact.SecurityDecisionFactStruct.AsObject,
    }
  }

  export class RaiseAlarmResponse extends jspb.Message {
    getResponsetype(): AlarmSupervisorTrait.AlarmSupervisorResponseTypeMap[keyof AlarmSupervisorTrait.AlarmSupervisorResponseTypeMap];
    setResponsetype(value: AlarmSupervisorTrait.AlarmSupervisorResponseTypeMap[keyof AlarmSupervisorTrait.AlarmSupervisorResponseTypeMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RaiseAlarmResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RaiseAlarmResponse): RaiseAlarmResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RaiseAlarmResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RaiseAlarmResponse;
    static deserializeBinaryFromReader(message: RaiseAlarmResponse, reader: jspb.BinaryReader): RaiseAlarmResponse;
  }

  export namespace RaiseAlarmResponse {
    export type AsObject = {
      responsetype: AlarmSupervisorTrait.AlarmSupervisorResponseTypeMap[keyof AlarmSupervisorTrait.AlarmSupervisorResponseTypeMap],
    }
  }

  export class RaiseAlarmRequest extends jspb.Message {
    hasReason(): boolean;
    clearReason(): void;
    getReason(): SecurityDecisionFact.SecurityDecisionFactStruct | undefined;
    setReason(value?: SecurityDecisionFact.SecurityDecisionFactStruct): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RaiseAlarmRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RaiseAlarmRequest): RaiseAlarmRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RaiseAlarmRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RaiseAlarmRequest;
    static deserializeBinaryFromReader(message: RaiseAlarmRequest, reader: jspb.BinaryReader): RaiseAlarmRequest;
  }

  export namespace RaiseAlarmRequest {
    export type AsObject = {
      reason?: SecurityDecisionFact.SecurityDecisionFactStruct.AsObject,
    }
  }

  export interface AlarmSupervisorStateMap {
    ALARM_SUPERVISOR_STATE_UNSPECIFIED: 0;
    ALARM_SUPERVISOR_STATE_IDLE: 1;
    ALARM_SUPERVISOR_STATE_EVALUATING: 2;
    ALARM_SUPERVISOR_STATE_SILENCED: 3;
    ALARM_SUPERVISOR_STATE_ALARMING: 4;
  }

  export const AlarmSupervisorState: AlarmSupervisorStateMap;

  export interface AlarmSupervisorDecisionReasonMap {
    ALARM_SUPERVISOR_DECISION_REASON_UNSPECIFIED: 0;
    ALARM_SUPERVISOR_DECISION_REASON_SMASH_AND_GRAB: 1;
    ALARM_SUPERVISOR_DECISION_REASON_USER_SILENCING: 2;
    ALARM_SUPERVISOR_DECISION_REASON_DEVICE_ALARMING_STATE_CHANGE: 3;
  }

  export const AlarmSupervisorDecisionReason: AlarmSupervisorDecisionReasonMap;

  export interface AlarmSupervisorResponseTypeMap {
    ALARM_SUPERVISOR_RESPONSE_TYPE_UNSPECIFIED: 0;
    ALARM_SUPERVISOR_RESPONSE_TYPE_SUCCESS: 1;
    ALARM_SUPERVISOR_RESPONSE_TYPE_FAIL_ALREADY: 2;
    ALARM_SUPERVISOR_RESPONSE_TYPE_FAIL_INTERNAL_ISSUES: 3;
    ALARM_SUPERVISOR_RESPONSE_TYPE_UNAUTHORIZED_STATE_CHANGE: 4;
  }

  export const AlarmSupervisorResponseType: AlarmSupervisorResponseTypeMap;
}

export class SecuritySettingsTrait extends jspb.Message {
  getBypassfeatureenabled(): boolean;
  setBypassfeatureenabled(value: boolean): void;

  getPetrejectionenabled(): boolean;
  setPetrejectionenabled(value: boolean): void;

  getMotiondetectionenabled(): boolean;
  setMotiondetectionenabled(value: boolean): void;

  getSecuritysettingsmode(): SecuritySettingsTrait.SecuritySettingsModeMap[keyof SecuritySettingsTrait.SecuritySettingsModeMap];
  setSecuritysettingsmode(value: SecuritySettingsTrait.SecuritySettingsModeMap[keyof SecuritySettingsTrait.SecuritySettingsModeMap]): void;

  getAutomaticallyarmonschedulednight(): boolean;
  setAutomaticallyarmonschedulednight(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecuritySettingsTrait.AsObject;
  static toObject(includeInstance: boolean, msg: SecuritySettingsTrait): SecuritySettingsTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SecuritySettingsTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecuritySettingsTrait;
  static deserializeBinaryFromReader(message: SecuritySettingsTrait, reader: jspb.BinaryReader): SecuritySettingsTrait;
}

export namespace SecuritySettingsTrait {
  export type AsObject = {
    bypassfeatureenabled: boolean,
    petrejectionenabled: boolean,
    motiondetectionenabled: boolean,
    securitysettingsmode: SecuritySettingsTrait.SecuritySettingsModeMap[keyof SecuritySettingsTrait.SecuritySettingsModeMap],
    automaticallyarmonschedulednight: boolean,
  }

  export class SecuritySettingsModeChangeEvent extends jspb.Message {
    getPrevioussecuritysettingsmode(): SecuritySettingsTrait.SecuritySettingsModeMap[keyof SecuritySettingsTrait.SecuritySettingsModeMap];
    setPrevioussecuritysettingsmode(value: SecuritySettingsTrait.SecuritySettingsModeMap[keyof SecuritySettingsTrait.SecuritySettingsModeMap]): void;

    getNewsecuritysettingsmode(): SecuritySettingsTrait.SecuritySettingsModeMap[keyof SecuritySettingsTrait.SecuritySettingsModeMap];
    setNewsecuritysettingsmode(value: SecuritySettingsTrait.SecuritySettingsModeMap[keyof SecuritySettingsTrait.SecuritySettingsModeMap]): void;

    getSettodefaults(): boolean;
    setSettodefaults(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SecuritySettingsModeChangeEvent.AsObject;
    static toObject(includeInstance: boolean, msg: SecuritySettingsModeChangeEvent): SecuritySettingsModeChangeEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SecuritySettingsModeChangeEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SecuritySettingsModeChangeEvent;
    static deserializeBinaryFromReader(message: SecuritySettingsModeChangeEvent, reader: jspb.BinaryReader): SecuritySettingsModeChangeEvent;
  }

  export namespace SecuritySettingsModeChangeEvent {
    export type AsObject = {
      previoussecuritysettingsmode: SecuritySettingsTrait.SecuritySettingsModeMap[keyof SecuritySettingsTrait.SecuritySettingsModeMap],
      newsecuritysettingsmode: SecuritySettingsTrait.SecuritySettingsModeMap[keyof SecuritySettingsTrait.SecuritySettingsModeMap],
      settodefaults: boolean,
    }
  }

  export class SecuritySettingsModeChangeRequest extends jspb.Message {
    getSecuritysettingsmode(): SecuritySettingsTrait.SecuritySettingsModeMap[keyof SecuritySettingsTrait.SecuritySettingsModeMap];
    setSecuritysettingsmode(value: SecuritySettingsTrait.SecuritySettingsModeMap[keyof SecuritySettingsTrait.SecuritySettingsModeMap]): void;

    getSettodefaults(): boolean;
    setSettodefaults(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SecuritySettingsModeChangeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SecuritySettingsModeChangeRequest): SecuritySettingsModeChangeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SecuritySettingsModeChangeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SecuritySettingsModeChangeRequest;
    static deserializeBinaryFromReader(message: SecuritySettingsModeChangeRequest, reader: jspb.BinaryReader): SecuritySettingsModeChangeRequest;
  }

  export namespace SecuritySettingsModeChangeRequest {
    export type AsObject = {
      securitysettingsmode: SecuritySettingsTrait.SecuritySettingsModeMap[keyof SecuritySettingsTrait.SecuritySettingsModeMap],
      settodefaults: boolean,
    }
  }

  export class ResetIntrusionSettingsByModeRequest extends jspb.Message {
    getState(): SecurityIntrusionSettingsTrait.ExpandedSecurityStateMap[keyof SecurityIntrusionSettingsTrait.ExpandedSecurityStateMap];
    setState(value: SecurityIntrusionSettingsTrait.ExpandedSecurityStateMap[keyof SecurityIntrusionSettingsTrait.ExpandedSecurityStateMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResetIntrusionSettingsByModeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ResetIntrusionSettingsByModeRequest): ResetIntrusionSettingsByModeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResetIntrusionSettingsByModeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResetIntrusionSettingsByModeRequest;
    static deserializeBinaryFromReader(message: ResetIntrusionSettingsByModeRequest, reader: jspb.BinaryReader): ResetIntrusionSettingsByModeRequest;
  }

  export namespace ResetIntrusionSettingsByModeRequest {
    export type AsObject = {
      state: SecurityIntrusionSettingsTrait.ExpandedSecurityStateMap[keyof SecurityIntrusionSettingsTrait.ExpandedSecurityStateMap],
    }
  }

  export class LimitedSettingsChangeRequest extends jspb.Message {
    getAction(): SecuritySettingsTrait.LimitedSettingsActionMap[keyof SecuritySettingsTrait.LimitedSettingsActionMap];
    setAction(value: SecuritySettingsTrait.LimitedSettingsActionMap[keyof SecuritySettingsTrait.LimitedSettingsActionMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LimitedSettingsChangeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LimitedSettingsChangeRequest): LimitedSettingsChangeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LimitedSettingsChangeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LimitedSettingsChangeRequest;
    static deserializeBinaryFromReader(message: LimitedSettingsChangeRequest, reader: jspb.BinaryReader): LimitedSettingsChangeRequest;
  }

  export namespace LimitedSettingsChangeRequest {
    export type AsObject = {
      action: SecuritySettingsTrait.LimitedSettingsActionMap[keyof SecuritySettingsTrait.LimitedSettingsActionMap],
    }
  }

  export interface SecuritySettingsModeMap {
    SECURITY_SETTINGS_MODE_UNSPECIFIED: 0;
    SECURITY_SETTINGS_MODE_NEST: 1;
    SECURITY_SETTINGS_MODE_UL_CERT: 2;
    SECURITY_SETTINGS_MODE_EU_CERT: 3;
    SECURITY_SETTINGS_MODE_UK_CERT: 4;
  }

  export const SecuritySettingsMode: SecuritySettingsModeMap;

  export interface LimitedSettingsActionMap {
    LIMITED_SETTINGS_ACTION_UNSPECIFIED: 0;
    LIMITED_SETTINGS_ACTION_ON: 1;
    LIMITED_SETTINGS_ACTION_OFF: 2;
  }

  export const LimitedSettingsAction: LimitedSettingsActionMap;
}

export class SecurityDecisionFact extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecurityDecisionFact.AsObject;
  static toObject(includeInstance: boolean, msg: SecurityDecisionFact): SecurityDecisionFact.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SecurityDecisionFact, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecurityDecisionFact;
  static deserializeBinaryFromReader(message: SecurityDecisionFact, reader: jspb.BinaryReader): SecurityDecisionFact;
}

export namespace SecurityDecisionFact {
  export type AsObject = {
  }

  export class SecurityDecisionFactStruct extends jspb.Message {
    getFacttype(): SecurityDecisionFact.SecurityDecisionFactTypeMap[keyof SecurityDecisionFact.SecurityDecisionFactTypeMap];
    setFacttype(value: SecurityDecisionFact.SecurityDecisionFactTypeMap[keyof SecurityDecisionFact.SecurityDecisionFactTypeMap]): void;

    hasOriginresourceid(): boolean;
    clearOriginresourceid(): void;
    getOriginresourceid(): weave_common_pb.ResourceId | undefined;
    setOriginresourceid(value?: weave_common_pb.ResourceId): void;

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SecurityDecisionFactStruct.AsObject;
    static toObject(includeInstance: boolean, msg: SecurityDecisionFactStruct): SecurityDecisionFactStruct.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SecurityDecisionFactStruct, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SecurityDecisionFactStruct;
    static deserializeBinaryFromReader(message: SecurityDecisionFactStruct, reader: jspb.BinaryReader): SecurityDecisionFactStruct;
  }

  export namespace SecurityDecisionFactStruct {
    export type AsObject = {
      facttype: SecurityDecisionFact.SecurityDecisionFactTypeMap[keyof SecurityDecisionFact.SecurityDecisionFactTypeMap],
      originresourceid?: weave_common_pb.ResourceId.AsObject,
      timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

  export interface SecurityDecisionFactTypeMap {
    SECURITY_DECISION_FACT_TYPE_UNSPECIFIED: 0;
    SECURITY_DECISION_FACT_TYPE_OPEN_DOOR: 1;
    SECURITY_DECISION_FACT_TYPE_OPEN_DOOR_BYPASS: 2;
    SECURITY_DECISION_FACT_TYPE_CLOSE_DOOR: 3;
    SECURITY_DECISION_FACT_TYPE_OPEN_WINDOW: 4;
    SECURITY_DECISION_FACT_TYPE_OPEN_WINDOW_BYPASS: 5;
    SECURITY_DECISION_FACT_TYPE_CLOSE_WINDOW: 6;
    SECURITY_DECISION_FACT_TYPE_REMOTE_SENSOR_AMBIENT_MOTION: 7;
    SECURITY_DECISION_FACT_TYPE_HUB_AMBIENT_MOTION: 8;
    SECURITY_DECISION_FACT_TYPE_HUB_DEVICE_MOVED: 9;
    SECURITY_DECISION_FACT_TYPE_REMOTE_SENSOR_OFFLINE: 10;
    SECURITY_DECISION_FACT_TYPE_REMOTE_SENSOR_ONLINE: 11;
    SECURITY_DECISION_FACT_TYPE_HUB_OFFLINE: 12;
    SECURITY_DECISION_FACT_TYPE_HUB_ONLINE: 13;
    SECURITY_DECISION_FACT_TYPE_HUB_TAMPER: 14;
    SECURITY_DECISION_FACT_TYPE_HUB_TAMPER_CLEARED: 15;
    SECURITY_DECISION_FACT_TYPE_REMOTE_SENSOR_TAMPER: 16;
    SECURITY_DECISION_FACT_TYPE_REMOTE_SENSOR_TAMPER_CLEARED: 17;
    SECURITY_DECISION_FACT_TYPE_HUB_ONGOING_SOFTWARE_UPDATE: 18;
    SECURITY_DECISION_FACT_TYPE_HUB_ONGOING_SOFTWARE_UPDATE_FINISHED: 19;
    SECURITY_DECISION_FACT_TYPE_REMOTE_SENSOR_ONGOING_SOFTWARE_UPDATE: 20;
    SECURITY_DECISION_FACT_TYPE_REMOTE_SENSOR_ONGOING_SOFTWARE_UPDATE_FINISHED: 21;
    SECURITY_DECISION_FACT_TYPE_ACTIVE_JAMMING: 22;
    SECURITY_DECISION_FACT_TYPE_ACTIVE_JAMMING_CLEARED: 23;
    SECURITY_DECISION_FACT_TYPE_HUB_CHARGING_BATTERY: 24;
    SECURITY_DECISION_FACT_TYPE_HUB_DISCHARGING_BATTERY_UNSAFE_LEVEL: 25;
    SECURITY_DECISION_FACT_TYPE_HUB_DISCHARGING_BATTERY_SAFE_LEVEL: 26;
    SECURITY_DECISION_FACT_TYPE_MULTIPLE_FAILED_AUTH_ATTEMPTS: 27;
    SECURITY_DECISION_FACT_TYPE_HUB_BUTTON_PRESS: 28;
    SECURITY_DECISION_FACT_TYPE_REMOTE_SENSOR_BUTTON_PRESS: 29;
    SECURITY_DECISION_FACT_TYPE_REMOTE_SENSOR_BATTERY_NORMAL: 30;
    SECURITY_DECISION_FACT_TYPE_REMOTE_SENSOR_BATTERY_LOW: 31;
    SECURITY_DECISION_FACT_TYPE_REMOTE_SENSOR_BATTERY_CRITICALLY_LOW: 32;
    SECURITY_DECISION_FACT_TYPE_THREAD_NETWORK_RESTORED: 33;
    SECURITY_DECISION_FACT_TYPE_THREAD_NETWORK_DOWN: 34;
    SECURITY_DECISION_FACT_TYPE_WIFI_NETWORK_RESTORED: 35;
    SECURITY_DECISION_FACT_TYPE_WIFI_NETWORK_DOWN: 36;
    SECURITY_DECISION_FACT_TYPE_CELLULAR_NETWORK_RESTORED: 37;
    SECURITY_DECISION_FACT_TYPE_CELLULAR_NETWORK_DOWN: 38;
    SECURITY_DECISION_FACT_TYPE_WEAVE_TUNNEL_RESTORED: 39;
    SECURITY_DECISION_FACT_TYPE_WEAVE_TUNNEL_DOWN: 40;
    SECURITY_DECISION_FACT_TYPE_REMOTE_SENSOR_PIR_HEAT_RAMP: 41;
    SECURITY_DECISION_FACT_TYPE_REMOTE_SENSOR_PIR_HEAT_RAMP_CLEARED: 42;
    SECURITY_DECISION_FACT_TYPE_HUB_HARDWARE_FAILURE: 43;
    SECURITY_DECISION_FACT_TYPE_HUB_HARDWARE_FAILURE_CLEARED: 44;
    SECURITY_DECISION_FACT_TYPE_REMOTE_SENSOR_HARDWARE_FAILURE: 45;
    SECURITY_DECISION_FACT_TYPE_REMOTE_SENSOR_HARDWARE_FAILURE_CLEARED: 46;
    SECURITY_DECISION_FACT_TYPE_PANIC_ALARM_IDLE: 47;
    SECURITY_DECISION_FACT_TYPE_PANIC_ALARM_NOT_IDLE: 48;
    SECURITY_DECISION_FACT_TYPE_CREDENTIALS_PROBLEM: 49;
    SECURITY_DECISION_FACT_TYPE_CREDENTIALS_PROBLEM_CLEARED: 50;
    SECURITY_DECISION_FACT_TYPE_MISSED_CRITICAL_EVENTS: 51;
    SECURITY_DECISION_FACT_TYPE_HUB_GLASS_BREAK: 52;
    SECURITY_DECISION_FACT_TYPE_SOUND_CHECK_FAILURE: 53;
    SECURITY_DECISION_FACT_TYPE_SOUND_CHECK_FAILURE_CLEARED: 54;
  }

  export const SecurityDecisionFactType: SecurityDecisionFactTypeMap;
}

export class SecurityAlarmingTrait extends jspb.Message {
  getAlarmingstate(): SecurityAlarmingTrait.SecurityAlarmingStateMap[keyof SecurityAlarmingTrait.SecurityAlarmingStateMap];
  setAlarmingstate(value: SecurityAlarmingTrait.SecurityAlarmingStateMap[keyof SecurityAlarmingTrait.SecurityAlarmingStateMap]): void;

  clearAlarmreasonList(): void;
  getAlarmreasonList(): Array<SecurityDecisionFact.SecurityDecisionFactStruct>;
  setAlarmreasonList(value: Array<SecurityDecisionFact.SecurityDecisionFactStruct>): void;
  addAlarmreason(value?: SecurityDecisionFact.SecurityDecisionFactStruct, index?: number): SecurityDecisionFact.SecurityDecisionFactStruct;

  hasPrealarmexpirationtime(): boolean;
  clearPrealarmexpirationtime(): void;
  getPrealarmexpirationtime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPrealarmexpirationtime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasPrealarmingduration(): boolean;
  clearPrealarmingduration(): void;
  getPrealarmingduration(): google_protobuf_duration_pb.Duration | undefined;
  setPrealarmingduration(value?: google_protobuf_duration_pb.Duration): void;

  hasAlarmingstatetime(): boolean;
  clearAlarmingstatetime(): void;
  getAlarmingstatetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAlarmingstatetime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecurityAlarmingTrait.AsObject;
  static toObject(includeInstance: boolean, msg: SecurityAlarmingTrait): SecurityAlarmingTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SecurityAlarmingTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecurityAlarmingTrait;
  static deserializeBinaryFromReader(message: SecurityAlarmingTrait, reader: jspb.BinaryReader): SecurityAlarmingTrait;
}

export namespace SecurityAlarmingTrait {
  export type AsObject = {
    alarmingstate: SecurityAlarmingTrait.SecurityAlarmingStateMap[keyof SecurityAlarmingTrait.SecurityAlarmingStateMap],
    alarmreasonList: Array<SecurityDecisionFact.SecurityDecisionFactStruct.AsObject>,
    prealarmexpirationtime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    prealarmingduration?: google_protobuf_duration_pb.Duration.AsObject,
    alarmingstatetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export class SecurityAlarmingStateChangeEvent extends jspb.Message {
    getAlarmingstate(): SecurityAlarmingTrait.SecurityAlarmingStateMap[keyof SecurityAlarmingTrait.SecurityAlarmingStateMap];
    setAlarmingstate(value: SecurityAlarmingTrait.SecurityAlarmingStateMap[keyof SecurityAlarmingTrait.SecurityAlarmingStateMap]): void;

    getPrioralarmingstate(): SecurityAlarmingTrait.SecurityAlarmingStateMap[keyof SecurityAlarmingTrait.SecurityAlarmingStateMap];
    setPrioralarmingstate(value: SecurityAlarmingTrait.SecurityAlarmingStateMap[keyof SecurityAlarmingTrait.SecurityAlarmingStateMap]): void;

    hasInitialalarmreason(): boolean;
    clearInitialalarmreason(): void;
    getInitialalarmreason(): SecurityDecisionFact.SecurityDecisionFactStruct | undefined;
    setInitialalarmreason(value?: SecurityDecisionFact.SecurityDecisionFactStruct): void;

    getSecurityarmsessionid(): number;
    setSecurityarmsessionid(value: number): void;

    getChangereason(): SecurityAlarmingTrait.SecurityAlarmingStateChangeReasonMap[keyof SecurityAlarmingTrait.SecurityAlarmingStateChangeReasonMap];
    setChangereason(value: SecurityAlarmingTrait.SecurityAlarmingStateChangeReasonMap[keyof SecurityAlarmingTrait.SecurityAlarmingStateChangeReasonMap]): void;

    hasLatestalarmreason(): boolean;
    clearLatestalarmreason(): void;
    getLatestalarmreason(): SecurityDecisionFact.SecurityDecisionFactStruct | undefined;
    setLatestalarmreason(value?: SecurityDecisionFact.SecurityDecisionFactStruct): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SecurityAlarmingStateChangeEvent.AsObject;
    static toObject(includeInstance: boolean, msg: SecurityAlarmingStateChangeEvent): SecurityAlarmingStateChangeEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SecurityAlarmingStateChangeEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SecurityAlarmingStateChangeEvent;
    static deserializeBinaryFromReader(message: SecurityAlarmingStateChangeEvent, reader: jspb.BinaryReader): SecurityAlarmingStateChangeEvent;
  }

  export namespace SecurityAlarmingStateChangeEvent {
    export type AsObject = {
      alarmingstate: SecurityAlarmingTrait.SecurityAlarmingStateMap[keyof SecurityAlarmingTrait.SecurityAlarmingStateMap],
      prioralarmingstate: SecurityAlarmingTrait.SecurityAlarmingStateMap[keyof SecurityAlarmingTrait.SecurityAlarmingStateMap],
      initialalarmreason?: SecurityDecisionFact.SecurityDecisionFactStruct.AsObject,
      securityarmsessionid: number,
      changereason: SecurityAlarmingTrait.SecurityAlarmingStateChangeReasonMap[keyof SecurityAlarmingTrait.SecurityAlarmingStateChangeReasonMap],
      latestalarmreason?: SecurityDecisionFact.SecurityDecisionFactStruct.AsObject,
    }
  }

  export class SecurityAlarmingSetToIdleEvent extends jspb.Message {
    hasAlarmactor(): boolean;
    clearAlarmactor(): void;
    getAlarmactor(): SecurityActor.SecurityActorStruct | undefined;
    setAlarmactor(value?: SecurityActor.SecurityActorStruct): void;

    getPrioralarmingstate(): SecurityAlarmingTrait.SecurityAlarmingStateMap[keyof SecurityAlarmingTrait.SecurityAlarmingStateMap];
    setPrioralarmingstate(value: SecurityAlarmingTrait.SecurityAlarmingStateMap[keyof SecurityAlarmingTrait.SecurityAlarmingStateMap]): void;

    getSecurityarmsessionid(): number;
    setSecurityarmsessionid(value: number): void;

    clearAlarmreasonsList(): void;
    getAlarmreasonsList(): Array<SecurityDecisionFact.SecurityDecisionFactStruct>;
    setAlarmreasonsList(value: Array<SecurityDecisionFact.SecurityDecisionFactStruct>): void;
    addAlarmreasons(value?: SecurityDecisionFact.SecurityDecisionFactStruct, index?: number): SecurityDecisionFact.SecurityDecisionFactStruct;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SecurityAlarmingSetToIdleEvent.AsObject;
    static toObject(includeInstance: boolean, msg: SecurityAlarmingSetToIdleEvent): SecurityAlarmingSetToIdleEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SecurityAlarmingSetToIdleEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SecurityAlarmingSetToIdleEvent;
    static deserializeBinaryFromReader(message: SecurityAlarmingSetToIdleEvent, reader: jspb.BinaryReader): SecurityAlarmingSetToIdleEvent;
  }

  export namespace SecurityAlarmingSetToIdleEvent {
    export type AsObject = {
      alarmactor?: SecurityActor.SecurityActorStruct.AsObject,
      prioralarmingstate: SecurityAlarmingTrait.SecurityAlarmingStateMap[keyof SecurityAlarmingTrait.SecurityAlarmingStateMap],
      securityarmsessionid: number,
      alarmreasonsList: Array<SecurityDecisionFact.SecurityDecisionFactStruct.AsObject>,
    }
  }

  export class SecurityAlarmingDecisionEvent extends jspb.Message {
    hasDecisionfact(): boolean;
    clearDecisionfact(): void;
    getDecisionfact(): SecurityDecisionFact.SecurityDecisionFactStruct | undefined;
    setDecisionfact(value?: SecurityDecisionFact.SecurityDecisionFactStruct): void;

    getResult(): SecurityAlarmingTrait.SecurityAlarmingDecisionResultMap[keyof SecurityAlarmingTrait.SecurityAlarmingDecisionResultMap];
    setResult(value: SecurityAlarmingTrait.SecurityAlarmingDecisionResultMap[keyof SecurityAlarmingTrait.SecurityAlarmingDecisionResultMap]): void;

    getSecurityarmsessionid(): number;
    setSecurityarmsessionid(value: number): void;

    getResultingstate(): SecurityAlarmingTrait.SecurityAlarmingStateMap[keyof SecurityAlarmingTrait.SecurityAlarmingStateMap];
    setResultingstate(value: SecurityAlarmingTrait.SecurityAlarmingStateMap[keyof SecurityAlarmingTrait.SecurityAlarmingStateMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SecurityAlarmingDecisionEvent.AsObject;
    static toObject(includeInstance: boolean, msg: SecurityAlarmingDecisionEvent): SecurityAlarmingDecisionEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SecurityAlarmingDecisionEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SecurityAlarmingDecisionEvent;
    static deserializeBinaryFromReader(message: SecurityAlarmingDecisionEvent, reader: jspb.BinaryReader): SecurityAlarmingDecisionEvent;
  }

  export namespace SecurityAlarmingDecisionEvent {
    export type AsObject = {
      decisionfact?: SecurityDecisionFact.SecurityDecisionFactStruct.AsObject,
      result: SecurityAlarmingTrait.SecurityAlarmingDecisionResultMap[keyof SecurityAlarmingTrait.SecurityAlarmingDecisionResultMap],
      securityarmsessionid: number,
      resultingstate: SecurityAlarmingTrait.SecurityAlarmingStateMap[keyof SecurityAlarmingTrait.SecurityAlarmingStateMap],
    }
  }

  export interface SecurityAlarmingStateMap {
    SECURITY_ALARMING_STATE_UNSPECIFIED: 0;
    SECURITY_ALARMING_STATE_IDLE: 1;
    SECURITY_ALARMING_STATE_PREALARMING: 2;
    SECURITY_ALARMING_STATE_ALARMING: 3;
  }

  export const SecurityAlarmingState: SecurityAlarmingStateMap;

  export interface SecurityAlarmingStateChangeReasonMap {
    SECURITY_ALARMING_STATE_CHANGE_REASON_UNSPECIFIED: 0;
    SECURITY_ALARMING_STATE_CHANGE_REASON_CLEARED: 1;
    SECURITY_ALARMING_STATE_CHANGE_REASON_NEW_TRIGGER: 2;
    SECURITY_ALARMING_STATE_CHANGE_REASON_TIMED_TRANSITION: 3;
    SECURITY_ALARMING_STATE_CHANGE_REASON_RESUMED: 4;
  }

  export const SecurityAlarmingStateChangeReason: SecurityAlarmingStateChangeReasonMap;

  export interface SecurityAlarmingDecisionResultMap {
    SECURITY_ALARMING_DECISION_RESULT_UNSPECIFIED: 0;
    SECURITY_ALARMING_DECISION_RESULT_TRIGGERED_PREALARM: 1;
    SECURITY_ALARMING_DECISION_RESULT_TRIGGERED_INSTANT_ALARM: 2;
    SECURITY_ALARMING_DECISION_RESULT_RECONFIRMED_INTRUSION: 3;
    SECURITY_ALARMING_DECISION_RESULT_NO_ACTION: 4;
  }

  export const SecurityAlarmingDecisionResult: SecurityAlarmingDecisionResultMap;
}

export class PanicAlarmingTrait extends jspb.Message {
  getPanicalarmingstate(): PanicAlarmingTrait.PanicAlarmingStateMap[keyof PanicAlarmingTrait.PanicAlarmingStateMap];
  setPanicalarmingstate(value: PanicAlarmingTrait.PanicAlarmingStateMap[keyof PanicAlarmingTrait.PanicAlarmingStateMap]): void;

  hasPanicalarmactor(): boolean;
  clearPanicalarmactor(): void;
  getPanicalarmactor(): SecurityActor.SecurityActorStruct | undefined;
  setPanicalarmactor(value?: SecurityActor.SecurityActorStruct): void;

  hasPanictime(): boolean;
  clearPanictime(): void;
  getPanictime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPanictime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PanicAlarmingTrait.AsObject;
  static toObject(includeInstance: boolean, msg: PanicAlarmingTrait): PanicAlarmingTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PanicAlarmingTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PanicAlarmingTrait;
  static deserializeBinaryFromReader(message: PanicAlarmingTrait, reader: jspb.BinaryReader): PanicAlarmingTrait;
}

export namespace PanicAlarmingTrait {
  export type AsObject = {
    panicalarmingstate: PanicAlarmingTrait.PanicAlarmingStateMap[keyof PanicAlarmingTrait.PanicAlarmingStateMap],
    panicalarmactor?: SecurityActor.SecurityActorStruct.AsObject,
    panictime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export class PanicAlarmingStateRequest extends jspb.Message {
    getTargetpanicalarmingstate(): PanicAlarmingTrait.PanicAlarmingStateMap[keyof PanicAlarmingTrait.PanicAlarmingStateMap];
    setTargetpanicalarmingstate(value: PanicAlarmingTrait.PanicAlarmingStateMap[keyof PanicAlarmingTrait.PanicAlarmingStateMap]): void;

    hasPanicalarmactor(): boolean;
    clearPanicalarmactor(): void;
    getPanicalarmactor(): SecurityActor.SecurityActorStruct | undefined;
    setPanicalarmactor(value?: SecurityActor.SecurityActorStruct): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PanicAlarmingStateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PanicAlarmingStateRequest): PanicAlarmingStateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PanicAlarmingStateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PanicAlarmingStateRequest;
    static deserializeBinaryFromReader(message: PanicAlarmingStateRequest, reader: jspb.BinaryReader): PanicAlarmingStateRequest;
  }

  export namespace PanicAlarmingStateRequest {
    export type AsObject = {
      targetpanicalarmingstate: PanicAlarmingTrait.PanicAlarmingStateMap[keyof PanicAlarmingTrait.PanicAlarmingStateMap],
      panicalarmactor?: SecurityActor.SecurityActorStruct.AsObject,
    }
  }

  export class PanicAlarmingStateResponse extends jspb.Message {
    getResponsetype(): PanicAlarmingTrait.PanicAlarmingStateResponseTypeMap[keyof PanicAlarmingTrait.PanicAlarmingStateResponseTypeMap];
    setResponsetype(value: PanicAlarmingTrait.PanicAlarmingStateResponseTypeMap[keyof PanicAlarmingTrait.PanicAlarmingStateResponseTypeMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PanicAlarmingStateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PanicAlarmingStateResponse): PanicAlarmingStateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PanicAlarmingStateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PanicAlarmingStateResponse;
    static deserializeBinaryFromReader(message: PanicAlarmingStateResponse, reader: jspb.BinaryReader): PanicAlarmingStateResponse;
  }

  export namespace PanicAlarmingStateResponse {
    export type AsObject = {
      responsetype: PanicAlarmingTrait.PanicAlarmingStateResponseTypeMap[keyof PanicAlarmingTrait.PanicAlarmingStateResponseTypeMap],
    }
  }

  export class PanicAlarmingStateChangeEvent extends jspb.Message {
    getPanicalarmingstate(): PanicAlarmingTrait.PanicAlarmingStateMap[keyof PanicAlarmingTrait.PanicAlarmingStateMap];
    setPanicalarmingstate(value: PanicAlarmingTrait.PanicAlarmingStateMap[keyof PanicAlarmingTrait.PanicAlarmingStateMap]): void;

    getPriorpanicalarmingstate(): PanicAlarmingTrait.PanicAlarmingStateMap[keyof PanicAlarmingTrait.PanicAlarmingStateMap];
    setPriorpanicalarmingstate(value: PanicAlarmingTrait.PanicAlarmingStateMap[keyof PanicAlarmingTrait.PanicAlarmingStateMap]): void;

    hasPanicalarmactor(): boolean;
    clearPanicalarmactor(): void;
    getPanicalarmactor(): SecurityActor.SecurityActorStruct | undefined;
    setPanicalarmactor(value?: SecurityActor.SecurityActorStruct): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PanicAlarmingStateChangeEvent.AsObject;
    static toObject(includeInstance: boolean, msg: PanicAlarmingStateChangeEvent): PanicAlarmingStateChangeEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PanicAlarmingStateChangeEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PanicAlarmingStateChangeEvent;
    static deserializeBinaryFromReader(message: PanicAlarmingStateChangeEvent, reader: jspb.BinaryReader): PanicAlarmingStateChangeEvent;
  }

  export namespace PanicAlarmingStateChangeEvent {
    export type AsObject = {
      panicalarmingstate: PanicAlarmingTrait.PanicAlarmingStateMap[keyof PanicAlarmingTrait.PanicAlarmingStateMap],
      priorpanicalarmingstate: PanicAlarmingTrait.PanicAlarmingStateMap[keyof PanicAlarmingTrait.PanicAlarmingStateMap],
      panicalarmactor?: SecurityActor.SecurityActorStruct.AsObject,
    }
  }

  export interface PanicAlarmingStateMap {
    PANIC_ALARMING_STATE_UNSPECIFIED: 0;
    PANIC_ALARMING_STATE_IDLE: 1;
    PANIC_ALARMING_STATE_PREPANIC: 2;
    PANIC_ALARMING_STATE_PANIC: 3;
  }

  export const PanicAlarmingState: PanicAlarmingStateMap;

  export interface PanicAlarmingStateResponseTypeMap {
    PANIC_ALARMING_STATE_RESPONSE_TYPE_UNSPECIFIED: 0;
    PANIC_ALARMING_STATE_RESPONSE_TYPE_SUCCESS: 1;
    PANIC_ALARMING_STATE_RESPONSE_TYPE_FAIL_ALREADY: 2;
    PANIC_ALARMING_STATE_RESPONSE_TYPE_FAIL_INVALID_STATE_REQUEST: 3;
  }

  export const PanicAlarmingStateResponseType: PanicAlarmingStateResponseTypeMap;
}

export class SecurityActor extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecurityActor.AsObject;
  static toObject(includeInstance: boolean, msg: SecurityActor): SecurityActor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SecurityActor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecurityActor;
  static deserializeBinaryFromReader(message: SecurityActor, reader: jspb.BinaryReader): SecurityActor;
}

export namespace SecurityActor {
  export type AsObject = {
  }

  export class SecurityActorStruct extends jspb.Message {
    getMethod(): SecurityActor.SecurityActorMethodMap[keyof SecurityActor.SecurityActorMethodMap];
    setMethod(value: SecurityActor.SecurityActorMethodMap[keyof SecurityActor.SecurityActorMethodMap]): void;

    hasOriginator(): boolean;
    clearOriginator(): void;
    getOriginator(): weave_common_pb.ResourceId | undefined;
    setOriginator(value?: weave_common_pb.ResourceId): void;

    hasAgent(): boolean;
    clearAgent(): void;
    getAgent(): weave_common_pb.ResourceId | undefined;
    setAgent(value?: weave_common_pb.ResourceId): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SecurityActorStruct.AsObject;
    static toObject(includeInstance: boolean, msg: SecurityActorStruct): SecurityActorStruct.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SecurityActorStruct, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SecurityActorStruct;
    static deserializeBinaryFromReader(message: SecurityActorStruct, reader: jspb.BinaryReader): SecurityActorStruct;
  }

  export namespace SecurityActorStruct {
    export type AsObject = {
      method: SecurityActor.SecurityActorMethodMap[keyof SecurityActor.SecurityActorMethodMap],
      originator?: weave_common_pb.ResourceId.AsObject,
      agent?: weave_common_pb.ResourceId.AsObject,
    }
  }

  export interface SecurityActorMethodMap {
    SECURITY_ACTOR_METHOD_UNSPECIFIED: 0;
    SECURITY_ACTOR_METHOD_OTHER: 1;
    SECURITY_ACTOR_METHOD_KEYPAD: 2;
    SECURITY_ACTOR_METHOD_KEYPAD_PIN: 3;
    SECURITY_ACTOR_METHOD_AUTH_TOKEN: 4;
    SECURITY_ACTOR_METHOD_REMOTE_USER_EXPLICIT: 5;
    SECURITY_ACTOR_METHOD_REMOTE_USER_IMPLICIT: 6;
    SECURITY_ACTOR_METHOD_REMOTE_REMINDER_EXPLICIT: 7;
    SECURITY_ACTOR_METHOD_REMOTE_REMINDER_IMPLICIT: 8;
    SECURITY_ACTOR_METHOD_REMOTE_USER_OTHER: 9;
    SECURITY_ACTOR_METHOD_REMOTE_DELEGATE: 10;
    SECURITY_ACTOR_METHOD_LOW_POWER_SHUTDOWN: 11;
    SECURITY_ACTOR_METHOD_VOICE_ASSISTANT: 12;
    SECURITY_ACTOR_METHOD_PEER_LOCK: 13;
    SECURITY_ACTOR_METHOD_REMOTE_SCHEDULE_IMPLICIT: 14;
  }

  export const SecurityActorMethod: SecurityActorMethodMap;
}

export class SecurityIntrusionSettingsTrait extends jspb.Message {
  getAmbientmotionforintrusionenabled(): boolean;
  setAmbientmotionforintrusionenabled(value: boolean): void;

  getCustomintrusionrulesMap(): jspb.Map<number, SecurityIntrusionSettingsTrait.CustomIntrusionRule>;
  clearCustomintrusionrulesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecurityIntrusionSettingsTrait.AsObject;
  static toObject(includeInstance: boolean, msg: SecurityIntrusionSettingsTrait): SecurityIntrusionSettingsTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SecurityIntrusionSettingsTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecurityIntrusionSettingsTrait;
  static deserializeBinaryFromReader(message: SecurityIntrusionSettingsTrait, reader: jspb.BinaryReader): SecurityIntrusionSettingsTrait;
}

export namespace SecurityIntrusionSettingsTrait {
  export type AsObject = {
    ambientmotionforintrusionenabled: boolean,
    customintrusionrulesMap: Array<[number, SecurityIntrusionSettingsTrait.CustomIntrusionRule.AsObject]>,
  }

  export class CustomIntrusionRule extends jspb.Message {
    hasDeviceid(): boolean;
    clearDeviceid(): void;
    getDeviceid(): weave_common_pb.ResourceId | undefined;
    setDeviceid(value?: weave_common_pb.ResourceId): void;

    getState(): SecurityIntrusionSettingsTrait.ExpandedSecurityStateMap[keyof SecurityIntrusionSettingsTrait.ExpandedSecurityStateMap];
    setState(value: SecurityIntrusionSettingsTrait.ExpandedSecurityStateMap[keyof SecurityIntrusionSettingsTrait.ExpandedSecurityStateMap]): void;

    getFacttype(): SecurityDecisionFact.SecurityDecisionFactTypeMap[keyof SecurityDecisionFact.SecurityDecisionFactTypeMap];
    setFacttype(value: SecurityDecisionFact.SecurityDecisionFactTypeMap[keyof SecurityDecisionFact.SecurityDecisionFactTypeMap]): void;

    getAction(): SecurityIntrusionSettingsTrait.IntrusionActionMap[keyof SecurityIntrusionSettingsTrait.IntrusionActionMap];
    setAction(value: SecurityIntrusionSettingsTrait.IntrusionActionMap[keyof SecurityIntrusionSettingsTrait.IntrusionActionMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomIntrusionRule.AsObject;
    static toObject(includeInstance: boolean, msg: CustomIntrusionRule): CustomIntrusionRule.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomIntrusionRule, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomIntrusionRule;
    static deserializeBinaryFromReader(message: CustomIntrusionRule, reader: jspb.BinaryReader): CustomIntrusionRule;
  }

  export namespace CustomIntrusionRule {
    export type AsObject = {
      deviceid?: weave_common_pb.ResourceId.AsObject,
      state: SecurityIntrusionSettingsTrait.ExpandedSecurityStateMap[keyof SecurityIntrusionSettingsTrait.ExpandedSecurityStateMap],
      facttype: SecurityDecisionFact.SecurityDecisionFactTypeMap[keyof SecurityDecisionFact.SecurityDecisionFactTypeMap],
      action: SecurityIntrusionSettingsTrait.IntrusionActionMap[keyof SecurityIntrusionSettingsTrait.IntrusionActionMap],
    }
  }

  export interface IntrusionActionMap {
    INTRUSION_ACTION_UNSPECIFIED: 0;
    INTRUSION_ACTION_NONE: 1;
    INTRUSION_ACTION_PREALARM: 2;
    INTRUSION_ACTION_INSTANTALARM: 3;
  }

  export const IntrusionAction: IntrusionActionMap;

  export interface ExpandedSecurityStateMap {
    EXPANDED_SECURITY_STATE_UNSPECIFIED: 0;
    EXPANDED_SECURITY_STATE_DISARMED: 1;
    EXPANDED_SECURITY_STATE_ARMED_SL1: 2;
    EXPANDED_SECURITY_STATE_ARMED_SL1_NOT_IDLE: 3;
    EXPANDED_SECURITY_STATE_ARMED_SL2_IN_EXIT_ALLOWANCE: 4;
    EXPANDED_SECURITY_STATE_ARMED_SL2: 5;
    EXPANDED_SECURITY_STATE_ARMED_SL2_NOT_IDLE: 6;
  }

  export const ExpandedSecurityState: ExpandedSecurityStateMap;
}

export class SecurityIssuesAndExceptionsTrait extends jspb.Message {
  clearBlockingissuesetList(): void;
  getBlockingissuesetList(): Array<SecurityDecisionFact.SecurityDecisionFactStruct>;
  setBlockingissuesetList(value: Array<SecurityDecisionFact.SecurityDecisionFactStruct>): void;
  addBlockingissueset(value?: SecurityDecisionFact.SecurityDecisionFactStruct, index?: number): SecurityDecisionFact.SecurityDecisionFactStruct;

  clearNonblockingissuesetList(): void;
  getNonblockingissuesetList(): Array<SecurityDecisionFact.SecurityDecisionFactStruct>;
  setNonblockingissuesetList(value: Array<SecurityDecisionFact.SecurityDecisionFactStruct>): void;
  addNonblockingissueset(value?: SecurityDecisionFact.SecurityDecisionFactStruct, index?: number): SecurityDecisionFact.SecurityDecisionFactStruct;

  clearExceptionsetList(): void;
  getExceptionsetList(): Array<SecurityDecisionFact.SecurityDecisionFactStruct>;
  setExceptionsetList(value: Array<SecurityDecisionFact.SecurityDecisionFactStruct>): void;
  addExceptionset(value?: SecurityDecisionFact.SecurityDecisionFactStruct, index?: number): SecurityDecisionFact.SecurityDecisionFactStruct;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecurityIssuesAndExceptionsTrait.AsObject;
  static toObject(includeInstance: boolean, msg: SecurityIssuesAndExceptionsTrait): SecurityIssuesAndExceptionsTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SecurityIssuesAndExceptionsTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecurityIssuesAndExceptionsTrait;
  static deserializeBinaryFromReader(message: SecurityIssuesAndExceptionsTrait, reader: jspb.BinaryReader): SecurityIssuesAndExceptionsTrait;
}

export namespace SecurityIssuesAndExceptionsTrait {
  export type AsObject = {
    blockingissuesetList: Array<SecurityDecisionFact.SecurityDecisionFactStruct.AsObject>,
    nonblockingissuesetList: Array<SecurityDecisionFact.SecurityDecisionFactStruct.AsObject>,
    exceptionsetList: Array<SecurityDecisionFact.SecurityDecisionFactStruct.AsObject>,
  }

  export class SecurityBlockingIssuesChangeEvent extends jspb.Message {
    clearBlockingissuesetList(): void;
    getBlockingissuesetList(): Array<SecurityDecisionFact.SecurityDecisionFactStruct>;
    setBlockingissuesetList(value: Array<SecurityDecisionFact.SecurityDecisionFactStruct>): void;
    addBlockingissueset(value?: SecurityDecisionFact.SecurityDecisionFactStruct, index?: number): SecurityDecisionFact.SecurityDecisionFactStruct;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SecurityBlockingIssuesChangeEvent.AsObject;
    static toObject(includeInstance: boolean, msg: SecurityBlockingIssuesChangeEvent): SecurityBlockingIssuesChangeEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SecurityBlockingIssuesChangeEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SecurityBlockingIssuesChangeEvent;
    static deserializeBinaryFromReader(message: SecurityBlockingIssuesChangeEvent, reader: jspb.BinaryReader): SecurityBlockingIssuesChangeEvent;
  }

  export namespace SecurityBlockingIssuesChangeEvent {
    export type AsObject = {
      blockingissuesetList: Array<SecurityDecisionFact.SecurityDecisionFactStruct.AsObject>,
    }
  }

  export class SecurityNonBlockingIssuesChangeEvent extends jspb.Message {
    clearNonblockingissuesetList(): void;
    getNonblockingissuesetList(): Array<SecurityDecisionFact.SecurityDecisionFactStruct>;
    setNonblockingissuesetList(value: Array<SecurityDecisionFact.SecurityDecisionFactStruct>): void;
    addNonblockingissueset(value?: SecurityDecisionFact.SecurityDecisionFactStruct, index?: number): SecurityDecisionFact.SecurityDecisionFactStruct;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SecurityNonBlockingIssuesChangeEvent.AsObject;
    static toObject(includeInstance: boolean, msg: SecurityNonBlockingIssuesChangeEvent): SecurityNonBlockingIssuesChangeEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SecurityNonBlockingIssuesChangeEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SecurityNonBlockingIssuesChangeEvent;
    static deserializeBinaryFromReader(message: SecurityNonBlockingIssuesChangeEvent, reader: jspb.BinaryReader): SecurityNonBlockingIssuesChangeEvent;
  }

  export namespace SecurityNonBlockingIssuesChangeEvent {
    export type AsObject = {
      nonblockingissuesetList: Array<SecurityDecisionFact.SecurityDecisionFactStruct.AsObject>,
    }
  }

  export class SecurityExceptionsChangeEvent extends jspb.Message {
    clearExceptionsetList(): void;
    getExceptionsetList(): Array<SecurityDecisionFact.SecurityDecisionFactStruct>;
    setExceptionsetList(value: Array<SecurityDecisionFact.SecurityDecisionFactStruct>): void;
    addExceptionset(value?: SecurityDecisionFact.SecurityDecisionFactStruct, index?: number): SecurityDecisionFact.SecurityDecisionFactStruct;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SecurityExceptionsChangeEvent.AsObject;
    static toObject(includeInstance: boolean, msg: SecurityExceptionsChangeEvent): SecurityExceptionsChangeEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SecurityExceptionsChangeEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SecurityExceptionsChangeEvent;
    static deserializeBinaryFromReader(message: SecurityExceptionsChangeEvent, reader: jspb.BinaryReader): SecurityExceptionsChangeEvent;
  }

  export namespace SecurityExceptionsChangeEvent {
    export type AsObject = {
      exceptionsetList: Array<SecurityDecisionFact.SecurityDecisionFactStruct.AsObject>,
    }
  }

  export class SecurityNewIssuesByEndOfAllowanceEvent extends jspb.Message {
    clearIssuesetList(): void;
    getIssuesetList(): Array<SecurityDecisionFact.SecurityDecisionFactStruct>;
    setIssuesetList(value: Array<SecurityDecisionFact.SecurityDecisionFactStruct>): void;
    addIssueset(value?: SecurityDecisionFact.SecurityDecisionFactStruct, index?: number): SecurityDecisionFact.SecurityDecisionFactStruct;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SecurityNewIssuesByEndOfAllowanceEvent.AsObject;
    static toObject(includeInstance: boolean, msg: SecurityNewIssuesByEndOfAllowanceEvent): SecurityNewIssuesByEndOfAllowanceEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SecurityNewIssuesByEndOfAllowanceEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SecurityNewIssuesByEndOfAllowanceEvent;
    static deserializeBinaryFromReader(message: SecurityNewIssuesByEndOfAllowanceEvent, reader: jspb.BinaryReader): SecurityNewIssuesByEndOfAllowanceEvent;
  }

  export namespace SecurityNewIssuesByEndOfAllowanceEvent {
    export type AsObject = {
      issuesetList: Array<SecurityDecisionFact.SecurityDecisionFactStruct.AsObject>,
    }
  }
}

export class SecurityActionOnNFCTokenSettingsTrait extends jspb.Message {
  getFeatureenabled(): boolean;
  setFeatureenabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecurityActionOnNFCTokenSettingsTrait.AsObject;
  static toObject(includeInstance: boolean, msg: SecurityActionOnNFCTokenSettingsTrait): SecurityActionOnNFCTokenSettingsTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SecurityActionOnNFCTokenSettingsTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecurityActionOnNFCTokenSettingsTrait;
  static deserializeBinaryFromReader(message: SecurityActionOnNFCTokenSettingsTrait, reader: jspb.BinaryReader): SecurityActionOnNFCTokenSettingsTrait;
}

export namespace SecurityActionOnNFCTokenSettingsTrait {
  export type AsObject = {
    featureenabled: boolean,
  }
}

export class SecurityArmSettingsTrait extends jspb.Message {
  hasExitallowanceduration(): boolean;
  clearExitallowanceduration(): void;
  getExitallowanceduration(): google_protobuf_duration_pb.Duration | undefined;
  setExitallowanceduration(value?: google_protobuf_duration_pb.Duration): void;

  getArmingrequiresauth(): boolean;
  setArmingrequiresauth(value: boolean): void;

  getIgnoringissuesrequiresauth(): boolean;
  setIgnoringissuesrequiresauth(value: boolean): void;

  getStructuremodelinkingenabled(): boolean;
  setStructuremodelinkingenabled(value: boolean): void;

  getDisarmondoorunlock(): boolean;
  setDisarmondoorunlock(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecurityArmSettingsTrait.AsObject;
  static toObject(includeInstance: boolean, msg: SecurityArmSettingsTrait): SecurityArmSettingsTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SecurityArmSettingsTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecurityArmSettingsTrait;
  static deserializeBinaryFromReader(message: SecurityArmSettingsTrait, reader: jspb.BinaryReader): SecurityArmSettingsTrait;
}

export namespace SecurityArmSettingsTrait {
  export type AsObject = {
    exitallowanceduration?: google_protobuf_duration_pb.Duration.AsObject,
    armingrequiresauth: boolean,
    ignoringissuesrequiresauth: boolean,
    structuremodelinkingenabled: boolean,
    disarmondoorunlock: boolean,
  }
}

export class EnhancedBoltLockSettingsTrait extends jspb.Message {
  getAutorelockon(): boolean;
  setAutorelockon(value: boolean): void;

  hasAutorelockduration(): boolean;
  clearAutorelockduration(): void;
  getAutorelockduration(): google_protobuf_duration_pb.Duration | undefined;
  setAutorelockduration(value?: google_protobuf_duration_pb.Duration): void;

  clearIgnoreautorelockonstructuremodeList(): void;
  getIgnoreautorelockonstructuremodeList(): Array<nest_trait_occupancy_pb.StructureModeTrait.StructureModeMap[keyof nest_trait_occupancy_pb.StructureModeTrait.StructureModeMap]>;
  setIgnoreautorelockonstructuremodeList(value: Array<nest_trait_occupancy_pb.StructureModeTrait.StructureModeMap[keyof nest_trait_occupancy_pb.StructureModeTrait.StructureModeMap]>): void;
  addIgnoreautorelockonstructuremode(value: nest_trait_occupancy_pb.StructureModeTrait.StructureModeMap[keyof nest_trait_occupancy_pb.StructureModeTrait.StructureModeMap], index?: number): nest_trait_occupancy_pb.StructureModeTrait.StructureModeMap[keyof nest_trait_occupancy_pb.StructureModeTrait.StructureModeMap];

  getOnetouchlock(): boolean;
  setOnetouchlock(value: boolean): void;

  getHomeawayassistlockon(): boolean;
  setHomeawayassistlockon(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnhancedBoltLockSettingsTrait.AsObject;
  static toObject(includeInstance: boolean, msg: EnhancedBoltLockSettingsTrait): EnhancedBoltLockSettingsTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnhancedBoltLockSettingsTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnhancedBoltLockSettingsTrait;
  static deserializeBinaryFromReader(message: EnhancedBoltLockSettingsTrait, reader: jspb.BinaryReader): EnhancedBoltLockSettingsTrait;
}

export namespace EnhancedBoltLockSettingsTrait {
  export type AsObject = {
    autorelockon: boolean,
    autorelockduration?: google_protobuf_duration_pb.Duration.AsObject,
    ignoreautorelockonstructuremodeList: Array<nest_trait_occupancy_pb.StructureModeTrait.StructureModeMap[keyof nest_trait_occupancy_pb.StructureModeTrait.StructureModeMap]>,
    onetouchlock: boolean,
    homeawayassistlockon: boolean,
  }
}

export class SecurityActionOnNFCTokenGlobalSettingsTrait extends jspb.Message {
  getFeatureenabled(): boolean;
  setFeatureenabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecurityActionOnNFCTokenGlobalSettingsTrait.AsObject;
  static toObject(includeInstance: boolean, msg: SecurityActionOnNFCTokenGlobalSettingsTrait): SecurityActionOnNFCTokenGlobalSettingsTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SecurityActionOnNFCTokenGlobalSettingsTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecurityActionOnNFCTokenGlobalSettingsTrait;
  static deserializeBinaryFromReader(message: SecurityActionOnNFCTokenGlobalSettingsTrait, reader: jspb.BinaryReader): SecurityActionOnNFCTokenGlobalSettingsTrait;
}

export namespace SecurityActionOnNFCTokenGlobalSettingsTrait {
  export type AsObject = {
    featureenabled: boolean,
  }
}

export class SecurityAlarmingSettingsTrait extends jspb.Message {
  hasPrealarmingduration(): boolean;
  clearPrealarmingduration(): void;
  getPrealarmingduration(): google_protobuf_duration_pb.Duration | undefined;
  setPrealarmingduration(value?: google_protobuf_duration_pb.Duration): void;

  hasPrealarmingdurationsl1(): boolean;
  clearPrealarmingdurationsl1(): void;
  getPrealarmingdurationsl1(): google_protobuf_duration_pb.Duration | undefined;
  setPrealarmingdurationsl1(value?: google_protobuf_duration_pb.Duration): void;

  getCustomprealarmdurationrulesMap(): jspb.Map<number, SecurityAlarmingSettingsTrait.CustomPreAlarmRule>;
  clearCustomprealarmdurationrulesMap(): void;
  clearAdvancedmodeexceptionsList(): void;
  getAdvancedmodeexceptionsList(): Array<number>;
  setAdvancedmodeexceptionsList(value: Array<number>): void;
  addAdvancedmodeexceptions(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecurityAlarmingSettingsTrait.AsObject;
  static toObject(includeInstance: boolean, msg: SecurityAlarmingSettingsTrait): SecurityAlarmingSettingsTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SecurityAlarmingSettingsTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecurityAlarmingSettingsTrait;
  static deserializeBinaryFromReader(message: SecurityAlarmingSettingsTrait, reader: jspb.BinaryReader): SecurityAlarmingSettingsTrait;
}

export namespace SecurityAlarmingSettingsTrait {
  export type AsObject = {
    prealarmingduration?: google_protobuf_duration_pb.Duration.AsObject,
    prealarmingdurationsl1?: google_protobuf_duration_pb.Duration.AsObject,
    customprealarmdurationrulesMap: Array<[number, SecurityAlarmingSettingsTrait.CustomPreAlarmRule.AsObject]>,
    advancedmodeexceptionsList: Array<number>,
  }

  export class CustomPreAlarmRule extends jspb.Message {
    hasDeviceid(): boolean;
    clearDeviceid(): void;
    getDeviceid(): weave_common_pb.ResourceId | undefined;
    setDeviceid(value?: weave_common_pb.ResourceId): void;

    getState(): SecurityArmTrait.SecurityArmStateMap[keyof SecurityArmTrait.SecurityArmStateMap];
    setState(value: SecurityArmTrait.SecurityArmStateMap[keyof SecurityArmTrait.SecurityArmStateMap]): void;

    getFacttype(): SecurityDecisionFact.SecurityDecisionFactTypeMap[keyof SecurityDecisionFact.SecurityDecisionFactTypeMap];
    setFacttype(value: SecurityDecisionFact.SecurityDecisionFactTypeMap[keyof SecurityDecisionFact.SecurityDecisionFactTypeMap]): void;

    hasPrealarmduration(): boolean;
    clearPrealarmduration(): void;
    getPrealarmduration(): google_protobuf_duration_pb.Duration | undefined;
    setPrealarmduration(value?: google_protobuf_duration_pb.Duration): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomPreAlarmRule.AsObject;
    static toObject(includeInstance: boolean, msg: CustomPreAlarmRule): CustomPreAlarmRule.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomPreAlarmRule, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomPreAlarmRule;
    static deserializeBinaryFromReader(message: CustomPreAlarmRule, reader: jspb.BinaryReader): CustomPreAlarmRule;
  }

  export namespace CustomPreAlarmRule {
    export type AsObject = {
      deviceid?: weave_common_pb.ResourceId.AsObject,
      state: SecurityArmTrait.SecurityArmStateMap[keyof SecurityArmTrait.SecurityArmStateMap],
      facttype: SecurityDecisionFact.SecurityDecisionFactTypeMap[keyof SecurityDecisionFact.SecurityDecisionFactTypeMap],
      prealarmduration?: google_protobuf_duration_pb.Duration.AsObject,
    }
  }
}

export class SecurityArmCommandSettingsTrait extends jspb.Message {
  hasTimeout(): boolean;
  clearTimeout(): void;
  getTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setTimeout(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecurityArmCommandSettingsTrait.AsObject;
  static toObject(includeInstance: boolean, msg: SecurityArmCommandSettingsTrait): SecurityArmCommandSettingsTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SecurityArmCommandSettingsTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecurityArmCommandSettingsTrait;
  static deserializeBinaryFromReader(message: SecurityArmCommandSettingsTrait, reader: jspb.BinaryReader): SecurityArmCommandSettingsTrait;
}

export namespace SecurityArmCommandSettingsTrait {
  export type AsObject = {
    timeout?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class SecurityOpenCloseTrait extends jspb.Message {
  getOpenclosestate(): nest_trait_detector_pb.OpenCloseTrait.OpenCloseStateMap[keyof nest_trait_detector_pb.OpenCloseTrait.OpenCloseStateMap];
  setOpenclosestate(value: nest_trait_detector_pb.OpenCloseTrait.OpenCloseStateMap[keyof nest_trait_detector_pb.OpenCloseTrait.OpenCloseStateMap]): void;

  hasFirstobservedat(): boolean;
  clearFirstobservedat(): void;
  getFirstobservedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFirstobservedat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasFirstobservedatms(): boolean;
  clearFirstobservedatms(): void;
  getFirstobservedatms(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFirstobservedatms(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getBypassrequested(): boolean;
  setBypassrequested(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecurityOpenCloseTrait.AsObject;
  static toObject(includeInstance: boolean, msg: SecurityOpenCloseTrait): SecurityOpenCloseTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SecurityOpenCloseTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecurityOpenCloseTrait;
  static deserializeBinaryFromReader(message: SecurityOpenCloseTrait, reader: jspb.BinaryReader): SecurityOpenCloseTrait;
}

export namespace SecurityOpenCloseTrait {
  export type AsObject = {
    openclosestate: nest_trait_detector_pb.OpenCloseTrait.OpenCloseStateMap[keyof nest_trait_detector_pb.OpenCloseTrait.OpenCloseStateMap],
    firstobservedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    firstobservedatms?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    bypassrequested: boolean,
  }

  export class SecurityOpenCloseEvent extends jspb.Message {
    getOpenclosestate(): nest_trait_detector_pb.OpenCloseTrait.OpenCloseStateMap[keyof nest_trait_detector_pb.OpenCloseTrait.OpenCloseStateMap];
    setOpenclosestate(value: nest_trait_detector_pb.OpenCloseTrait.OpenCloseStateMap[keyof nest_trait_detector_pb.OpenCloseTrait.OpenCloseStateMap]): void;

    getPrioropenclosestate(): nest_trait_detector_pb.OpenCloseTrait.OpenCloseStateMap[keyof nest_trait_detector_pb.OpenCloseTrait.OpenCloseStateMap];
    setPrioropenclosestate(value: nest_trait_detector_pb.OpenCloseTrait.OpenCloseStateMap[keyof nest_trait_detector_pb.OpenCloseTrait.OpenCloseStateMap]): void;

    getBypassrequested(): boolean;
    setBypassrequested(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SecurityOpenCloseEvent.AsObject;
    static toObject(includeInstance: boolean, msg: SecurityOpenCloseEvent): SecurityOpenCloseEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SecurityOpenCloseEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SecurityOpenCloseEvent;
    static deserializeBinaryFromReader(message: SecurityOpenCloseEvent, reader: jspb.BinaryReader): SecurityOpenCloseEvent;
  }

  export namespace SecurityOpenCloseEvent {
    export type AsObject = {
      openclosestate: nest_trait_detector_pb.OpenCloseTrait.OpenCloseStateMap[keyof nest_trait_detector_pb.OpenCloseTrait.OpenCloseStateMap],
      prioropenclosestate: nest_trait_detector_pb.OpenCloseTrait.OpenCloseStateMap[keyof nest_trait_detector_pb.OpenCloseTrait.OpenCloseStateMap],
      bypassrequested: boolean,
    }
  }
}

export class DistributedSecurityTrait extends jspb.Message {
  hasMaster(): boolean;
  clearMaster(): void;
  getMaster(): weave_common_pb.ResourceId | undefined;
  setMaster(value?: weave_common_pb.ResourceId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DistributedSecurityTrait.AsObject;
  static toObject(includeInstance: boolean, msg: DistributedSecurityTrait): DistributedSecurityTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DistributedSecurityTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DistributedSecurityTrait;
  static deserializeBinaryFromReader(message: DistributedSecurityTrait, reader: jspb.BinaryReader): DistributedSecurityTrait;
}

export namespace DistributedSecurityTrait {
  export type AsObject = {
    master?: weave_common_pb.ResourceId.AsObject,
  }
}

export class SecurityActionOnUnlockSettingsTrait extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  getAction(): SecurityActionOnUnlockSettingsTrait.SecurityActionMap[keyof SecurityActionOnUnlockSettingsTrait.SecurityActionMap];
  setAction(value: SecurityActionOnUnlockSettingsTrait.SecurityActionMap[keyof SecurityActionOnUnlockSettingsTrait.SecurityActionMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecurityActionOnUnlockSettingsTrait.AsObject;
  static toObject(includeInstance: boolean, msg: SecurityActionOnUnlockSettingsTrait): SecurityActionOnUnlockSettingsTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SecurityActionOnUnlockSettingsTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecurityActionOnUnlockSettingsTrait;
  static deserializeBinaryFromReader(message: SecurityActionOnUnlockSettingsTrait, reader: jspb.BinaryReader): SecurityActionOnUnlockSettingsTrait;
}

export namespace SecurityActionOnUnlockSettingsTrait {
  export type AsObject = {
    enabled: boolean,
    action: SecurityActionOnUnlockSettingsTrait.SecurityActionMap[keyof SecurityActionOnUnlockSettingsTrait.SecurityActionMap],
  }

  export interface SecurityActionMap {
    SECURITY_ACTION_UNSPECIFIED: 0;
    SECURITY_ACTION_DISARM_TO_SL0: 1;
  }

  export const SecurityAction: SecurityActionMap;
}

