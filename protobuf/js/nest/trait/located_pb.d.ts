// package: nest.trait.located
// file: nest/trait/located.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class DeviceLocatedSettingsTrait extends jspb.Message {
  hasWhereId(): boolean;
  clearWhereId(): void;
  getWhereId(): String_Indirect | undefined;
  setWhereId(value?: String_Indirect): void;

  hasFixturetype(): boolean;
  clearFixturetype(): void;
  getFixturetype(): LocatedTrait.LocatedFixtureType | undefined;
  setFixturetype(value?: LocatedTrait.LocatedFixtureType): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): Int32_Indirect | undefined;
  setTimestamp(value?: Int32_Indirect): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceLocatedSettingsTrait.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceLocatedSettingsTrait): DeviceLocatedSettingsTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceLocatedSettingsTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceLocatedSettingsTrait;
  static deserializeBinaryFromReader(message: DeviceLocatedSettingsTrait, reader: jspb.BinaryReader): DeviceLocatedSettingsTrait;
}

export namespace DeviceLocatedSettingsTrait {
  export type AsObject = {
    whereId?: String_Indirect.AsObject,
    fixturetype?: LocatedTrait.LocatedFixtureType.AsObject,
    timestamp?: Int32_Indirect.AsObject,
  }
}

export class LocatedAnnotationsTrait extends jspb.Message {
  clearAnnotationsList(): void;
  getAnnotationsList(): Array<LocatedAnnotationsTrait.Annotation>;
  setAnnotationsList(value: Array<LocatedAnnotationsTrait.Annotation>): void;
  addAnnotations(value?: LocatedAnnotationsTrait.Annotation, index?: number): LocatedAnnotationsTrait.Annotation;

  clearCustomAnnotationsList(): void;
  getCustomAnnotationsList(): Array<LocatedAnnotationsTrait.Annotation>;
  setCustomAnnotationsList(value: Array<LocatedAnnotationsTrait.Annotation>): void;
  addCustomAnnotations(value?: LocatedAnnotationsTrait.Annotation, index?: number): LocatedAnnotationsTrait.Annotation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocatedAnnotationsTrait.AsObject;
  static toObject(includeInstance: boolean, msg: LocatedAnnotationsTrait): LocatedAnnotationsTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocatedAnnotationsTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocatedAnnotationsTrait;
  static deserializeBinaryFromReader(message: LocatedAnnotationsTrait, reader: jspb.BinaryReader): LocatedAnnotationsTrait;
}

export namespace LocatedAnnotationsTrait {
  export type AsObject = {
    annotationsList: Array<LocatedAnnotationsTrait.Annotation.AsObject>,
    customAnnotationsList: Array<LocatedAnnotationsTrait.Annotation.AsObject>,
  }

  export class Annotation extends jspb.Message {
    hasInfo(): boolean;
    clearInfo(): void;
    getInfo(): LocatedAnnotationsTrait.Annotation.AnnotationInfo | undefined;
    setInfo(value?: LocatedAnnotationsTrait.Annotation.AnnotationInfo): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Annotation.AsObject;
    static toObject(includeInstance: boolean, msg: Annotation): Annotation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Annotation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Annotation;
    static deserializeBinaryFromReader(message: Annotation, reader: jspb.BinaryReader): Annotation;
  }

  export namespace Annotation {
    export type AsObject = {
      info?: LocatedAnnotationsTrait.Annotation.AnnotationInfo.AsObject,
    }

    export class AnnotationInfo extends jspb.Message {
      hasId(): boolean;
      clearId(): void;
      getId(): String_Indirect | undefined;
      setId(value?: String_Indirect): void;

      hasName(): boolean;
      clearName(): void;
      getName(): String_Indirect | undefined;
      setName(value?: String_Indirect): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): AnnotationInfo.AsObject;
      static toObject(includeInstance: boolean, msg: AnnotationInfo): AnnotationInfo.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: AnnotationInfo, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): AnnotationInfo;
      static deserializeBinaryFromReader(message: AnnotationInfo, reader: jspb.BinaryReader): AnnotationInfo;
    }

    export namespace AnnotationInfo {
      export type AsObject = {
        id?: String_Indirect.AsObject,
        name?: String_Indirect.AsObject,
      }
    }
  }
}

export class LocatedTrait extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocatedTrait.AsObject;
  static toObject(includeInstance: boolean, msg: LocatedTrait): LocatedTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocatedTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocatedTrait;
  static deserializeBinaryFromReader(message: LocatedTrait, reader: jspb.BinaryReader): LocatedTrait;
}

export namespace LocatedTrait {
  export type AsObject = {
  }

  export class LocatedFixtureType extends jspb.Message {
    getMajortype(): LocatedTrait.LocatedMajorFixtureTypeMap[keyof LocatedTrait.LocatedMajorFixtureTypeMap];
    setMajortype(value: LocatedTrait.LocatedMajorFixtureTypeMap[keyof LocatedTrait.LocatedMajorFixtureTypeMap]): void;

    getMinortypedoor(): LocatedTrait.LocatedMinorFixtureTypeDoorMap[keyof LocatedTrait.LocatedMinorFixtureTypeDoorMap];
    setMinortypedoor(value: LocatedTrait.LocatedMinorFixtureTypeDoorMap[keyof LocatedTrait.LocatedMinorFixtureTypeDoorMap]): void;

    getMinortypewindow(): LocatedTrait.LocatedMinorFixtureTypeWindowMap[keyof LocatedTrait.LocatedMinorFixtureTypeWindowMap];
    setMinortypewindow(value: LocatedTrait.LocatedMinorFixtureTypeWindowMap[keyof LocatedTrait.LocatedMinorFixtureTypeWindowMap]): void;

    getMinortypewall(): LocatedTrait.LocatedMinorFixtureTypeWallMap[keyof LocatedTrait.LocatedMinorFixtureTypeWallMap];
    setMinortypewall(value: LocatedTrait.LocatedMinorFixtureTypeWallMap[keyof LocatedTrait.LocatedMinorFixtureTypeWallMap]): void;

    getMinortypeobject(): LocatedTrait.LocatedMinorFixtureTypeObjectMap[keyof LocatedTrait.LocatedMinorFixtureTypeObjectMap];
    setMinortypeobject(value: LocatedTrait.LocatedMinorFixtureTypeObjectMap[keyof LocatedTrait.LocatedMinorFixtureTypeObjectMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LocatedFixtureType.AsObject;
    static toObject(includeInstance: boolean, msg: LocatedFixtureType): LocatedFixtureType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LocatedFixtureType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LocatedFixtureType;
    static deserializeBinaryFromReader(message: LocatedFixtureType, reader: jspb.BinaryReader): LocatedFixtureType;
  }

  export namespace LocatedFixtureType {
    export type AsObject = {
      majortype: LocatedTrait.LocatedMajorFixtureTypeMap[keyof LocatedTrait.LocatedMajorFixtureTypeMap],
      minortypedoor: LocatedTrait.LocatedMinorFixtureTypeDoorMap[keyof LocatedTrait.LocatedMinorFixtureTypeDoorMap],
      minortypewindow: LocatedTrait.LocatedMinorFixtureTypeWindowMap[keyof LocatedTrait.LocatedMinorFixtureTypeWindowMap],
      minortypewall: LocatedTrait.LocatedMinorFixtureTypeWallMap[keyof LocatedTrait.LocatedMinorFixtureTypeWallMap],
      minortypeobject: LocatedTrait.LocatedMinorFixtureTypeObjectMap[keyof LocatedTrait.LocatedMinorFixtureTypeObjectMap],
    }
  }

  export interface LocatedMajorFixtureTypeMap {
    LOCATED_MAJOR_FIXTURE_TYPE_UNSPECIFIED: 0;
    LOCATED_MAJOR_FIXTURE_TYPE_DOOR: 1;
    LOCATED_MAJOR_FIXTURE_TYPE_WINDOW: 2;
    LOCATED_MAJOR_FIXTURE_TYPE_WALL: 3;
    LOCATED_MAJOR_FIXTURE_TYPE_OBJECT: 4;
  }

  export const LocatedMajorFixtureType: LocatedMajorFixtureTypeMap;

  export interface LocatedMinorFixtureTypeDoorMap {
    LOCATED_MINOR_FIXTURE_TYPE_DOOR_UNSPECIFIED: 0;
    LOCATED_MINOR_FIXTURE_TYPE_DOOR_GENERIC: 1;
    LOCATED_MINOR_FIXTURE_TYPE_DOOR_HINGED: 2;
    LOCATED_MINOR_FIXTURE_TYPE_DOOR_FRENCH: 3;
    LOCATED_MINOR_FIXTURE_TYPE_DOOR_SLIDING: 4;
    LOCATED_MINOR_FIXTURE_TYPE_DOOR_GARAGE_SEGMENTED: 5;
    LOCATED_MINOR_FIXTURE_TYPE_DOOR_GARAGE_SINGLE_PANEL: 6;
  }

  export const LocatedMinorFixtureTypeDoor: LocatedMinorFixtureTypeDoorMap;

  export interface LocatedMinorFixtureTypeWindowMap {
    LOCATED_MINOR_FIXTURE_TYPE_WINDOW_UNSPECIFIED: 0;
    LOCATED_MINOR_FIXTURE_TYPE_WINDOW_GENERIC: 1;
    LOCATED_MINOR_FIXTURE_TYPE_WINDOW_VERTICAL_SINGLE_HUNG: 2;
    LOCATED_MINOR_FIXTURE_TYPE_WINDOW_HORIZONTAL_SINGLE_HUNG: 3;
    LOCATED_MINOR_FIXTURE_TYPE_WINDOW_VERTICAL_DOUBLE_HUNG: 4;
    LOCATED_MINOR_FIXTURE_TYPE_WINDOW_HORIZONTAL_DOUBLE_HUNG: 5;
    LOCATED_MINOR_FIXTURE_TYPE_WINDOW_VERTICAL_CASEMENT: 6;
    LOCATED_MINOR_FIXTURE_TYPE_WINDOW_HORIZONTAL_CASEMENT: 7;
    LOCATED_MINOR_FIXTURE_TYPE_WINDOW_TILTTURN: 8;
    LOCATED_MINOR_FIXTURE_TYPE_WINDOW_ROOF: 9;
  }

  export const LocatedMinorFixtureTypeWindow: LocatedMinorFixtureTypeWindowMap;

  export interface LocatedMinorFixtureTypeWallMap {
    LOCATED_MINOR_FIXTURE_TYPE_WALL_UNSPECIFIED: 0;
    LOCATED_MINOR_FIXTURE_TYPE_WALL_GENERIC: 1;
    LOCATED_MINOR_FIXTURE_TYPE_WALL_CORNER: 2;
    LOCATED_MINOR_FIXTURE_TYPE_WALL_FLUSH: 3;
  }

  export const LocatedMinorFixtureTypeWall: LocatedMinorFixtureTypeWallMap;

  export interface LocatedMinorFixtureTypeObjectMap {
    LOCATED_MINOR_FIXTURE_TYPE_OBJECT_UNSPECIFIED: 0;
    LOCATED_MINOR_FIXTURE_TYPE_OBJECT_GENERIC: 1;
  }

  export const LocatedMinorFixtureTypeObject: LocatedMinorFixtureTypeObjectMap;
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

