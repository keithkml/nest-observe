// package: weave.trait.heartbeat
// file: weave/trait/heartbeat.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class LivenessTrait extends jspb.Message {
  getStatus(): LivenessTrait.LivenessDeviceStatusMap[keyof LivenessTrait.LivenessDeviceStatusMap];
  setStatus(value: LivenessTrait.LivenessDeviceStatusMap[keyof LivenessTrait.LivenessDeviceStatusMap]): void;

  hasTimestatuschanged(): boolean;
  clearTimestatuschanged(): void;
  getTimestatuschanged(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestatuschanged(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasMaxinactivityduration(): boolean;
  clearMaxinactivityduration(): void;
  getMaxinactivityduration(): google_protobuf_duration_pb.Duration | undefined;
  setMaxinactivityduration(value?: google_protobuf_duration_pb.Duration): void;

  getHeartbeatstatus(): LivenessTrait.LivenessDeviceStatusMap[keyof LivenessTrait.LivenessDeviceStatusMap];
  setHeartbeatstatus(value: LivenessTrait.LivenessDeviceStatusMap[keyof LivenessTrait.LivenessDeviceStatusMap]): void;

  hasTimeheartbeatstatuschanged(): boolean;
  clearTimeheartbeatstatuschanged(): void;
  getTimeheartbeatstatuschanged(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimeheartbeatstatuschanged(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasNotifyrequestunresponsiveness(): boolean;
  clearNotifyrequestunresponsiveness(): void;
  getNotifyrequestunresponsiveness(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setNotifyrequestunresponsiveness(value?: google_protobuf_wrappers_pb.BoolValue): void;

  hasNotifyrequestunresponsivenesstimestatuschanged(): boolean;
  clearNotifyrequestunresponsivenesstimestatuschanged(): void;
  getNotifyrequestunresponsivenesstimestatuschanged(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setNotifyrequestunresponsivenesstimestatuschanged(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCommandrequestunresponsiveness(): boolean;
  clearCommandrequestunresponsiveness(): void;
  getCommandrequestunresponsiveness(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setCommandrequestunresponsiveness(value?: google_protobuf_wrappers_pb.BoolValue): void;

  hasCommandrequestunresponsivenesstimestatuschanged(): boolean;
  clearCommandrequestunresponsivenesstimestatuschanged(): void;
  getCommandrequestunresponsivenesstimestatuschanged(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCommandrequestunresponsivenesstimestatuschanged(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LivenessTrait.AsObject;
  static toObject(includeInstance: boolean, msg: LivenessTrait): LivenessTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LivenessTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LivenessTrait;
  static deserializeBinaryFromReader(message: LivenessTrait, reader: jspb.BinaryReader): LivenessTrait;
}

export namespace LivenessTrait {
  export type AsObject = {
    status: LivenessTrait.LivenessDeviceStatusMap[keyof LivenessTrait.LivenessDeviceStatusMap],
    timestatuschanged?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    maxinactivityduration?: google_protobuf_duration_pb.Duration.AsObject,
    heartbeatstatus: LivenessTrait.LivenessDeviceStatusMap[keyof LivenessTrait.LivenessDeviceStatusMap],
    timeheartbeatstatuschanged?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    notifyrequestunresponsiveness?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    notifyrequestunresponsivenesstimestatuschanged?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    commandrequestunresponsiveness?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    commandrequestunresponsivenesstimestatuschanged?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export class LivenessChangeEvent extends jspb.Message {
    getStatus(): LivenessTrait.LivenessDeviceStatusMap[keyof LivenessTrait.LivenessDeviceStatusMap];
    setStatus(value: LivenessTrait.LivenessDeviceStatusMap[keyof LivenessTrait.LivenessDeviceStatusMap]): void;

    getHeartbeatstatus(): LivenessTrait.LivenessDeviceStatusMap[keyof LivenessTrait.LivenessDeviceStatusMap];
    setHeartbeatstatus(value: LivenessTrait.LivenessDeviceStatusMap[keyof LivenessTrait.LivenessDeviceStatusMap]): void;

    hasNotifyrequestunresponsiveness(): boolean;
    clearNotifyrequestunresponsiveness(): void;
    getNotifyrequestunresponsiveness(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setNotifyrequestunresponsiveness(value?: google_protobuf_wrappers_pb.BoolValue): void;

    hasCommandrequestunresponsiveness(): boolean;
    clearCommandrequestunresponsiveness(): void;
    getCommandrequestunresponsiveness(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setCommandrequestunresponsiveness(value?: google_protobuf_wrappers_pb.BoolValue): void;

    getPrevstatus(): LivenessTrait.LivenessDeviceStatusMap[keyof LivenessTrait.LivenessDeviceStatusMap];
    setPrevstatus(value: LivenessTrait.LivenessDeviceStatusMap[keyof LivenessTrait.LivenessDeviceStatusMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LivenessChangeEvent.AsObject;
    static toObject(includeInstance: boolean, msg: LivenessChangeEvent): LivenessChangeEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LivenessChangeEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LivenessChangeEvent;
    static deserializeBinaryFromReader(message: LivenessChangeEvent, reader: jspb.BinaryReader): LivenessChangeEvent;
  }

  export namespace LivenessChangeEvent {
    export type AsObject = {
      status: LivenessTrait.LivenessDeviceStatusMap[keyof LivenessTrait.LivenessDeviceStatusMap],
      heartbeatstatus: LivenessTrait.LivenessDeviceStatusMap[keyof LivenessTrait.LivenessDeviceStatusMap],
      notifyrequestunresponsiveness?: google_protobuf_wrappers_pb.BoolValue.AsObject,
      commandrequestunresponsiveness?: google_protobuf_wrappers_pb.BoolValue.AsObject,
      prevstatus: LivenessTrait.LivenessDeviceStatusMap[keyof LivenessTrait.LivenessDeviceStatusMap],
    }
  }

  export interface LivenessDeviceStatusMap {
    LIVENESS_DEVICE_STATUS_UNSPECIFIED: 0;
    LIVENESS_DEVICE_STATUS_ONLINE: 1;
    LIVENESS_DEVICE_STATUS_UNREACHABLE: 2;
    LIVENESS_DEVICE_STATUS_UNINITIALIZED: 3;
    LIVENESS_DEVICE_STATUS_REBOOTING: 4;
    LIVENESS_DEVICE_STATUS_UPGRADING: 5;
    LIVENESS_DEVICE_STATUS_SCHEDULED_DOWN: 6;
  }

  export const LivenessDeviceStatus: LivenessDeviceStatusMap;
}

