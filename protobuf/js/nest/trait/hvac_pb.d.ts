// package: nest.trait.hvac
// file: nest/trait/hvac.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as weave_common_pb from "../../weave/common_pb";

export class TargetTemperatureSettingsTrait extends jspb.Message {
  hasSettings(): boolean;
  clearSettings(): void;
  getSettings(): TargetTemperatureSettingsTrait.TemperatureSetPoint | undefined;
  setSettings(value?: TargetTemperatureSettingsTrait.TemperatureSetPoint): void;

  hasActive(): boolean;
  clearActive(): void;
  getActive(): Int32_Indirect | undefined;
  setActive(value?: Int32_Indirect): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TargetTemperatureSettingsTrait.AsObject;
  static toObject(includeInstance: boolean, msg: TargetTemperatureSettingsTrait): TargetTemperatureSettingsTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TargetTemperatureSettingsTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TargetTemperatureSettingsTrait;
  static deserializeBinaryFromReader(message: TargetTemperatureSettingsTrait, reader: jspb.BinaryReader): TargetTemperatureSettingsTrait;
}

export namespace TargetTemperatureSettingsTrait {
  export type AsObject = {
    settings?: TargetTemperatureSettingsTrait.TemperatureSetPoint.AsObject,
    active?: Int32_Indirect.AsObject,
  }

  export class TemperatureSetPoint extends jspb.Message {
    getHvacMode(): HeatCoolModeMap[keyof HeatCoolModeMap];
    setHvacMode(value: HeatCoolModeMap[keyof HeatCoolModeMap]): void;

    hasTargetTemperatureHeat(): boolean;
    clearTargetTemperatureHeat(): void;
    getTargetTemperatureHeat(): Float_Indirect | undefined;
    setTargetTemperatureHeat(value?: Float_Indirect): void;

    hasTargetTemperatureCool(): boolean;
    clearTargetTemperatureCool(): void;
    getTargetTemperatureCool(): Float_Indirect | undefined;
    setTargetTemperatureCool(value?: Float_Indirect): void;

    hasUpdateInfo(): boolean;
    clearUpdateInfo(): void;
    getUpdateInfo(): UpdateStamp | undefined;
    setUpdateInfo(value?: UpdateStamp): void;

    hasOriginalUpdateInfo(): boolean;
    clearOriginalUpdateInfo(): void;
    getOriginalUpdateInfo(): UpdateStamp | undefined;
    setOriginalUpdateInfo(value?: UpdateStamp): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TemperatureSetPoint.AsObject;
    static toObject(includeInstance: boolean, msg: TemperatureSetPoint): TemperatureSetPoint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TemperatureSetPoint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TemperatureSetPoint;
    static deserializeBinaryFromReader(message: TemperatureSetPoint, reader: jspb.BinaryReader): TemperatureSetPoint;
  }

  export namespace TemperatureSetPoint {
    export type AsObject = {
      hvacMode: HeatCoolModeMap[keyof HeatCoolModeMap],
      targetTemperatureHeat?: Float_Indirect.AsObject,
      targetTemperatureCool?: Float_Indirect.AsObject,
      updateInfo?: UpdateStamp.AsObject,
      originalUpdateInfo?: UpdateStamp.AsObject,
    }
  }
}

export class HvacControlTrait extends jspb.Message {
  hasSettings(): boolean;
  clearSettings(): void;
  getSettings(): HvacControlTrait.HvacState | undefined;
  setSettings(value?: HvacControlTrait.HvacState): void;

  getIsDelayed(): number;
  setIsDelayed(value: number): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): Int32_Indirect | undefined;
  setTimestamp(value?: Int32_Indirect): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HvacControlTrait.AsObject;
  static toObject(includeInstance: boolean, msg: HvacControlTrait): HvacControlTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HvacControlTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HvacControlTrait;
  static deserializeBinaryFromReader(message: HvacControlTrait, reader: jspb.BinaryReader): HvacControlTrait;
}

export namespace HvacControlTrait {
  export type AsObject = {
    settings?: HvacControlTrait.HvacState.AsObject,
    isDelayed: number,
    timestamp?: Int32_Indirect.AsObject,
  }

  export class HvacState extends jspb.Message {
    getIsCooling(): number;
    setIsCooling(value: number): void;

    getIsHeating(): number;
    setIsHeating(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HvacState.AsObject;
    static toObject(includeInstance: boolean, msg: HvacState): HvacState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HvacState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HvacState;
    static deserializeBinaryFromReader(message: HvacState, reader: jspb.BinaryReader): HvacState;
  }

  export namespace HvacState {
    export type AsObject = {
      isCooling: number,
      isHeating: number,
    }
  }
}

export class EcoModeStateTrait extends jspb.Message {
  getEcoEnabled(): EcoModeStateMap[keyof EcoModeStateMap];
  setEcoEnabled(value: EcoModeStateMap[keyof EcoModeStateMap]): void;

  getEcomodechangereason(): EcoModeChangeReasonMap[keyof EcoModeChangeReasonMap];
  setEcomodechangereason(value: EcoModeChangeReasonMap[keyof EcoModeChangeReasonMap]): void;

  hasUpdateInfo(): boolean;
  clearUpdateInfo(): void;
  getUpdateInfo(): UpdateStamp | undefined;
  setUpdateInfo(value?: UpdateStamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EcoModeStateTrait.AsObject;
  static toObject(includeInstance: boolean, msg: EcoModeStateTrait): EcoModeStateTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EcoModeStateTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EcoModeStateTrait;
  static deserializeBinaryFromReader(message: EcoModeStateTrait, reader: jspb.BinaryReader): EcoModeStateTrait;
}

export namespace EcoModeStateTrait {
  export type AsObject = {
    ecoEnabled: EcoModeStateMap[keyof EcoModeStateMap],
    ecomodechangereason: EcoModeChangeReasonMap[keyof EcoModeChangeReasonMap],
    updateInfo?: UpdateStamp.AsObject,
  }
}

export class EcoModeSettingsTrait extends jspb.Message {
  getAutoEcoEnabled(): number;
  setAutoEcoEnabled(value: number): void;

  hasLow(): boolean;
  clearLow(): void;
  getLow(): EcoModeSettingsTrait.EcoTemperatureSetting | undefined;
  setLow(value?: EcoModeSettingsTrait.EcoTemperatureSetting): void;

  hasHigh(): boolean;
  clearHigh(): void;
  getHigh(): EcoModeSettingsTrait.EcoTemperatureSetting | undefined;
  setHigh(value?: EcoModeSettingsTrait.EcoTemperatureSetting): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EcoModeSettingsTrait.AsObject;
  static toObject(includeInstance: boolean, msg: EcoModeSettingsTrait): EcoModeSettingsTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EcoModeSettingsTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EcoModeSettingsTrait;
  static deserializeBinaryFromReader(message: EcoModeSettingsTrait, reader: jspb.BinaryReader): EcoModeSettingsTrait;
}

export namespace EcoModeSettingsTrait {
  export type AsObject = {
    autoEcoEnabled: number,
    low?: EcoModeSettingsTrait.EcoTemperatureSetting.AsObject,
    high?: EcoModeSettingsTrait.EcoTemperatureSetting.AsObject,
  }

  export class EcoTemperatureSetting extends jspb.Message {
    hasTemperature(): boolean;
    clearTemperature(): void;
    getTemperature(): Float_Indirect | undefined;
    setTemperature(value?: Float_Indirect): void;

    getEnabled(): number;
    setEnabled(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EcoTemperatureSetting.AsObject;
    static toObject(includeInstance: boolean, msg: EcoTemperatureSetting): EcoTemperatureSetting.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EcoTemperatureSetting, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EcoTemperatureSetting;
    static deserializeBinaryFromReader(message: EcoTemperatureSetting, reader: jspb.BinaryReader): EcoTemperatureSetting;
  }

  export namespace EcoTemperatureSetting {
    export type AsObject = {
      temperature?: Float_Indirect.AsObject,
      enabled: number,
    }
  }
}

export class DisplaySettingsTrait extends jspb.Message {
  getEnabled(): number;
  setEnabled(value: number): void;

  getUnits(): TemperatureUnitMap[keyof TemperatureUnitMap];
  setUnits(value: TemperatureUnitMap[keyof TemperatureUnitMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisplaySettingsTrait.AsObject;
  static toObject(includeInstance: boolean, msg: DisplaySettingsTrait): DisplaySettingsTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DisplaySettingsTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisplaySettingsTrait;
  static deserializeBinaryFromReader(message: DisplaySettingsTrait, reader: jspb.BinaryReader): DisplaySettingsTrait;
}

export namespace DisplaySettingsTrait {
  export type AsObject = {
    enabled: number,
    units: TemperatureUnitMap[keyof TemperatureUnitMap],
  }
}

export class FanControlSettingsTrait extends jspb.Message {
  getMode(): FanControlSettingsTrait.FanModeMap[keyof FanControlSettingsTrait.FanModeMap];
  setMode(value: FanControlSettingsTrait.FanModeMap[keyof FanControlSettingsTrait.FanModeMap]): void;

  getHvacoverridespeed(): FanControlSettingsTrait.FanSpeedSettingMap[keyof FanControlSettingsTrait.FanSpeedSettingMap];
  setHvacoverridespeed(value: FanControlSettingsTrait.FanSpeedSettingMap[keyof FanControlSettingsTrait.FanSpeedSettingMap]): void;

  getSchedulespeed(): FanControlSettingsTrait.FanSpeedSettingMap[keyof FanControlSettingsTrait.FanSpeedSettingMap];
  setSchedulespeed(value: FanControlSettingsTrait.FanSpeedSettingMap[keyof FanControlSettingsTrait.FanSpeedSettingMap]): void;

  getScheduledutycycle(): number;
  setScheduledutycycle(value: number): void;

  getSchedulestarttime(): number;
  setSchedulestarttime(value: number): void;

  getScheduleendtime(): number;
  setScheduleendtime(value: number): void;

  getTimerspeed(): FanControlSettingsTrait.FanSpeedSettingMap[keyof FanControlSettingsTrait.FanSpeedSettingMap];
  setTimerspeed(value: FanControlSettingsTrait.FanSpeedSettingMap[keyof FanControlSettingsTrait.FanSpeedSettingMap]): void;

  hasFantimertimeout(): boolean;
  clearFantimertimeout(): void;
  getFantimertimeout(): Int32_Indirect | undefined;
  setFantimertimeout(value?: Int32_Indirect): void;

  hasTimerduration(): boolean;
  clearTimerduration(): void;
  getTimerduration(): Int32_Indirect | undefined;
  setTimerduration(value?: Int32_Indirect): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FanControlSettingsTrait.AsObject;
  static toObject(includeInstance: boolean, msg: FanControlSettingsTrait): FanControlSettingsTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FanControlSettingsTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FanControlSettingsTrait;
  static deserializeBinaryFromReader(message: FanControlSettingsTrait, reader: jspb.BinaryReader): FanControlSettingsTrait;
}

export namespace FanControlSettingsTrait {
  export type AsObject = {
    mode: FanControlSettingsTrait.FanModeMap[keyof FanControlSettingsTrait.FanModeMap],
    hvacoverridespeed: FanControlSettingsTrait.FanSpeedSettingMap[keyof FanControlSettingsTrait.FanSpeedSettingMap],
    schedulespeed: FanControlSettingsTrait.FanSpeedSettingMap[keyof FanControlSettingsTrait.FanSpeedSettingMap],
    scheduledutycycle: number,
    schedulestarttime: number,
    scheduleendtime: number,
    timerspeed: FanControlSettingsTrait.FanSpeedSettingMap[keyof FanControlSettingsTrait.FanSpeedSettingMap],
    fantimertimeout?: Int32_Indirect.AsObject,
    timerduration?: Int32_Indirect.AsObject,
  }

  export interface FanModeMap {
    FAN_MODE_UNSPECIFIED: 0;
    FAN_MODE_AUTO: 1;
    FAN_MODE_CONTINUOUS_ON: 2;
    FAN_MODE_DUTY_CYCLE: 3;
  }

  export const FanMode: FanModeMap;

  export interface FanSpeedSettingMap {
    FAN_SPEED_SETTING_UNSPECIFIED: 0;
    FAN_SPEED_SETTING_STAGE1: 1;
    FAN_SPEED_SETTING_STAGE2: 2;
    FAN_SPEED_SETTING_STAGE3: 3;
    FAN_SPEED_SETTING_OFF: 4;
    FAN_SPEED_SETTING_AUTO: 5;
  }

  export const FanSpeedSetting: FanSpeedSettingMap;
}

export class FanControlTrait extends jspb.Message {
  getCurrentspeed(): FanControlTrait.FanSpeedSettingMap[keyof FanControlTrait.FanSpeedSettingMap];
  setCurrentspeed(value: FanControlTrait.FanSpeedSettingMap[keyof FanControlTrait.FanSpeedSettingMap]): void;

  getUserrequestedfanrunning(): boolean;
  setUserrequestedfanrunning(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FanControlTrait.AsObject;
  static toObject(includeInstance: boolean, msg: FanControlTrait): FanControlTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FanControlTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FanControlTrait;
  static deserializeBinaryFromReader(message: FanControlTrait, reader: jspb.BinaryReader): FanControlTrait;
}

export namespace FanControlTrait {
  export type AsObject = {
    currentspeed: FanControlTrait.FanSpeedSettingMap[keyof FanControlTrait.FanSpeedSettingMap],
    userrequestedfanrunning: boolean,
  }

  export interface FanSpeedSettingMap {
    FAN_SPEED_SETTING_UNSPECIFIED: 0;
    FAN_SPEED_SETTING_STAGE1: 1;
    FAN_SPEED_SETTING_STAGE2: 2;
    FAN_SPEED_SETTING_STAGE3: 3;
    FAN_SPEED_SETTING_OFF: 4;
    FAN_SPEED_SETTING_AUTO: 5;
  }

  export const FanSpeedSetting: FanSpeedSettingMap;
}

export class BackplateInfoTrait extends jspb.Message {
  getSerialNumber(): string;
  setSerialNumber(value: string): void;

  getBackplateModel(): string;
  setBackplateModel(value: string): void;

  getOsVersion(): string;
  setOsVersion(value: string): void;

  getOsBuildString(): string;
  setOsBuildString(value: string): void;

  getSwVersion(): string;
  setSwVersion(value: string): void;

  getSwInfo(): string;
  setSwInfo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BackplateInfoTrait.AsObject;
  static toObject(includeInstance: boolean, msg: BackplateInfoTrait): BackplateInfoTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BackplateInfoTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BackplateInfoTrait;
  static deserializeBinaryFromReader(message: BackplateInfoTrait, reader: jspb.BinaryReader): BackplateInfoTrait;
}

export namespace BackplateInfoTrait {
  export type AsObject = {
    serialNumber: string,
    backplateModel: string,
    osVersion: string,
    osBuildString: string,
    swVersion: string,
    swInfo: string,
  }
}

export class HvacEquipmentCapabilitiesTrait extends jspb.Message {
  getCanCool(): number;
  setCanCool(value: number): void;

  getCanHeat(): number;
  setCanHeat(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HvacEquipmentCapabilitiesTrait.AsObject;
  static toObject(includeInstance: boolean, msg: HvacEquipmentCapabilitiesTrait): HvacEquipmentCapabilitiesTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HvacEquipmentCapabilitiesTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HvacEquipmentCapabilitiesTrait;
  static deserializeBinaryFromReader(message: HvacEquipmentCapabilitiesTrait, reader: jspb.BinaryReader): HvacEquipmentCapabilitiesTrait;
}

export namespace HvacEquipmentCapabilitiesTrait {
  export type AsObject = {
    canCool: number,
    canHeat: number,
  }
}

export class RemoteComfortSensingSettingsTrait extends jspb.Message {
  getRcscontrolmode(): RemoteComfortSensingSettingsTrait.RcsControlModeMap[keyof RemoteComfortSensingSettingsTrait.RcsControlModeMap];
  setRcscontrolmode(value: RemoteComfortSensingSettingsTrait.RcsControlModeMap[keyof RemoteComfortSensingSettingsTrait.RcsControlModeMap]): void;

  hasActivercsselection(): boolean;
  clearActivercsselection(): void;
  getActivercsselection(): RemoteComfortSensingSettingsTrait.RcsSourceSelection | undefined;
  setActivercsselection(value?: RemoteComfortSensingSettingsTrait.RcsSourceSelection): void;

  clearAssociatedrcssensorsList(): void;
  getAssociatedrcssensorsList(): Array<RemoteComfortSensingSettingsTrait.RcsSensorId>;
  setAssociatedrcssensorsList(value: Array<RemoteComfortSensingSettingsTrait.RcsSensorId>): void;
  addAssociatedrcssensors(value?: RemoteComfortSensingSettingsTrait.RcsSensorId, index?: number): RemoteComfortSensingSettingsTrait.RcsSensorId;

  hasMultisensorsettings(): boolean;
  clearMultisensorsettings(): void;
  getMultisensorsettings(): RemoteComfortSensingSettingsTrait.MultiSensorSettings | undefined;
  setMultisensorsettings(value?: RemoteComfortSensingSettingsTrait.MultiSensorSettings): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoteComfortSensingSettingsTrait.AsObject;
  static toObject(includeInstance: boolean, msg: RemoteComfortSensingSettingsTrait): RemoteComfortSensingSettingsTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoteComfortSensingSettingsTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoteComfortSensingSettingsTrait;
  static deserializeBinaryFromReader(message: RemoteComfortSensingSettingsTrait, reader: jspb.BinaryReader): RemoteComfortSensingSettingsTrait;
}

export namespace RemoteComfortSensingSettingsTrait {
  export type AsObject = {
    rcscontrolmode: RemoteComfortSensingSettingsTrait.RcsControlModeMap[keyof RemoteComfortSensingSettingsTrait.RcsControlModeMap],
    activercsselection?: RemoteComfortSensingSettingsTrait.RcsSourceSelection.AsObject,
    associatedrcssensorsList: Array<RemoteComfortSensingSettingsTrait.RcsSensorId.AsObject>,
    multisensorsettings?: RemoteComfortSensingSettingsTrait.MultiSensorSettings.AsObject,
  }

  export class RcsSensorId extends jspb.Message {
    hasDeviceid(): boolean;
    clearDeviceid(): void;
    getDeviceid(): weave_common_pb.ResourceId | undefined;
    setDeviceid(value?: weave_common_pb.ResourceId): void;

    getVendorid(): number;
    setVendorid(value: number): void;

    getProductid(): number;
    setProductid(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RcsSensorId.AsObject;
    static toObject(includeInstance: boolean, msg: RcsSensorId): RcsSensorId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RcsSensorId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RcsSensorId;
    static deserializeBinaryFromReader(message: RcsSensorId, reader: jspb.BinaryReader): RcsSensorId;
  }

  export namespace RcsSensorId {
    export type AsObject = {
      deviceid?: weave_common_pb.ResourceId.AsObject,
      vendorid: number,
      productid: number,
    }
  }

  export class MultiSensorSettings extends jspb.Message {
    getMultisensorenabled(): boolean;
    setMultisensorenabled(value: boolean): void;

    clearMultisensorgroupList(): void;
    getMultisensorgroupList(): Array<weave_common_pb.ResourceId>;
    setMultisensorgroupList(value: Array<weave_common_pb.ResourceId>): void;
    addMultisensorgroup(value?: weave_common_pb.ResourceId, index?: number): weave_common_pb.ResourceId;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiSensorSettings.AsObject;
    static toObject(includeInstance: boolean, msg: MultiSensorSettings): MultiSensorSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiSensorSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiSensorSettings;
    static deserializeBinaryFromReader(message: MultiSensorSettings, reader: jspb.BinaryReader): MultiSensorSettings;
  }

  export namespace MultiSensorSettings {
    export type AsObject = {
      multisensorenabled: boolean,
      multisensorgroupList: Array<weave_common_pb.ResourceId.AsObject>,
    }
  }

  export class RcsSourceSelection extends jspb.Message {
    getRcssourcetype(): RemoteComfortSensingSettingsTrait.RcsSourceTypeMap[keyof RemoteComfortSensingSettingsTrait.RcsSourceTypeMap];
    setRcssourcetype(value: RemoteComfortSensingSettingsTrait.RcsSourceTypeMap[keyof RemoteComfortSensingSettingsTrait.RcsSourceTypeMap]): void;

    hasActivercssensor(): boolean;
    clearActivercssensor(): void;
    getActivercssensor(): weave_common_pb.ResourceId | undefined;
    setActivercssensor(value?: weave_common_pb.ResourceId): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RcsSourceSelection.AsObject;
    static toObject(includeInstance: boolean, msg: RcsSourceSelection): RcsSourceSelection.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RcsSourceSelection, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RcsSourceSelection;
    static deserializeBinaryFromReader(message: RcsSourceSelection, reader: jspb.BinaryReader): RcsSourceSelection;
  }

  export namespace RcsSourceSelection {
    export type AsObject = {
      rcssourcetype: RemoteComfortSensingSettingsTrait.RcsSourceTypeMap[keyof RemoteComfortSensingSettingsTrait.RcsSourceTypeMap],
      activercssensor?: weave_common_pb.ResourceId.AsObject,
    }
  }

  export class RcsInterval extends jspb.Message {
    hasRcsselection(): boolean;
    clearRcsselection(): void;
    getRcsselection(): RemoteComfortSensingSettingsTrait.RcsSourceSelection | undefined;
    setRcsselection(value?: RemoteComfortSensingSettingsTrait.RcsSourceSelection): void;

    getStartsecondsinday(): number;
    setStartsecondsinday(value: number): void;

    getEndsecondsinday(): number;
    setEndsecondsinday(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RcsInterval.AsObject;
    static toObject(includeInstance: boolean, msg: RcsInterval): RcsInterval.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RcsInterval, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RcsInterval;
    static deserializeBinaryFromReader(message: RcsInterval, reader: jspb.BinaryReader): RcsInterval;
  }

  export namespace RcsInterval {
    export type AsObject = {
      rcsselection?: RemoteComfortSensingSettingsTrait.RcsSourceSelection.AsObject,
      startsecondsinday: number,
      endsecondsinday: number,
    }
  }

  export class RcsSchedule extends jspb.Message {
    getIntervalsMap(): jspb.Map<number, RemoteComfortSensingSettingsTrait.RcsInterval>;
    clearIntervalsMap(): void;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RcsSchedule.AsObject;
    static toObject(includeInstance: boolean, msg: RcsSchedule): RcsSchedule.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RcsSchedule, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RcsSchedule;
    static deserializeBinaryFromReader(message: RcsSchedule, reader: jspb.BinaryReader): RcsSchedule;
  }

  export namespace RcsSchedule {
    export type AsObject = {
      intervalsMap: Array<[number, RemoteComfortSensingSettingsTrait.RcsInterval.AsObject]>,
    }
  }

  export class AssociateRcsSensorRequest extends jspb.Message {
    hasResourceid(): boolean;
    clearResourceid(): void;
    getResourceid(): weave_common_pb.ResourceId | undefined;
    setResourceid(value?: weave_common_pb.ResourceId): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssociateRcsSensorRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AssociateRcsSensorRequest): AssociateRcsSensorRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssociateRcsSensorRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssociateRcsSensorRequest;
    static deserializeBinaryFromReader(message: AssociateRcsSensorRequest, reader: jspb.BinaryReader): AssociateRcsSensorRequest;
  }

  export namespace AssociateRcsSensorRequest {
    export type AsObject = {
      resourceid?: weave_common_pb.ResourceId.AsObject,
    }
  }

  export class AssociateRcsSensorResponse extends jspb.Message {
    getStatus(): RemoteComfortSensingSettingsTrait.StatusCodeMap[keyof RemoteComfortSensingSettingsTrait.StatusCodeMap];
    setStatus(value: RemoteComfortSensingSettingsTrait.StatusCodeMap[keyof RemoteComfortSensingSettingsTrait.StatusCodeMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssociateRcsSensorResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AssociateRcsSensorResponse): AssociateRcsSensorResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssociateRcsSensorResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssociateRcsSensorResponse;
    static deserializeBinaryFromReader(message: AssociateRcsSensorResponse, reader: jspb.BinaryReader): AssociateRcsSensorResponse;
  }

  export namespace AssociateRcsSensorResponse {
    export type AsObject = {
      status: RemoteComfortSensingSettingsTrait.StatusCodeMap[keyof RemoteComfortSensingSettingsTrait.StatusCodeMap],
    }
  }

  export class DissociateRcsSensorRequest extends jspb.Message {
    hasResourceid(): boolean;
    clearResourceid(): void;
    getResourceid(): weave_common_pb.ResourceId | undefined;
    setResourceid(value?: weave_common_pb.ResourceId): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DissociateRcsSensorRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DissociateRcsSensorRequest): DissociateRcsSensorRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DissociateRcsSensorRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DissociateRcsSensorRequest;
    static deserializeBinaryFromReader(message: DissociateRcsSensorRequest, reader: jspb.BinaryReader): DissociateRcsSensorRequest;
  }

  export namespace DissociateRcsSensorRequest {
    export type AsObject = {
      resourceid?: weave_common_pb.ResourceId.AsObject,
    }
  }

  export class DissociateRcsSensorResponse extends jspb.Message {
    getStatus(): RemoteComfortSensingSettingsTrait.StatusCodeMap[keyof RemoteComfortSensingSettingsTrait.StatusCodeMap];
    setStatus(value: RemoteComfortSensingSettingsTrait.StatusCodeMap[keyof RemoteComfortSensingSettingsTrait.StatusCodeMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DissociateRcsSensorResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DissociateRcsSensorResponse): DissociateRcsSensorResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DissociateRcsSensorResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DissociateRcsSensorResponse;
    static deserializeBinaryFromReader(message: DissociateRcsSensorResponse, reader: jspb.BinaryReader): DissociateRcsSensorResponse;
  }

  export namespace DissociateRcsSensorResponse {
    export type AsObject = {
      status: RemoteComfortSensingSettingsTrait.StatusCodeMap[keyof RemoteComfortSensingSettingsTrait.StatusCodeMap],
    }
  }

  export interface RcsControlModeMap {
    RCS_CONTROL_MODE_UNSPECIFIED: 0;
    RCS_CONTROL_MODE_HOLD: 1;
    RCS_CONTROL_MODE_SCHEDULE: 2;
    RCS_CONTROL_MODE_SCHEDULE_OVERRIDE: 3;
  }

  export const RcsControlMode: RcsControlModeMap;

  export interface RcsSourceTypeMap {
    RCS_SOURCE_TYPE_UNSPECIFIED: 0;
    RCS_SOURCE_TYPE_BACKPLATE: 1;
    RCS_SOURCE_TYPE_SINGLE_SENSOR: 2;
    RCS_SOURCE_TYPE_MULTI_SENSOR: 3;
  }

  export const RcsSourceType: RcsSourceTypeMap;

  export interface StatusCodeMap {
    STATUS_CODE_UNSPECIFIED: 0;
    STATUS_CODE_SUCCESS: 1;
    STATUS_CODE_FAILURE: 2;
    STATUS_CODE_SENSOR_ALREADY_ASSOCIATED: 4096;
    STATUS_CODE_SENSOR_LIMIT_REACHED: 4097;
    STATUS_CODE_SENSOR_NOT_ASSOCIATED: 8192;
  }

  export const StatusCode: StatusCodeMap;
}

export class UpdateStamp extends jspb.Message {
  getUpdateSource(): UpdateSourceMap[keyof UpdateSourceMap];
  setUpdateSource(value: UpdateSourceMap[keyof UpdateSourceMap]): void;

  hasUpdatedBy(): boolean;
  clearUpdatedBy(): void;
  getUpdatedBy(): String_Indirect | undefined;
  setUpdatedBy(value?: String_Indirect): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): Int32_Indirect | undefined;
  setTimestamp(value?: Int32_Indirect): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateStamp.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateStamp): UpdateStamp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateStamp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateStamp;
  static deserializeBinaryFromReader(message: UpdateStamp, reader: jspb.BinaryReader): UpdateStamp;
}

export namespace UpdateStamp {
  export type AsObject = {
    updateSource: UpdateSourceMap[keyof UpdateSourceMap],
    updatedBy?: String_Indirect.AsObject,
    timestamp?: Int32_Indirect.AsObject,
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

export interface HeatCoolModeMap {
  INVALID_0_HCM: 0;
  HEAT: 1;
  COOL: 2;
  RANGE: 3;
}

export const HeatCoolMode: HeatCoolModeMap;

export interface EcoModeStateMap {
  INVALID_0_ECM: 0;
  OFF: 1;
  ON: 2;
}

export const EcoModeState: EcoModeStateMap;

export interface EcoModeChangeReasonMap {
  ECO_MODE_CHANGE_REASON_UNSPECIFIED: 0;
  ECO_MODE_CHANGE_REASON_MANUAL: 1;
  ECO_MODE_CHANGE_REASON_STRUCTURE_MODE: 2;
  ECO_MODE_CHANGE_REASON_OCCUPANCY: 3;
  ECO_MODE_CHANGE_REASON_TEMPERATURE: 4;
  ECO_MODE_CHANGE_REASON_FEATURE_ENABLE: 5;
}

export const EcoModeChangeReason: EcoModeChangeReasonMap;

export interface UpdateSourceMap {
  INVALID_0_US: 0;
  INVALID_1: 1;
  INVALID_2: 2;
  DEVICE: 3;
  INVALID_4: 4;
  USER: 5;
}

export const UpdateSource: UpdateSourceMap;

export interface TemperatureUnitMap {
  INVALID_0_TU: 0;
  DEGREES_C: 1;
  DEGREES_F: 2;
}

export const TemperatureUnit: TemperatureUnitMap;

