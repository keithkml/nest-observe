// package: weave.trait.peerdevices
// file: weave/trait/peerdevices.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class PeerDevicesTrait extends jspb.Message {
  clearDevicesList(): void;
  getDevicesList(): Array<PeerDevicesTrait.PeerDevice>;
  setDevicesList(value: Array<PeerDevicesTrait.PeerDevice>): void;
  addDevices(value?: PeerDevicesTrait.PeerDevice, index?: number): PeerDevicesTrait.PeerDevice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PeerDevicesTrait.AsObject;
  static toObject(includeInstance: boolean, msg: PeerDevicesTrait): PeerDevicesTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PeerDevicesTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PeerDevicesTrait;
  static deserializeBinaryFromReader(message: PeerDevicesTrait, reader: jspb.BinaryReader): PeerDevicesTrait;
}

export namespace PeerDevicesTrait {
  export type AsObject = {
    devicesList: Array<PeerDevicesTrait.PeerDevice.AsObject>,
  }

  export class PeerDevice extends jspb.Message {
    hasData(): boolean;
    clearData(): void;
    getData(): PeerDevicesTrait.PeerDevice.PeerDeviceInfo | undefined;
    setData(value?: PeerDevicesTrait.PeerDevice.PeerDeviceInfo): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PeerDevice.AsObject;
    static toObject(includeInstance: boolean, msg: PeerDevice): PeerDevice.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PeerDevice, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PeerDevice;
    static deserializeBinaryFromReader(message: PeerDevice, reader: jspb.BinaryReader): PeerDevice;
  }

  export namespace PeerDevice {
    export type AsObject = {
      data?: PeerDevicesTrait.PeerDevice.PeerDeviceInfo.AsObject,
    }

    export class PeerDeviceInfo extends jspb.Message {
      hasDeviceId(): boolean;
      clearDeviceId(): void;
      getDeviceId(): String_Indirect | undefined;
      setDeviceId(value?: String_Indirect): void;

      hasDeviceType(): boolean;
      clearDeviceType(): void;
      getDeviceType(): String_Indirect | undefined;
      setDeviceType(value?: String_Indirect): void;

      getFwVersion(): string;
      setFwVersion(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): PeerDeviceInfo.AsObject;
      static toObject(includeInstance: boolean, msg: PeerDeviceInfo): PeerDeviceInfo.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: PeerDeviceInfo, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): PeerDeviceInfo;
      static deserializeBinaryFromReader(message: PeerDeviceInfo, reader: jspb.BinaryReader): PeerDeviceInfo;
    }

    export namespace PeerDeviceInfo {
      export type AsObject = {
        deviceId?: String_Indirect.AsObject,
        deviceType?: String_Indirect.AsObject,
        fwVersion: string,
      }
    }
  }
}

export class String_Indirect extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): String_Indirect.AsObject;
  static toObject(includeInstance: boolean, msg: String_Indirect): String_Indirect.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: String_Indirect, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): String_Indirect;
  static deserializeBinaryFromReader(message: String_Indirect, reader: jspb.BinaryReader): String_Indirect;
}

export namespace String_Indirect {
  export type AsObject = {
    value: string,
  }
}

export class Float_Indirect extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Float_Indirect.AsObject;
  static toObject(includeInstance: boolean, msg: Float_Indirect): Float_Indirect.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Float_Indirect, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Float_Indirect;
  static deserializeBinaryFromReader(message: Float_Indirect, reader: jspb.BinaryReader): Float_Indirect;
}

export namespace Float_Indirect {
  export type AsObject = {
    value: number,
  }
}

export class Int32_Indirect extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Int32_Indirect.AsObject;
  static toObject(includeInstance: boolean, msg: Int32_Indirect): Int32_Indirect.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Int32_Indirect, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Int32_Indirect;
  static deserializeBinaryFromReader(message: Int32_Indirect, reader: jspb.BinaryReader): Int32_Indirect;
}

export namespace Int32_Indirect {
  export type AsObject = {
    value: number,
  }
}

