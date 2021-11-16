// package: nest.messages
// file: nest/messages.proto

import * as jspb from "google-protobuf";

export class SchemaVersion extends jspb.Message {
  getCurrentversion(): number;
  setCurrentversion(value: number): void;

  getMincompatversion(): number;
  setMincompatversion(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchemaVersion.AsObject;
  static toObject(includeInstance: boolean, msg: SchemaVersion): SchemaVersion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SchemaVersion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchemaVersion;
  static deserializeBinaryFromReader(message: SchemaVersion, reader: jspb.BinaryReader): SchemaVersion;
}

export namespace SchemaVersion {
  export type AsObject = {
    currentversion: number,
    mincompatversion: number,
  }
}

