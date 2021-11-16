// source: weave/trait/security.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var weave_common_pb = require('../../weave/common_pb.js');
goog.object.extend(proto, weave_common_pb);
goog.exportSymbol('proto.weave.trait.security.BoltLockCapabilitiesTrait', null, global);
goog.exportSymbol('proto.weave.trait.security.BoltLockCapabilitiesTrait.BoltLockCapabilitiesHandedness', null, global);
goog.exportSymbol('proto.weave.trait.security.BoltLockSettingsTrait', null, global);
goog.exportSymbol('proto.weave.trait.security.BoltLockTrait', null, global);
goog.exportSymbol('proto.weave.trait.security.BoltLockTrait.BoltActuatorState', null, global);
goog.exportSymbol('proto.weave.trait.security.BoltLockTrait.BoltActuatorStateChangeEvent', null, global);
goog.exportSymbol('proto.weave.trait.security.BoltLockTrait.BoltLockActorMethod', null, global);
goog.exportSymbol('proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct', null, global);
goog.exportSymbol('proto.weave.trait.security.BoltLockTrait.BoltLockChangeRequest', null, global);
goog.exportSymbol('proto.weave.trait.security.BoltLockTrait.BoltLockedState', null, global);
goog.exportSymbol('proto.weave.trait.security.BoltLockTrait.BoltState', null, global);
goog.exportSymbol('proto.weave.trait.security.DoorCheckSettingsTrait', null, global);
goog.exportSymbol('proto.weave.trait.security.PincodeInputSettingsTrait', null, global);
goog.exportSymbol('proto.weave.trait.security.PincodeInputTrait', null, global);
goog.exportSymbol('proto.weave.trait.security.PincodeInputTrait.KeypadEntryEvent', null, global);
goog.exportSymbol('proto.weave.trait.security.PincodeInputTrait.PincodeEntryResult', null, global);
goog.exportSymbol('proto.weave.trait.security.PincodeInputTrait.PincodeInputState', null, global);
goog.exportSymbol('proto.weave.trait.security.PincodeInputTrait.PincodeInputStateChangeEvent', null, global);
goog.exportSymbol('proto.weave.trait.security.SensorAssociationTrait', null, global);
goog.exportSymbol('proto.weave.trait.security.SensorAssociationTrait.SensorAssociationStatus', null, global);
goog.exportSymbol('proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus', null, global);
goog.exportSymbol('proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationRequest', null, global);
goog.exportSymbol('proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationResponse', null, global);
goog.exportSymbol('proto.weave.trait.security.SensorAssociationTrait.StatusCode', null, global);
goog.exportSymbol('proto.weave.trait.security.TamperTrait', null, global);
goog.exportSymbol('proto.weave.trait.security.TamperTrait.ResetTamperRequest', null, global);
goog.exportSymbol('proto.weave.trait.security.TamperTrait.TamperState', null, global);
goog.exportSymbol('proto.weave.trait.security.TamperTrait.TamperStateChangeEvent', null, global);
goog.exportSymbol('proto.weave.trait.security.UserNFCTokenAccessTrait', null, global);
goog.exportSymbol('proto.weave.trait.security.UserNFCTokenAccessTrait.UserNFCTokenAccessEvent', null, global);
goog.exportSymbol('proto.weave.trait.security.UserNFCTokenAccessTrait.UserNFCTokenAccessResult', null, global);
goog.exportSymbol('proto.weave.trait.security.UserNFCTokenManagementTrait', null, global);
goog.exportSymbol('proto.weave.trait.security.UserNFCTokenManagementTrait.AuthUserNFCTokenToStructureRequest', null, global);
goog.exportSymbol('proto.weave.trait.security.UserNFCTokenManagementTrait.NFCTokenEvent', null, global);
goog.exportSymbol('proto.weave.trait.security.UserNFCTokenManagementTrait.SetUserNFCTokenEnableStateRequest', null, global);
goog.exportSymbol('proto.weave.trait.security.UserNFCTokenManagementTrait.TransferUserNFCTokenRequest', null, global);
goog.exportSymbol('proto.weave.trait.security.UserNFCTokenManagementTrait.UserNFCTokenManagementEvent', null, global);
goog.exportSymbol('proto.weave.trait.security.UserNFCTokenMetadataTrait', null, global);
goog.exportSymbol('proto.weave.trait.security.UserNFCTokenMetadataTrait.Metadata', null, global);
goog.exportSymbol('proto.weave.trait.security.UserNFCTokenSettingsTrait', null, global);
goog.exportSymbol('proto.weave.trait.security.UserNFCTokenSettingsTrait.UserNFCToken', null, global);
goog.exportSymbol('proto.weave.trait.security.UserNFCTokensTrait', null, global);
goog.exportSymbol('proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData', null, global);
goog.exportSymbol('proto.weave.trait.security.UserPincodesCapabilitiesTrait', null, global);
goog.exportSymbol('proto.weave.trait.security.UserPincodesSettingsTrait', null, global);
goog.exportSymbol('proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeRequest', null, global);
goog.exportSymbol('proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeResponse', null, global);
goog.exportSymbol('proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeRequest', null, global);
goog.exportSymbol('proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeResponse', null, global);
goog.exportSymbol('proto.weave.trait.security.UserPincodesSettingsTrait.PincodeChangeReason', null, global);
goog.exportSymbol('proto.weave.trait.security.UserPincodesSettingsTrait.PincodeErrorCodes', null, global);
goog.exportSymbol('proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeRequest', null, global);
goog.exportSymbol('proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeResponse', null, global);
goog.exportSymbol('proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode', null, global);
goog.exportSymbol('proto.weave.trait.security.UserPincodesSettingsTrait.UserPincodeChangeEvent', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weave.trait.security.UserPincodesSettingsTrait = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.weave.trait.security.UserPincodesSettingsTrait, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weave.trait.security.UserPincodesSettingsTrait.displayName = 'proto.weave.trait.security.UserPincodesSettingsTrait';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode.displayName = 'proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeRequest.displayName = 'proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeResponse.displayName = 'proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeRequest.displayName = 'proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeResponse.displayName = 'proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeRequest.displayName = 'proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeResponse.displayName = 'proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weave.trait.security.UserPincodesSettingsTrait.UserPincodeChangeEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.weave.trait.security.UserPincodesSettingsTrait.UserPincodeChangeEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weave.trait.security.UserPincodesSettingsTrait.UserPincodeChangeEvent.displayName = 'proto.weave.trait.security.UserPincodesSettingsTrait.UserPincodeChangeEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weave.trait.security.UserNFCTokenManagementTrait = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.weave.trait.security.UserNFCTokenManagementTrait, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weave.trait.security.UserNFCTokenManagementTrait.displayName = 'proto.weave.trait.security.UserNFCTokenManagementTrait';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.TransferUserNFCTokenRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.weave.trait.security.UserNFCTokenManagementTrait.TransferUserNFCTokenRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weave.trait.security.UserNFCTokenManagementTrait.TransferUserNFCTokenRequest.displayName = 'proto.weave.trait.security.UserNFCTokenManagementTrait.TransferUserNFCTokenRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.SetUserNFCTokenEnableStateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.weave.trait.security.UserNFCTokenManagementTrait.SetUserNFCTokenEnableStateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weave.trait.security.UserNFCTokenManagementTrait.SetUserNFCTokenEnableStateRequest.displayName = 'proto.weave.trait.security.UserNFCTokenManagementTrait.SetUserNFCTokenEnableStateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.AuthUserNFCTokenToStructureRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.weave.trait.security.UserNFCTokenManagementTrait.AuthUserNFCTokenToStructureRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weave.trait.security.UserNFCTokenManagementTrait.AuthUserNFCTokenToStructureRequest.displayName = 'proto.weave.trait.security.UserNFCTokenManagementTrait.AuthUserNFCTokenToStructureRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.UserNFCTokenManagementEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.weave.trait.security.UserNFCTokenManagementTrait.UserNFCTokenManagementEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weave.trait.security.UserNFCTokenManagementTrait.UserNFCTokenManagementEvent.displayName = 'proto.weave.trait.security.UserNFCTokenManagementTrait.UserNFCTokenManagementEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weave.trait.security.BoltLockTrait = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.weave.trait.security.BoltLockTrait, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weave.trait.security.BoltLockTrait.displayName = 'proto.weave.trait.security.BoltLockTrait';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct.displayName = 'proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weave.trait.security.BoltLockTrait.BoltLockChangeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.weave.trait.security.BoltLockTrait.BoltLockChangeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weave.trait.security.BoltLockTrait.BoltLockChangeRequest.displayName = 'proto.weave.trait.security.BoltLockTrait.BoltLockChangeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weave.trait.security.BoltLockTrait.BoltActuatorStateChangeEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.weave.trait.security.BoltLockTrait.BoltActuatorStateChangeEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weave.trait.security.BoltLockTrait.BoltActuatorStateChangeEvent.displayName = 'proto.weave.trait.security.BoltLockTrait.BoltActuatorStateChangeEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weave.trait.security.SensorAssociationTrait = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.weave.trait.security.SensorAssociationTrait.repeatedFields_, null);
};
goog.inherits(proto.weave.trait.security.SensorAssociationTrait, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weave.trait.security.SensorAssociationTrait.displayName = 'proto.weave.trait.security.SensorAssociationTrait';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationRequest.displayName = 'proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationResponse.displayName = 'proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus.repeatedFields_, null);
};
goog.inherits(proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus.displayName = 'proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weave.trait.security.PincodeInputTrait = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.weave.trait.security.PincodeInputTrait, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weave.trait.security.PincodeInputTrait.displayName = 'proto.weave.trait.security.PincodeInputTrait';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weave.trait.security.PincodeInputTrait.KeypadEntryEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.weave.trait.security.PincodeInputTrait.KeypadEntryEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weave.trait.security.PincodeInputTrait.KeypadEntryEvent.displayName = 'proto.weave.trait.security.PincodeInputTrait.KeypadEntryEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weave.trait.security.PincodeInputTrait.PincodeInputStateChangeEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.weave.trait.security.PincodeInputTrait.PincodeInputStateChangeEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weave.trait.security.PincodeInputTrait.PincodeInputStateChangeEvent.displayName = 'proto.weave.trait.security.PincodeInputTrait.PincodeInputStateChangeEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weave.trait.security.TamperTrait = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.weave.trait.security.TamperTrait, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weave.trait.security.TamperTrait.displayName = 'proto.weave.trait.security.TamperTrait';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weave.trait.security.TamperTrait.ResetTamperRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.weave.trait.security.TamperTrait.ResetTamperRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weave.trait.security.TamperTrait.ResetTamperRequest.displayName = 'proto.weave.trait.security.TamperTrait.ResetTamperRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weave.trait.security.TamperTrait.TamperStateChangeEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.weave.trait.security.TamperTrait.TamperStateChangeEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weave.trait.security.TamperTrait.TamperStateChangeEvent.displayName = 'proto.weave.trait.security.TamperTrait.TamperStateChangeEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weave.trait.security.UserNFCTokenAccessTrait = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.weave.trait.security.UserNFCTokenAccessTrait, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weave.trait.security.UserNFCTokenAccessTrait.displayName = 'proto.weave.trait.security.UserNFCTokenAccessTrait';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weave.trait.security.UserNFCTokenAccessTrait.UserNFCTokenAccessEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.weave.trait.security.UserNFCTokenAccessTrait.UserNFCTokenAccessEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weave.trait.security.UserNFCTokenAccessTrait.UserNFCTokenAccessEvent.displayName = 'proto.weave.trait.security.UserNFCTokenAccessTrait.UserNFCTokenAccessEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weave.trait.security.UserNFCTokensTrait = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.weave.trait.security.UserNFCTokensTrait.repeatedFields_, null);
};
goog.inherits(proto.weave.trait.security.UserNFCTokensTrait, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weave.trait.security.UserNFCTokensTrait.displayName = 'proto.weave.trait.security.UserNFCTokensTrait';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData.repeatedFields_, null);
};
goog.inherits(proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData.displayName = 'proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weave.trait.security.UserNFCTokenMetadataTrait = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.weave.trait.security.UserNFCTokenMetadataTrait, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weave.trait.security.UserNFCTokenMetadataTrait.displayName = 'proto.weave.trait.security.UserNFCTokenMetadataTrait';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weave.trait.security.UserNFCTokenMetadataTrait.Metadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.weave.trait.security.UserNFCTokenMetadataTrait.Metadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weave.trait.security.UserNFCTokenMetadataTrait.Metadata.displayName = 'proto.weave.trait.security.UserNFCTokenMetadataTrait.Metadata';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weave.trait.security.BoltLockCapabilitiesTrait = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.weave.trait.security.BoltLockCapabilitiesTrait, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weave.trait.security.BoltLockCapabilitiesTrait.displayName = 'proto.weave.trait.security.BoltLockCapabilitiesTrait';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weave.trait.security.UserPincodesCapabilitiesTrait = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.weave.trait.security.UserPincodesCapabilitiesTrait, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weave.trait.security.UserPincodesCapabilitiesTrait.displayName = 'proto.weave.trait.security.UserPincodesCapabilitiesTrait';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weave.trait.security.BoltLockSettingsTrait = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.weave.trait.security.BoltLockSettingsTrait, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weave.trait.security.BoltLockSettingsTrait.displayName = 'proto.weave.trait.security.BoltLockSettingsTrait';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weave.trait.security.DoorCheckSettingsTrait = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.weave.trait.security.DoorCheckSettingsTrait, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weave.trait.security.DoorCheckSettingsTrait.displayName = 'proto.weave.trait.security.DoorCheckSettingsTrait';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weave.trait.security.UserNFCTokenSettingsTrait = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.weave.trait.security.UserNFCTokenSettingsTrait, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weave.trait.security.UserNFCTokenSettingsTrait.displayName = 'proto.weave.trait.security.UserNFCTokenSettingsTrait';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weave.trait.security.UserNFCTokenSettingsTrait.UserNFCToken = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.weave.trait.security.UserNFCTokenSettingsTrait.UserNFCToken, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weave.trait.security.UserNFCTokenSettingsTrait.UserNFCToken.displayName = 'proto.weave.trait.security.UserNFCTokenSettingsTrait.UserNFCToken';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weave.trait.security.PincodeInputSettingsTrait = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.weave.trait.security.PincodeInputSettingsTrait, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weave.trait.security.PincodeInputSettingsTrait.displayName = 'proto.weave.trait.security.PincodeInputSettingsTrait';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.prototype.toObject = function(opt_includeInstance) {
  return proto.weave.trait.security.UserPincodesSettingsTrait.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weave.trait.security.UserPincodesSettingsTrait} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserPincodesSettingsTrait.toObject = function(includeInstance, msg) {
  var f, obj = {
    userpincodesMap: (f = msg.getUserpincodesMap()) ? f.toObject(includeInstance, proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weave.trait.security.UserPincodesSettingsTrait}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weave.trait.security.UserPincodesSettingsTrait;
  return proto.weave.trait.security.UserPincodesSettingsTrait.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weave.trait.security.UserPincodesSettingsTrait} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weave.trait.security.UserPincodesSettingsTrait}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getUserpincodesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readUint32, jspb.BinaryReader.prototype.readMessage, proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode.deserializeBinaryFromReader, 0, new proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weave.trait.security.UserPincodesSettingsTrait.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weave.trait.security.UserPincodesSettingsTrait} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserPincodesSettingsTrait.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserpincodesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeUint32, jspb.BinaryWriter.prototype.writeMessage, proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode.serializeBinaryToWriter);
  }
};


/**
 * @enum {number}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.PincodeErrorCodes = {
  PINCODE_ERROR_CODES_UNSPECIFIED: 0,
  PINCODE_ERROR_CODES_DUPLICATE_PINCODE: 1,
  PINCODE_ERROR_CODES_TOO_MANY_PINCODES: 2,
  PINCODE_ERROR_CODES_INVALID_PINCODE: 3,
  PINCODE_ERROR_CODES_SUCCESS_PINCODE_DELETED: 4,
  PINCODE_ERROR_CODES_SUCCESS_PINCODE_STATUS: 5,
  PINCODE_ERROR_CODES_DUPLICATE_NONCE: 6,
  PINCODE_ERROR_CODES_EXCEEDED_RATE_LIMIT: 7
};

/**
 * @enum {number}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.PincodeChangeReason = {
  PINCODE_CHANGE_REASON_UNSPECIFIED: 0,
  PINCODE_CHANGE_REASON_UPDATE: 1,
  PINCODE_CHANGE_REASON_DELETION: 2
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode.prototype.toObject = function(opt_includeInstance) {
  return proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode.toObject = function(includeInstance, msg) {
  var f, obj = {
    userid: (f = msg.getUserid()) && weave_common_pb.ResourceId.toObject(includeInstance, f),
    pincode: msg.getPincode_asB64(),
    pincodecredentialenabled: (f = msg.getPincodecredentialenabled()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode;
  return proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new weave_common_pb.ResourceId;
      reader.readMessage(value,weave_common_pb.ResourceId.deserializeBinaryFromReader);
      msg.setUserid(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPincode(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setPincodecredentialenabled(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      weave_common_pb.ResourceId.serializeBinaryToWriter
    );
  }
  f = message.getPincode_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getPincodecredentialenabled();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional weave.common.ResourceId userId = 1;
 * @return {?proto.weave.common.ResourceId}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode.prototype.getUserid = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 1));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode} returns this
*/
proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode.prototype.setUserid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode} returns this
 */
proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode.prototype.clearUserid = function() {
  return this.setUserid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode.prototype.hasUserid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes pincode = 2;
 * @return {!(string|Uint8Array)}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode.prototype.getPincode = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes pincode = 2;
 * This is a type-conversion wrapper around `getPincode()`
 * @return {string}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode.prototype.getPincode_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPincode()));
};


/**
 * optional bytes pincode = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPincode()`
 * @return {!Uint8Array}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode.prototype.getPincode_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPincode()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode} returns this
 */
proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode.prototype.setPincode = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional google.protobuf.BoolValue pincodeCredentialEnabled = 3;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode.prototype.getPincodecredentialenabled = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 3));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode} returns this
*/
proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode.prototype.setPincodecredentialenabled = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode} returns this
 */
proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode.prototype.clearPincodecredentialenabled = function() {
  return this.setPincodecredentialenabled(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode.prototype.hasPincodecredentialenabled = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userpincode: (f = msg.getUserpincode()) && proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeRequest}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeRequest;
  return proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeRequest}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode;
      reader.readMessage(value,proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode.deserializeBinaryFromReader);
      msg.setUserpincode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserpincode();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode.serializeBinaryToWriter
    );
  }
};


/**
 * optional UserPincode userPincode = 1;
 * @return {?proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeRequest.prototype.getUserpincode = function() {
  return /** @type{?proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode} */ (
    jspb.Message.getWrapperField(this, proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode, 1));
};


/**
 * @param {?proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode|undefined} value
 * @return {!proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeRequest} returns this
*/
proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeRequest.prototype.setUserpincode = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeRequest} returns this
 */
proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeRequest.prototype.clearUserpincode = function() {
  return this.setUserpincode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeRequest.prototype.hasUserpincode = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeResponse}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeResponse;
  return proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeResponse}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.weave.trait.security.UserPincodesSettingsTrait.PincodeErrorCodes} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional PincodeErrorCodes status = 1;
 * @return {!proto.weave.trait.security.UserPincodesSettingsTrait.PincodeErrorCodes}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeResponse.prototype.getStatus = function() {
  return /** @type {!proto.weave.trait.security.UserPincodesSettingsTrait.PincodeErrorCodes} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.weave.trait.security.UserPincodesSettingsTrait.PincodeErrorCodes} value
 * @return {!proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeResponse} returns this
 */
proto.weave.trait.security.UserPincodesSettingsTrait.SetUserPincodeResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userid: (f = msg.getUserid()) && weave_common_pb.ResourceId.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeRequest}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeRequest;
  return proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeRequest}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new weave_common_pb.ResourceId;
      reader.readMessage(value,weave_common_pb.ResourceId.deserializeBinaryFromReader);
      msg.setUserid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      weave_common_pb.ResourceId.serializeBinaryToWriter
    );
  }
};


/**
 * optional weave.common.ResourceId userId = 1;
 * @return {?proto.weave.common.ResourceId}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeRequest.prototype.getUserid = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 1));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeRequest} returns this
*/
proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeRequest.prototype.setUserid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeRequest} returns this
 */
proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeRequest.prototype.clearUserid = function() {
  return this.setUserid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeRequest.prototype.hasUserid = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    userpincode: (f = msg.getUserpincode()) && proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeResponse}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeResponse;
  return proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeResponse}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode;
      reader.readMessage(value,proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode.deserializeBinaryFromReader);
      msg.setUserpincode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserpincode();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode.serializeBinaryToWriter
    );
  }
};


/**
 * optional UserPincode userPincode = 1;
 * @return {?proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeResponse.prototype.getUserpincode = function() {
  return /** @type{?proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode} */ (
    jspb.Message.getWrapperField(this, proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode, 1));
};


/**
 * @param {?proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode|undefined} value
 * @return {!proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeResponse} returns this
*/
proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeResponse.prototype.setUserpincode = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeResponse} returns this
 */
proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeResponse.prototype.clearUserpincode = function() {
  return this.setUserpincode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.GetUserPincodeResponse.prototype.hasUserpincode = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userid: (f = msg.getUserid()) && weave_common_pb.ResourceId.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeRequest}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeRequest;
  return proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeRequest}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new weave_common_pb.ResourceId;
      reader.readMessage(value,weave_common_pb.ResourceId.deserializeBinaryFromReader);
      msg.setUserid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      weave_common_pb.ResourceId.serializeBinaryToWriter
    );
  }
};


/**
 * optional weave.common.ResourceId userId = 1;
 * @return {?proto.weave.common.ResourceId}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeRequest.prototype.getUserid = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 1));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeRequest} returns this
*/
proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeRequest.prototype.setUserid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeRequest} returns this
 */
proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeRequest.prototype.clearUserid = function() {
  return this.setUserid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeRequest.prototype.hasUserid = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeResponse}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeResponse;
  return proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeResponse}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.weave.trait.security.UserPincodesSettingsTrait.PincodeErrorCodes} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional PincodeErrorCodes status = 1;
 * @return {!proto.weave.trait.security.UserPincodesSettingsTrait.PincodeErrorCodes}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeResponse.prototype.getStatus = function() {
  return /** @type {!proto.weave.trait.security.UserPincodesSettingsTrait.PincodeErrorCodes} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.weave.trait.security.UserPincodesSettingsTrait.PincodeErrorCodes} value
 * @return {!proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeResponse} returns this
 */
proto.weave.trait.security.UserPincodesSettingsTrait.DeleteUserPincodeResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.UserPincodeChangeEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.weave.trait.security.UserPincodesSettingsTrait.UserPincodeChangeEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weave.trait.security.UserPincodesSettingsTrait.UserPincodeChangeEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserPincodesSettingsTrait.UserPincodeChangeEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    userid: (f = msg.getUserid()) && weave_common_pb.ResourceId.toObject(includeInstance, f),
    reason: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weave.trait.security.UserPincodesSettingsTrait.UserPincodeChangeEvent}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.UserPincodeChangeEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weave.trait.security.UserPincodesSettingsTrait.UserPincodeChangeEvent;
  return proto.weave.trait.security.UserPincodesSettingsTrait.UserPincodeChangeEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weave.trait.security.UserPincodesSettingsTrait.UserPincodeChangeEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weave.trait.security.UserPincodesSettingsTrait.UserPincodeChangeEvent}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.UserPincodeChangeEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new weave_common_pb.ResourceId;
      reader.readMessage(value,weave_common_pb.ResourceId.deserializeBinaryFromReader);
      msg.setUserid(value);
      break;
    case 2:
      var value = /** @type {!proto.weave.trait.security.UserPincodesSettingsTrait.PincodeChangeReason} */ (reader.readEnum());
      msg.setReason(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.UserPincodeChangeEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weave.trait.security.UserPincodesSettingsTrait.UserPincodeChangeEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weave.trait.security.UserPincodesSettingsTrait.UserPincodeChangeEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserPincodesSettingsTrait.UserPincodeChangeEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      weave_common_pb.ResourceId.serializeBinaryToWriter
    );
  }
  f = message.getReason();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional weave.common.ResourceId userId = 1;
 * @return {?proto.weave.common.ResourceId}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.UserPincodeChangeEvent.prototype.getUserid = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 1));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.weave.trait.security.UserPincodesSettingsTrait.UserPincodeChangeEvent} returns this
*/
proto.weave.trait.security.UserPincodesSettingsTrait.UserPincodeChangeEvent.prototype.setUserid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.weave.trait.security.UserPincodesSettingsTrait.UserPincodeChangeEvent} returns this
 */
proto.weave.trait.security.UserPincodesSettingsTrait.UserPincodeChangeEvent.prototype.clearUserid = function() {
  return this.setUserid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.UserPincodeChangeEvent.prototype.hasUserid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PincodeChangeReason reason = 2;
 * @return {!proto.weave.trait.security.UserPincodesSettingsTrait.PincodeChangeReason}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.UserPincodeChangeEvent.prototype.getReason = function() {
  return /** @type {!proto.weave.trait.security.UserPincodesSettingsTrait.PincodeChangeReason} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.weave.trait.security.UserPincodesSettingsTrait.PincodeChangeReason} value
 * @return {!proto.weave.trait.security.UserPincodesSettingsTrait.UserPincodeChangeEvent} returns this
 */
proto.weave.trait.security.UserPincodesSettingsTrait.UserPincodeChangeEvent.prototype.setReason = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * map<uint32, UserPincode> userPincodes = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode>}
 */
proto.weave.trait.security.UserPincodesSettingsTrait.prototype.getUserpincodesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.weave.trait.security.UserPincodesSettingsTrait.UserPincode));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.weave.trait.security.UserPincodesSettingsTrait} returns this
 */
proto.weave.trait.security.UserPincodesSettingsTrait.prototype.clearUserpincodesMap = function() {
  this.getUserpincodesMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.prototype.toObject = function(opt_includeInstance) {
  return proto.weave.trait.security.UserNFCTokenManagementTrait.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weave.trait.security.UserNFCTokenManagementTrait} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weave.trait.security.UserNFCTokenManagementTrait}
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weave.trait.security.UserNFCTokenManagementTrait;
  return proto.weave.trait.security.UserNFCTokenManagementTrait.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weave.trait.security.UserNFCTokenManagementTrait} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weave.trait.security.UserNFCTokenManagementTrait}
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weave.trait.security.UserNFCTokenManagementTrait.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weave.trait.security.UserNFCTokenManagementTrait} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.NFCTokenEvent = {
  NFC_TOKEN_EVENT_UNSPECIFIED: 0,
  NFC_TOKEN_EVENT_PAIRED: 1,
  NFC_TOKEN_EVENT_UNPAIRED: 2,
  NFC_TOKEN_EVENT_STRUCTURE_AUTH: 3,
  NFC_TOKEN_EVENT_STRUCTURE_UNAUTH: 4,
  NFC_TOKEN_EVENT_TRANSFERRED: 5,
  NFC_TOKEN_EVENT_DISABLED: 6,
  NFC_TOKEN_EVENT_ENABLED: 7
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.TransferUserNFCTokenRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.weave.trait.security.UserNFCTokenManagementTrait.TransferUserNFCTokenRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weave.trait.security.UserNFCTokenManagementTrait.TransferUserNFCTokenRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.TransferUserNFCTokenRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    targetuserid: (f = msg.getTargetuserid()) && weave_common_pb.ResourceId.toObject(includeInstance, f),
    tokendeviceid: (f = msg.getTokendeviceid()) && weave_common_pb.ResourceId.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weave.trait.security.UserNFCTokenManagementTrait.TransferUserNFCTokenRequest}
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.TransferUserNFCTokenRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weave.trait.security.UserNFCTokenManagementTrait.TransferUserNFCTokenRequest;
  return proto.weave.trait.security.UserNFCTokenManagementTrait.TransferUserNFCTokenRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weave.trait.security.UserNFCTokenManagementTrait.TransferUserNFCTokenRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weave.trait.security.UserNFCTokenManagementTrait.TransferUserNFCTokenRequest}
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.TransferUserNFCTokenRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new weave_common_pb.ResourceId;
      reader.readMessage(value,weave_common_pb.ResourceId.deserializeBinaryFromReader);
      msg.setTargetuserid(value);
      break;
    case 2:
      var value = new weave_common_pb.ResourceId;
      reader.readMessage(value,weave_common_pb.ResourceId.deserializeBinaryFromReader);
      msg.setTokendeviceid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.TransferUserNFCTokenRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weave.trait.security.UserNFCTokenManagementTrait.TransferUserNFCTokenRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weave.trait.security.UserNFCTokenManagementTrait.TransferUserNFCTokenRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.TransferUserNFCTokenRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTargetuserid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      weave_common_pb.ResourceId.serializeBinaryToWriter
    );
  }
  f = message.getTokendeviceid();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      weave_common_pb.ResourceId.serializeBinaryToWriter
    );
  }
};


/**
 * optional weave.common.ResourceId targetUserId = 1;
 * @return {?proto.weave.common.ResourceId}
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.TransferUserNFCTokenRequest.prototype.getTargetuserid = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 1));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.weave.trait.security.UserNFCTokenManagementTrait.TransferUserNFCTokenRequest} returns this
*/
proto.weave.trait.security.UserNFCTokenManagementTrait.TransferUserNFCTokenRequest.prototype.setTargetuserid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.weave.trait.security.UserNFCTokenManagementTrait.TransferUserNFCTokenRequest} returns this
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.TransferUserNFCTokenRequest.prototype.clearTargetuserid = function() {
  return this.setTargetuserid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.TransferUserNFCTokenRequest.prototype.hasTargetuserid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional weave.common.ResourceId tokenDeviceId = 2;
 * @return {?proto.weave.common.ResourceId}
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.TransferUserNFCTokenRequest.prototype.getTokendeviceid = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 2));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.weave.trait.security.UserNFCTokenManagementTrait.TransferUserNFCTokenRequest} returns this
*/
proto.weave.trait.security.UserNFCTokenManagementTrait.TransferUserNFCTokenRequest.prototype.setTokendeviceid = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.weave.trait.security.UserNFCTokenManagementTrait.TransferUserNFCTokenRequest} returns this
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.TransferUserNFCTokenRequest.prototype.clearTokendeviceid = function() {
  return this.setTokendeviceid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.TransferUserNFCTokenRequest.prototype.hasTokendeviceid = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.SetUserNFCTokenEnableStateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.weave.trait.security.UserNFCTokenManagementTrait.SetUserNFCTokenEnableStateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weave.trait.security.UserNFCTokenManagementTrait.SetUserNFCTokenEnableStateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.SetUserNFCTokenEnableStateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tokendeviceid: (f = msg.getTokendeviceid()) && weave_common_pb.ResourceId.toObject(includeInstance, f),
    enabled: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weave.trait.security.UserNFCTokenManagementTrait.SetUserNFCTokenEnableStateRequest}
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.SetUserNFCTokenEnableStateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weave.trait.security.UserNFCTokenManagementTrait.SetUserNFCTokenEnableStateRequest;
  return proto.weave.trait.security.UserNFCTokenManagementTrait.SetUserNFCTokenEnableStateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weave.trait.security.UserNFCTokenManagementTrait.SetUserNFCTokenEnableStateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weave.trait.security.UserNFCTokenManagementTrait.SetUserNFCTokenEnableStateRequest}
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.SetUserNFCTokenEnableStateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new weave_common_pb.ResourceId;
      reader.readMessage(value,weave_common_pb.ResourceId.deserializeBinaryFromReader);
      msg.setTokendeviceid(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.SetUserNFCTokenEnableStateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weave.trait.security.UserNFCTokenManagementTrait.SetUserNFCTokenEnableStateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weave.trait.security.UserNFCTokenManagementTrait.SetUserNFCTokenEnableStateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.SetUserNFCTokenEnableStateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTokendeviceid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      weave_common_pb.ResourceId.serializeBinaryToWriter
    );
  }
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional weave.common.ResourceId tokenDeviceId = 1;
 * @return {?proto.weave.common.ResourceId}
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.SetUserNFCTokenEnableStateRequest.prototype.getTokendeviceid = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 1));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.weave.trait.security.UserNFCTokenManagementTrait.SetUserNFCTokenEnableStateRequest} returns this
*/
proto.weave.trait.security.UserNFCTokenManagementTrait.SetUserNFCTokenEnableStateRequest.prototype.setTokendeviceid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.weave.trait.security.UserNFCTokenManagementTrait.SetUserNFCTokenEnableStateRequest} returns this
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.SetUserNFCTokenEnableStateRequest.prototype.clearTokendeviceid = function() {
  return this.setTokendeviceid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.SetUserNFCTokenEnableStateRequest.prototype.hasTokendeviceid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool enabled = 2;
 * @return {boolean}
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.SetUserNFCTokenEnableStateRequest.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.weave.trait.security.UserNFCTokenManagementTrait.SetUserNFCTokenEnableStateRequest} returns this
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.SetUserNFCTokenEnableStateRequest.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.AuthUserNFCTokenToStructureRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.weave.trait.security.UserNFCTokenManagementTrait.AuthUserNFCTokenToStructureRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weave.trait.security.UserNFCTokenManagementTrait.AuthUserNFCTokenToStructureRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.AuthUserNFCTokenToStructureRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tokendeviceid: (f = msg.getTokendeviceid()) && weave_common_pb.ResourceId.toObject(includeInstance, f),
    authorized: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    structureid: (f = msg.getStructureid()) && weave_common_pb.ResourceId.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weave.trait.security.UserNFCTokenManagementTrait.AuthUserNFCTokenToStructureRequest}
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.AuthUserNFCTokenToStructureRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weave.trait.security.UserNFCTokenManagementTrait.AuthUserNFCTokenToStructureRequest;
  return proto.weave.trait.security.UserNFCTokenManagementTrait.AuthUserNFCTokenToStructureRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weave.trait.security.UserNFCTokenManagementTrait.AuthUserNFCTokenToStructureRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weave.trait.security.UserNFCTokenManagementTrait.AuthUserNFCTokenToStructureRequest}
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.AuthUserNFCTokenToStructureRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new weave_common_pb.ResourceId;
      reader.readMessage(value,weave_common_pb.ResourceId.deserializeBinaryFromReader);
      msg.setTokendeviceid(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAuthorized(value);
      break;
    case 3:
      var value = new weave_common_pb.ResourceId;
      reader.readMessage(value,weave_common_pb.ResourceId.deserializeBinaryFromReader);
      msg.setStructureid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.AuthUserNFCTokenToStructureRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weave.trait.security.UserNFCTokenManagementTrait.AuthUserNFCTokenToStructureRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weave.trait.security.UserNFCTokenManagementTrait.AuthUserNFCTokenToStructureRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.AuthUserNFCTokenToStructureRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTokendeviceid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      weave_common_pb.ResourceId.serializeBinaryToWriter
    );
  }
  f = message.getAuthorized();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getStructureid();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      weave_common_pb.ResourceId.serializeBinaryToWriter
    );
  }
};


/**
 * optional weave.common.ResourceId tokenDeviceId = 1;
 * @return {?proto.weave.common.ResourceId}
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.AuthUserNFCTokenToStructureRequest.prototype.getTokendeviceid = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 1));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.weave.trait.security.UserNFCTokenManagementTrait.AuthUserNFCTokenToStructureRequest} returns this
*/
proto.weave.trait.security.UserNFCTokenManagementTrait.AuthUserNFCTokenToStructureRequest.prototype.setTokendeviceid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.weave.trait.security.UserNFCTokenManagementTrait.AuthUserNFCTokenToStructureRequest} returns this
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.AuthUserNFCTokenToStructureRequest.prototype.clearTokendeviceid = function() {
  return this.setTokendeviceid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.AuthUserNFCTokenToStructureRequest.prototype.hasTokendeviceid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool authorized = 2;
 * @return {boolean}
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.AuthUserNFCTokenToStructureRequest.prototype.getAuthorized = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.weave.trait.security.UserNFCTokenManagementTrait.AuthUserNFCTokenToStructureRequest} returns this
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.AuthUserNFCTokenToStructureRequest.prototype.setAuthorized = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional weave.common.ResourceId structureId = 3;
 * @return {?proto.weave.common.ResourceId}
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.AuthUserNFCTokenToStructureRequest.prototype.getStructureid = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 3));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.weave.trait.security.UserNFCTokenManagementTrait.AuthUserNFCTokenToStructureRequest} returns this
*/
proto.weave.trait.security.UserNFCTokenManagementTrait.AuthUserNFCTokenToStructureRequest.prototype.setStructureid = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.weave.trait.security.UserNFCTokenManagementTrait.AuthUserNFCTokenToStructureRequest} returns this
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.AuthUserNFCTokenToStructureRequest.prototype.clearStructureid = function() {
  return this.setStructureid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.AuthUserNFCTokenToStructureRequest.prototype.hasStructureid = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.UserNFCTokenManagementEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.weave.trait.security.UserNFCTokenManagementTrait.UserNFCTokenManagementEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weave.trait.security.UserNFCTokenManagementTrait.UserNFCTokenManagementEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.UserNFCTokenManagementEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    nfctokenmanagementevent: jspb.Message.getFieldWithDefault(msg, 1, 0),
    usernfctoken: (f = msg.getUsernfctoken()) && proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData.toObject(includeInstance, f),
    initiatinguserid: (f = msg.getInitiatinguserid()) && weave_common_pb.ResourceId.toObject(includeInstance, f),
    previoususerid: (f = msg.getPrevioususerid()) && weave_common_pb.ResourceId.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weave.trait.security.UserNFCTokenManagementTrait.UserNFCTokenManagementEvent}
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.UserNFCTokenManagementEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weave.trait.security.UserNFCTokenManagementTrait.UserNFCTokenManagementEvent;
  return proto.weave.trait.security.UserNFCTokenManagementTrait.UserNFCTokenManagementEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weave.trait.security.UserNFCTokenManagementTrait.UserNFCTokenManagementEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weave.trait.security.UserNFCTokenManagementTrait.UserNFCTokenManagementEvent}
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.UserNFCTokenManagementEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.weave.trait.security.UserNFCTokenManagementTrait.NFCTokenEvent} */ (reader.readEnum());
      msg.setNfctokenmanagementevent(value);
      break;
    case 2:
      var value = new proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData;
      reader.readMessage(value,proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData.deserializeBinaryFromReader);
      msg.setUsernfctoken(value);
      break;
    case 3:
      var value = new weave_common_pb.ResourceId;
      reader.readMessage(value,weave_common_pb.ResourceId.deserializeBinaryFromReader);
      msg.setInitiatinguserid(value);
      break;
    case 4:
      var value = new weave_common_pb.ResourceId;
      reader.readMessage(value,weave_common_pb.ResourceId.deserializeBinaryFromReader);
      msg.setPrevioususerid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.UserNFCTokenManagementEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weave.trait.security.UserNFCTokenManagementTrait.UserNFCTokenManagementEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weave.trait.security.UserNFCTokenManagementTrait.UserNFCTokenManagementEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.UserNFCTokenManagementEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNfctokenmanagementevent();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getUsernfctoken();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData.serializeBinaryToWriter
    );
  }
  f = message.getInitiatinguserid();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      weave_common_pb.ResourceId.serializeBinaryToWriter
    );
  }
  f = message.getPrevioususerid();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      weave_common_pb.ResourceId.serializeBinaryToWriter
    );
  }
};


/**
 * optional NFCTokenEvent nfcTokenManagementEvent = 1;
 * @return {!proto.weave.trait.security.UserNFCTokenManagementTrait.NFCTokenEvent}
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.UserNFCTokenManagementEvent.prototype.getNfctokenmanagementevent = function() {
  return /** @type {!proto.weave.trait.security.UserNFCTokenManagementTrait.NFCTokenEvent} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.weave.trait.security.UserNFCTokenManagementTrait.NFCTokenEvent} value
 * @return {!proto.weave.trait.security.UserNFCTokenManagementTrait.UserNFCTokenManagementEvent} returns this
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.UserNFCTokenManagementEvent.prototype.setNfctokenmanagementevent = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional UserNFCTokensTrait.UserNFCTokenData userNfcToken = 2;
 * @return {?proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData}
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.UserNFCTokenManagementEvent.prototype.getUsernfctoken = function() {
  return /** @type{?proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData} */ (
    jspb.Message.getWrapperField(this, proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData, 2));
};


/**
 * @param {?proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData|undefined} value
 * @return {!proto.weave.trait.security.UserNFCTokenManagementTrait.UserNFCTokenManagementEvent} returns this
*/
proto.weave.trait.security.UserNFCTokenManagementTrait.UserNFCTokenManagementEvent.prototype.setUsernfctoken = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.weave.trait.security.UserNFCTokenManagementTrait.UserNFCTokenManagementEvent} returns this
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.UserNFCTokenManagementEvent.prototype.clearUsernfctoken = function() {
  return this.setUsernfctoken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.UserNFCTokenManagementEvent.prototype.hasUsernfctoken = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional weave.common.ResourceId initiatingUserId = 3;
 * @return {?proto.weave.common.ResourceId}
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.UserNFCTokenManagementEvent.prototype.getInitiatinguserid = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 3));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.weave.trait.security.UserNFCTokenManagementTrait.UserNFCTokenManagementEvent} returns this
*/
proto.weave.trait.security.UserNFCTokenManagementTrait.UserNFCTokenManagementEvent.prototype.setInitiatinguserid = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.weave.trait.security.UserNFCTokenManagementTrait.UserNFCTokenManagementEvent} returns this
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.UserNFCTokenManagementEvent.prototype.clearInitiatinguserid = function() {
  return this.setInitiatinguserid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.UserNFCTokenManagementEvent.prototype.hasInitiatinguserid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional weave.common.ResourceId previousUserId = 4;
 * @return {?proto.weave.common.ResourceId}
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.UserNFCTokenManagementEvent.prototype.getPrevioususerid = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 4));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.weave.trait.security.UserNFCTokenManagementTrait.UserNFCTokenManagementEvent} returns this
*/
proto.weave.trait.security.UserNFCTokenManagementTrait.UserNFCTokenManagementEvent.prototype.setPrevioususerid = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.weave.trait.security.UserNFCTokenManagementTrait.UserNFCTokenManagementEvent} returns this
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.UserNFCTokenManagementEvent.prototype.clearPrevioususerid = function() {
  return this.setPrevioususerid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.weave.trait.security.UserNFCTokenManagementTrait.UserNFCTokenManagementEvent.prototype.hasPrevioususerid = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weave.trait.security.BoltLockTrait.prototype.toObject = function(opt_includeInstance) {
  return proto.weave.trait.security.BoltLockTrait.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weave.trait.security.BoltLockTrait} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.BoltLockTrait.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    actuatorstate: jspb.Message.getFieldWithDefault(msg, 2, 0),
    lockedstate: jspb.Message.getFieldWithDefault(msg, 3, 0),
    boltlockactor: (f = msg.getBoltlockactor()) && proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct.toObject(includeInstance, f),
    lockedstatelastchangedat: (f = msg.getLockedstatelastchangedat()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weave.trait.security.BoltLockTrait}
 */
proto.weave.trait.security.BoltLockTrait.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weave.trait.security.BoltLockTrait;
  return proto.weave.trait.security.BoltLockTrait.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weave.trait.security.BoltLockTrait} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weave.trait.security.BoltLockTrait}
 */
proto.weave.trait.security.BoltLockTrait.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.weave.trait.security.BoltLockTrait.BoltState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {!proto.weave.trait.security.BoltLockTrait.BoltActuatorState} */ (reader.readEnum());
      msg.setActuatorstate(value);
      break;
    case 3:
      var value = /** @type {!proto.weave.trait.security.BoltLockTrait.BoltLockedState} */ (reader.readEnum());
      msg.setLockedstate(value);
      break;
    case 4:
      var value = new proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct;
      reader.readMessage(value,proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct.deserializeBinaryFromReader);
      msg.setBoltlockactor(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLockedstatelastchangedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weave.trait.security.BoltLockTrait.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weave.trait.security.BoltLockTrait.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weave.trait.security.BoltLockTrait} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.BoltLockTrait.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getActuatorstate();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getLockedstate();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getBoltlockactor();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct.serializeBinaryToWriter
    );
  }
  f = message.getLockedstatelastchangedat();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.weave.trait.security.BoltLockTrait.BoltState = {
  BOLT_STATE_UNSPECIFIED: 0,
  BOLT_STATE_RETRACTED: 1,
  BOLT_STATE_EXTENDED: 2
};

/**
 * @enum {number}
 */
proto.weave.trait.security.BoltLockTrait.BoltLockActorMethod = {
  BOLT_LOCK_ACTOR_METHOD_UNSPECIFIED: 0,
  BOLT_LOCK_ACTOR_METHOD_OTHER: 1,
  BOLT_LOCK_ACTOR_METHOD_PHYSICAL: 2,
  BOLT_LOCK_ACTOR_METHOD_KEYPAD_PIN: 3,
  BOLT_LOCK_ACTOR_METHOD_LOCAL_IMPLICIT: 4,
  BOLT_LOCK_ACTOR_METHOD_REMOTE_USER_EXPLICIT: 5,
  BOLT_LOCK_ACTOR_METHOD_REMOTE_USER_IMPLICIT: 6,
  BOLT_LOCK_ACTOR_METHOD_REMOTE_USER_OTHER: 7,
  BOLT_LOCK_ACTOR_METHOD_REMOTE_DELEGATE: 8,
  BOLT_LOCK_ACTOR_METHOD_LOW_POWER_SHUTDOWN: 9,
  BOLT_LOCK_ACTOR_METHOD_VOICE_ASSISTANT: 10
};

/**
 * @enum {number}
 */
proto.weave.trait.security.BoltLockTrait.BoltActuatorState = {
  BOLT_ACTUATOR_STATE_UNSPECIFIED: 0,
  BOLT_ACTUATOR_STATE_OK: 1,
  BOLT_ACTUATOR_STATE_LOCKING: 2,
  BOLT_ACTUATOR_STATE_UNLOCKING: 3,
  BOLT_ACTUATOR_STATE_MOVING: 4,
  BOLT_ACTUATOR_STATE_JAMMED_LOCKING: 5,
  BOLT_ACTUATOR_STATE_JAMMED_UNLOCKING: 6,
  BOLT_ACTUATOR_STATE_JAMMED_OTHER: 7
};

/**
 * @enum {number}
 */
proto.weave.trait.security.BoltLockTrait.BoltLockedState = {
  BOLT_LOCKED_STATE_UNSPECIFIED: 0,
  BOLT_LOCKED_STATE_UNLOCKED: 1,
  BOLT_LOCKED_STATE_LOCKED: 2,
  BOLT_LOCKED_STATE_UNKNOWN: 3
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct.prototype.toObject = function(opt_includeInstance) {
  return proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct.toObject = function(includeInstance, msg) {
  var f, obj = {
    method: jspb.Message.getFieldWithDefault(msg, 1, 0),
    originator: (f = msg.getOriginator()) && weave_common_pb.ResourceId.toObject(includeInstance, f),
    agent: (f = msg.getAgent()) && weave_common_pb.ResourceId.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct}
 */
proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct;
  return proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct}
 */
proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.weave.trait.security.BoltLockTrait.BoltLockActorMethod} */ (reader.readEnum());
      msg.setMethod(value);
      break;
    case 2:
      var value = new weave_common_pb.ResourceId;
      reader.readMessage(value,weave_common_pb.ResourceId.deserializeBinaryFromReader);
      msg.setOriginator(value);
      break;
    case 3:
      var value = new weave_common_pb.ResourceId;
      reader.readMessage(value,weave_common_pb.ResourceId.deserializeBinaryFromReader);
      msg.setAgent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getOriginator();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      weave_common_pb.ResourceId.serializeBinaryToWriter
    );
  }
  f = message.getAgent();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      weave_common_pb.ResourceId.serializeBinaryToWriter
    );
  }
};


/**
 * optional BoltLockActorMethod method = 1;
 * @return {!proto.weave.trait.security.BoltLockTrait.BoltLockActorMethod}
 */
proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct.prototype.getMethod = function() {
  return /** @type {!proto.weave.trait.security.BoltLockTrait.BoltLockActorMethod} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.weave.trait.security.BoltLockTrait.BoltLockActorMethod} value
 * @return {!proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct} returns this
 */
proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct.prototype.setMethod = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional weave.common.ResourceId originator = 2;
 * @return {?proto.weave.common.ResourceId}
 */
proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct.prototype.getOriginator = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 2));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct} returns this
*/
proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct.prototype.setOriginator = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct} returns this
 */
proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct.prototype.clearOriginator = function() {
  return this.setOriginator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct.prototype.hasOriginator = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional weave.common.ResourceId agent = 3;
 * @return {?proto.weave.common.ResourceId}
 */
proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct.prototype.getAgent = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 3));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct} returns this
*/
proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct.prototype.setAgent = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct} returns this
 */
proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct.prototype.clearAgent = function() {
  return this.setAgent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct.prototype.hasAgent = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weave.trait.security.BoltLockTrait.BoltLockChangeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.weave.trait.security.BoltLockTrait.BoltLockChangeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weave.trait.security.BoltLockTrait.BoltLockChangeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.BoltLockTrait.BoltLockChangeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    boltlockactor: (f = msg.getBoltlockactor()) && proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weave.trait.security.BoltLockTrait.BoltLockChangeRequest}
 */
proto.weave.trait.security.BoltLockTrait.BoltLockChangeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weave.trait.security.BoltLockTrait.BoltLockChangeRequest;
  return proto.weave.trait.security.BoltLockTrait.BoltLockChangeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weave.trait.security.BoltLockTrait.BoltLockChangeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weave.trait.security.BoltLockTrait.BoltLockChangeRequest}
 */
proto.weave.trait.security.BoltLockTrait.BoltLockChangeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.weave.trait.security.BoltLockTrait.BoltState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 4:
      var value = new proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct;
      reader.readMessage(value,proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct.deserializeBinaryFromReader);
      msg.setBoltlockactor(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weave.trait.security.BoltLockTrait.BoltLockChangeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weave.trait.security.BoltLockTrait.BoltLockChangeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weave.trait.security.BoltLockTrait.BoltLockChangeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.BoltLockTrait.BoltLockChangeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getBoltlockactor();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct.serializeBinaryToWriter
    );
  }
};


/**
 * optional BoltState state = 1;
 * @return {!proto.weave.trait.security.BoltLockTrait.BoltState}
 */
proto.weave.trait.security.BoltLockTrait.BoltLockChangeRequest.prototype.getState = function() {
  return /** @type {!proto.weave.trait.security.BoltLockTrait.BoltState} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.weave.trait.security.BoltLockTrait.BoltState} value
 * @return {!proto.weave.trait.security.BoltLockTrait.BoltLockChangeRequest} returns this
 */
proto.weave.trait.security.BoltLockTrait.BoltLockChangeRequest.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional BoltLockActorStruct boltLockActor = 4;
 * @return {?proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct}
 */
proto.weave.trait.security.BoltLockTrait.BoltLockChangeRequest.prototype.getBoltlockactor = function() {
  return /** @type{?proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct} */ (
    jspb.Message.getWrapperField(this, proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct, 4));
};


/**
 * @param {?proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct|undefined} value
 * @return {!proto.weave.trait.security.BoltLockTrait.BoltLockChangeRequest} returns this
*/
proto.weave.trait.security.BoltLockTrait.BoltLockChangeRequest.prototype.setBoltlockactor = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.weave.trait.security.BoltLockTrait.BoltLockChangeRequest} returns this
 */
proto.weave.trait.security.BoltLockTrait.BoltLockChangeRequest.prototype.clearBoltlockactor = function() {
  return this.setBoltlockactor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.weave.trait.security.BoltLockTrait.BoltLockChangeRequest.prototype.hasBoltlockactor = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weave.trait.security.BoltLockTrait.BoltActuatorStateChangeEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.weave.trait.security.BoltLockTrait.BoltActuatorStateChangeEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weave.trait.security.BoltLockTrait.BoltActuatorStateChangeEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.BoltLockTrait.BoltActuatorStateChangeEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    actuatorstate: jspb.Message.getFieldWithDefault(msg, 2, 0),
    lockedstate: jspb.Message.getFieldWithDefault(msg, 3, 0),
    boltlockactor: (f = msg.getBoltlockactor()) && proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weave.trait.security.BoltLockTrait.BoltActuatorStateChangeEvent}
 */
proto.weave.trait.security.BoltLockTrait.BoltActuatorStateChangeEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weave.trait.security.BoltLockTrait.BoltActuatorStateChangeEvent;
  return proto.weave.trait.security.BoltLockTrait.BoltActuatorStateChangeEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weave.trait.security.BoltLockTrait.BoltActuatorStateChangeEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weave.trait.security.BoltLockTrait.BoltActuatorStateChangeEvent}
 */
proto.weave.trait.security.BoltLockTrait.BoltActuatorStateChangeEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.weave.trait.security.BoltLockTrait.BoltState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {!proto.weave.trait.security.BoltLockTrait.BoltActuatorState} */ (reader.readEnum());
      msg.setActuatorstate(value);
      break;
    case 3:
      var value = /** @type {!proto.weave.trait.security.BoltLockTrait.BoltLockedState} */ (reader.readEnum());
      msg.setLockedstate(value);
      break;
    case 4:
      var value = new proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct;
      reader.readMessage(value,proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct.deserializeBinaryFromReader);
      msg.setBoltlockactor(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weave.trait.security.BoltLockTrait.BoltActuatorStateChangeEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weave.trait.security.BoltLockTrait.BoltActuatorStateChangeEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weave.trait.security.BoltLockTrait.BoltActuatorStateChangeEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.BoltLockTrait.BoltActuatorStateChangeEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getActuatorstate();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getLockedstate();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getBoltlockactor();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct.serializeBinaryToWriter
    );
  }
};


/**
 * optional BoltState state = 1;
 * @return {!proto.weave.trait.security.BoltLockTrait.BoltState}
 */
proto.weave.trait.security.BoltLockTrait.BoltActuatorStateChangeEvent.prototype.getState = function() {
  return /** @type {!proto.weave.trait.security.BoltLockTrait.BoltState} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.weave.trait.security.BoltLockTrait.BoltState} value
 * @return {!proto.weave.trait.security.BoltLockTrait.BoltActuatorStateChangeEvent} returns this
 */
proto.weave.trait.security.BoltLockTrait.BoltActuatorStateChangeEvent.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional BoltActuatorState actuatorState = 2;
 * @return {!proto.weave.trait.security.BoltLockTrait.BoltActuatorState}
 */
proto.weave.trait.security.BoltLockTrait.BoltActuatorStateChangeEvent.prototype.getActuatorstate = function() {
  return /** @type {!proto.weave.trait.security.BoltLockTrait.BoltActuatorState} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.weave.trait.security.BoltLockTrait.BoltActuatorState} value
 * @return {!proto.weave.trait.security.BoltLockTrait.BoltActuatorStateChangeEvent} returns this
 */
proto.weave.trait.security.BoltLockTrait.BoltActuatorStateChangeEvent.prototype.setActuatorstate = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional BoltLockedState lockedState = 3;
 * @return {!proto.weave.trait.security.BoltLockTrait.BoltLockedState}
 */
proto.weave.trait.security.BoltLockTrait.BoltActuatorStateChangeEvent.prototype.getLockedstate = function() {
  return /** @type {!proto.weave.trait.security.BoltLockTrait.BoltLockedState} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.weave.trait.security.BoltLockTrait.BoltLockedState} value
 * @return {!proto.weave.trait.security.BoltLockTrait.BoltActuatorStateChangeEvent} returns this
 */
proto.weave.trait.security.BoltLockTrait.BoltActuatorStateChangeEvent.prototype.setLockedstate = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional BoltLockActorStruct boltLockActor = 4;
 * @return {?proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct}
 */
proto.weave.trait.security.BoltLockTrait.BoltActuatorStateChangeEvent.prototype.getBoltlockactor = function() {
  return /** @type{?proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct} */ (
    jspb.Message.getWrapperField(this, proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct, 4));
};


/**
 * @param {?proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct|undefined} value
 * @return {!proto.weave.trait.security.BoltLockTrait.BoltActuatorStateChangeEvent} returns this
*/
proto.weave.trait.security.BoltLockTrait.BoltActuatorStateChangeEvent.prototype.setBoltlockactor = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.weave.trait.security.BoltLockTrait.BoltActuatorStateChangeEvent} returns this
 */
proto.weave.trait.security.BoltLockTrait.BoltActuatorStateChangeEvent.prototype.clearBoltlockactor = function() {
  return this.setBoltlockactor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.weave.trait.security.BoltLockTrait.BoltActuatorStateChangeEvent.prototype.hasBoltlockactor = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional BoltState state = 1;
 * @return {!proto.weave.trait.security.BoltLockTrait.BoltState}
 */
proto.weave.trait.security.BoltLockTrait.prototype.getState = function() {
  return /** @type {!proto.weave.trait.security.BoltLockTrait.BoltState} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.weave.trait.security.BoltLockTrait.BoltState} value
 * @return {!proto.weave.trait.security.BoltLockTrait} returns this
 */
proto.weave.trait.security.BoltLockTrait.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional BoltActuatorState actuatorState = 2;
 * @return {!proto.weave.trait.security.BoltLockTrait.BoltActuatorState}
 */
proto.weave.trait.security.BoltLockTrait.prototype.getActuatorstate = function() {
  return /** @type {!proto.weave.trait.security.BoltLockTrait.BoltActuatorState} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.weave.trait.security.BoltLockTrait.BoltActuatorState} value
 * @return {!proto.weave.trait.security.BoltLockTrait} returns this
 */
proto.weave.trait.security.BoltLockTrait.prototype.setActuatorstate = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional BoltLockedState lockedState = 3;
 * @return {!proto.weave.trait.security.BoltLockTrait.BoltLockedState}
 */
proto.weave.trait.security.BoltLockTrait.prototype.getLockedstate = function() {
  return /** @type {!proto.weave.trait.security.BoltLockTrait.BoltLockedState} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.weave.trait.security.BoltLockTrait.BoltLockedState} value
 * @return {!proto.weave.trait.security.BoltLockTrait} returns this
 */
proto.weave.trait.security.BoltLockTrait.prototype.setLockedstate = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional BoltLockActorStruct boltLockActor = 4;
 * @return {?proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct}
 */
proto.weave.trait.security.BoltLockTrait.prototype.getBoltlockactor = function() {
  return /** @type{?proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct} */ (
    jspb.Message.getWrapperField(this, proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct, 4));
};


/**
 * @param {?proto.weave.trait.security.BoltLockTrait.BoltLockActorStruct|undefined} value
 * @return {!proto.weave.trait.security.BoltLockTrait} returns this
*/
proto.weave.trait.security.BoltLockTrait.prototype.setBoltlockactor = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.weave.trait.security.BoltLockTrait} returns this
 */
proto.weave.trait.security.BoltLockTrait.prototype.clearBoltlockactor = function() {
  return this.setBoltlockactor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.weave.trait.security.BoltLockTrait.prototype.hasBoltlockactor = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp lockedStateLastChangedAt = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.weave.trait.security.BoltLockTrait.prototype.getLockedstatelastchangedat = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.weave.trait.security.BoltLockTrait} returns this
*/
proto.weave.trait.security.BoltLockTrait.prototype.setLockedstatelastchangedat = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.weave.trait.security.BoltLockTrait} returns this
 */
proto.weave.trait.security.BoltLockTrait.prototype.clearLockedstatelastchangedat = function() {
  return this.setLockedstatelastchangedat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.weave.trait.security.BoltLockTrait.prototype.hasLockedstatelastchangedat = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.weave.trait.security.SensorAssociationTrait.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weave.trait.security.SensorAssociationTrait.prototype.toObject = function(opt_includeInstance) {
  return proto.weave.trait.security.SensorAssociationTrait.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weave.trait.security.SensorAssociationTrait} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.SensorAssociationTrait.toObject = function(includeInstance, msg) {
  var f, obj = {
    sensorsList: jspb.Message.toObjectList(msg.getSensorsList(),
    proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus.toObject, includeInstance),
    associatedsensordeviceid: (f = msg.getAssociatedsensordeviceid()) && weave_common_pb.ResourceId.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weave.trait.security.SensorAssociationTrait}
 */
proto.weave.trait.security.SensorAssociationTrait.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weave.trait.security.SensorAssociationTrait;
  return proto.weave.trait.security.SensorAssociationTrait.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weave.trait.security.SensorAssociationTrait} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weave.trait.security.SensorAssociationTrait}
 */
proto.weave.trait.security.SensorAssociationTrait.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus;
      reader.readMessage(value,proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus.deserializeBinaryFromReader);
      msg.addSensors(value);
      break;
    case 2:
      var value = new weave_common_pb.ResourceId;
      reader.readMessage(value,weave_common_pb.ResourceId.deserializeBinaryFromReader);
      msg.setAssociatedsensordeviceid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weave.trait.security.SensorAssociationTrait.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weave.trait.security.SensorAssociationTrait.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weave.trait.security.SensorAssociationTrait} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.SensorAssociationTrait.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSensorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus.serializeBinaryToWriter
    );
  }
  f = message.getAssociatedsensordeviceid();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      weave_common_pb.ResourceId.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.weave.trait.security.SensorAssociationTrait.StatusCode = {
  STATUS_CODE_UNSPECIFIED: 0,
  STATUS_CODE_SUCCESS: 1,
  STATUS_CODE_FAILURE: 2,
  STATUS_CODE_SENSOR_ALREADY_ASSOCIATED_OTHER: 3,
  STATUS_CODE_SENSOR_ALREADY_ASSOCIATED_SELF: 4,
  STATUS_CODE_SENSOR_INVALID: 5,
  STATUS_CODE_USER_SETTING_INVALID: 6
};

/**
 * @enum {number}
 */
proto.weave.trait.security.SensorAssociationTrait.SensorAssociationStatus = {
  SENSOR_ASSOCIATION_STATUS_UNSPECIFIED: 0,
  SENSOR_ASSOCIATION_STATUS_ASSOCIATED_SELF: 1,
  SENSOR_ASSOCIATION_STATUS_ASSOCIATED_OTHER: 2,
  SENSOR_ASSOCIATION_STATUS_DEFAULT: 3,
  SENSOR_ASSOCIATION_STATUS_ELIGIBLE: 4,
  SENSOR_ASSOCIATION_STATUS_INELIGIBLE: 5
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    sensordeviceid: (f = msg.getSensordeviceid()) && weave_common_pb.ResourceId.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationRequest}
 */
proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationRequest;
  return proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationRequest}
 */
proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new weave_common_pb.ResourceId;
      reader.readMessage(value,weave_common_pb.ResourceId.deserializeBinaryFromReader);
      msg.setSensordeviceid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSensordeviceid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      weave_common_pb.ResourceId.serializeBinaryToWriter
    );
  }
};


/**
 * optional weave.common.ResourceId sensorDeviceId = 1;
 * @return {?proto.weave.common.ResourceId}
 */
proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationRequest.prototype.getSensordeviceid = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 1));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationRequest} returns this
*/
proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationRequest.prototype.setSensordeviceid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationRequest} returns this
 */
proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationRequest.prototype.clearSensordeviceid = function() {
  return this.setSensordeviceid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationRequest.prototype.hasSensordeviceid = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationResponse}
 */
proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationResponse;
  return proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationResponse}
 */
proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.weave.trait.security.SensorAssociationTrait.StatusCode} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional StatusCode status = 1;
 * @return {!proto.weave.trait.security.SensorAssociationTrait.StatusCode}
 */
proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationResponse.prototype.getStatus = function() {
  return /** @type {!proto.weave.trait.security.SensorAssociationTrait.StatusCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.weave.trait.security.SensorAssociationTrait.StatusCode} value
 * @return {!proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationResponse} returns this
 */
proto.weave.trait.security.SensorAssociationTrait.SetUserSensorAssociationResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    deviceid: (f = msg.getDeviceid()) && weave_common_pb.ResourceId.toObject(includeInstance, f),
    sensorassociationstatus: jspb.Message.getFieldWithDefault(msg, 2, 0),
    sensorassociationstatuslistList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus}
 */
proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus;
  return proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus}
 */
proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new weave_common_pb.ResourceId;
      reader.readMessage(value,weave_common_pb.ResourceId.deserializeBinaryFromReader);
      msg.setDeviceid(value);
      break;
    case 2:
      var value = /** @type {!proto.weave.trait.security.SensorAssociationTrait.SensorAssociationStatus} */ (reader.readEnum());
      msg.setSensorassociationstatus(value);
      break;
    case 3:
      var values = /** @type {!Array<!proto.weave.trait.security.SensorAssociationTrait.SensorAssociationStatus>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSensorassociationstatuslist(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeviceid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      weave_common_pb.ResourceId.serializeBinaryToWriter
    );
  }
  f = message.getSensorassociationstatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getSensorassociationstatuslistList();
  if (f.length > 0) {
    writer.writePackedEnum(
      3,
      f
    );
  }
};


/**
 * optional weave.common.ResourceId deviceId = 1;
 * @return {?proto.weave.common.ResourceId}
 */
proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus.prototype.getDeviceid = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 1));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus} returns this
*/
proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus.prototype.setDeviceid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus} returns this
 */
proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus.prototype.clearDeviceid = function() {
  return this.setDeviceid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus.prototype.hasDeviceid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SensorAssociationStatus sensorAssociationStatus = 2;
 * @return {!proto.weave.trait.security.SensorAssociationTrait.SensorAssociationStatus}
 */
proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus.prototype.getSensorassociationstatus = function() {
  return /** @type {!proto.weave.trait.security.SensorAssociationTrait.SensorAssociationStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.weave.trait.security.SensorAssociationTrait.SensorAssociationStatus} value
 * @return {!proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus} returns this
 */
proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus.prototype.setSensorassociationstatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated SensorAssociationStatus sensorAssociationStatusList = 3;
 * @return {!Array<!proto.weave.trait.security.SensorAssociationTrait.SensorAssociationStatus>}
 */
proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus.prototype.getSensorassociationstatuslistList = function() {
  return /** @type {!Array<!proto.weave.trait.security.SensorAssociationTrait.SensorAssociationStatus>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<!proto.weave.trait.security.SensorAssociationTrait.SensorAssociationStatus>} value
 * @return {!proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus} returns this
 */
proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus.prototype.setSensorassociationstatuslistList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!proto.weave.trait.security.SensorAssociationTrait.SensorAssociationStatus} value
 * @param {number=} opt_index
 * @return {!proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus} returns this
 */
proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus.prototype.addSensorassociationstatuslist = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus} returns this
 */
proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus.prototype.clearSensorassociationstatuslistList = function() {
  return this.setSensorassociationstatuslistList([]);
};


/**
 * repeated SensorDeviceStatus sensors = 1;
 * @return {!Array<!proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus>}
 */
proto.weave.trait.security.SensorAssociationTrait.prototype.getSensorsList = function() {
  return /** @type{!Array<!proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus, 1));
};


/**
 * @param {!Array<!proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus>} value
 * @return {!proto.weave.trait.security.SensorAssociationTrait} returns this
*/
proto.weave.trait.security.SensorAssociationTrait.prototype.setSensorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus}
 */
proto.weave.trait.security.SensorAssociationTrait.prototype.addSensors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.weave.trait.security.SensorAssociationTrait.SensorDeviceStatus, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.weave.trait.security.SensorAssociationTrait} returns this
 */
proto.weave.trait.security.SensorAssociationTrait.prototype.clearSensorsList = function() {
  return this.setSensorsList([]);
};


/**
 * optional weave.common.ResourceId associatedSensorDeviceId = 2;
 * @return {?proto.weave.common.ResourceId}
 */
proto.weave.trait.security.SensorAssociationTrait.prototype.getAssociatedsensordeviceid = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 2));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.weave.trait.security.SensorAssociationTrait} returns this
*/
proto.weave.trait.security.SensorAssociationTrait.prototype.setAssociatedsensordeviceid = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.weave.trait.security.SensorAssociationTrait} returns this
 */
proto.weave.trait.security.SensorAssociationTrait.prototype.clearAssociatedsensordeviceid = function() {
  return this.setAssociatedsensordeviceid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.weave.trait.security.SensorAssociationTrait.prototype.hasAssociatedsensordeviceid = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weave.trait.security.PincodeInputTrait.prototype.toObject = function(opt_includeInstance) {
  return proto.weave.trait.security.PincodeInputTrait.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weave.trait.security.PincodeInputTrait} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.PincodeInputTrait.toObject = function(includeInstance, msg) {
  var f, obj = {
    pincodeinputstate: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weave.trait.security.PincodeInputTrait}
 */
proto.weave.trait.security.PincodeInputTrait.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weave.trait.security.PincodeInputTrait;
  return proto.weave.trait.security.PincodeInputTrait.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weave.trait.security.PincodeInputTrait} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weave.trait.security.PincodeInputTrait}
 */
proto.weave.trait.security.PincodeInputTrait.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.weave.trait.security.PincodeInputTrait.PincodeInputState} */ (reader.readEnum());
      msg.setPincodeinputstate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weave.trait.security.PincodeInputTrait.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weave.trait.security.PincodeInputTrait.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weave.trait.security.PincodeInputTrait} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.PincodeInputTrait.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPincodeinputstate();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.weave.trait.security.PincodeInputTrait.PincodeEntryResult = {
  PINCODE_ENTRY_RESULT_UNSPECIFIED: 0,
  PINCODE_ENTRY_RESULT_FAILURE_INVALID_PINCODE: 1,
  PINCODE_ENTRY_RESULT_FAILURE_OUT_OF_SCHEDULE: 2,
  PINCODE_ENTRY_RESULT_FAILURE_PINCODE_DISABLED: 3,
  PINCODE_ENTRY_RESULT_SUCCESS: 4
};

/**
 * @enum {number}
 */
proto.weave.trait.security.PincodeInputTrait.PincodeInputState = {
  PINCODE_INPUT_STATE_UNSPECIFIED: 0,
  PINCODE_INPUT_STATE_ENABLED: 1,
  PINCODE_INPUT_STATE_DISABLED: 2
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weave.trait.security.PincodeInputTrait.KeypadEntryEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.weave.trait.security.PincodeInputTrait.KeypadEntryEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weave.trait.security.PincodeInputTrait.KeypadEntryEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.PincodeInputTrait.KeypadEntryEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    pincodecredentialenabled: (f = msg.getPincodecredentialenabled()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    userid: (f = msg.getUserid()) && weave_common_pb.ResourceId.toObject(includeInstance, f),
    invalidentrycount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pincodeentryresult: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weave.trait.security.PincodeInputTrait.KeypadEntryEvent}
 */
proto.weave.trait.security.PincodeInputTrait.KeypadEntryEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weave.trait.security.PincodeInputTrait.KeypadEntryEvent;
  return proto.weave.trait.security.PincodeInputTrait.KeypadEntryEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weave.trait.security.PincodeInputTrait.KeypadEntryEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weave.trait.security.PincodeInputTrait.KeypadEntryEvent}
 */
proto.weave.trait.security.PincodeInputTrait.KeypadEntryEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setPincodecredentialenabled(value);
      break;
    case 2:
      var value = new weave_common_pb.ResourceId;
      reader.readMessage(value,weave_common_pb.ResourceId.deserializeBinaryFromReader);
      msg.setUserid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setInvalidentrycount(value);
      break;
    case 4:
      var value = /** @type {!proto.weave.trait.security.PincodeInputTrait.PincodeEntryResult} */ (reader.readEnum());
      msg.setPincodeentryresult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weave.trait.security.PincodeInputTrait.KeypadEntryEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weave.trait.security.PincodeInputTrait.KeypadEntryEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weave.trait.security.PincodeInputTrait.KeypadEntryEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.PincodeInputTrait.KeypadEntryEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPincodecredentialenabled();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getUserid();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      weave_common_pb.ResourceId.serializeBinaryToWriter
    );
  }
  f = message.getInvalidentrycount();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getPincodeentryresult();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional google.protobuf.BoolValue pincodeCredentialEnabled = 1;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.weave.trait.security.PincodeInputTrait.KeypadEntryEvent.prototype.getPincodecredentialenabled = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 1));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.weave.trait.security.PincodeInputTrait.KeypadEntryEvent} returns this
*/
proto.weave.trait.security.PincodeInputTrait.KeypadEntryEvent.prototype.setPincodecredentialenabled = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.weave.trait.security.PincodeInputTrait.KeypadEntryEvent} returns this
 */
proto.weave.trait.security.PincodeInputTrait.KeypadEntryEvent.prototype.clearPincodecredentialenabled = function() {
  return this.setPincodecredentialenabled(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.weave.trait.security.PincodeInputTrait.KeypadEntryEvent.prototype.hasPincodecredentialenabled = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional weave.common.ResourceId userId = 2;
 * @return {?proto.weave.common.ResourceId}
 */
proto.weave.trait.security.PincodeInputTrait.KeypadEntryEvent.prototype.getUserid = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 2));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.weave.trait.security.PincodeInputTrait.KeypadEntryEvent} returns this
*/
proto.weave.trait.security.PincodeInputTrait.KeypadEntryEvent.prototype.setUserid = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.weave.trait.security.PincodeInputTrait.KeypadEntryEvent} returns this
 */
proto.weave.trait.security.PincodeInputTrait.KeypadEntryEvent.prototype.clearUserid = function() {
  return this.setUserid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.weave.trait.security.PincodeInputTrait.KeypadEntryEvent.prototype.hasUserid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 invalidEntryCount = 3;
 * @return {number}
 */
proto.weave.trait.security.PincodeInputTrait.KeypadEntryEvent.prototype.getInvalidentrycount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.weave.trait.security.PincodeInputTrait.KeypadEntryEvent} returns this
 */
proto.weave.trait.security.PincodeInputTrait.KeypadEntryEvent.prototype.setInvalidentrycount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional PincodeEntryResult pincodeEntryResult = 4;
 * @return {!proto.weave.trait.security.PincodeInputTrait.PincodeEntryResult}
 */
proto.weave.trait.security.PincodeInputTrait.KeypadEntryEvent.prototype.getPincodeentryresult = function() {
  return /** @type {!proto.weave.trait.security.PincodeInputTrait.PincodeEntryResult} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.weave.trait.security.PincodeInputTrait.PincodeEntryResult} value
 * @return {!proto.weave.trait.security.PincodeInputTrait.KeypadEntryEvent} returns this
 */
proto.weave.trait.security.PincodeInputTrait.KeypadEntryEvent.prototype.setPincodeentryresult = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weave.trait.security.PincodeInputTrait.PincodeInputStateChangeEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.weave.trait.security.PincodeInputTrait.PincodeInputStateChangeEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weave.trait.security.PincodeInputTrait.PincodeInputStateChangeEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.PincodeInputTrait.PincodeInputStateChangeEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    pincodeinputstate: jspb.Message.getFieldWithDefault(msg, 1, 0),
    userid: (f = msg.getUserid()) && weave_common_pb.ResourceId.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weave.trait.security.PincodeInputTrait.PincodeInputStateChangeEvent}
 */
proto.weave.trait.security.PincodeInputTrait.PincodeInputStateChangeEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weave.trait.security.PincodeInputTrait.PincodeInputStateChangeEvent;
  return proto.weave.trait.security.PincodeInputTrait.PincodeInputStateChangeEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weave.trait.security.PincodeInputTrait.PincodeInputStateChangeEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weave.trait.security.PincodeInputTrait.PincodeInputStateChangeEvent}
 */
proto.weave.trait.security.PincodeInputTrait.PincodeInputStateChangeEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.weave.trait.security.PincodeInputTrait.PincodeInputState} */ (reader.readEnum());
      msg.setPincodeinputstate(value);
      break;
    case 2:
      var value = new weave_common_pb.ResourceId;
      reader.readMessage(value,weave_common_pb.ResourceId.deserializeBinaryFromReader);
      msg.setUserid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weave.trait.security.PincodeInputTrait.PincodeInputStateChangeEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weave.trait.security.PincodeInputTrait.PincodeInputStateChangeEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weave.trait.security.PincodeInputTrait.PincodeInputStateChangeEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.PincodeInputTrait.PincodeInputStateChangeEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPincodeinputstate();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getUserid();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      weave_common_pb.ResourceId.serializeBinaryToWriter
    );
  }
};


/**
 * optional PincodeInputState pincodeInputState = 1;
 * @return {!proto.weave.trait.security.PincodeInputTrait.PincodeInputState}
 */
proto.weave.trait.security.PincodeInputTrait.PincodeInputStateChangeEvent.prototype.getPincodeinputstate = function() {
  return /** @type {!proto.weave.trait.security.PincodeInputTrait.PincodeInputState} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.weave.trait.security.PincodeInputTrait.PincodeInputState} value
 * @return {!proto.weave.trait.security.PincodeInputTrait.PincodeInputStateChangeEvent} returns this
 */
proto.weave.trait.security.PincodeInputTrait.PincodeInputStateChangeEvent.prototype.setPincodeinputstate = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional weave.common.ResourceId userId = 2;
 * @return {?proto.weave.common.ResourceId}
 */
proto.weave.trait.security.PincodeInputTrait.PincodeInputStateChangeEvent.prototype.getUserid = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 2));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.weave.trait.security.PincodeInputTrait.PincodeInputStateChangeEvent} returns this
*/
proto.weave.trait.security.PincodeInputTrait.PincodeInputStateChangeEvent.prototype.setUserid = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.weave.trait.security.PincodeInputTrait.PincodeInputStateChangeEvent} returns this
 */
proto.weave.trait.security.PincodeInputTrait.PincodeInputStateChangeEvent.prototype.clearUserid = function() {
  return this.setUserid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.weave.trait.security.PincodeInputTrait.PincodeInputStateChangeEvent.prototype.hasUserid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional PincodeInputState pincodeInputState = 1;
 * @return {!proto.weave.trait.security.PincodeInputTrait.PincodeInputState}
 */
proto.weave.trait.security.PincodeInputTrait.prototype.getPincodeinputstate = function() {
  return /** @type {!proto.weave.trait.security.PincodeInputTrait.PincodeInputState} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.weave.trait.security.PincodeInputTrait.PincodeInputState} value
 * @return {!proto.weave.trait.security.PincodeInputTrait} returns this
 */
proto.weave.trait.security.PincodeInputTrait.prototype.setPincodeinputstate = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weave.trait.security.TamperTrait.prototype.toObject = function(opt_includeInstance) {
  return proto.weave.trait.security.TamperTrait.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weave.trait.security.TamperTrait} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.TamperTrait.toObject = function(includeInstance, msg) {
  var f, obj = {
    tamperstate: jspb.Message.getFieldWithDefault(msg, 1, 0),
    firstobservedat: (f = msg.getFirstobservedat()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    firstobservedatms: (f = msg.getFirstobservedatms()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weave.trait.security.TamperTrait}
 */
proto.weave.trait.security.TamperTrait.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weave.trait.security.TamperTrait;
  return proto.weave.trait.security.TamperTrait.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weave.trait.security.TamperTrait} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weave.trait.security.TamperTrait}
 */
proto.weave.trait.security.TamperTrait.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.weave.trait.security.TamperTrait.TamperState} */ (reader.readEnum());
      msg.setTamperstate(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFirstobservedat(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFirstobservedatms(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weave.trait.security.TamperTrait.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weave.trait.security.TamperTrait.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weave.trait.security.TamperTrait} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.TamperTrait.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTamperstate();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getFirstobservedat();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getFirstobservedatms();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.weave.trait.security.TamperTrait.TamperState = {
  TAMPER_STATE_UNSPECIFIED: 0,
  TAMPER_STATE_CLEAR: 1,
  TAMPER_STATE_TAMPERED: 2,
  TAMPER_STATE_UNKNOWN: 3
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weave.trait.security.TamperTrait.ResetTamperRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.weave.trait.security.TamperTrait.ResetTamperRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weave.trait.security.TamperTrait.ResetTamperRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.TamperTrait.ResetTamperRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weave.trait.security.TamperTrait.ResetTamperRequest}
 */
proto.weave.trait.security.TamperTrait.ResetTamperRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weave.trait.security.TamperTrait.ResetTamperRequest;
  return proto.weave.trait.security.TamperTrait.ResetTamperRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weave.trait.security.TamperTrait.ResetTamperRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weave.trait.security.TamperTrait.ResetTamperRequest}
 */
proto.weave.trait.security.TamperTrait.ResetTamperRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weave.trait.security.TamperTrait.ResetTamperRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weave.trait.security.TamperTrait.ResetTamperRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weave.trait.security.TamperTrait.ResetTamperRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.TamperTrait.ResetTamperRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weave.trait.security.TamperTrait.TamperStateChangeEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.weave.trait.security.TamperTrait.TamperStateChangeEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weave.trait.security.TamperTrait.TamperStateChangeEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.TamperTrait.TamperStateChangeEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    tamperstate: jspb.Message.getFieldWithDefault(msg, 1, 0),
    priortamperstate: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weave.trait.security.TamperTrait.TamperStateChangeEvent}
 */
proto.weave.trait.security.TamperTrait.TamperStateChangeEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weave.trait.security.TamperTrait.TamperStateChangeEvent;
  return proto.weave.trait.security.TamperTrait.TamperStateChangeEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weave.trait.security.TamperTrait.TamperStateChangeEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weave.trait.security.TamperTrait.TamperStateChangeEvent}
 */
proto.weave.trait.security.TamperTrait.TamperStateChangeEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.weave.trait.security.TamperTrait.TamperState} */ (reader.readEnum());
      msg.setTamperstate(value);
      break;
    case 2:
      var value = /** @type {!proto.weave.trait.security.TamperTrait.TamperState} */ (reader.readEnum());
      msg.setPriortamperstate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weave.trait.security.TamperTrait.TamperStateChangeEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weave.trait.security.TamperTrait.TamperStateChangeEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weave.trait.security.TamperTrait.TamperStateChangeEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.TamperTrait.TamperStateChangeEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTamperstate();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPriortamperstate();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional TamperState tamperState = 1;
 * @return {!proto.weave.trait.security.TamperTrait.TamperState}
 */
proto.weave.trait.security.TamperTrait.TamperStateChangeEvent.prototype.getTamperstate = function() {
  return /** @type {!proto.weave.trait.security.TamperTrait.TamperState} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.weave.trait.security.TamperTrait.TamperState} value
 * @return {!proto.weave.trait.security.TamperTrait.TamperStateChangeEvent} returns this
 */
proto.weave.trait.security.TamperTrait.TamperStateChangeEvent.prototype.setTamperstate = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional TamperState priorTamperState = 2;
 * @return {!proto.weave.trait.security.TamperTrait.TamperState}
 */
proto.weave.trait.security.TamperTrait.TamperStateChangeEvent.prototype.getPriortamperstate = function() {
  return /** @type {!proto.weave.trait.security.TamperTrait.TamperState} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.weave.trait.security.TamperTrait.TamperState} value
 * @return {!proto.weave.trait.security.TamperTrait.TamperStateChangeEvent} returns this
 */
proto.weave.trait.security.TamperTrait.TamperStateChangeEvent.prototype.setPriortamperstate = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional TamperState tamperState = 1;
 * @return {!proto.weave.trait.security.TamperTrait.TamperState}
 */
proto.weave.trait.security.TamperTrait.prototype.getTamperstate = function() {
  return /** @type {!proto.weave.trait.security.TamperTrait.TamperState} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.weave.trait.security.TamperTrait.TamperState} value
 * @return {!proto.weave.trait.security.TamperTrait} returns this
 */
proto.weave.trait.security.TamperTrait.prototype.setTamperstate = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp firstObservedAt = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.weave.trait.security.TamperTrait.prototype.getFirstobservedat = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.weave.trait.security.TamperTrait} returns this
*/
proto.weave.trait.security.TamperTrait.prototype.setFirstobservedat = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.weave.trait.security.TamperTrait} returns this
 */
proto.weave.trait.security.TamperTrait.prototype.clearFirstobservedat = function() {
  return this.setFirstobservedat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.weave.trait.security.TamperTrait.prototype.hasFirstobservedat = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp firstObservedAtMs = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.weave.trait.security.TamperTrait.prototype.getFirstobservedatms = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.weave.trait.security.TamperTrait} returns this
*/
proto.weave.trait.security.TamperTrait.prototype.setFirstobservedatms = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.weave.trait.security.TamperTrait} returns this
 */
proto.weave.trait.security.TamperTrait.prototype.clearFirstobservedatms = function() {
  return this.setFirstobservedatms(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.weave.trait.security.TamperTrait.prototype.hasFirstobservedatms = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weave.trait.security.UserNFCTokenAccessTrait.prototype.toObject = function(opt_includeInstance) {
  return proto.weave.trait.security.UserNFCTokenAccessTrait.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weave.trait.security.UserNFCTokenAccessTrait} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserNFCTokenAccessTrait.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weave.trait.security.UserNFCTokenAccessTrait}
 */
proto.weave.trait.security.UserNFCTokenAccessTrait.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weave.trait.security.UserNFCTokenAccessTrait;
  return proto.weave.trait.security.UserNFCTokenAccessTrait.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weave.trait.security.UserNFCTokenAccessTrait} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weave.trait.security.UserNFCTokenAccessTrait}
 */
proto.weave.trait.security.UserNFCTokenAccessTrait.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weave.trait.security.UserNFCTokenAccessTrait.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weave.trait.security.UserNFCTokenAccessTrait.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weave.trait.security.UserNFCTokenAccessTrait} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserNFCTokenAccessTrait.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.weave.trait.security.UserNFCTokenAccessTrait.UserNFCTokenAccessResult = {
  USER_NFC_TOKEN_ACCESS_RESULT_UNSPECIFIED: 0,
  USER_NFC_TOKEN_ACCESS_RESULT_SUCCESS: 1,
  USER_NFC_TOKEN_ACCESS_RESULT_FAILURE_UNKNOWN_TOKEN: 2,
  USER_NFC_TOKEN_ACCESS_RESULT_FAILURE_INVALID_TOKEN: 3,
  USER_NFC_TOKEN_ACCESS_RESULT_FAILURE_OUT_OF_SCHEDULE: 4,
  USER_NFC_TOKEN_ACCESS_RESULT_FAILURE_TOKEN_DISABLED: 5,
  USER_NFC_TOKEN_ACCESS_RESULT_FAILURE_INVALID_VERSION: 6,
  USER_NFC_TOKEN_ACCESS_RESULT_FAILURE_OTHER_REASON: 7
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weave.trait.security.UserNFCTokenAccessTrait.UserNFCTokenAccessEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.weave.trait.security.UserNFCTokenAccessTrait.UserNFCTokenAccessEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weave.trait.security.UserNFCTokenAccessTrait.UserNFCTokenAccessEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserNFCTokenAccessTrait.UserNFCTokenAccessEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, 0),
    tokenid: (f = msg.getTokenid()) && weave_common_pb.ResourceId.toObject(includeInstance, f),
    userid: (f = msg.getUserid()) && weave_common_pb.ResourceId.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weave.trait.security.UserNFCTokenAccessTrait.UserNFCTokenAccessEvent}
 */
proto.weave.trait.security.UserNFCTokenAccessTrait.UserNFCTokenAccessEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weave.trait.security.UserNFCTokenAccessTrait.UserNFCTokenAccessEvent;
  return proto.weave.trait.security.UserNFCTokenAccessTrait.UserNFCTokenAccessEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weave.trait.security.UserNFCTokenAccessTrait.UserNFCTokenAccessEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weave.trait.security.UserNFCTokenAccessTrait.UserNFCTokenAccessEvent}
 */
proto.weave.trait.security.UserNFCTokenAccessTrait.UserNFCTokenAccessEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.weave.trait.security.UserNFCTokenAccessTrait.UserNFCTokenAccessResult} */ (reader.readEnum());
      msg.setResult(value);
      break;
    case 2:
      var value = new weave_common_pb.ResourceId;
      reader.readMessage(value,weave_common_pb.ResourceId.deserializeBinaryFromReader);
      msg.setTokenid(value);
      break;
    case 3:
      var value = new weave_common_pb.ResourceId;
      reader.readMessage(value,weave_common_pb.ResourceId.deserializeBinaryFromReader);
      msg.setUserid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weave.trait.security.UserNFCTokenAccessTrait.UserNFCTokenAccessEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weave.trait.security.UserNFCTokenAccessTrait.UserNFCTokenAccessEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weave.trait.security.UserNFCTokenAccessTrait.UserNFCTokenAccessEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserNFCTokenAccessTrait.UserNFCTokenAccessEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getTokenid();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      weave_common_pb.ResourceId.serializeBinaryToWriter
    );
  }
  f = message.getUserid();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      weave_common_pb.ResourceId.serializeBinaryToWriter
    );
  }
};


/**
 * optional UserNFCTokenAccessResult result = 1;
 * @return {!proto.weave.trait.security.UserNFCTokenAccessTrait.UserNFCTokenAccessResult}
 */
proto.weave.trait.security.UserNFCTokenAccessTrait.UserNFCTokenAccessEvent.prototype.getResult = function() {
  return /** @type {!proto.weave.trait.security.UserNFCTokenAccessTrait.UserNFCTokenAccessResult} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.weave.trait.security.UserNFCTokenAccessTrait.UserNFCTokenAccessResult} value
 * @return {!proto.weave.trait.security.UserNFCTokenAccessTrait.UserNFCTokenAccessEvent} returns this
 */
proto.weave.trait.security.UserNFCTokenAccessTrait.UserNFCTokenAccessEvent.prototype.setResult = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional weave.common.ResourceId tokenId = 2;
 * @return {?proto.weave.common.ResourceId}
 */
proto.weave.trait.security.UserNFCTokenAccessTrait.UserNFCTokenAccessEvent.prototype.getTokenid = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 2));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.weave.trait.security.UserNFCTokenAccessTrait.UserNFCTokenAccessEvent} returns this
*/
proto.weave.trait.security.UserNFCTokenAccessTrait.UserNFCTokenAccessEvent.prototype.setTokenid = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.weave.trait.security.UserNFCTokenAccessTrait.UserNFCTokenAccessEvent} returns this
 */
proto.weave.trait.security.UserNFCTokenAccessTrait.UserNFCTokenAccessEvent.prototype.clearTokenid = function() {
  return this.setTokenid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.weave.trait.security.UserNFCTokenAccessTrait.UserNFCTokenAccessEvent.prototype.hasTokenid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional weave.common.ResourceId userId = 3;
 * @return {?proto.weave.common.ResourceId}
 */
proto.weave.trait.security.UserNFCTokenAccessTrait.UserNFCTokenAccessEvent.prototype.getUserid = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 3));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.weave.trait.security.UserNFCTokenAccessTrait.UserNFCTokenAccessEvent} returns this
*/
proto.weave.trait.security.UserNFCTokenAccessTrait.UserNFCTokenAccessEvent.prototype.setUserid = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.weave.trait.security.UserNFCTokenAccessTrait.UserNFCTokenAccessEvent} returns this
 */
proto.weave.trait.security.UserNFCTokenAccessTrait.UserNFCTokenAccessEvent.prototype.clearUserid = function() {
  return this.setUserid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.weave.trait.security.UserNFCTokenAccessTrait.UserNFCTokenAccessEvent.prototype.hasUserid = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.weave.trait.security.UserNFCTokensTrait.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weave.trait.security.UserNFCTokensTrait.prototype.toObject = function(opt_includeInstance) {
  return proto.weave.trait.security.UserNFCTokensTrait.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weave.trait.security.UserNFCTokensTrait} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserNFCTokensTrait.toObject = function(includeInstance, msg) {
  var f, obj = {
    usernfctokensList: jspb.Message.toObjectList(msg.getUsernfctokensList(),
    proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weave.trait.security.UserNFCTokensTrait}
 */
proto.weave.trait.security.UserNFCTokensTrait.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weave.trait.security.UserNFCTokensTrait;
  return proto.weave.trait.security.UserNFCTokensTrait.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weave.trait.security.UserNFCTokensTrait} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weave.trait.security.UserNFCTokensTrait}
 */
proto.weave.trait.security.UserNFCTokensTrait.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData;
      reader.readMessage(value,proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData.deserializeBinaryFromReader);
      msg.addUsernfctokens(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weave.trait.security.UserNFCTokensTrait.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weave.trait.security.UserNFCTokensTrait.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weave.trait.security.UserNFCTokensTrait} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserNFCTokensTrait.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsernfctokensList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData.prototype.toObject = function(opt_includeInstance) {
  return proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData.toObject = function(includeInstance, msg) {
  var f, obj = {
    userid: (f = msg.getUserid()) && weave_common_pb.ResourceId.toObject(includeInstance, f),
    tokendeviceid: (f = msg.getTokendeviceid()) && weave_common_pb.ResourceId.toObject(includeInstance, f),
    enabled: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    structureidsList: jspb.Message.toObjectList(msg.getStructureidsList(),
    weave_common_pb.ResourceId.toObject, includeInstance),
    label: jspb.Message.getFieldWithDefault(msg, 5, ""),
    metadata: (f = msg.getMetadata()) && proto.weave.trait.security.UserNFCTokenMetadataTrait.Metadata.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData}
 */
proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData;
  return proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData}
 */
proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new weave_common_pb.ResourceId;
      reader.readMessage(value,weave_common_pb.ResourceId.deserializeBinaryFromReader);
      msg.setUserid(value);
      break;
    case 2:
      var value = new weave_common_pb.ResourceId;
      reader.readMessage(value,weave_common_pb.ResourceId.deserializeBinaryFromReader);
      msg.setTokendeviceid(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 4:
      var value = new weave_common_pb.ResourceId;
      reader.readMessage(value,weave_common_pb.ResourceId.deserializeBinaryFromReader);
      msg.addStructureids(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabel(value);
      break;
    case 6:
      var value = new proto.weave.trait.security.UserNFCTokenMetadataTrait.Metadata;
      reader.readMessage(value,proto.weave.trait.security.UserNFCTokenMetadataTrait.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      weave_common_pb.ResourceId.serializeBinaryToWriter
    );
  }
  f = message.getTokendeviceid();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      weave_common_pb.ResourceId.serializeBinaryToWriter
    );
  }
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getStructureidsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      weave_common_pb.ResourceId.serializeBinaryToWriter
    );
  }
  f = message.getLabel();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.weave.trait.security.UserNFCTokenMetadataTrait.Metadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional weave.common.ResourceId userId = 1;
 * @return {?proto.weave.common.ResourceId}
 */
proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData.prototype.getUserid = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 1));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData} returns this
*/
proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData.prototype.setUserid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData} returns this
 */
proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData.prototype.clearUserid = function() {
  return this.setUserid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData.prototype.hasUserid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional weave.common.ResourceId tokenDeviceId = 2;
 * @return {?proto.weave.common.ResourceId}
 */
proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData.prototype.getTokendeviceid = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 2));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData} returns this
*/
proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData.prototype.setTokendeviceid = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData} returns this
 */
proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData.prototype.clearTokendeviceid = function() {
  return this.setTokendeviceid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData.prototype.hasTokendeviceid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool enabled = 3;
 * @return {boolean}
 */
proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData} returns this
 */
proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * repeated weave.common.ResourceId structureIds = 4;
 * @return {!Array<!proto.weave.common.ResourceId>}
 */
proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData.prototype.getStructureidsList = function() {
  return /** @type{!Array<!proto.weave.common.ResourceId>} */ (
    jspb.Message.getRepeatedWrapperField(this, weave_common_pb.ResourceId, 4));
};


/**
 * @param {!Array<!proto.weave.common.ResourceId>} value
 * @return {!proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData} returns this
*/
proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData.prototype.setStructureidsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.weave.common.ResourceId=} opt_value
 * @param {number=} opt_index
 * @return {!proto.weave.common.ResourceId}
 */
proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData.prototype.addStructureids = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.weave.common.ResourceId, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData} returns this
 */
proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData.prototype.clearStructureidsList = function() {
  return this.setStructureidsList([]);
};


/**
 * optional string label = 5;
 * @return {string}
 */
proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData.prototype.getLabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData} returns this
 */
proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData.prototype.setLabel = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional UserNFCTokenMetadataTrait.Metadata metadata = 6;
 * @return {?proto.weave.trait.security.UserNFCTokenMetadataTrait.Metadata}
 */
proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData.prototype.getMetadata = function() {
  return /** @type{?proto.weave.trait.security.UserNFCTokenMetadataTrait.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.weave.trait.security.UserNFCTokenMetadataTrait.Metadata, 6));
};


/**
 * @param {?proto.weave.trait.security.UserNFCTokenMetadataTrait.Metadata|undefined} value
 * @return {!proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData} returns this
*/
proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData} returns this
 */
proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated UserNFCTokenData userNfcTokens = 1;
 * @return {!Array<!proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData>}
 */
proto.weave.trait.security.UserNFCTokensTrait.prototype.getUsernfctokensList = function() {
  return /** @type{!Array<!proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData, 1));
};


/**
 * @param {!Array<!proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData>} value
 * @return {!proto.weave.trait.security.UserNFCTokensTrait} returns this
*/
proto.weave.trait.security.UserNFCTokensTrait.prototype.setUsernfctokensList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData}
 */
proto.weave.trait.security.UserNFCTokensTrait.prototype.addUsernfctokens = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.weave.trait.security.UserNFCTokensTrait.UserNFCTokenData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.weave.trait.security.UserNFCTokensTrait} returns this
 */
proto.weave.trait.security.UserNFCTokensTrait.prototype.clearUsernfctokensList = function() {
  return this.setUsernfctokensList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weave.trait.security.UserNFCTokenMetadataTrait.prototype.toObject = function(opt_includeInstance) {
  return proto.weave.trait.security.UserNFCTokenMetadataTrait.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weave.trait.security.UserNFCTokenMetadataTrait} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserNFCTokenMetadataTrait.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && proto.weave.trait.security.UserNFCTokenMetadataTrait.Metadata.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weave.trait.security.UserNFCTokenMetadataTrait}
 */
proto.weave.trait.security.UserNFCTokenMetadataTrait.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weave.trait.security.UserNFCTokenMetadataTrait;
  return proto.weave.trait.security.UserNFCTokenMetadataTrait.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weave.trait.security.UserNFCTokenMetadataTrait} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weave.trait.security.UserNFCTokenMetadataTrait}
 */
proto.weave.trait.security.UserNFCTokenMetadataTrait.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.weave.trait.security.UserNFCTokenMetadataTrait.Metadata;
      reader.readMessage(value,proto.weave.trait.security.UserNFCTokenMetadataTrait.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weave.trait.security.UserNFCTokenMetadataTrait.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weave.trait.security.UserNFCTokenMetadataTrait.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weave.trait.security.UserNFCTokenMetadataTrait} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserNFCTokenMetadataTrait.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.weave.trait.security.UserNFCTokenMetadataTrait.Metadata.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weave.trait.security.UserNFCTokenMetadataTrait.Metadata.prototype.toObject = function(opt_includeInstance) {
  return proto.weave.trait.security.UserNFCTokenMetadataTrait.Metadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weave.trait.security.UserNFCTokenMetadataTrait.Metadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserNFCTokenMetadataTrait.Metadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    serialnumber: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tagnumber: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weave.trait.security.UserNFCTokenMetadataTrait.Metadata}
 */
proto.weave.trait.security.UserNFCTokenMetadataTrait.Metadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weave.trait.security.UserNFCTokenMetadataTrait.Metadata;
  return proto.weave.trait.security.UserNFCTokenMetadataTrait.Metadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weave.trait.security.UserNFCTokenMetadataTrait.Metadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weave.trait.security.UserNFCTokenMetadataTrait.Metadata}
 */
proto.weave.trait.security.UserNFCTokenMetadataTrait.Metadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSerialnumber(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTagnumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weave.trait.security.UserNFCTokenMetadataTrait.Metadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weave.trait.security.UserNFCTokenMetadataTrait.Metadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weave.trait.security.UserNFCTokenMetadataTrait.Metadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserNFCTokenMetadataTrait.Metadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSerialnumber();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTagnumber();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string serialNumber = 1;
 * @return {string}
 */
proto.weave.trait.security.UserNFCTokenMetadataTrait.Metadata.prototype.getSerialnumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.weave.trait.security.UserNFCTokenMetadataTrait.Metadata} returns this
 */
proto.weave.trait.security.UserNFCTokenMetadataTrait.Metadata.prototype.setSerialnumber = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string tagNumber = 2;
 * @return {string}
 */
proto.weave.trait.security.UserNFCTokenMetadataTrait.Metadata.prototype.getTagnumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.weave.trait.security.UserNFCTokenMetadataTrait.Metadata} returns this
 */
proto.weave.trait.security.UserNFCTokenMetadataTrait.Metadata.prototype.setTagnumber = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Metadata metadata = 1;
 * @return {?proto.weave.trait.security.UserNFCTokenMetadataTrait.Metadata}
 */
proto.weave.trait.security.UserNFCTokenMetadataTrait.prototype.getMetadata = function() {
  return /** @type{?proto.weave.trait.security.UserNFCTokenMetadataTrait.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.weave.trait.security.UserNFCTokenMetadataTrait.Metadata, 1));
};


/**
 * @param {?proto.weave.trait.security.UserNFCTokenMetadataTrait.Metadata|undefined} value
 * @return {!proto.weave.trait.security.UserNFCTokenMetadataTrait} returns this
*/
proto.weave.trait.security.UserNFCTokenMetadataTrait.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.weave.trait.security.UserNFCTokenMetadataTrait} returns this
 */
proto.weave.trait.security.UserNFCTokenMetadataTrait.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.weave.trait.security.UserNFCTokenMetadataTrait.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weave.trait.security.BoltLockCapabilitiesTrait.prototype.toObject = function(opt_includeInstance) {
  return proto.weave.trait.security.BoltLockCapabilitiesTrait.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weave.trait.security.BoltLockCapabilitiesTrait} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.BoltLockCapabilitiesTrait.toObject = function(includeInstance, msg) {
  var f, obj = {
    handedness: jspb.Message.getFieldWithDefault(msg, 1, 0),
    maxautorelockduration: (f = msg.getMaxautorelockduration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weave.trait.security.BoltLockCapabilitiesTrait}
 */
proto.weave.trait.security.BoltLockCapabilitiesTrait.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weave.trait.security.BoltLockCapabilitiesTrait;
  return proto.weave.trait.security.BoltLockCapabilitiesTrait.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weave.trait.security.BoltLockCapabilitiesTrait} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weave.trait.security.BoltLockCapabilitiesTrait}
 */
proto.weave.trait.security.BoltLockCapabilitiesTrait.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.weave.trait.security.BoltLockCapabilitiesTrait.BoltLockCapabilitiesHandedness} */ (reader.readEnum());
      msg.setHandedness(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setMaxautorelockduration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weave.trait.security.BoltLockCapabilitiesTrait.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weave.trait.security.BoltLockCapabilitiesTrait.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weave.trait.security.BoltLockCapabilitiesTrait} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.BoltLockCapabilitiesTrait.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHandedness();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMaxautorelockduration();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.weave.trait.security.BoltLockCapabilitiesTrait.BoltLockCapabilitiesHandedness = {
  BOLT_LOCK_CAPABILITIES_HANDEDNESS_UNSPECIFIED: 0,
  BOLT_LOCK_CAPABILITIES_HANDEDNESS_RIGHT: 1,
  BOLT_LOCK_CAPABILITIES_HANDEDNESS_LEFT: 2,
  BOLT_LOCK_CAPABILITIES_HANDEDNESS_FIXED_UNKNOWN: 3
};

/**
 * optional BoltLockCapabilitiesHandedness handedness = 1;
 * @return {!proto.weave.trait.security.BoltLockCapabilitiesTrait.BoltLockCapabilitiesHandedness}
 */
proto.weave.trait.security.BoltLockCapabilitiesTrait.prototype.getHandedness = function() {
  return /** @type {!proto.weave.trait.security.BoltLockCapabilitiesTrait.BoltLockCapabilitiesHandedness} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.weave.trait.security.BoltLockCapabilitiesTrait.BoltLockCapabilitiesHandedness} value
 * @return {!proto.weave.trait.security.BoltLockCapabilitiesTrait} returns this
 */
proto.weave.trait.security.BoltLockCapabilitiesTrait.prototype.setHandedness = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional google.protobuf.Duration maxAutoRelockDuration = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.weave.trait.security.BoltLockCapabilitiesTrait.prototype.getMaxautorelockduration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.weave.trait.security.BoltLockCapabilitiesTrait} returns this
*/
proto.weave.trait.security.BoltLockCapabilitiesTrait.prototype.setMaxautorelockduration = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.weave.trait.security.BoltLockCapabilitiesTrait} returns this
 */
proto.weave.trait.security.BoltLockCapabilitiesTrait.prototype.clearMaxautorelockduration = function() {
  return this.setMaxautorelockduration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.weave.trait.security.BoltLockCapabilitiesTrait.prototype.hasMaxautorelockduration = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weave.trait.security.UserPincodesCapabilitiesTrait.prototype.toObject = function(opt_includeInstance) {
  return proto.weave.trait.security.UserPincodesCapabilitiesTrait.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weave.trait.security.UserPincodesCapabilitiesTrait} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserPincodesCapabilitiesTrait.toObject = function(includeInstance, msg) {
  var f, obj = {
    minpincodelength: jspb.Message.getFieldWithDefault(msg, 1, 0),
    maxpincodelength: jspb.Message.getFieldWithDefault(msg, 2, 0),
    maxpincodessupported: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weave.trait.security.UserPincodesCapabilitiesTrait}
 */
proto.weave.trait.security.UserPincodesCapabilitiesTrait.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weave.trait.security.UserPincodesCapabilitiesTrait;
  return proto.weave.trait.security.UserPincodesCapabilitiesTrait.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weave.trait.security.UserPincodesCapabilitiesTrait} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weave.trait.security.UserPincodesCapabilitiesTrait}
 */
proto.weave.trait.security.UserPincodesCapabilitiesTrait.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMinpincodelength(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxpincodelength(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxpincodessupported(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weave.trait.security.UserPincodesCapabilitiesTrait.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weave.trait.security.UserPincodesCapabilitiesTrait.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weave.trait.security.UserPincodesCapabilitiesTrait} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserPincodesCapabilitiesTrait.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMinpincodelength();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getMaxpincodelength();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getMaxpincodessupported();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint32 minPincodeLength = 1;
 * @return {number}
 */
proto.weave.trait.security.UserPincodesCapabilitiesTrait.prototype.getMinpincodelength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.weave.trait.security.UserPincodesCapabilitiesTrait} returns this
 */
proto.weave.trait.security.UserPincodesCapabilitiesTrait.prototype.setMinpincodelength = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 maxPincodeLength = 2;
 * @return {number}
 */
proto.weave.trait.security.UserPincodesCapabilitiesTrait.prototype.getMaxpincodelength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.weave.trait.security.UserPincodesCapabilitiesTrait} returns this
 */
proto.weave.trait.security.UserPincodesCapabilitiesTrait.prototype.setMaxpincodelength = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 maxPincodesSupported = 3;
 * @return {number}
 */
proto.weave.trait.security.UserPincodesCapabilitiesTrait.prototype.getMaxpincodessupported = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.weave.trait.security.UserPincodesCapabilitiesTrait} returns this
 */
proto.weave.trait.security.UserPincodesCapabilitiesTrait.prototype.setMaxpincodessupported = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weave.trait.security.BoltLockSettingsTrait.prototype.toObject = function(opt_includeInstance) {
  return proto.weave.trait.security.BoltLockSettingsTrait.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weave.trait.security.BoltLockSettingsTrait} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.BoltLockSettingsTrait.toObject = function(includeInstance, msg) {
  var f, obj = {
    autorelockon: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    autorelockduration: (f = msg.getAutorelockduration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weave.trait.security.BoltLockSettingsTrait}
 */
proto.weave.trait.security.BoltLockSettingsTrait.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weave.trait.security.BoltLockSettingsTrait;
  return proto.weave.trait.security.BoltLockSettingsTrait.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weave.trait.security.BoltLockSettingsTrait} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weave.trait.security.BoltLockSettingsTrait}
 */
proto.weave.trait.security.BoltLockSettingsTrait.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAutorelockon(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setAutorelockduration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weave.trait.security.BoltLockSettingsTrait.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weave.trait.security.BoltLockSettingsTrait.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weave.trait.security.BoltLockSettingsTrait} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.BoltLockSettingsTrait.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAutorelockon();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getAutorelockduration();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool autoRelockOn = 1;
 * @return {boolean}
 */
proto.weave.trait.security.BoltLockSettingsTrait.prototype.getAutorelockon = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.weave.trait.security.BoltLockSettingsTrait} returns this
 */
proto.weave.trait.security.BoltLockSettingsTrait.prototype.setAutorelockon = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional google.protobuf.Duration autoRelockDuration = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.weave.trait.security.BoltLockSettingsTrait.prototype.getAutorelockduration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.weave.trait.security.BoltLockSettingsTrait} returns this
*/
proto.weave.trait.security.BoltLockSettingsTrait.prototype.setAutorelockduration = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.weave.trait.security.BoltLockSettingsTrait} returns this
 */
proto.weave.trait.security.BoltLockSettingsTrait.prototype.clearAutorelockduration = function() {
  return this.setAutorelockduration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.weave.trait.security.BoltLockSettingsTrait.prototype.hasAutorelockduration = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weave.trait.security.DoorCheckSettingsTrait.prototype.toObject = function(opt_includeInstance) {
  return proto.weave.trait.security.DoorCheckSettingsTrait.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weave.trait.security.DoorCheckSettingsTrait} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.DoorCheckSettingsTrait.toObject = function(includeInstance, msg) {
  var f, obj = {
    doorcheckenabled: (f = msg.getDoorcheckenabled()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    sensordeviceid: (f = msg.getSensordeviceid()) && weave_common_pb.ResourceId.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weave.trait.security.DoorCheckSettingsTrait}
 */
proto.weave.trait.security.DoorCheckSettingsTrait.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weave.trait.security.DoorCheckSettingsTrait;
  return proto.weave.trait.security.DoorCheckSettingsTrait.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weave.trait.security.DoorCheckSettingsTrait} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weave.trait.security.DoorCheckSettingsTrait}
 */
proto.weave.trait.security.DoorCheckSettingsTrait.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setDoorcheckenabled(value);
      break;
    case 2:
      var value = new weave_common_pb.ResourceId;
      reader.readMessage(value,weave_common_pb.ResourceId.deserializeBinaryFromReader);
      msg.setSensordeviceid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weave.trait.security.DoorCheckSettingsTrait.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weave.trait.security.DoorCheckSettingsTrait.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weave.trait.security.DoorCheckSettingsTrait} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.DoorCheckSettingsTrait.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDoorcheckenabled();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getSensordeviceid();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      weave_common_pb.ResourceId.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.BoolValue doorCheckEnabled = 1;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.weave.trait.security.DoorCheckSettingsTrait.prototype.getDoorcheckenabled = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 1));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.weave.trait.security.DoorCheckSettingsTrait} returns this
*/
proto.weave.trait.security.DoorCheckSettingsTrait.prototype.setDoorcheckenabled = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.weave.trait.security.DoorCheckSettingsTrait} returns this
 */
proto.weave.trait.security.DoorCheckSettingsTrait.prototype.clearDoorcheckenabled = function() {
  return this.setDoorcheckenabled(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.weave.trait.security.DoorCheckSettingsTrait.prototype.hasDoorcheckenabled = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional weave.common.ResourceId sensorDeviceId = 2;
 * @return {?proto.weave.common.ResourceId}
 */
proto.weave.trait.security.DoorCheckSettingsTrait.prototype.getSensordeviceid = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 2));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.weave.trait.security.DoorCheckSettingsTrait} returns this
*/
proto.weave.trait.security.DoorCheckSettingsTrait.prototype.setSensordeviceid = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.weave.trait.security.DoorCheckSettingsTrait} returns this
 */
proto.weave.trait.security.DoorCheckSettingsTrait.prototype.clearSensordeviceid = function() {
  return this.setSensordeviceid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.weave.trait.security.DoorCheckSettingsTrait.prototype.hasSensordeviceid = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weave.trait.security.UserNFCTokenSettingsTrait.prototype.toObject = function(opt_includeInstance) {
  return proto.weave.trait.security.UserNFCTokenSettingsTrait.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weave.trait.security.UserNFCTokenSettingsTrait} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserNFCTokenSettingsTrait.toObject = function(includeInstance, msg) {
  var f, obj = {
    usernfctokensMap: (f = msg.getUsernfctokensMap()) ? f.toObject(includeInstance, proto.weave.trait.security.UserNFCTokenSettingsTrait.UserNFCToken.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weave.trait.security.UserNFCTokenSettingsTrait}
 */
proto.weave.trait.security.UserNFCTokenSettingsTrait.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weave.trait.security.UserNFCTokenSettingsTrait;
  return proto.weave.trait.security.UserNFCTokenSettingsTrait.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weave.trait.security.UserNFCTokenSettingsTrait} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weave.trait.security.UserNFCTokenSettingsTrait}
 */
proto.weave.trait.security.UserNFCTokenSettingsTrait.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getUsernfctokensMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readUint32, jspb.BinaryReader.prototype.readMessage, proto.weave.trait.security.UserNFCTokenSettingsTrait.UserNFCToken.deserializeBinaryFromReader, 0, new proto.weave.trait.security.UserNFCTokenSettingsTrait.UserNFCToken());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weave.trait.security.UserNFCTokenSettingsTrait.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weave.trait.security.UserNFCTokenSettingsTrait.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weave.trait.security.UserNFCTokenSettingsTrait} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserNFCTokenSettingsTrait.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsernfctokensMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeUint32, jspb.BinaryWriter.prototype.writeMessage, proto.weave.trait.security.UserNFCTokenSettingsTrait.UserNFCToken.serializeBinaryToWriter);
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weave.trait.security.UserNFCTokenSettingsTrait.UserNFCToken.prototype.toObject = function(opt_includeInstance) {
  return proto.weave.trait.security.UserNFCTokenSettingsTrait.UserNFCToken.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weave.trait.security.UserNFCTokenSettingsTrait.UserNFCToken} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserNFCTokenSettingsTrait.UserNFCToken.toObject = function(includeInstance, msg) {
  var f, obj = {
    userid: (f = msg.getUserid()) && weave_common_pb.ResourceId.toObject(includeInstance, f),
    tokendeviceid: (f = msg.getTokendeviceid()) && weave_common_pb.ResourceId.toObject(includeInstance, f),
    publickey: msg.getPublickey_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weave.trait.security.UserNFCTokenSettingsTrait.UserNFCToken}
 */
proto.weave.trait.security.UserNFCTokenSettingsTrait.UserNFCToken.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weave.trait.security.UserNFCTokenSettingsTrait.UserNFCToken;
  return proto.weave.trait.security.UserNFCTokenSettingsTrait.UserNFCToken.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weave.trait.security.UserNFCTokenSettingsTrait.UserNFCToken} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weave.trait.security.UserNFCTokenSettingsTrait.UserNFCToken}
 */
proto.weave.trait.security.UserNFCTokenSettingsTrait.UserNFCToken.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new weave_common_pb.ResourceId;
      reader.readMessage(value,weave_common_pb.ResourceId.deserializeBinaryFromReader);
      msg.setUserid(value);
      break;
    case 2:
      var value = new weave_common_pb.ResourceId;
      reader.readMessage(value,weave_common_pb.ResourceId.deserializeBinaryFromReader);
      msg.setTokendeviceid(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPublickey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weave.trait.security.UserNFCTokenSettingsTrait.UserNFCToken.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weave.trait.security.UserNFCTokenSettingsTrait.UserNFCToken.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weave.trait.security.UserNFCTokenSettingsTrait.UserNFCToken} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.UserNFCTokenSettingsTrait.UserNFCToken.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      weave_common_pb.ResourceId.serializeBinaryToWriter
    );
  }
  f = message.getTokendeviceid();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      weave_common_pb.ResourceId.serializeBinaryToWriter
    );
  }
  f = message.getPublickey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional weave.common.ResourceId userId = 1;
 * @return {?proto.weave.common.ResourceId}
 */
proto.weave.trait.security.UserNFCTokenSettingsTrait.UserNFCToken.prototype.getUserid = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 1));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.weave.trait.security.UserNFCTokenSettingsTrait.UserNFCToken} returns this
*/
proto.weave.trait.security.UserNFCTokenSettingsTrait.UserNFCToken.prototype.setUserid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.weave.trait.security.UserNFCTokenSettingsTrait.UserNFCToken} returns this
 */
proto.weave.trait.security.UserNFCTokenSettingsTrait.UserNFCToken.prototype.clearUserid = function() {
  return this.setUserid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.weave.trait.security.UserNFCTokenSettingsTrait.UserNFCToken.prototype.hasUserid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional weave.common.ResourceId tokenDeviceId = 2;
 * @return {?proto.weave.common.ResourceId}
 */
proto.weave.trait.security.UserNFCTokenSettingsTrait.UserNFCToken.prototype.getTokendeviceid = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 2));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.weave.trait.security.UserNFCTokenSettingsTrait.UserNFCToken} returns this
*/
proto.weave.trait.security.UserNFCTokenSettingsTrait.UserNFCToken.prototype.setTokendeviceid = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.weave.trait.security.UserNFCTokenSettingsTrait.UserNFCToken} returns this
 */
proto.weave.trait.security.UserNFCTokenSettingsTrait.UserNFCToken.prototype.clearTokendeviceid = function() {
  return this.setTokendeviceid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.weave.trait.security.UserNFCTokenSettingsTrait.UserNFCToken.prototype.hasTokendeviceid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bytes publicKey = 3;
 * @return {!(string|Uint8Array)}
 */
proto.weave.trait.security.UserNFCTokenSettingsTrait.UserNFCToken.prototype.getPublickey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes publicKey = 3;
 * This is a type-conversion wrapper around `getPublickey()`
 * @return {string}
 */
proto.weave.trait.security.UserNFCTokenSettingsTrait.UserNFCToken.prototype.getPublickey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPublickey()));
};


/**
 * optional bytes publicKey = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPublickey()`
 * @return {!Uint8Array}
 */
proto.weave.trait.security.UserNFCTokenSettingsTrait.UserNFCToken.prototype.getPublickey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPublickey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.weave.trait.security.UserNFCTokenSettingsTrait.UserNFCToken} returns this
 */
proto.weave.trait.security.UserNFCTokenSettingsTrait.UserNFCToken.prototype.setPublickey = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * map<uint32, UserNFCToken> userNfcTokens = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.weave.trait.security.UserNFCTokenSettingsTrait.UserNFCToken>}
 */
proto.weave.trait.security.UserNFCTokenSettingsTrait.prototype.getUsernfctokensMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.weave.trait.security.UserNFCTokenSettingsTrait.UserNFCToken>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.weave.trait.security.UserNFCTokenSettingsTrait.UserNFCToken));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.weave.trait.security.UserNFCTokenSettingsTrait} returns this
 */
proto.weave.trait.security.UserNFCTokenSettingsTrait.prototype.clearUsernfctokensMap = function() {
  this.getUsernfctokensMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weave.trait.security.PincodeInputSettingsTrait.prototype.toObject = function(opt_includeInstance) {
  return proto.weave.trait.security.PincodeInputSettingsTrait.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weave.trait.security.PincodeInputSettingsTrait} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.PincodeInputSettingsTrait.toObject = function(includeInstance, msg) {
  var f, obj = {
    wrongentrycodelimit: jspb.Message.getFieldWithDefault(msg, 1, 0),
    wrongentrydisabletime: (f = msg.getWrongentrydisabletime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weave.trait.security.PincodeInputSettingsTrait}
 */
proto.weave.trait.security.PincodeInputSettingsTrait.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weave.trait.security.PincodeInputSettingsTrait;
  return proto.weave.trait.security.PincodeInputSettingsTrait.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weave.trait.security.PincodeInputSettingsTrait} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weave.trait.security.PincodeInputSettingsTrait}
 */
proto.weave.trait.security.PincodeInputSettingsTrait.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setWrongentrycodelimit(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setWrongentrydisabletime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weave.trait.security.PincodeInputSettingsTrait.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weave.trait.security.PincodeInputSettingsTrait.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weave.trait.security.PincodeInputSettingsTrait} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weave.trait.security.PincodeInputSettingsTrait.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWrongentrycodelimit();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getWrongentrydisabletime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 wrongEntryCodeLimit = 1;
 * @return {number}
 */
proto.weave.trait.security.PincodeInputSettingsTrait.prototype.getWrongentrycodelimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.weave.trait.security.PincodeInputSettingsTrait} returns this
 */
proto.weave.trait.security.PincodeInputSettingsTrait.prototype.setWrongentrycodelimit = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.Duration wrongEntryDisableTime = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.weave.trait.security.PincodeInputSettingsTrait.prototype.getWrongentrydisabletime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.weave.trait.security.PincodeInputSettingsTrait} returns this
*/
proto.weave.trait.security.PincodeInputSettingsTrait.prototype.setWrongentrydisabletime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.weave.trait.security.PincodeInputSettingsTrait} returns this
 */
proto.weave.trait.security.PincodeInputSettingsTrait.prototype.clearWrongentrydisabletime = function() {
  return this.setWrongentrydisabletime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.weave.trait.security.PincodeInputSettingsTrait.prototype.hasWrongentrydisabletime = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.weave.trait.security);
