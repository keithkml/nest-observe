// package: nest.trait.detector
// file: nest/trait/detector.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class OpenCloseTrait extends jspb.Message {
  getOpenclosestate(): OpenCloseTrait.OpenCloseStateMap[keyof OpenCloseTrait.OpenCloseStateMap];
  setOpenclosestate(value: OpenCloseTrait.OpenCloseStateMap[keyof OpenCloseTrait.OpenCloseStateMap]): void;

  hasFirstobservedat(): boolean;
  clearFirstobservedat(): void;
  getFirstobservedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFirstobservedat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasFirstobservedatms(): boolean;
  clearFirstobservedatms(): void;
  getFirstobservedatms(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFirstobservedatms(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenCloseTrait.AsObject;
  static toObject(includeInstance: boolean, msg: OpenCloseTrait): OpenCloseTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OpenCloseTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenCloseTrait;
  static deserializeBinaryFromReader(message: OpenCloseTrait, reader: jspb.BinaryReader): OpenCloseTrait;
}

export namespace OpenCloseTrait {
  export type AsObject = {
    openclosestate: OpenCloseTrait.OpenCloseStateMap[keyof OpenCloseTrait.OpenCloseStateMap],
    firstobservedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    firstobservedatms?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export class OpenCloseEvent extends jspb.Message {
    getOpenclosestate(): OpenCloseTrait.OpenCloseStateMap[keyof OpenCloseTrait.OpenCloseStateMap];
    setOpenclosestate(value: OpenCloseTrait.OpenCloseStateMap[keyof OpenCloseTrait.OpenCloseStateMap]): void;

    getPrioropenclosestate(): OpenCloseTrait.OpenCloseStateMap[keyof OpenCloseTrait.OpenCloseStateMap];
    setPrioropenclosestate(value: OpenCloseTrait.OpenCloseStateMap[keyof OpenCloseTrait.OpenCloseStateMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OpenCloseEvent.AsObject;
    static toObject(includeInstance: boolean, msg: OpenCloseEvent): OpenCloseEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OpenCloseEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OpenCloseEvent;
    static deserializeBinaryFromReader(message: OpenCloseEvent, reader: jspb.BinaryReader): OpenCloseEvent;
  }

  export namespace OpenCloseEvent {
    export type AsObject = {
      openclosestate: OpenCloseTrait.OpenCloseStateMap[keyof OpenCloseTrait.OpenCloseStateMap],
      prioropenclosestate: OpenCloseTrait.OpenCloseStateMap[keyof OpenCloseTrait.OpenCloseStateMap],
    }
  }

  export interface OpenCloseStateMap {
    OPEN_CLOSE_STATE_UNSPECIFIED: 0;
    OPEN_CLOSE_STATE_CLOSED: 1;
    OPEN_CLOSE_STATE_OPEN: 2;
    OPEN_CLOSE_STATE_UNKNOWN: 3;
    OPEN_CLOSE_STATE_INVALID_CALIBRATION: 4;
  }

  export const OpenCloseState: OpenCloseStateMap;
}

export class AmbientMotionTrait extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AmbientMotionTrait.AsObject;
  static toObject(includeInstance: boolean, msg: AmbientMotionTrait): AmbientMotionTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AmbientMotionTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AmbientMotionTrait;
  static deserializeBinaryFromReader(message: AmbientMotionTrait, reader: jspb.BinaryReader): AmbientMotionTrait;
}

export namespace AmbientMotionTrait {
  export type AsObject = {
  }

  export class AmbientMotionEvent extends jspb.Message {
    hasStartmotion(): boolean;
    clearStartmotion(): void;
    getStartmotion(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartmotion(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasMaxholdoff(): boolean;
    clearMaxholdoff(): void;
    getMaxholdoff(): google_protobuf_duration_pb.Duration | undefined;
    setMaxholdoff(value?: google_protobuf_duration_pb.Duration): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AmbientMotionEvent.AsObject;
    static toObject(includeInstance: boolean, msg: AmbientMotionEvent): AmbientMotionEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AmbientMotionEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AmbientMotionEvent;
    static deserializeBinaryFromReader(message: AmbientMotionEvent, reader: jspb.BinaryReader): AmbientMotionEvent;
  }

  export namespace AmbientMotionEvent {
    export type AsObject = {
      startmotion?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      maxholdoff?: google_protobuf_duration_pb.Duration.AsObject,
    }
  }
}

export class AmbientMotionTimingSettingsTrait extends jspb.Message {
  hasMaxholdoff(): boolean;
  clearMaxholdoff(): void;
  getMaxholdoff(): google_protobuf_duration_pb.Duration | undefined;
  setMaxholdoff(value?: google_protobuf_duration_pb.Duration): void;

  getOverridemaxholdoff(): boolean;
  setOverridemaxholdoff(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AmbientMotionTimingSettingsTrait.AsObject;
  static toObject(includeInstance: boolean, msg: AmbientMotionTimingSettingsTrait): AmbientMotionTimingSettingsTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AmbientMotionTimingSettingsTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AmbientMotionTimingSettingsTrait;
  static deserializeBinaryFromReader(message: AmbientMotionTimingSettingsTrait, reader: jspb.BinaryReader): AmbientMotionTimingSettingsTrait;
}

export namespace AmbientMotionTimingSettingsTrait {
  export type AsObject = {
    maxholdoff?: google_protobuf_duration_pb.Duration.AsObject,
    overridemaxholdoff: boolean,
  }
}

export class AmbientMotionSettingsTrait extends jspb.Message {
  getEnabledetection(): boolean;
  setEnabledetection(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AmbientMotionSettingsTrait.AsObject;
  static toObject(includeInstance: boolean, msg: AmbientMotionSettingsTrait): AmbientMotionSettingsTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AmbientMotionSettingsTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AmbientMotionSettingsTrait;
  static deserializeBinaryFromReader(message: AmbientMotionSettingsTrait, reader: jspb.BinaryReader): AmbientMotionSettingsTrait;
}

export namespace AmbientMotionSettingsTrait {
  export type AsObject = {
    enabledetection: boolean,
  }
}

