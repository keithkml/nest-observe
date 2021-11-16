// package: nest.trait.sensor
// file: nest/trait/sensor.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class HumidityTrait extends jspb.Message {
  hasHumidity(): boolean;
  clearHumidity(): void;
  getHumidity(): HumidityTrait.X1 | undefined;
  setHumidity(value?: HumidityTrait.X1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HumidityTrait.AsObject;
  static toObject(includeInstance: boolean, msg: HumidityTrait): HumidityTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HumidityTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HumidityTrait;
  static deserializeBinaryFromReader(message: HumidityTrait, reader: jspb.BinaryReader): HumidityTrait;
}

export namespace HumidityTrait {
  export type AsObject = {
    humidity?: HumidityTrait.X1.AsObject,
  }

  export class X1 extends jspb.Message {
    hasValue(): boolean;
    clearValue(): void;
    getValue(): Float_Indirect | undefined;
    setValue(value?: Float_Indirect): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): X1.AsObject;
    static toObject(includeInstance: boolean, msg: X1): X1.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: X1, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): X1;
    static deserializeBinaryFromReader(message: X1, reader: jspb.BinaryReader): X1;
  }

  export namespace X1 {
    export type AsObject = {
      value?: Float_Indirect.AsObject,
    }
  }
}

export class TemperatureTrait extends jspb.Message {
  hasTemperature(): boolean;
  clearTemperature(): void;
  getTemperature(): TemperatureTrait.X1 | undefined;
  setTemperature(value?: TemperatureTrait.X1): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TemperatureTrait.AsObject;
  static toObject(includeInstance: boolean, msg: TemperatureTrait): TemperatureTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TemperatureTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TemperatureTrait;
  static deserializeBinaryFromReader(message: TemperatureTrait, reader: jspb.BinaryReader): TemperatureTrait;
}

export namespace TemperatureTrait {
  export type AsObject = {
    temperature?: TemperatureTrait.X1.AsObject,
  }

  export class X1 extends jspb.Message {
    hasValue(): boolean;
    clearValue(): void;
    getValue(): Float_Indirect | undefined;
    setValue(value?: Float_Indirect): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): X1.AsObject;
    static toObject(includeInstance: boolean, msg: X1): X1.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: X1, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): X1;
    static deserializeBinaryFromReader(message: X1, reader: jspb.BinaryReader): X1;
  }

  export namespace X1 {
    export type AsObject = {
      value?: Float_Indirect.AsObject,
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

