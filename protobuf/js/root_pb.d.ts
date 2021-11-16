// package: nest.rpc
// file: root.proto

import * as jspb from "google-protobuf";
import * as nest_trait_hvac_pb from "./nest/trait/hvac_pb";
import * as nest_trait_sensor_pb from "./nest/trait/sensor_pb";
import * as nest_trait_structure_pb from "./nest/trait/structure_pb";
import * as weave_trait_peerdevices_pb from "./weave/trait/peerdevices_pb";
import * as nest_trait_located_pb from "./nest/trait/located_pb";
import * as weave_trait_description_pb from "./weave/trait/description_pb";
import * as nest_trait_user_pb from "./nest/trait/user_pb";
import * as weave_trait_heartbeat_pb from "./weave/trait/heartbeat_pb";
import * as weave_common_pb from "./weave/common_pb";
import * as weave_trait_security_pb from "./weave/trait/security_pb";
import * as weave_trait_power_pb from "./weave/trait/power_pb";
import * as nest_trait_security_pb from "./nest/trait/security_pb";
import * as nest_trait_detector_pb from "./nest/trait/detector_pb";
import * as nest_messages_pb from "./nest/messages_pb";
import * as nestlabs_gateway_v1_pb from "./nestlabs/gateway/v1_pb";
import * as rpc_pb from "./rpc_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class ObjectIdPair extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  getUuid(): string;
  setUuid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObjectIdPair.AsObject;
  static toObject(includeInstance: boolean, msg: ObjectIdPair): ObjectIdPair.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObjectIdPair, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObjectIdPair;
  static deserializeBinaryFromReader(message: ObjectIdPair, reader: jspb.BinaryReader): ObjectIdPair;
}

export namespace ObjectIdPair {
  export type AsObject = {
    id: string,
    key: string,
    uuid: string,
  }
}

export class DynamicProp_Indirect extends jspb.Message {
  hasProperty(): boolean;
  clearProperty(): void;
  getProperty(): google_protobuf_any_pb.Any | undefined;
  setProperty(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynamicProp_Indirect.AsObject;
  static toObject(includeInstance: boolean, msg: DynamicProp_Indirect): DynamicProp_Indirect.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DynamicProp_Indirect, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynamicProp_Indirect;
  static deserializeBinaryFromReader(message: DynamicProp_Indirect, reader: jspb.BinaryReader): DynamicProp_Indirect;
}

export namespace DynamicProp_Indirect {
  export type AsObject = {
    property?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class TraitGetProperty extends jspb.Message {
  hasObject(): boolean;
  clearObject(): void;
  getObject(): ObjectIdPair | undefined;
  setObject(value?: ObjectIdPair): void;

  hasData(): boolean;
  clearData(): void;
  getData(): DynamicProp_Indirect | undefined;
  setData(value?: DynamicProp_Indirect): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TraitGetProperty.AsObject;
  static toObject(includeInstance: boolean, msg: TraitGetProperty): TraitGetProperty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TraitGetProperty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TraitGetProperty;
  static deserializeBinaryFromReader(message: TraitGetProperty, reader: jspb.BinaryReader): TraitGetProperty;
}

export namespace TraitGetProperty {
  export type AsObject = {
    object?: ObjectIdPair.AsObject,
    data?: DynamicProp_Indirect.AsObject,
  }
}

export class TraitSetProperty extends jspb.Message {
  hasObject(): boolean;
  clearObject(): void;
  getObject(): ObjectIdPair | undefined;
  setObject(value?: ObjectIdPair): void;

  hasProperty(): boolean;
  clearProperty(): void;
  getProperty(): google_protobuf_any_pb.Any | undefined;
  setProperty(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TraitSetProperty.AsObject;
  static toObject(includeInstance: boolean, msg: TraitSetProperty): TraitSetProperty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TraitSetProperty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TraitSetProperty;
  static deserializeBinaryFromReader(message: TraitSetProperty, reader: jspb.BinaryReader): TraitSetProperty;
}

export namespace TraitSetProperty {
  export type AsObject = {
    object?: ObjectIdPair.AsObject,
    property?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class NestMessage extends jspb.Message {
  clearSetList(): void;
  getSetList(): Array<TraitSetProperty>;
  setSetList(value: Array<TraitSetProperty>): void;
  addSet(value?: TraitSetProperty, index?: number): TraitSetProperty;

  clearGetList(): void;
  getGetList(): Array<TraitGetProperty>;
  setGetList(value: Array<TraitGetProperty>): void;
  addGet(value?: TraitGetProperty, index?: number): TraitGetProperty;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: NestMessage): NestMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NestMessage;
  static deserializeBinaryFromReader(message: NestMessage, reader: jspb.BinaryReader): NestMessage;
}

export namespace NestMessage {
  export type AsObject = {
    setList: Array<TraitSetProperty.AsObject>,
    getList: Array<TraitGetProperty.AsObject>,
  }
}

export class StreamBody extends jspb.Message {
  clearMessageList(): void;
  getMessageList(): Array<NestMessage>;
  setMessageList(value: Array<NestMessage>): void;
  addMessage(value?: NestMessage, index?: number): NestMessage;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): rpc_pb.Status | undefined;
  setStatus(value?: rpc_pb.Status): void;

  clearNoopList(): void;
  getNoopList(): Array<Uint8Array | string>;
  getNoopList_asU8(): Array<Uint8Array>;
  getNoopList_asB64(): Array<string>;
  setNoopList(value: Array<Uint8Array | string>): void;
  addNoop(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamBody.AsObject;
  static toObject(includeInstance: boolean, msg: StreamBody): StreamBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamBody;
  static deserializeBinaryFromReader(message: StreamBody, reader: jspb.BinaryReader): StreamBody;
}

export namespace StreamBody {
  export type AsObject = {
    messageList: Array<NestMessage.AsObject>,
    status?: rpc_pb.Status.AsObject,
    noopList: Array<Uint8Array | string>,
  }
}

