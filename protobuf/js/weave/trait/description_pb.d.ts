// package: weave.trait.description
// file: weave/trait/description.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class DeviceIdentityTrait extends jspb.Message {
  hasManufacturer(): boolean;
  clearManufacturer(): void;
  getManufacturer(): String_Indirect | undefined;
  setManufacturer(value?: String_Indirect): void;

  hasModelName(): boolean;
  clearModelName(): void;
  getModelName(): String_Indirect | undefined;
  setModelName(value?: String_Indirect): void;

  getSerialNumber(): string;
  setSerialNumber(value: string): void;

  getFwVersion(): string;
  setFwVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceIdentityTrait.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceIdentityTrait): DeviceIdentityTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceIdentityTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceIdentityTrait;
  static deserializeBinaryFromReader(message: DeviceIdentityTrait, reader: jspb.BinaryReader): DeviceIdentityTrait;
}

export namespace DeviceIdentityTrait {
  export type AsObject = {
    manufacturer?: String_Indirect.AsObject,
    modelName?: String_Indirect.AsObject,
    serialNumber: string,
    fwVersion: string,
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

