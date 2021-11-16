// package: weave.trait.security
// file: weave/trait/security.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as weave_common_pb from "../../weave/common_pb";

export class UserPincodesSettingsTrait extends jspb.Message {
  getUserpincodesMap(): jspb.Map<number, UserPincodesSettingsTrait.UserPincode>;
  clearUserpincodesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserPincodesSettingsTrait.AsObject;
  static toObject(includeInstance: boolean, msg: UserPincodesSettingsTrait): UserPincodesSettingsTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserPincodesSettingsTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserPincodesSettingsTrait;
  static deserializeBinaryFromReader(message: UserPincodesSettingsTrait, reader: jspb.BinaryReader): UserPincodesSettingsTrait;
}

export namespace UserPincodesSettingsTrait {
  export type AsObject = {
    userpincodesMap: Array<[number, UserPincodesSettingsTrait.UserPincode.AsObject]>,
  }

  export class UserPincode extends jspb.Message {
    hasUserid(): boolean;
    clearUserid(): void;
    getUserid(): weave_common_pb.ResourceId | undefined;
    setUserid(value?: weave_common_pb.ResourceId): void;

    getPincode(): Uint8Array | string;
    getPincode_asU8(): Uint8Array;
    getPincode_asB64(): string;
    setPincode(value: Uint8Array | string): void;

    hasPincodecredentialenabled(): boolean;
    clearPincodecredentialenabled(): void;
    getPincodecredentialenabled(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setPincodecredentialenabled(value?: google_protobuf_wrappers_pb.BoolValue): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserPincode.AsObject;
    static toObject(includeInstance: boolean, msg: UserPincode): UserPincode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserPincode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserPincode;
    static deserializeBinaryFromReader(message: UserPincode, reader: jspb.BinaryReader): UserPincode;
  }

  export namespace UserPincode {
    export type AsObject = {
      userid?: weave_common_pb.ResourceId.AsObject,
      pincode: Uint8Array | string,
      pincodecredentialenabled?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }
  }

  export class SetUserPincodeRequest extends jspb.Message {
    hasUserpincode(): boolean;
    clearUserpincode(): void;
    getUserpincode(): UserPincodesSettingsTrait.UserPincode | undefined;
    setUserpincode(value?: UserPincodesSettingsTrait.UserPincode): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetUserPincodeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetUserPincodeRequest): SetUserPincodeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetUserPincodeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetUserPincodeRequest;
    static deserializeBinaryFromReader(message: SetUserPincodeRequest, reader: jspb.BinaryReader): SetUserPincodeRequest;
  }

  export namespace SetUserPincodeRequest {
    export type AsObject = {
      userpincode?: UserPincodesSettingsTrait.UserPincode.AsObject,
    }
  }

  export class SetUserPincodeResponse extends jspb.Message {
    getStatus(): UserPincodesSettingsTrait.PincodeErrorCodesMap[keyof UserPincodesSettingsTrait.PincodeErrorCodesMap];
    setStatus(value: UserPincodesSettingsTrait.PincodeErrorCodesMap[keyof UserPincodesSettingsTrait.PincodeErrorCodesMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetUserPincodeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SetUserPincodeResponse): SetUserPincodeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetUserPincodeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetUserPincodeResponse;
    static deserializeBinaryFromReader(message: SetUserPincodeResponse, reader: jspb.BinaryReader): SetUserPincodeResponse;
  }

  export namespace SetUserPincodeResponse {
    export type AsObject = {
      status: UserPincodesSettingsTrait.PincodeErrorCodesMap[keyof UserPincodesSettingsTrait.PincodeErrorCodesMap],
    }
  }

  export class GetUserPincodeRequest extends jspb.Message {
    hasUserid(): boolean;
    clearUserid(): void;
    getUserid(): weave_common_pb.ResourceId | undefined;
    setUserid(value?: weave_common_pb.ResourceId): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserPincodeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserPincodeRequest): GetUserPincodeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserPincodeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserPincodeRequest;
    static deserializeBinaryFromReader(message: GetUserPincodeRequest, reader: jspb.BinaryReader): GetUserPincodeRequest;
  }

  export namespace GetUserPincodeRequest {
    export type AsObject = {
      userid?: weave_common_pb.ResourceId.AsObject,
    }
  }

  export class GetUserPincodeResponse extends jspb.Message {
    hasUserpincode(): boolean;
    clearUserpincode(): void;
    getUserpincode(): UserPincodesSettingsTrait.UserPincode | undefined;
    setUserpincode(value?: UserPincodesSettingsTrait.UserPincode): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserPincodeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserPincodeResponse): GetUserPincodeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserPincodeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserPincodeResponse;
    static deserializeBinaryFromReader(message: GetUserPincodeResponse, reader: jspb.BinaryReader): GetUserPincodeResponse;
  }

  export namespace GetUserPincodeResponse {
    export type AsObject = {
      userpincode?: UserPincodesSettingsTrait.UserPincode.AsObject,
    }
  }

  export class DeleteUserPincodeRequest extends jspb.Message {
    hasUserid(): boolean;
    clearUserid(): void;
    getUserid(): weave_common_pb.ResourceId | undefined;
    setUserid(value?: weave_common_pb.ResourceId): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteUserPincodeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteUserPincodeRequest): DeleteUserPincodeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteUserPincodeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteUserPincodeRequest;
    static deserializeBinaryFromReader(message: DeleteUserPincodeRequest, reader: jspb.BinaryReader): DeleteUserPincodeRequest;
  }

  export namespace DeleteUserPincodeRequest {
    export type AsObject = {
      userid?: weave_common_pb.ResourceId.AsObject,
    }
  }

  export class DeleteUserPincodeResponse extends jspb.Message {
    getStatus(): UserPincodesSettingsTrait.PincodeErrorCodesMap[keyof UserPincodesSettingsTrait.PincodeErrorCodesMap];
    setStatus(value: UserPincodesSettingsTrait.PincodeErrorCodesMap[keyof UserPincodesSettingsTrait.PincodeErrorCodesMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteUserPincodeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteUserPincodeResponse): DeleteUserPincodeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteUserPincodeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteUserPincodeResponse;
    static deserializeBinaryFromReader(message: DeleteUserPincodeResponse, reader: jspb.BinaryReader): DeleteUserPincodeResponse;
  }

  export namespace DeleteUserPincodeResponse {
    export type AsObject = {
      status: UserPincodesSettingsTrait.PincodeErrorCodesMap[keyof UserPincodesSettingsTrait.PincodeErrorCodesMap],
    }
  }

  export class UserPincodeChangeEvent extends jspb.Message {
    hasUserid(): boolean;
    clearUserid(): void;
    getUserid(): weave_common_pb.ResourceId | undefined;
    setUserid(value?: weave_common_pb.ResourceId): void;

    getReason(): UserPincodesSettingsTrait.PincodeChangeReasonMap[keyof UserPincodesSettingsTrait.PincodeChangeReasonMap];
    setReason(value: UserPincodesSettingsTrait.PincodeChangeReasonMap[keyof UserPincodesSettingsTrait.PincodeChangeReasonMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserPincodeChangeEvent.AsObject;
    static toObject(includeInstance: boolean, msg: UserPincodeChangeEvent): UserPincodeChangeEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserPincodeChangeEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserPincodeChangeEvent;
    static deserializeBinaryFromReader(message: UserPincodeChangeEvent, reader: jspb.BinaryReader): UserPincodeChangeEvent;
  }

  export namespace UserPincodeChangeEvent {
    export type AsObject = {
      userid?: weave_common_pb.ResourceId.AsObject,
      reason: UserPincodesSettingsTrait.PincodeChangeReasonMap[keyof UserPincodesSettingsTrait.PincodeChangeReasonMap],
    }
  }

  export interface PincodeErrorCodesMap {
    PINCODE_ERROR_CODES_UNSPECIFIED: 0;
    PINCODE_ERROR_CODES_DUPLICATE_PINCODE: 1;
    PINCODE_ERROR_CODES_TOO_MANY_PINCODES: 2;
    PINCODE_ERROR_CODES_INVALID_PINCODE: 3;
    PINCODE_ERROR_CODES_SUCCESS_PINCODE_DELETED: 4;
    PINCODE_ERROR_CODES_SUCCESS_PINCODE_STATUS: 5;
    PINCODE_ERROR_CODES_DUPLICATE_NONCE: 6;
    PINCODE_ERROR_CODES_EXCEEDED_RATE_LIMIT: 7;
  }

  export const PincodeErrorCodes: PincodeErrorCodesMap;

  export interface PincodeChangeReasonMap {
    PINCODE_CHANGE_REASON_UNSPECIFIED: 0;
    PINCODE_CHANGE_REASON_UPDATE: 1;
    PINCODE_CHANGE_REASON_DELETION: 2;
  }

  export const PincodeChangeReason: PincodeChangeReasonMap;
}

export class UserNFCTokenManagementTrait extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserNFCTokenManagementTrait.AsObject;
  static toObject(includeInstance: boolean, msg: UserNFCTokenManagementTrait): UserNFCTokenManagementTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserNFCTokenManagementTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserNFCTokenManagementTrait;
  static deserializeBinaryFromReader(message: UserNFCTokenManagementTrait, reader: jspb.BinaryReader): UserNFCTokenManagementTrait;
}

export namespace UserNFCTokenManagementTrait {
  export type AsObject = {
  }

  export class TransferUserNFCTokenRequest extends jspb.Message {
    hasTargetuserid(): boolean;
    clearTargetuserid(): void;
    getTargetuserid(): weave_common_pb.ResourceId | undefined;
    setTargetuserid(value?: weave_common_pb.ResourceId): void;

    hasTokendeviceid(): boolean;
    clearTokendeviceid(): void;
    getTokendeviceid(): weave_common_pb.ResourceId | undefined;
    setTokendeviceid(value?: weave_common_pb.ResourceId): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransferUserNFCTokenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TransferUserNFCTokenRequest): TransferUserNFCTokenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransferUserNFCTokenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransferUserNFCTokenRequest;
    static deserializeBinaryFromReader(message: TransferUserNFCTokenRequest, reader: jspb.BinaryReader): TransferUserNFCTokenRequest;
  }

  export namespace TransferUserNFCTokenRequest {
    export type AsObject = {
      targetuserid?: weave_common_pb.ResourceId.AsObject,
      tokendeviceid?: weave_common_pb.ResourceId.AsObject,
    }
  }

  export class SetUserNFCTokenEnableStateRequest extends jspb.Message {
    hasTokendeviceid(): boolean;
    clearTokendeviceid(): void;
    getTokendeviceid(): weave_common_pb.ResourceId | undefined;
    setTokendeviceid(value?: weave_common_pb.ResourceId): void;

    getEnabled(): boolean;
    setEnabled(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetUserNFCTokenEnableStateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetUserNFCTokenEnableStateRequest): SetUserNFCTokenEnableStateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetUserNFCTokenEnableStateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetUserNFCTokenEnableStateRequest;
    static deserializeBinaryFromReader(message: SetUserNFCTokenEnableStateRequest, reader: jspb.BinaryReader): SetUserNFCTokenEnableStateRequest;
  }

  export namespace SetUserNFCTokenEnableStateRequest {
    export type AsObject = {
      tokendeviceid?: weave_common_pb.ResourceId.AsObject,
      enabled: boolean,
    }
  }

  export class AuthUserNFCTokenToStructureRequest extends jspb.Message {
    hasTokendeviceid(): boolean;
    clearTokendeviceid(): void;
    getTokendeviceid(): weave_common_pb.ResourceId | undefined;
    setTokendeviceid(value?: weave_common_pb.ResourceId): void;

    getAuthorized(): boolean;
    setAuthorized(value: boolean): void;

    hasStructureid(): boolean;
    clearStructureid(): void;
    getStructureid(): weave_common_pb.ResourceId | undefined;
    setStructureid(value?: weave_common_pb.ResourceId): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthUserNFCTokenToStructureRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AuthUserNFCTokenToStructureRequest): AuthUserNFCTokenToStructureRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthUserNFCTokenToStructureRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthUserNFCTokenToStructureRequest;
    static deserializeBinaryFromReader(message: AuthUserNFCTokenToStructureRequest, reader: jspb.BinaryReader): AuthUserNFCTokenToStructureRequest;
  }

  export namespace AuthUserNFCTokenToStructureRequest {
    export type AsObject = {
      tokendeviceid?: weave_common_pb.ResourceId.AsObject,
      authorized: boolean,
      structureid?: weave_common_pb.ResourceId.AsObject,
    }
  }

  export class UserNFCTokenManagementEvent extends jspb.Message {
    getNfctokenmanagementevent(): UserNFCTokenManagementTrait.NFCTokenEventMap[keyof UserNFCTokenManagementTrait.NFCTokenEventMap];
    setNfctokenmanagementevent(value: UserNFCTokenManagementTrait.NFCTokenEventMap[keyof UserNFCTokenManagementTrait.NFCTokenEventMap]): void;

    hasUsernfctoken(): boolean;
    clearUsernfctoken(): void;
    getUsernfctoken(): UserNFCTokensTrait.UserNFCTokenData | undefined;
    setUsernfctoken(value?: UserNFCTokensTrait.UserNFCTokenData): void;

    hasInitiatinguserid(): boolean;
    clearInitiatinguserid(): void;
    getInitiatinguserid(): weave_common_pb.ResourceId | undefined;
    setInitiatinguserid(value?: weave_common_pb.ResourceId): void;

    hasPrevioususerid(): boolean;
    clearPrevioususerid(): void;
    getPrevioususerid(): weave_common_pb.ResourceId | undefined;
    setPrevioususerid(value?: weave_common_pb.ResourceId): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserNFCTokenManagementEvent.AsObject;
    static toObject(includeInstance: boolean, msg: UserNFCTokenManagementEvent): UserNFCTokenManagementEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserNFCTokenManagementEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserNFCTokenManagementEvent;
    static deserializeBinaryFromReader(message: UserNFCTokenManagementEvent, reader: jspb.BinaryReader): UserNFCTokenManagementEvent;
  }

  export namespace UserNFCTokenManagementEvent {
    export type AsObject = {
      nfctokenmanagementevent: UserNFCTokenManagementTrait.NFCTokenEventMap[keyof UserNFCTokenManagementTrait.NFCTokenEventMap],
      usernfctoken?: UserNFCTokensTrait.UserNFCTokenData.AsObject,
      initiatinguserid?: weave_common_pb.ResourceId.AsObject,
      previoususerid?: weave_common_pb.ResourceId.AsObject,
    }
  }

  export interface NFCTokenEventMap {
    NFC_TOKEN_EVENT_UNSPECIFIED: 0;
    NFC_TOKEN_EVENT_PAIRED: 1;
    NFC_TOKEN_EVENT_UNPAIRED: 2;
    NFC_TOKEN_EVENT_STRUCTURE_AUTH: 3;
    NFC_TOKEN_EVENT_STRUCTURE_UNAUTH: 4;
    NFC_TOKEN_EVENT_TRANSFERRED: 5;
    NFC_TOKEN_EVENT_DISABLED: 6;
    NFC_TOKEN_EVENT_ENABLED: 7;
  }

  export const NFCTokenEvent: NFCTokenEventMap;
}

export class BoltLockTrait extends jspb.Message {
  getState(): BoltLockTrait.BoltStateMap[keyof BoltLockTrait.BoltStateMap];
  setState(value: BoltLockTrait.BoltStateMap[keyof BoltLockTrait.BoltStateMap]): void;

  getActuatorstate(): BoltLockTrait.BoltActuatorStateMap[keyof BoltLockTrait.BoltActuatorStateMap];
  setActuatorstate(value: BoltLockTrait.BoltActuatorStateMap[keyof BoltLockTrait.BoltActuatorStateMap]): void;

  getLockedstate(): BoltLockTrait.BoltLockedStateMap[keyof BoltLockTrait.BoltLockedStateMap];
  setLockedstate(value: BoltLockTrait.BoltLockedStateMap[keyof BoltLockTrait.BoltLockedStateMap]): void;

  hasBoltlockactor(): boolean;
  clearBoltlockactor(): void;
  getBoltlockactor(): BoltLockTrait.BoltLockActorStruct | undefined;
  setBoltlockactor(value?: BoltLockTrait.BoltLockActorStruct): void;

  hasLockedstatelastchangedat(): boolean;
  clearLockedstatelastchangedat(): void;
  getLockedstatelastchangedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLockedstatelastchangedat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoltLockTrait.AsObject;
  static toObject(includeInstance: boolean, msg: BoltLockTrait): BoltLockTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BoltLockTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoltLockTrait;
  static deserializeBinaryFromReader(message: BoltLockTrait, reader: jspb.BinaryReader): BoltLockTrait;
}

export namespace BoltLockTrait {
  export type AsObject = {
    state: BoltLockTrait.BoltStateMap[keyof BoltLockTrait.BoltStateMap],
    actuatorstate: BoltLockTrait.BoltActuatorStateMap[keyof BoltLockTrait.BoltActuatorStateMap],
    lockedstate: BoltLockTrait.BoltLockedStateMap[keyof BoltLockTrait.BoltLockedStateMap],
    boltlockactor?: BoltLockTrait.BoltLockActorStruct.AsObject,
    lockedstatelastchangedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export class BoltLockActorStruct extends jspb.Message {
    getMethod(): BoltLockTrait.BoltLockActorMethodMap[keyof BoltLockTrait.BoltLockActorMethodMap];
    setMethod(value: BoltLockTrait.BoltLockActorMethodMap[keyof BoltLockTrait.BoltLockActorMethodMap]): void;

    hasOriginator(): boolean;
    clearOriginator(): void;
    getOriginator(): weave_common_pb.ResourceId | undefined;
    setOriginator(value?: weave_common_pb.ResourceId): void;

    hasAgent(): boolean;
    clearAgent(): void;
    getAgent(): weave_common_pb.ResourceId | undefined;
    setAgent(value?: weave_common_pb.ResourceId): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BoltLockActorStruct.AsObject;
    static toObject(includeInstance: boolean, msg: BoltLockActorStruct): BoltLockActorStruct.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BoltLockActorStruct, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BoltLockActorStruct;
    static deserializeBinaryFromReader(message: BoltLockActorStruct, reader: jspb.BinaryReader): BoltLockActorStruct;
  }

  export namespace BoltLockActorStruct {
    export type AsObject = {
      method: BoltLockTrait.BoltLockActorMethodMap[keyof BoltLockTrait.BoltLockActorMethodMap],
      originator?: weave_common_pb.ResourceId.AsObject,
      agent?: weave_common_pb.ResourceId.AsObject,
    }
  }

  export class BoltLockChangeRequest extends jspb.Message {
    getState(): BoltLockTrait.BoltStateMap[keyof BoltLockTrait.BoltStateMap];
    setState(value: BoltLockTrait.BoltStateMap[keyof BoltLockTrait.BoltStateMap]): void;

    hasBoltlockactor(): boolean;
    clearBoltlockactor(): void;
    getBoltlockactor(): BoltLockTrait.BoltLockActorStruct | undefined;
    setBoltlockactor(value?: BoltLockTrait.BoltLockActorStruct): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BoltLockChangeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BoltLockChangeRequest): BoltLockChangeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BoltLockChangeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BoltLockChangeRequest;
    static deserializeBinaryFromReader(message: BoltLockChangeRequest, reader: jspb.BinaryReader): BoltLockChangeRequest;
  }

  export namespace BoltLockChangeRequest {
    export type AsObject = {
      state: BoltLockTrait.BoltStateMap[keyof BoltLockTrait.BoltStateMap],
      boltlockactor?: BoltLockTrait.BoltLockActorStruct.AsObject,
    }
  }

  export class BoltActuatorStateChangeEvent extends jspb.Message {
    getState(): BoltLockTrait.BoltStateMap[keyof BoltLockTrait.BoltStateMap];
    setState(value: BoltLockTrait.BoltStateMap[keyof BoltLockTrait.BoltStateMap]): void;

    getActuatorstate(): BoltLockTrait.BoltActuatorStateMap[keyof BoltLockTrait.BoltActuatorStateMap];
    setActuatorstate(value: BoltLockTrait.BoltActuatorStateMap[keyof BoltLockTrait.BoltActuatorStateMap]): void;

    getLockedstate(): BoltLockTrait.BoltLockedStateMap[keyof BoltLockTrait.BoltLockedStateMap];
    setLockedstate(value: BoltLockTrait.BoltLockedStateMap[keyof BoltLockTrait.BoltLockedStateMap]): void;

    hasBoltlockactor(): boolean;
    clearBoltlockactor(): void;
    getBoltlockactor(): BoltLockTrait.BoltLockActorStruct | undefined;
    setBoltlockactor(value?: BoltLockTrait.BoltLockActorStruct): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BoltActuatorStateChangeEvent.AsObject;
    static toObject(includeInstance: boolean, msg: BoltActuatorStateChangeEvent): BoltActuatorStateChangeEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BoltActuatorStateChangeEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BoltActuatorStateChangeEvent;
    static deserializeBinaryFromReader(message: BoltActuatorStateChangeEvent, reader: jspb.BinaryReader): BoltActuatorStateChangeEvent;
  }

  export namespace BoltActuatorStateChangeEvent {
    export type AsObject = {
      state: BoltLockTrait.BoltStateMap[keyof BoltLockTrait.BoltStateMap],
      actuatorstate: BoltLockTrait.BoltActuatorStateMap[keyof BoltLockTrait.BoltActuatorStateMap],
      lockedstate: BoltLockTrait.BoltLockedStateMap[keyof BoltLockTrait.BoltLockedStateMap],
      boltlockactor?: BoltLockTrait.BoltLockActorStruct.AsObject,
    }
  }

  export interface BoltStateMap {
    BOLT_STATE_UNSPECIFIED: 0;
    BOLT_STATE_RETRACTED: 1;
    BOLT_STATE_EXTENDED: 2;
  }

  export const BoltState: BoltStateMap;

  export interface BoltLockActorMethodMap {
    BOLT_LOCK_ACTOR_METHOD_UNSPECIFIED: 0;
    BOLT_LOCK_ACTOR_METHOD_OTHER: 1;
    BOLT_LOCK_ACTOR_METHOD_PHYSICAL: 2;
    BOLT_LOCK_ACTOR_METHOD_KEYPAD_PIN: 3;
    BOLT_LOCK_ACTOR_METHOD_LOCAL_IMPLICIT: 4;
    BOLT_LOCK_ACTOR_METHOD_REMOTE_USER_EXPLICIT: 5;
    BOLT_LOCK_ACTOR_METHOD_REMOTE_USER_IMPLICIT: 6;
    BOLT_LOCK_ACTOR_METHOD_REMOTE_USER_OTHER: 7;
    BOLT_LOCK_ACTOR_METHOD_REMOTE_DELEGATE: 8;
    BOLT_LOCK_ACTOR_METHOD_LOW_POWER_SHUTDOWN: 9;
    BOLT_LOCK_ACTOR_METHOD_VOICE_ASSISTANT: 10;
  }

  export const BoltLockActorMethod: BoltLockActorMethodMap;

  export interface BoltActuatorStateMap {
    BOLT_ACTUATOR_STATE_UNSPECIFIED: 0;
    BOLT_ACTUATOR_STATE_OK: 1;
    BOLT_ACTUATOR_STATE_LOCKING: 2;
    BOLT_ACTUATOR_STATE_UNLOCKING: 3;
    BOLT_ACTUATOR_STATE_MOVING: 4;
    BOLT_ACTUATOR_STATE_JAMMED_LOCKING: 5;
    BOLT_ACTUATOR_STATE_JAMMED_UNLOCKING: 6;
    BOLT_ACTUATOR_STATE_JAMMED_OTHER: 7;
  }

  export const BoltActuatorState: BoltActuatorStateMap;

  export interface BoltLockedStateMap {
    BOLT_LOCKED_STATE_UNSPECIFIED: 0;
    BOLT_LOCKED_STATE_UNLOCKED: 1;
    BOLT_LOCKED_STATE_LOCKED: 2;
    BOLT_LOCKED_STATE_UNKNOWN: 3;
  }

  export const BoltLockedState: BoltLockedStateMap;
}

export class SensorAssociationTrait extends jspb.Message {
  clearSensorsList(): void;
  getSensorsList(): Array<SensorAssociationTrait.SensorDeviceStatus>;
  setSensorsList(value: Array<SensorAssociationTrait.SensorDeviceStatus>): void;
  addSensors(value?: SensorAssociationTrait.SensorDeviceStatus, index?: number): SensorAssociationTrait.SensorDeviceStatus;

  hasAssociatedsensordeviceid(): boolean;
  clearAssociatedsensordeviceid(): void;
  getAssociatedsensordeviceid(): weave_common_pb.ResourceId | undefined;
  setAssociatedsensordeviceid(value?: weave_common_pb.ResourceId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SensorAssociationTrait.AsObject;
  static toObject(includeInstance: boolean, msg: SensorAssociationTrait): SensorAssociationTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SensorAssociationTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SensorAssociationTrait;
  static deserializeBinaryFromReader(message: SensorAssociationTrait, reader: jspb.BinaryReader): SensorAssociationTrait;
}

export namespace SensorAssociationTrait {
  export type AsObject = {
    sensorsList: Array<SensorAssociationTrait.SensorDeviceStatus.AsObject>,
    associatedsensordeviceid?: weave_common_pb.ResourceId.AsObject,
  }

  export class SetUserSensorAssociationRequest extends jspb.Message {
    hasSensordeviceid(): boolean;
    clearSensordeviceid(): void;
    getSensordeviceid(): weave_common_pb.ResourceId | undefined;
    setSensordeviceid(value?: weave_common_pb.ResourceId): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetUserSensorAssociationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetUserSensorAssociationRequest): SetUserSensorAssociationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetUserSensorAssociationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetUserSensorAssociationRequest;
    static deserializeBinaryFromReader(message: SetUserSensorAssociationRequest, reader: jspb.BinaryReader): SetUserSensorAssociationRequest;
  }

  export namespace SetUserSensorAssociationRequest {
    export type AsObject = {
      sensordeviceid?: weave_common_pb.ResourceId.AsObject,
    }
  }

  export class SetUserSensorAssociationResponse extends jspb.Message {
    getStatus(): SensorAssociationTrait.StatusCodeMap[keyof SensorAssociationTrait.StatusCodeMap];
    setStatus(value: SensorAssociationTrait.StatusCodeMap[keyof SensorAssociationTrait.StatusCodeMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetUserSensorAssociationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SetUserSensorAssociationResponse): SetUserSensorAssociationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetUserSensorAssociationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetUserSensorAssociationResponse;
    static deserializeBinaryFromReader(message: SetUserSensorAssociationResponse, reader: jspb.BinaryReader): SetUserSensorAssociationResponse;
  }

  export namespace SetUserSensorAssociationResponse {
    export type AsObject = {
      status: SensorAssociationTrait.StatusCodeMap[keyof SensorAssociationTrait.StatusCodeMap],
    }
  }

  export class SensorDeviceStatus extends jspb.Message {
    hasDeviceid(): boolean;
    clearDeviceid(): void;
    getDeviceid(): weave_common_pb.ResourceId | undefined;
    setDeviceid(value?: weave_common_pb.ResourceId): void;

    getSensorassociationstatus(): SensorAssociationTrait.SensorAssociationStatusMap[keyof SensorAssociationTrait.SensorAssociationStatusMap];
    setSensorassociationstatus(value: SensorAssociationTrait.SensorAssociationStatusMap[keyof SensorAssociationTrait.SensorAssociationStatusMap]): void;

    clearSensorassociationstatuslistList(): void;
    getSensorassociationstatuslistList(): Array<SensorAssociationTrait.SensorAssociationStatusMap[keyof SensorAssociationTrait.SensorAssociationStatusMap]>;
    setSensorassociationstatuslistList(value: Array<SensorAssociationTrait.SensorAssociationStatusMap[keyof SensorAssociationTrait.SensorAssociationStatusMap]>): void;
    addSensorassociationstatuslist(value: SensorAssociationTrait.SensorAssociationStatusMap[keyof SensorAssociationTrait.SensorAssociationStatusMap], index?: number): SensorAssociationTrait.SensorAssociationStatusMap[keyof SensorAssociationTrait.SensorAssociationStatusMap];

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SensorDeviceStatus.AsObject;
    static toObject(includeInstance: boolean, msg: SensorDeviceStatus): SensorDeviceStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SensorDeviceStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SensorDeviceStatus;
    static deserializeBinaryFromReader(message: SensorDeviceStatus, reader: jspb.BinaryReader): SensorDeviceStatus;
  }

  export namespace SensorDeviceStatus {
    export type AsObject = {
      deviceid?: weave_common_pb.ResourceId.AsObject,
      sensorassociationstatus: SensorAssociationTrait.SensorAssociationStatusMap[keyof SensorAssociationTrait.SensorAssociationStatusMap],
      sensorassociationstatuslistList: Array<SensorAssociationTrait.SensorAssociationStatusMap[keyof SensorAssociationTrait.SensorAssociationStatusMap]>,
    }
  }

  export interface StatusCodeMap {
    STATUS_CODE_UNSPECIFIED: 0;
    STATUS_CODE_SUCCESS: 1;
    STATUS_CODE_FAILURE: 2;
    STATUS_CODE_SENSOR_ALREADY_ASSOCIATED_OTHER: 3;
    STATUS_CODE_SENSOR_ALREADY_ASSOCIATED_SELF: 4;
    STATUS_CODE_SENSOR_INVALID: 5;
    STATUS_CODE_USER_SETTING_INVALID: 6;
  }

  export const StatusCode: StatusCodeMap;

  export interface SensorAssociationStatusMap {
    SENSOR_ASSOCIATION_STATUS_UNSPECIFIED: 0;
    SENSOR_ASSOCIATION_STATUS_ASSOCIATED_SELF: 1;
    SENSOR_ASSOCIATION_STATUS_ASSOCIATED_OTHER: 2;
    SENSOR_ASSOCIATION_STATUS_DEFAULT: 3;
    SENSOR_ASSOCIATION_STATUS_ELIGIBLE: 4;
    SENSOR_ASSOCIATION_STATUS_INELIGIBLE: 5;
  }

  export const SensorAssociationStatus: SensorAssociationStatusMap;
}

export class PincodeInputTrait extends jspb.Message {
  getPincodeinputstate(): PincodeInputTrait.PincodeInputStateMap[keyof PincodeInputTrait.PincodeInputStateMap];
  setPincodeinputstate(value: PincodeInputTrait.PincodeInputStateMap[keyof PincodeInputTrait.PincodeInputStateMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PincodeInputTrait.AsObject;
  static toObject(includeInstance: boolean, msg: PincodeInputTrait): PincodeInputTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PincodeInputTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PincodeInputTrait;
  static deserializeBinaryFromReader(message: PincodeInputTrait, reader: jspb.BinaryReader): PincodeInputTrait;
}

export namespace PincodeInputTrait {
  export type AsObject = {
    pincodeinputstate: PincodeInputTrait.PincodeInputStateMap[keyof PincodeInputTrait.PincodeInputStateMap],
  }

  export class KeypadEntryEvent extends jspb.Message {
    hasPincodecredentialenabled(): boolean;
    clearPincodecredentialenabled(): void;
    getPincodecredentialenabled(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setPincodecredentialenabled(value?: google_protobuf_wrappers_pb.BoolValue): void;

    hasUserid(): boolean;
    clearUserid(): void;
    getUserid(): weave_common_pb.ResourceId | undefined;
    setUserid(value?: weave_common_pb.ResourceId): void;

    getInvalidentrycount(): number;
    setInvalidentrycount(value: number): void;

    getPincodeentryresult(): PincodeInputTrait.PincodeEntryResultMap[keyof PincodeInputTrait.PincodeEntryResultMap];
    setPincodeentryresult(value: PincodeInputTrait.PincodeEntryResultMap[keyof PincodeInputTrait.PincodeEntryResultMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KeypadEntryEvent.AsObject;
    static toObject(includeInstance: boolean, msg: KeypadEntryEvent): KeypadEntryEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KeypadEntryEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KeypadEntryEvent;
    static deserializeBinaryFromReader(message: KeypadEntryEvent, reader: jspb.BinaryReader): KeypadEntryEvent;
  }

  export namespace KeypadEntryEvent {
    export type AsObject = {
      pincodecredentialenabled?: google_protobuf_wrappers_pb.BoolValue.AsObject,
      userid?: weave_common_pb.ResourceId.AsObject,
      invalidentrycount: number,
      pincodeentryresult: PincodeInputTrait.PincodeEntryResultMap[keyof PincodeInputTrait.PincodeEntryResultMap],
    }
  }

  export class PincodeInputStateChangeEvent extends jspb.Message {
    getPincodeinputstate(): PincodeInputTrait.PincodeInputStateMap[keyof PincodeInputTrait.PincodeInputStateMap];
    setPincodeinputstate(value: PincodeInputTrait.PincodeInputStateMap[keyof PincodeInputTrait.PincodeInputStateMap]): void;

    hasUserid(): boolean;
    clearUserid(): void;
    getUserid(): weave_common_pb.ResourceId | undefined;
    setUserid(value?: weave_common_pb.ResourceId): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PincodeInputStateChangeEvent.AsObject;
    static toObject(includeInstance: boolean, msg: PincodeInputStateChangeEvent): PincodeInputStateChangeEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PincodeInputStateChangeEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PincodeInputStateChangeEvent;
    static deserializeBinaryFromReader(message: PincodeInputStateChangeEvent, reader: jspb.BinaryReader): PincodeInputStateChangeEvent;
  }

  export namespace PincodeInputStateChangeEvent {
    export type AsObject = {
      pincodeinputstate: PincodeInputTrait.PincodeInputStateMap[keyof PincodeInputTrait.PincodeInputStateMap],
      userid?: weave_common_pb.ResourceId.AsObject,
    }
  }

  export interface PincodeEntryResultMap {
    PINCODE_ENTRY_RESULT_UNSPECIFIED: 0;
    PINCODE_ENTRY_RESULT_FAILURE_INVALID_PINCODE: 1;
    PINCODE_ENTRY_RESULT_FAILURE_OUT_OF_SCHEDULE: 2;
    PINCODE_ENTRY_RESULT_FAILURE_PINCODE_DISABLED: 3;
    PINCODE_ENTRY_RESULT_SUCCESS: 4;
  }

  export const PincodeEntryResult: PincodeEntryResultMap;

  export interface PincodeInputStateMap {
    PINCODE_INPUT_STATE_UNSPECIFIED: 0;
    PINCODE_INPUT_STATE_ENABLED: 1;
    PINCODE_INPUT_STATE_DISABLED: 2;
  }

  export const PincodeInputState: PincodeInputStateMap;
}

export class TamperTrait extends jspb.Message {
  getTamperstate(): TamperTrait.TamperStateMap[keyof TamperTrait.TamperStateMap];
  setTamperstate(value: TamperTrait.TamperStateMap[keyof TamperTrait.TamperStateMap]): void;

  hasFirstobservedat(): boolean;
  clearFirstobservedat(): void;
  getFirstobservedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFirstobservedat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasFirstobservedatms(): boolean;
  clearFirstobservedatms(): void;
  getFirstobservedatms(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFirstobservedatms(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TamperTrait.AsObject;
  static toObject(includeInstance: boolean, msg: TamperTrait): TamperTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TamperTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TamperTrait;
  static deserializeBinaryFromReader(message: TamperTrait, reader: jspb.BinaryReader): TamperTrait;
}

export namespace TamperTrait {
  export type AsObject = {
    tamperstate: TamperTrait.TamperStateMap[keyof TamperTrait.TamperStateMap],
    firstobservedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    firstobservedatms?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export class ResetTamperRequest extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResetTamperRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ResetTamperRequest): ResetTamperRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResetTamperRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResetTamperRequest;
    static deserializeBinaryFromReader(message: ResetTamperRequest, reader: jspb.BinaryReader): ResetTamperRequest;
  }

  export namespace ResetTamperRequest {
    export type AsObject = {
    }
  }

  export class TamperStateChangeEvent extends jspb.Message {
    getTamperstate(): TamperTrait.TamperStateMap[keyof TamperTrait.TamperStateMap];
    setTamperstate(value: TamperTrait.TamperStateMap[keyof TamperTrait.TamperStateMap]): void;

    getPriortamperstate(): TamperTrait.TamperStateMap[keyof TamperTrait.TamperStateMap];
    setPriortamperstate(value: TamperTrait.TamperStateMap[keyof TamperTrait.TamperStateMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TamperStateChangeEvent.AsObject;
    static toObject(includeInstance: boolean, msg: TamperStateChangeEvent): TamperStateChangeEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TamperStateChangeEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TamperStateChangeEvent;
    static deserializeBinaryFromReader(message: TamperStateChangeEvent, reader: jspb.BinaryReader): TamperStateChangeEvent;
  }

  export namespace TamperStateChangeEvent {
    export type AsObject = {
      tamperstate: TamperTrait.TamperStateMap[keyof TamperTrait.TamperStateMap],
      priortamperstate: TamperTrait.TamperStateMap[keyof TamperTrait.TamperStateMap],
    }
  }

  export interface TamperStateMap {
    TAMPER_STATE_UNSPECIFIED: 0;
    TAMPER_STATE_CLEAR: 1;
    TAMPER_STATE_TAMPERED: 2;
    TAMPER_STATE_UNKNOWN: 3;
  }

  export const TamperState: TamperStateMap;
}

export class UserNFCTokenAccessTrait extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserNFCTokenAccessTrait.AsObject;
  static toObject(includeInstance: boolean, msg: UserNFCTokenAccessTrait): UserNFCTokenAccessTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserNFCTokenAccessTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserNFCTokenAccessTrait;
  static deserializeBinaryFromReader(message: UserNFCTokenAccessTrait, reader: jspb.BinaryReader): UserNFCTokenAccessTrait;
}

export namespace UserNFCTokenAccessTrait {
  export type AsObject = {
  }

  export class UserNFCTokenAccessEvent extends jspb.Message {
    getResult(): UserNFCTokenAccessTrait.UserNFCTokenAccessResultMap[keyof UserNFCTokenAccessTrait.UserNFCTokenAccessResultMap];
    setResult(value: UserNFCTokenAccessTrait.UserNFCTokenAccessResultMap[keyof UserNFCTokenAccessTrait.UserNFCTokenAccessResultMap]): void;

    hasTokenid(): boolean;
    clearTokenid(): void;
    getTokenid(): weave_common_pb.ResourceId | undefined;
    setTokenid(value?: weave_common_pb.ResourceId): void;

    hasUserid(): boolean;
    clearUserid(): void;
    getUserid(): weave_common_pb.ResourceId | undefined;
    setUserid(value?: weave_common_pb.ResourceId): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserNFCTokenAccessEvent.AsObject;
    static toObject(includeInstance: boolean, msg: UserNFCTokenAccessEvent): UserNFCTokenAccessEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserNFCTokenAccessEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserNFCTokenAccessEvent;
    static deserializeBinaryFromReader(message: UserNFCTokenAccessEvent, reader: jspb.BinaryReader): UserNFCTokenAccessEvent;
  }

  export namespace UserNFCTokenAccessEvent {
    export type AsObject = {
      result: UserNFCTokenAccessTrait.UserNFCTokenAccessResultMap[keyof UserNFCTokenAccessTrait.UserNFCTokenAccessResultMap],
      tokenid?: weave_common_pb.ResourceId.AsObject,
      userid?: weave_common_pb.ResourceId.AsObject,
    }
  }

  export interface UserNFCTokenAccessResultMap {
    USER_NFC_TOKEN_ACCESS_RESULT_UNSPECIFIED: 0;
    USER_NFC_TOKEN_ACCESS_RESULT_SUCCESS: 1;
    USER_NFC_TOKEN_ACCESS_RESULT_FAILURE_UNKNOWN_TOKEN: 2;
    USER_NFC_TOKEN_ACCESS_RESULT_FAILURE_INVALID_TOKEN: 3;
    USER_NFC_TOKEN_ACCESS_RESULT_FAILURE_OUT_OF_SCHEDULE: 4;
    USER_NFC_TOKEN_ACCESS_RESULT_FAILURE_TOKEN_DISABLED: 5;
    USER_NFC_TOKEN_ACCESS_RESULT_FAILURE_INVALID_VERSION: 6;
    USER_NFC_TOKEN_ACCESS_RESULT_FAILURE_OTHER_REASON: 7;
  }

  export const UserNFCTokenAccessResult: UserNFCTokenAccessResultMap;
}

export class UserNFCTokensTrait extends jspb.Message {
  clearUsernfctokensList(): void;
  getUsernfctokensList(): Array<UserNFCTokensTrait.UserNFCTokenData>;
  setUsernfctokensList(value: Array<UserNFCTokensTrait.UserNFCTokenData>): void;
  addUsernfctokens(value?: UserNFCTokensTrait.UserNFCTokenData, index?: number): UserNFCTokensTrait.UserNFCTokenData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserNFCTokensTrait.AsObject;
  static toObject(includeInstance: boolean, msg: UserNFCTokensTrait): UserNFCTokensTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserNFCTokensTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserNFCTokensTrait;
  static deserializeBinaryFromReader(message: UserNFCTokensTrait, reader: jspb.BinaryReader): UserNFCTokensTrait;
}

export namespace UserNFCTokensTrait {
  export type AsObject = {
    usernfctokensList: Array<UserNFCTokensTrait.UserNFCTokenData.AsObject>,
  }

  export class UserNFCTokenData extends jspb.Message {
    hasUserid(): boolean;
    clearUserid(): void;
    getUserid(): weave_common_pb.ResourceId | undefined;
    setUserid(value?: weave_common_pb.ResourceId): void;

    hasTokendeviceid(): boolean;
    clearTokendeviceid(): void;
    getTokendeviceid(): weave_common_pb.ResourceId | undefined;
    setTokendeviceid(value?: weave_common_pb.ResourceId): void;

    getEnabled(): boolean;
    setEnabled(value: boolean): void;

    clearStructureidsList(): void;
    getStructureidsList(): Array<weave_common_pb.ResourceId>;
    setStructureidsList(value: Array<weave_common_pb.ResourceId>): void;
    addStructureids(value?: weave_common_pb.ResourceId, index?: number): weave_common_pb.ResourceId;

    getLabel(): string;
    setLabel(value: string): void;

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): UserNFCTokenMetadataTrait.Metadata | undefined;
    setMetadata(value?: UserNFCTokenMetadataTrait.Metadata): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserNFCTokenData.AsObject;
    static toObject(includeInstance: boolean, msg: UserNFCTokenData): UserNFCTokenData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserNFCTokenData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserNFCTokenData;
    static deserializeBinaryFromReader(message: UserNFCTokenData, reader: jspb.BinaryReader): UserNFCTokenData;
  }

  export namespace UserNFCTokenData {
    export type AsObject = {
      userid?: weave_common_pb.ResourceId.AsObject,
      tokendeviceid?: weave_common_pb.ResourceId.AsObject,
      enabled: boolean,
      structureidsList: Array<weave_common_pb.ResourceId.AsObject>,
      label: string,
      metadata?: UserNFCTokenMetadataTrait.Metadata.AsObject,
    }
  }
}

export class UserNFCTokenMetadataTrait extends jspb.Message {
  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): UserNFCTokenMetadataTrait.Metadata | undefined;
  setMetadata(value?: UserNFCTokenMetadataTrait.Metadata): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserNFCTokenMetadataTrait.AsObject;
  static toObject(includeInstance: boolean, msg: UserNFCTokenMetadataTrait): UserNFCTokenMetadataTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserNFCTokenMetadataTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserNFCTokenMetadataTrait;
  static deserializeBinaryFromReader(message: UserNFCTokenMetadataTrait, reader: jspb.BinaryReader): UserNFCTokenMetadataTrait;
}

export namespace UserNFCTokenMetadataTrait {
  export type AsObject = {
    metadata?: UserNFCTokenMetadataTrait.Metadata.AsObject,
  }

  export class Metadata extends jspb.Message {
    getSerialnumber(): string;
    setSerialnumber(value: string): void;

    getTagnumber(): string;
    setTagnumber(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Metadata.AsObject;
    static toObject(includeInstance: boolean, msg: Metadata): Metadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Metadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Metadata;
    static deserializeBinaryFromReader(message: Metadata, reader: jspb.BinaryReader): Metadata;
  }

  export namespace Metadata {
    export type AsObject = {
      serialnumber: string,
      tagnumber: string,
    }
  }
}

export class BoltLockCapabilitiesTrait extends jspb.Message {
  getHandedness(): BoltLockCapabilitiesTrait.BoltLockCapabilitiesHandednessMap[keyof BoltLockCapabilitiesTrait.BoltLockCapabilitiesHandednessMap];
  setHandedness(value: BoltLockCapabilitiesTrait.BoltLockCapabilitiesHandednessMap[keyof BoltLockCapabilitiesTrait.BoltLockCapabilitiesHandednessMap]): void;

  hasMaxautorelockduration(): boolean;
  clearMaxautorelockduration(): void;
  getMaxautorelockduration(): google_protobuf_duration_pb.Duration | undefined;
  setMaxautorelockduration(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoltLockCapabilitiesTrait.AsObject;
  static toObject(includeInstance: boolean, msg: BoltLockCapabilitiesTrait): BoltLockCapabilitiesTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BoltLockCapabilitiesTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoltLockCapabilitiesTrait;
  static deserializeBinaryFromReader(message: BoltLockCapabilitiesTrait, reader: jspb.BinaryReader): BoltLockCapabilitiesTrait;
}

export namespace BoltLockCapabilitiesTrait {
  export type AsObject = {
    handedness: BoltLockCapabilitiesTrait.BoltLockCapabilitiesHandednessMap[keyof BoltLockCapabilitiesTrait.BoltLockCapabilitiesHandednessMap],
    maxautorelockduration?: google_protobuf_duration_pb.Duration.AsObject,
  }

  export interface BoltLockCapabilitiesHandednessMap {
    BOLT_LOCK_CAPABILITIES_HANDEDNESS_UNSPECIFIED: 0;
    BOLT_LOCK_CAPABILITIES_HANDEDNESS_RIGHT: 1;
    BOLT_LOCK_CAPABILITIES_HANDEDNESS_LEFT: 2;
    BOLT_LOCK_CAPABILITIES_HANDEDNESS_FIXED_UNKNOWN: 3;
  }

  export const BoltLockCapabilitiesHandedness: BoltLockCapabilitiesHandednessMap;
}

export class UserPincodesCapabilitiesTrait extends jspb.Message {
  getMinpincodelength(): number;
  setMinpincodelength(value: number): void;

  getMaxpincodelength(): number;
  setMaxpincodelength(value: number): void;

  getMaxpincodessupported(): number;
  setMaxpincodessupported(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserPincodesCapabilitiesTrait.AsObject;
  static toObject(includeInstance: boolean, msg: UserPincodesCapabilitiesTrait): UserPincodesCapabilitiesTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserPincodesCapabilitiesTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserPincodesCapabilitiesTrait;
  static deserializeBinaryFromReader(message: UserPincodesCapabilitiesTrait, reader: jspb.BinaryReader): UserPincodesCapabilitiesTrait;
}

export namespace UserPincodesCapabilitiesTrait {
  export type AsObject = {
    minpincodelength: number,
    maxpincodelength: number,
    maxpincodessupported: number,
  }
}

export class BoltLockSettingsTrait extends jspb.Message {
  getAutorelockon(): boolean;
  setAutorelockon(value: boolean): void;

  hasAutorelockduration(): boolean;
  clearAutorelockduration(): void;
  getAutorelockduration(): google_protobuf_duration_pb.Duration | undefined;
  setAutorelockduration(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoltLockSettingsTrait.AsObject;
  static toObject(includeInstance: boolean, msg: BoltLockSettingsTrait): BoltLockSettingsTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BoltLockSettingsTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoltLockSettingsTrait;
  static deserializeBinaryFromReader(message: BoltLockSettingsTrait, reader: jspb.BinaryReader): BoltLockSettingsTrait;
}

export namespace BoltLockSettingsTrait {
  export type AsObject = {
    autorelockon: boolean,
    autorelockduration?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class DoorCheckSettingsTrait extends jspb.Message {
  hasDoorcheckenabled(): boolean;
  clearDoorcheckenabled(): void;
  getDoorcheckenabled(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setDoorcheckenabled(value?: google_protobuf_wrappers_pb.BoolValue): void;

  hasSensordeviceid(): boolean;
  clearSensordeviceid(): void;
  getSensordeviceid(): weave_common_pb.ResourceId | undefined;
  setSensordeviceid(value?: weave_common_pb.ResourceId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DoorCheckSettingsTrait.AsObject;
  static toObject(includeInstance: boolean, msg: DoorCheckSettingsTrait): DoorCheckSettingsTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DoorCheckSettingsTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DoorCheckSettingsTrait;
  static deserializeBinaryFromReader(message: DoorCheckSettingsTrait, reader: jspb.BinaryReader): DoorCheckSettingsTrait;
}

export namespace DoorCheckSettingsTrait {
  export type AsObject = {
    doorcheckenabled?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    sensordeviceid?: weave_common_pb.ResourceId.AsObject,
  }
}

export class UserNFCTokenSettingsTrait extends jspb.Message {
  getUsernfctokensMap(): jspb.Map<number, UserNFCTokenSettingsTrait.UserNFCToken>;
  clearUsernfctokensMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserNFCTokenSettingsTrait.AsObject;
  static toObject(includeInstance: boolean, msg: UserNFCTokenSettingsTrait): UserNFCTokenSettingsTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserNFCTokenSettingsTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserNFCTokenSettingsTrait;
  static deserializeBinaryFromReader(message: UserNFCTokenSettingsTrait, reader: jspb.BinaryReader): UserNFCTokenSettingsTrait;
}

export namespace UserNFCTokenSettingsTrait {
  export type AsObject = {
    usernfctokensMap: Array<[number, UserNFCTokenSettingsTrait.UserNFCToken.AsObject]>,
  }

  export class UserNFCToken extends jspb.Message {
    hasUserid(): boolean;
    clearUserid(): void;
    getUserid(): weave_common_pb.ResourceId | undefined;
    setUserid(value?: weave_common_pb.ResourceId): void;

    hasTokendeviceid(): boolean;
    clearTokendeviceid(): void;
    getTokendeviceid(): weave_common_pb.ResourceId | undefined;
    setTokendeviceid(value?: weave_common_pb.ResourceId): void;

    getPublickey(): Uint8Array | string;
    getPublickey_asU8(): Uint8Array;
    getPublickey_asB64(): string;
    setPublickey(value: Uint8Array | string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserNFCToken.AsObject;
    static toObject(includeInstance: boolean, msg: UserNFCToken): UserNFCToken.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserNFCToken, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserNFCToken;
    static deserializeBinaryFromReader(message: UserNFCToken, reader: jspb.BinaryReader): UserNFCToken;
  }

  export namespace UserNFCToken {
    export type AsObject = {
      userid?: weave_common_pb.ResourceId.AsObject,
      tokendeviceid?: weave_common_pb.ResourceId.AsObject,
      publickey: Uint8Array | string,
    }
  }
}

export class PincodeInputSettingsTrait extends jspb.Message {
  getWrongentrycodelimit(): number;
  setWrongentrycodelimit(value: number): void;

  hasWrongentrydisabletime(): boolean;
  clearWrongentrydisabletime(): void;
  getWrongentrydisabletime(): google_protobuf_duration_pb.Duration | undefined;
  setWrongentrydisabletime(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PincodeInputSettingsTrait.AsObject;
  static toObject(includeInstance: boolean, msg: PincodeInputSettingsTrait): PincodeInputSettingsTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PincodeInputSettingsTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PincodeInputSettingsTrait;
  static deserializeBinaryFromReader(message: PincodeInputSettingsTrait, reader: jspb.BinaryReader): PincodeInputSettingsTrait;
}

export namespace PincodeInputSettingsTrait {
  export type AsObject = {
    wrongentrycodelimit: number,
    wrongentrydisabletime?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

