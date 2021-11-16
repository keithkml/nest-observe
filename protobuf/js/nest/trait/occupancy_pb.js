// source: nest/trait/occupancy.proto
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

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var weave_common_pb = require('../../weave/common_pb.js');
goog.object.extend(proto, weave_common_pb);
goog.exportSymbol('proto.nest.trait.occupancy.Geofencing', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.Geofencing.GeofenceState', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.OccupancyInputSettingsTrait', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureGeofencingTrait', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureGeofencingTrait.GeofenceEnhancedAutoAwayStatus', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureGeofencingTrait.StructureGeofenceStateAssertionEvent', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeCapabilitiesTrait', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeSettingsTrait', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleRequest', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleResponse', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleResponseType', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeTrait', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeTrait.Activity', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeTrait.ActivityAgnosticStructureModeChangeEvent', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeTrait.Allowance', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeTrait.AllowanceChangeEvent', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeTrait.AutoAsk', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeTrait.AutoAskArm', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeTrait.AutoAskLock', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeTrait.AutoAskStructureMode', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeTrait.AutoAskType', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeTrait.ConsumeBoltActuatorStateChangeRequest', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeTrait.ConsumeLegacyStructureModeChangeRequest', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeTrait.ConsumeOccupancyStateBeliefRequest', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeTrait.ConsumeSecurityArmStateChangeRequest', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeTrait.LegacyAwaySetter', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeTrait.LegacyAwayState', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeTrait.LegacyStructureModeChangeRequest', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeTrait.LegacyTouchedBy', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeTrait.ModeStickiness', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeTrait.NonPropagatingChangeDetails', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeTrait.NonPropagatingChangeSourceType', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeTrait.Occupancy', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeTrait.OccupancyChangeEvent', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeTrait.Presence', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeTrait.PrivateTraitHandlerState', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeTrait.StructureMode', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeRequest', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeResponse', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeResponseType', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateResponse', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateResponseType', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeTrait.StructureModeReason', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStateChange', null, global);
goog.exportSymbol('proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStep', null, global);
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
proto.nest.trait.occupancy.StructureModeTrait = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.occupancy.StructureModeTrait, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.occupancy.StructureModeTrait.displayName = 'proto.nest.trait.occupancy.StructureModeTrait';
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
proto.nest.trait.occupancy.StructureModeTrait.Occupancy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.occupancy.StructureModeTrait.Occupancy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.occupancy.StructureModeTrait.Occupancy.displayName = 'proto.nest.trait.occupancy.StructureModeTrait.Occupancy';
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
proto.nest.trait.occupancy.StructureModeTrait.Allowance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.occupancy.StructureModeTrait.Allowance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.occupancy.StructureModeTrait.Allowance.displayName = 'proto.nest.trait.occupancy.StructureModeTrait.Allowance';
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
proto.nest.trait.occupancy.StructureModeTrait.PrivateTraitHandlerState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.occupancy.StructureModeTrait.PrivateTraitHandlerState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.occupancy.StructureModeTrait.PrivateTraitHandlerState.displayName = 'proto.nest.trait.occupancy.StructureModeTrait.PrivateTraitHandlerState';
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
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeRequest.displayName = 'proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeRequest';
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
proto.nest.trait.occupancy.StructureModeTrait.NonPropagatingChangeDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.occupancy.StructureModeTrait.NonPropagatingChangeDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.occupancy.StructureModeTrait.NonPropagatingChangeDetails.displayName = 'proto.nest.trait.occupancy.StructureModeTrait.NonPropagatingChangeDetails';
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
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeResponse.displayName = 'proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeResponse';
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
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest.displayName = 'proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest';
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
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateResponse.displayName = 'proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateResponse';
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
proto.nest.trait.occupancy.StructureModeTrait.LegacyStructureModeChangeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.occupancy.StructureModeTrait.LegacyStructureModeChangeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.occupancy.StructureModeTrait.LegacyStructureModeChangeRequest.displayName = 'proto.nest.trait.occupancy.StructureModeTrait.LegacyStructureModeChangeRequest';
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
proto.nest.trait.occupancy.StructureModeTrait.ConsumeOccupancyStateBeliefRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.occupancy.StructureModeTrait.ConsumeOccupancyStateBeliefRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.occupancy.StructureModeTrait.ConsumeOccupancyStateBeliefRequest.displayName = 'proto.nest.trait.occupancy.StructureModeTrait.ConsumeOccupancyStateBeliefRequest';
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
proto.nest.trait.occupancy.StructureModeTrait.ConsumeSecurityArmStateChangeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.occupancy.StructureModeTrait.ConsumeSecurityArmStateChangeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.occupancy.StructureModeTrait.ConsumeSecurityArmStateChangeRequest.displayName = 'proto.nest.trait.occupancy.StructureModeTrait.ConsumeSecurityArmStateChangeRequest';
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
proto.nest.trait.occupancy.StructureModeTrait.ConsumeBoltActuatorStateChangeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.occupancy.StructureModeTrait.ConsumeBoltActuatorStateChangeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.occupancy.StructureModeTrait.ConsumeBoltActuatorStateChangeRequest.displayName = 'proto.nest.trait.occupancy.StructureModeTrait.ConsumeBoltActuatorStateChangeRequest';
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
proto.nest.trait.occupancy.StructureModeTrait.ConsumeLegacyStructureModeChangeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.occupancy.StructureModeTrait.ConsumeLegacyStructureModeChangeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.occupancy.StructureModeTrait.ConsumeLegacyStructureModeChangeRequest.displayName = 'proto.nest.trait.occupancy.StructureModeTrait.ConsumeLegacyStructureModeChangeRequest';
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
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent.displayName = 'proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent';
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
proto.nest.trait.occupancy.StructureModeTrait.OccupancyChangeEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.occupancy.StructureModeTrait.OccupancyChangeEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.occupancy.StructureModeTrait.OccupancyChangeEvent.displayName = 'proto.nest.trait.occupancy.StructureModeTrait.OccupancyChangeEvent';
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
proto.nest.trait.occupancy.StructureModeTrait.AllowanceChangeEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.occupancy.StructureModeTrait.AllowanceChangeEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.occupancy.StructureModeTrait.AllowanceChangeEvent.displayName = 'proto.nest.trait.occupancy.StructureModeTrait.AllowanceChangeEvent';
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
proto.nest.trait.occupancy.StructureModeTrait.AutoAsk = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.occupancy.StructureModeTrait.AutoAsk, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.occupancy.StructureModeTrait.AutoAsk.displayName = 'proto.nest.trait.occupancy.StructureModeTrait.AutoAsk';
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
proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent.repeatedFields_, null);
};
goog.inherits(proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent.displayName = 'proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent';
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
proto.nest.trait.occupancy.StructureModeTrait.ActivityAgnosticStructureModeChangeEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.occupancy.StructureModeTrait.ActivityAgnosticStructureModeChangeEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.occupancy.StructureModeTrait.ActivityAgnosticStructureModeChangeEvent.displayName = 'proto.nest.trait.occupancy.StructureModeTrait.ActivityAgnosticStructureModeChangeEvent';
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
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState.displayName = 'proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState';
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
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStateChange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStateChange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStateChange.displayName = 'proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStateChange';
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
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStep = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStep, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStep.displayName = 'proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStep';
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
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent.repeatedFields_, null);
};
goog.inherits(proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent.displayName = 'proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent';
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
proto.nest.trait.occupancy.StructureModeSettingsTrait = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.nest.trait.occupancy.StructureModeSettingsTrait.repeatedFields_, null);
};
goog.inherits(proto.nest.trait.occupancy.StructureModeSettingsTrait, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.occupancy.StructureModeSettingsTrait.displayName = 'proto.nest.trait.occupancy.StructureModeSettingsTrait';
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
proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan.displayName = 'proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan';
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
proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan.displayName = 'proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan';
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
proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleRequest.displayName = 'proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleRequest';
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
proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleResponse.displayName = 'proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleResponse';
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
proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent.repeatedFields_, null);
};
goog.inherits(proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent.displayName = 'proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent';
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
proto.nest.trait.occupancy.StructureGeofencingTrait = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.occupancy.StructureGeofencingTrait, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.occupancy.StructureGeofencingTrait.displayName = 'proto.nest.trait.occupancy.StructureGeofencingTrait';
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
proto.nest.trait.occupancy.StructureGeofencingTrait.StructureGeofenceStateAssertionEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.occupancy.StructureGeofencingTrait.StructureGeofenceStateAssertionEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.occupancy.StructureGeofencingTrait.StructureGeofenceStateAssertionEvent.displayName = 'proto.nest.trait.occupancy.StructureGeofencingTrait.StructureGeofenceStateAssertionEvent';
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
proto.nest.trait.occupancy.Geofencing = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.occupancy.Geofencing, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.occupancy.Geofencing.displayName = 'proto.nest.trait.occupancy.Geofencing';
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
proto.nest.trait.occupancy.OccupancyInputSettingsTrait = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.occupancy.OccupancyInputSettingsTrait, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.occupancy.OccupancyInputSettingsTrait.displayName = 'proto.nest.trait.occupancy.OccupancyInputSettingsTrait';
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
proto.nest.trait.occupancy.StructureModeCapabilitiesTrait = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.occupancy.StructureModeCapabilitiesTrait, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.occupancy.StructureModeCapabilitiesTrait.displayName = 'proto.nest.trait.occupancy.StructureModeCapabilitiesTrait';
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
proto.nest.trait.occupancy.StructureModeTrait.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.occupancy.StructureModeTrait.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.occupancy.StructureModeTrait} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.toObject = function(includeInstance, msg) {
  var f, obj = {
    structuremode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    occupancy: (f = msg.getOccupancy()) && proto.nest.trait.occupancy.StructureModeTrait.Occupancy.toObject(includeInstance, f),
    allowance: (f = msg.getAllowance()) && proto.nest.trait.occupancy.StructureModeTrait.Allowance.toObject(includeInstance, f),
    structuremodereason: jspb.Message.getFieldWithDefault(msg, 4, 0),
    structuremodesetter: (f = msg.getStructuremodesetter()) && weave_common_pb.ResourceId.toObject(includeInstance, f),
    structuremodeeffectivetime: (f = msg.getStructuremodeeffectivetime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    activityagnosticstructuremode: jspb.Message.getFieldWithDefault(msg, 7, 0),
    activityagnosticstructuremodeeffectivetime: (f = msg.getActivityagnosticstructuremodeeffectivetime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    privatestate: (f = msg.getPrivatestate()) && proto.nest.trait.occupancy.StructureModeTrait.PrivateTraitHandlerState.toObject(includeInstance, f)
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
 * @return {!proto.nest.trait.occupancy.StructureModeTrait}
 */
proto.nest.trait.occupancy.StructureModeTrait.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.occupancy.StructureModeTrait;
  return proto.nest.trait.occupancy.StructureModeTrait.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait}
 */
proto.nest.trait.occupancy.StructureModeTrait.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode} */ (reader.readEnum());
      msg.setStructuremode(value);
      break;
    case 2:
      var value = new proto.nest.trait.occupancy.StructureModeTrait.Occupancy;
      reader.readMessage(value,proto.nest.trait.occupancy.StructureModeTrait.Occupancy.deserializeBinaryFromReader);
      msg.setOccupancy(value);
      break;
    case 3:
      var value = new proto.nest.trait.occupancy.StructureModeTrait.Allowance;
      reader.readMessage(value,proto.nest.trait.occupancy.StructureModeTrait.Allowance.deserializeBinaryFromReader);
      msg.setAllowance(value);
      break;
    case 4:
      var value = /** @type {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeReason} */ (reader.readEnum());
      msg.setStructuremodereason(value);
      break;
    case 5:
      var value = new weave_common_pb.ResourceId;
      reader.readMessage(value,weave_common_pb.ResourceId.deserializeBinaryFromReader);
      msg.setStructuremodesetter(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStructuremodeeffectivetime(value);
      break;
    case 7:
      var value = /** @type {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode} */ (reader.readEnum());
      msg.setActivityagnosticstructuremode(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setActivityagnosticstructuremodeeffectivetime(value);
      break;
    case 9:
      var value = new proto.nest.trait.occupancy.StructureModeTrait.PrivateTraitHandlerState;
      reader.readMessage(value,proto.nest.trait.occupancy.StructureModeTrait.PrivateTraitHandlerState.deserializeBinaryFromReader);
      msg.setPrivatestate(value);
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
proto.nest.trait.occupancy.StructureModeTrait.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.occupancy.StructureModeTrait.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStructuremode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getOccupancy();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.nest.trait.occupancy.StructureModeTrait.Occupancy.serializeBinaryToWriter
    );
  }
  f = message.getAllowance();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.nest.trait.occupancy.StructureModeTrait.Allowance.serializeBinaryToWriter
    );
  }
  f = message.getStructuremodereason();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getStructuremodesetter();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      weave_common_pb.ResourceId.serializeBinaryToWriter
    );
  }
  f = message.getStructuremodeeffectivetime();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getActivityagnosticstructuremode();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getActivityagnosticstructuremodeeffectivetime();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getPrivatestate();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.nest.trait.occupancy.StructureModeTrait.PrivateTraitHandlerState.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureMode = {
  STRUCTURE_MODE_UNSPECIFIED: 0,
  STRUCTURE_MODE_HOME: 1,
  STRUCTURE_MODE_AWAY: 2,
  STRUCTURE_MODE_SLEEP: 3,
  STRUCTURE_MODE_VACATION: 4
};

/**
 * @enum {number}
 */
proto.nest.trait.occupancy.StructureModeTrait.Activity = {
  ACTIVITY_UNSPECIFIED: 0,
  ACTIVITY_ACTIVE: 1,
  ACTIVITY_INACTIVE: 2
};

/**
 * @enum {number}
 */
proto.nest.trait.occupancy.StructureModeTrait.Presence = {
  PRESENCE_UNSPECIFIED: 0,
  PRESENCE_UNAVAILABLE: 1,
  PRESENCE_PRESENT: 2,
  PRESENCE_ABSENT: 3
};

/**
 * @enum {number}
 */
proto.nest.trait.occupancy.StructureModeTrait.ModeStickiness = {
  MODE_STICKINESS_UNSPECIFIED: 0,
  MODE_STICKINESS_NONE: 1,
  MODE_STICKINESS_TIMED: 2,
  MODE_STICKINESS_CONDITIONAL_TIMED: 3
};

/**
 * @enum {number}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeReason = {
  STRUCTURE_MODE_REASON_UNSPECIFIED: 0,
  STRUCTURE_MODE_REASON_EXPLICIT_INTENT: 1,
  STRUCTURE_MODE_REASON_IMPLICIT_INTENT: 2,
  STRUCTURE_MODE_REASON_ACTIVITY: 3,
  STRUCTURE_MODE_REASON_EXTENDED_INACTIVITY: 4,
  STRUCTURE_MODE_REASON_IDENTIFIED_PRESENCE: 5,
  STRUCTURE_MODE_REASON_IDENTIFIED_ABSENCE: 6,
  STRUCTURE_MODE_REASON_SCHEDULE: 7
};

/**
 * @enum {number}
 */
proto.nest.trait.occupancy.StructureModeTrait.NonPropagatingChangeSourceType = {
  NON_PROPAGATING_CHANGE_SOURCE_TYPE_UNSPECIFIED: 0,
  NON_PROPAGATING_CHANGE_SOURCE_TYPE_CZ: 1
};

/**
 * @enum {number}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeResponseType = {
  STRUCTURE_MODE_CHANGE_RESPONSE_TYPE_UNSPECIFIED: 0,
  STRUCTURE_MODE_CHANGE_RESPONSE_TYPE_SUCCESS: 1,
  STRUCTURE_MODE_CHANGE_RESPONSE_TYPE_FAIL_ALREADY: 2
};

/**
 * @enum {number}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateResponseType = {
  STRUCTURE_MODE_COMPLETE_UPDATE_RESPONSE_TYPE_UNSPECIFIED: 0,
  STRUCTURE_MODE_COMPLETE_UPDATE_RESPONSE_TYPE_SUCCESS: 1,
  STRUCTURE_MODE_COMPLETE_UPDATE_RESPONSE_TYPE_FAIL_ALREADY: 2,
  STRUCTURE_MODE_COMPLETE_UPDATE_RESPONSE_TYPE_FAIL_VERSION: 3,
  STRUCTURE_MODE_COMPLETE_UPDATE_RESPONSE_TYPE_FAIL_OTHER: 4
};

/**
 * @enum {number}
 */
proto.nest.trait.occupancy.StructureModeTrait.LegacyAwayState = {
  LEGACY_AWAY_STATE_UNSPECIFIED: 0,
  LEGACY_AWAY_STATE_TRUE: 1,
  LEGACY_AWAY_STATE_FALSE: 2
};

/**
 * @enum {number}
 */
proto.nest.trait.occupancy.StructureModeTrait.LegacyAwaySetter = {
  LEGACY_AWAY_SETTER_UNSPECIFIED: 0,
  LEGACY_AWAY_SETTER_CLIENT: 1,
  LEGACY_AWAY_SETTER_CONTROL: 2,
  LEGACY_AWAY_SETTER_CLOUD: 3
};

/**
 * @enum {number}
 */
proto.nest.trait.occupancy.StructureModeTrait.LegacyTouchedBy = {
  LEGACY_TOUCHED_BY_UNSPECIFIED: 0,
  LEGACY_TOUCHED_BY_NOBODY: 1,
  LEGACY_TOUCHED_BY_LEARNING: 2,
  LEGACY_TOUCHED_BY_LOCAL: 3,
  LEGACY_TOUCHED_BY_REMOTE: 4,
  LEGACY_TOUCHED_BY_WEB: 5,
  LEGACY_TOUCHED_BY_ANDROID: 6,
  LEGACY_TOUCHED_BY_IOS: 7,
  LEGACY_TOUCHED_BY_WIN_MOBILE: 8,
  LEGACY_TOUCHED_BY_TUNE_UP: 9,
  LEGACY_TOUCHED_BY_DR: 10,
  LEGACY_TOUCHED_BY_TOU: 11,
  LEGACY_TOUCHED_BY_TOPAZ_CO: 12,
  LEGACY_TOUCHED_BY_PROGRAMMER: 13,
  LEGACY_TOUCHED_BY_TOPAZ_SMOKE: 14,
  LEGACY_TOUCHED_BY_DEMAND_CHARGE: 15
};

/**
 * @enum {number}
 */
proto.nest.trait.occupancy.StructureModeTrait.AutoAskType = {
  AUTO_ASK_TYPE_UNSPECIFIED: 0,
  AUTO_ASK_TYPE_AWAY_AND_ARM: 1,
  AUTO_ASK_TYPE_HOME_AND_DISARM: 2,
  AUTO_ASK_TYPE_ARM: 3,
  AUTO_ASK_TYPE_DISARM: 4
};

/**
 * @enum {number}
 */
proto.nest.trait.occupancy.StructureModeTrait.AutoAskArm = {
  AUTO_ASK_ARM_UNSPECIFIED: 0,
  AUTO_ASK_ARM_TYPE_ARM: 1,
  AUTO_ASK_ARM_TYPE_DISARM: 2
};

/**
 * @enum {number}
 */
proto.nest.trait.occupancy.StructureModeTrait.AutoAskLock = {
  AUTO_ASK_LOCK_UNSPECIFIED: 0,
  AUTO_ASK_LOCK_TYPE_LOCK: 1,
  AUTO_ASK_LOCK_TYPE_UNLOCK: 2
};

/**
 * @enum {number}
 */
proto.nest.trait.occupancy.StructureModeTrait.AutoAskStructureMode = {
  AUTO_ASK_STRUCTURE_MODE_UNSPECIFIED: 0,
  AUTO_ASK_STRUCTURE_MODE_TYPE_HOME: 1,
  AUTO_ASK_STRUCTURE_MODE_TYPE_AWAY: 2
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
proto.nest.trait.occupancy.StructureModeTrait.Occupancy.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.occupancy.StructureModeTrait.Occupancy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.Occupancy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.Occupancy.toObject = function(includeInstance, msg) {
  var f, obj = {
    activity: jspb.Message.getFieldWithDefault(msg, 1, 0),
    presence: jspb.Message.getFieldWithDefault(msg, 2, 0),
    lastactivitytime: (f = msg.getLastactivitytime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    activityholdoff: (f = msg.getActivityholdoff()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.Occupancy}
 */
proto.nest.trait.occupancy.StructureModeTrait.Occupancy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.occupancy.StructureModeTrait.Occupancy;
  return proto.nest.trait.occupancy.StructureModeTrait.Occupancy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.Occupancy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.Occupancy}
 */
proto.nest.trait.occupancy.StructureModeTrait.Occupancy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.nest.trait.occupancy.StructureModeTrait.Activity} */ (reader.readEnum());
      msg.setActivity(value);
      break;
    case 2:
      var value = /** @type {!proto.nest.trait.occupancy.StructureModeTrait.Presence} */ (reader.readEnum());
      msg.setPresence(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastactivitytime(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setActivityholdoff(value);
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
proto.nest.trait.occupancy.StructureModeTrait.Occupancy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.occupancy.StructureModeTrait.Occupancy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.Occupancy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.Occupancy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActivity();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPresence();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getLastactivitytime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getActivityholdoff();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional Activity activity = 1;
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.Activity}
 */
proto.nest.trait.occupancy.StructureModeTrait.Occupancy.prototype.getActivity = function() {
  return /** @type {!proto.nest.trait.occupancy.StructureModeTrait.Activity} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.Activity} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.Occupancy} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.Occupancy.prototype.setActivity = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Presence presence = 2;
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.Presence}
 */
proto.nest.trait.occupancy.StructureModeTrait.Occupancy.prototype.getPresence = function() {
  return /** @type {!proto.nest.trait.occupancy.StructureModeTrait.Presence} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.Presence} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.Occupancy} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.Occupancy.prototype.setPresence = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp lastActivityTime = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.nest.trait.occupancy.StructureModeTrait.Occupancy.prototype.getLastactivitytime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.Occupancy} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.Occupancy.prototype.setLastactivitytime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.Occupancy} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.Occupancy.prototype.clearLastactivitytime = function() {
  return this.setLastactivitytime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.Occupancy.prototype.hasLastactivitytime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp activityHoldOff = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.nest.trait.occupancy.StructureModeTrait.Occupancy.prototype.getActivityholdoff = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.Occupancy} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.Occupancy.prototype.setActivityholdoff = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.Occupancy} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.Occupancy.prototype.clearActivityholdoff = function() {
  return this.setActivityholdoff(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.Occupancy.prototype.hasActivityholdoff = function() {
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
proto.nest.trait.occupancy.StructureModeTrait.Allowance.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.occupancy.StructureModeTrait.Allowance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.Allowance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.Allowance.toObject = function(includeInstance, msg) {
  var f, obj = {
    modestickiness: jspb.Message.getFieldWithDefault(msg, 2, 0),
    modestickinessexpiration: (f = msg.getModestickinessexpiration()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.Allowance}
 */
proto.nest.trait.occupancy.StructureModeTrait.Allowance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.occupancy.StructureModeTrait.Allowance;
  return proto.nest.trait.occupancy.StructureModeTrait.Allowance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.Allowance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.Allowance}
 */
proto.nest.trait.occupancy.StructureModeTrait.Allowance.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {!proto.nest.trait.occupancy.StructureModeTrait.ModeStickiness} */ (reader.readEnum());
      msg.setModestickiness(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setModestickinessexpiration(value);
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
proto.nest.trait.occupancy.StructureModeTrait.Allowance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.occupancy.StructureModeTrait.Allowance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.Allowance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.Allowance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModestickiness();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getModestickinessexpiration();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional ModeStickiness modeStickiness = 2;
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.ModeStickiness}
 */
proto.nest.trait.occupancy.StructureModeTrait.Allowance.prototype.getModestickiness = function() {
  return /** @type {!proto.nest.trait.occupancy.StructureModeTrait.ModeStickiness} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.ModeStickiness} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.Allowance} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.Allowance.prototype.setModestickiness = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp modeStickinessExpiration = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.nest.trait.occupancy.StructureModeTrait.Allowance.prototype.getModestickinessexpiration = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.Allowance} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.Allowance.prototype.setModestickinessexpiration = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.Allowance} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.Allowance.prototype.clearModestickinessexpiration = function() {
  return this.setModestickinessexpiration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.Allowance.prototype.hasModestickinessexpiration = function() {
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
proto.nest.trait.occupancy.StructureModeTrait.PrivateTraitHandlerState.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.occupancy.StructureModeTrait.PrivateTraitHandlerState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.PrivateTraitHandlerState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.PrivateTraitHandlerState.toObject = function(includeInstance, msg) {
  var f, obj = {
    isczupdatestateok: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.PrivateTraitHandlerState}
 */
proto.nest.trait.occupancy.StructureModeTrait.PrivateTraitHandlerState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.occupancy.StructureModeTrait.PrivateTraitHandlerState;
  return proto.nest.trait.occupancy.StructureModeTrait.PrivateTraitHandlerState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.PrivateTraitHandlerState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.PrivateTraitHandlerState}
 */
proto.nest.trait.occupancy.StructureModeTrait.PrivateTraitHandlerState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsczupdatestateok(value);
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
proto.nest.trait.occupancy.StructureModeTrait.PrivateTraitHandlerState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.occupancy.StructureModeTrait.PrivateTraitHandlerState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.PrivateTraitHandlerState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.PrivateTraitHandlerState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsczupdatestateok();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool isCzUpdateStateOk = 1;
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.PrivateTraitHandlerState.prototype.getIsczupdatestateok = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.PrivateTraitHandlerState} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.PrivateTraitHandlerState.prototype.setIsczupdatestateok = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
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
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    structuremode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    reason: jspb.Message.getFieldWithDefault(msg, 2, 0),
    userid: (f = msg.getUserid()) && weave_common_pb.ResourceId.toObject(includeInstance, f),
    nonpropagatingchangedetails: (f = msg.getNonpropagatingchangedetails()) && proto.nest.trait.occupancy.StructureModeTrait.NonPropagatingChangeDetails.toObject(includeInstance, f)
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
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeRequest}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeRequest;
  return proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeRequest}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode} */ (reader.readEnum());
      msg.setStructuremode(value);
      break;
    case 2:
      var value = /** @type {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeReason} */ (reader.readEnum());
      msg.setReason(value);
      break;
    case 3:
      var value = new weave_common_pb.ResourceId;
      reader.readMessage(value,weave_common_pb.ResourceId.deserializeBinaryFromReader);
      msg.setUserid(value);
      break;
    case 4:
      var value = new proto.nest.trait.occupancy.StructureModeTrait.NonPropagatingChangeDetails;
      reader.readMessage(value,proto.nest.trait.occupancy.StructureModeTrait.NonPropagatingChangeDetails.deserializeBinaryFromReader);
      msg.setNonpropagatingchangedetails(value);
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
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStructuremode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getReason();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
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
  f = message.getNonpropagatingchangedetails();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.nest.trait.occupancy.StructureModeTrait.NonPropagatingChangeDetails.serializeBinaryToWriter
    );
  }
};


/**
 * optional StructureMode structureMode = 1;
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeRequest.prototype.getStructuremode = function() {
  return /** @type {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeRequest} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeRequest.prototype.setStructuremode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional StructureModeReason reason = 2;
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeReason}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeRequest.prototype.getReason = function() {
  return /** @type {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeReason} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeReason} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeRequest} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeRequest.prototype.setReason = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional weave.common.ResourceId userId = 3;
 * @return {?proto.weave.common.ResourceId}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeRequest.prototype.getUserid = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 3));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeRequest} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeRequest.prototype.setUserid = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeRequest} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeRequest.prototype.clearUserid = function() {
  return this.setUserid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeRequest.prototype.hasUserid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional NonPropagatingChangeDetails nonPropagatingChangeDetails = 4;
 * @return {?proto.nest.trait.occupancy.StructureModeTrait.NonPropagatingChangeDetails}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeRequest.prototype.getNonpropagatingchangedetails = function() {
  return /** @type{?proto.nest.trait.occupancy.StructureModeTrait.NonPropagatingChangeDetails} */ (
    jspb.Message.getWrapperField(this, proto.nest.trait.occupancy.StructureModeTrait.NonPropagatingChangeDetails, 4));
};


/**
 * @param {?proto.nest.trait.occupancy.StructureModeTrait.NonPropagatingChangeDetails|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeRequest} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeRequest.prototype.setNonpropagatingchangedetails = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeRequest} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeRequest.prototype.clearNonpropagatingchangedetails = function() {
  return this.setNonpropagatingchangedetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeRequest.prototype.hasNonpropagatingchangedetails = function() {
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
proto.nest.trait.occupancy.StructureModeTrait.NonPropagatingChangeDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.occupancy.StructureModeTrait.NonPropagatingChangeDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.NonPropagatingChangeDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.NonPropagatingChangeDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
    sourcetype: jspb.Message.getFieldWithDefault(msg, 1, 0),
    changetime: (f = msg.getChangetime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.NonPropagatingChangeDetails}
 */
proto.nest.trait.occupancy.StructureModeTrait.NonPropagatingChangeDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.occupancy.StructureModeTrait.NonPropagatingChangeDetails;
  return proto.nest.trait.occupancy.StructureModeTrait.NonPropagatingChangeDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.NonPropagatingChangeDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.NonPropagatingChangeDetails}
 */
proto.nest.trait.occupancy.StructureModeTrait.NonPropagatingChangeDetails.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.nest.trait.occupancy.StructureModeTrait.NonPropagatingChangeSourceType} */ (reader.readEnum());
      msg.setSourcetype(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setChangetime(value);
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
proto.nest.trait.occupancy.StructureModeTrait.NonPropagatingChangeDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.occupancy.StructureModeTrait.NonPropagatingChangeDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.NonPropagatingChangeDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.NonPropagatingChangeDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSourcetype();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getChangetime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional NonPropagatingChangeSourceType sourceType = 1;
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.NonPropagatingChangeSourceType}
 */
proto.nest.trait.occupancy.StructureModeTrait.NonPropagatingChangeDetails.prototype.getSourcetype = function() {
  return /** @type {!proto.nest.trait.occupancy.StructureModeTrait.NonPropagatingChangeSourceType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.NonPropagatingChangeSourceType} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.NonPropagatingChangeDetails} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.NonPropagatingChangeDetails.prototype.setSourcetype = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp changeTime = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.nest.trait.occupancy.StructureModeTrait.NonPropagatingChangeDetails.prototype.getChangetime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.NonPropagatingChangeDetails} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.NonPropagatingChangeDetails.prototype.setChangetime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.NonPropagatingChangeDetails} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.NonPropagatingChangeDetails.prototype.clearChangetime = function() {
  return this.setChangetime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.NonPropagatingChangeDetails.prototype.hasChangetime = function() {
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
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    responsetype: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeResponse}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeResponse;
  return proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeResponse}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeResponseType} */ (reader.readEnum());
      msg.setResponsetype(value);
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
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponsetype();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional StructureModeChangeResponseType responseType = 1;
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeResponseType}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeResponse.prototype.getResponsetype = function() {
  return /** @type {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeResponseType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeResponseType} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeResponse} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeResponse.prototype.setResponsetype = function(value) {
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
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    structuremode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    occupancy: (f = msg.getOccupancy()) && proto.nest.trait.occupancy.StructureModeTrait.Occupancy.toObject(includeInstance, f),
    allowance: (f = msg.getAllowance()) && proto.nest.trait.occupancy.StructureModeTrait.Allowance.toObject(includeInstance, f),
    structuremodereason: jspb.Message.getFieldWithDefault(msg, 4, 0),
    structuremodesetter: (f = msg.getStructuremodesetter()) && weave_common_pb.ResourceId.toObject(includeInstance, f),
    structuremodeeffectivetime: (f = msg.getStructuremodeeffectivetime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    activityagnosticstructuremode: jspb.Message.getFieldWithDefault(msg, 7, 0),
    activityagnosticstructuremodeeffectivetime: (f = msg.getActivityagnosticstructuremodeeffectivetime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    revisionid: (f = msg.getRevisionid()) && google_protobuf_wrappers_pb.UInt64Value.toObject(includeInstance, f)
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
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest;
  return proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode} */ (reader.readEnum());
      msg.setStructuremode(value);
      break;
    case 2:
      var value = new proto.nest.trait.occupancy.StructureModeTrait.Occupancy;
      reader.readMessage(value,proto.nest.trait.occupancy.StructureModeTrait.Occupancy.deserializeBinaryFromReader);
      msg.setOccupancy(value);
      break;
    case 3:
      var value = new proto.nest.trait.occupancy.StructureModeTrait.Allowance;
      reader.readMessage(value,proto.nest.trait.occupancy.StructureModeTrait.Allowance.deserializeBinaryFromReader);
      msg.setAllowance(value);
      break;
    case 4:
      var value = /** @type {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeReason} */ (reader.readEnum());
      msg.setStructuremodereason(value);
      break;
    case 5:
      var value = new weave_common_pb.ResourceId;
      reader.readMessage(value,weave_common_pb.ResourceId.deserializeBinaryFromReader);
      msg.setStructuremodesetter(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStructuremodeeffectivetime(value);
      break;
    case 7:
      var value = /** @type {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode} */ (reader.readEnum());
      msg.setActivityagnosticstructuremode(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setActivityagnosticstructuremodeeffectivetime(value);
      break;
    case 9:
      var value = new google_protobuf_wrappers_pb.UInt64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt64Value.deserializeBinaryFromReader);
      msg.setRevisionid(value);
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
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStructuremode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getOccupancy();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.nest.trait.occupancy.StructureModeTrait.Occupancy.serializeBinaryToWriter
    );
  }
  f = message.getAllowance();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.nest.trait.occupancy.StructureModeTrait.Allowance.serializeBinaryToWriter
    );
  }
  f = message.getStructuremodereason();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getStructuremodesetter();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      weave_common_pb.ResourceId.serializeBinaryToWriter
    );
  }
  f = message.getStructuremodeeffectivetime();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getActivityagnosticstructuremode();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getActivityagnosticstructuremodeeffectivetime();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getRevisionid();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_wrappers_pb.UInt64Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional StructureMode structureMode = 1;
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest.prototype.getStructuremode = function() {
  return /** @type {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest.prototype.setStructuremode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Occupancy occupancy = 2;
 * @return {?proto.nest.trait.occupancy.StructureModeTrait.Occupancy}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest.prototype.getOccupancy = function() {
  return /** @type{?proto.nest.trait.occupancy.StructureModeTrait.Occupancy} */ (
    jspb.Message.getWrapperField(this, proto.nest.trait.occupancy.StructureModeTrait.Occupancy, 2));
};


/**
 * @param {?proto.nest.trait.occupancy.StructureModeTrait.Occupancy|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest.prototype.setOccupancy = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest.prototype.clearOccupancy = function() {
  return this.setOccupancy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest.prototype.hasOccupancy = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Allowance allowance = 3;
 * @return {?proto.nest.trait.occupancy.StructureModeTrait.Allowance}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest.prototype.getAllowance = function() {
  return /** @type{?proto.nest.trait.occupancy.StructureModeTrait.Allowance} */ (
    jspb.Message.getWrapperField(this, proto.nest.trait.occupancy.StructureModeTrait.Allowance, 3));
};


/**
 * @param {?proto.nest.trait.occupancy.StructureModeTrait.Allowance|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest.prototype.setAllowance = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest.prototype.clearAllowance = function() {
  return this.setAllowance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest.prototype.hasAllowance = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional StructureModeReason structureModeReason = 4;
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeReason}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest.prototype.getStructuremodereason = function() {
  return /** @type {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeReason} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeReason} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest.prototype.setStructuremodereason = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional weave.common.ResourceId structureModeSetter = 5;
 * @return {?proto.weave.common.ResourceId}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest.prototype.getStructuremodesetter = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 5));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest.prototype.setStructuremodesetter = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest.prototype.clearStructuremodesetter = function() {
  return this.setStructuremodesetter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest.prototype.hasStructuremodesetter = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp structureModeEffectiveTime = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest.prototype.getStructuremodeeffectivetime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest.prototype.setStructuremodeeffectivetime = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest.prototype.clearStructuremodeeffectivetime = function() {
  return this.setStructuremodeeffectivetime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest.prototype.hasStructuremodeeffectivetime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional StructureMode activityAgnosticStructureMode = 7;
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest.prototype.getActivityagnosticstructuremode = function() {
  return /** @type {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest.prototype.setActivityagnosticstructuremode = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional google.protobuf.Timestamp activityAgnosticStructureModeEffectiveTime = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest.prototype.getActivityagnosticstructuremodeeffectivetime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest.prototype.setActivityagnosticstructuremodeeffectivetime = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest.prototype.clearActivityagnosticstructuremodeeffectivetime = function() {
  return this.setActivityagnosticstructuremodeeffectivetime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest.prototype.hasActivityagnosticstructuremodeeffectivetime = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.UInt64Value revisionId = 9;
 * @return {?proto.google.protobuf.UInt64Value}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest.prototype.getRevisionid = function() {
  return /** @type{?proto.google.protobuf.UInt64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt64Value, 9));
};


/**
 * @param {?proto.google.protobuf.UInt64Value|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest.prototype.setRevisionid = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest.prototype.clearRevisionid = function() {
  return this.setRevisionid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateRequest.prototype.hasRevisionid = function() {
  return jspb.Message.getField(this, 9) != null;
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
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    responsetype: jspb.Message.getFieldWithDefault(msg, 1, 0),
    completeresponsetype: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateResponse}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateResponse;
  return proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateResponse}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeResponseType} */ (reader.readEnum());
      msg.setResponsetype(value);
      break;
    case 2:
      var value = /** @type {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateResponseType} */ (reader.readEnum());
      msg.setCompleteresponsetype(value);
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
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponsetype();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getCompleteresponsetype();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional StructureModeChangeResponseType responseType = 1;
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeResponseType}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateResponse.prototype.getResponsetype = function() {
  return /** @type {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeResponseType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeResponseType} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateResponse} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateResponse.prototype.setResponsetype = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional StructureModeCompleteUpdateResponseType completeResponseType = 2;
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateResponseType}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateResponse.prototype.getCompleteresponsetype = function() {
  return /** @type {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateResponseType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateResponseType} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateResponse} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeCompleteUpdateResponse.prototype.setCompleteresponsetype = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
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
proto.nest.trait.occupancy.StructureModeTrait.LegacyStructureModeChangeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.occupancy.StructureModeTrait.LegacyStructureModeChangeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.LegacyStructureModeChangeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.LegacyStructureModeChangeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    structuremode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    reason: jspb.Message.getFieldWithDefault(msg, 2, 0),
    userid: (f = msg.getUserid()) && weave_common_pb.ResourceId.toObject(includeInstance, f),
    wwnid: (f = msg.getWwnid()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
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
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.LegacyStructureModeChangeRequest}
 */
proto.nest.trait.occupancy.StructureModeTrait.LegacyStructureModeChangeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.occupancy.StructureModeTrait.LegacyStructureModeChangeRequest;
  return proto.nest.trait.occupancy.StructureModeTrait.LegacyStructureModeChangeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.LegacyStructureModeChangeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.LegacyStructureModeChangeRequest}
 */
proto.nest.trait.occupancy.StructureModeTrait.LegacyStructureModeChangeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode} */ (reader.readEnum());
      msg.setStructuremode(value);
      break;
    case 2:
      var value = /** @type {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeReason} */ (reader.readEnum());
      msg.setReason(value);
      break;
    case 3:
      var value = new weave_common_pb.ResourceId;
      reader.readMessage(value,weave_common_pb.ResourceId.deserializeBinaryFromReader);
      msg.setUserid(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setWwnid(value);
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
proto.nest.trait.occupancy.StructureModeTrait.LegacyStructureModeChangeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.occupancy.StructureModeTrait.LegacyStructureModeChangeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.LegacyStructureModeChangeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.LegacyStructureModeChangeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStructuremode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getReason();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
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
  f = message.getWwnid();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional StructureMode structureMode = 1;
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode}
 */
proto.nest.trait.occupancy.StructureModeTrait.LegacyStructureModeChangeRequest.prototype.getStructuremode = function() {
  return /** @type {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.LegacyStructureModeChangeRequest} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.LegacyStructureModeChangeRequest.prototype.setStructuremode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional StructureModeReason reason = 2;
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeReason}
 */
proto.nest.trait.occupancy.StructureModeTrait.LegacyStructureModeChangeRequest.prototype.getReason = function() {
  return /** @type {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeReason} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeReason} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.LegacyStructureModeChangeRequest} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.LegacyStructureModeChangeRequest.prototype.setReason = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional weave.common.ResourceId userId = 3;
 * @return {?proto.weave.common.ResourceId}
 */
proto.nest.trait.occupancy.StructureModeTrait.LegacyStructureModeChangeRequest.prototype.getUserid = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 3));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.LegacyStructureModeChangeRequest} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.LegacyStructureModeChangeRequest.prototype.setUserid = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.LegacyStructureModeChangeRequest} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.LegacyStructureModeChangeRequest.prototype.clearUserid = function() {
  return this.setUserid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.LegacyStructureModeChangeRequest.prototype.hasUserid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.StringValue wwnId = 4;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.nest.trait.occupancy.StructureModeTrait.LegacyStructureModeChangeRequest.prototype.getWwnid = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.LegacyStructureModeChangeRequest} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.LegacyStructureModeChangeRequest.prototype.setWwnid = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.LegacyStructureModeChangeRequest} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.LegacyStructureModeChangeRequest.prototype.clearWwnid = function() {
  return this.setWwnid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.LegacyStructureModeChangeRequest.prototype.hasWwnid = function() {
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
proto.nest.trait.occupancy.StructureModeTrait.ConsumeOccupancyStateBeliefRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.occupancy.StructureModeTrait.ConsumeOccupancyStateBeliefRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.ConsumeOccupancyStateBeliefRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.ConsumeOccupancyStateBeliefRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    activeprobability: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    sleepprobability: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    vacantprobability: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    identifiedpresenceprobability: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    lastmotioneventtimestamp: (f = msg.getLastmotioneventtimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.ConsumeOccupancyStateBeliefRequest}
 */
proto.nest.trait.occupancy.StructureModeTrait.ConsumeOccupancyStateBeliefRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.occupancy.StructureModeTrait.ConsumeOccupancyStateBeliefRequest;
  return proto.nest.trait.occupancy.StructureModeTrait.ConsumeOccupancyStateBeliefRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.ConsumeOccupancyStateBeliefRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.ConsumeOccupancyStateBeliefRequest}
 */
proto.nest.trait.occupancy.StructureModeTrait.ConsumeOccupancyStateBeliefRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setActiveprobability(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setSleepprobability(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setVacantprobability(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setIdentifiedpresenceprobability(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastmotioneventtimestamp(value);
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
proto.nest.trait.occupancy.StructureModeTrait.ConsumeOccupancyStateBeliefRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.occupancy.StructureModeTrait.ConsumeOccupancyStateBeliefRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.ConsumeOccupancyStateBeliefRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.ConsumeOccupancyStateBeliefRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActiveprobability();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getSleepprobability();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getVacantprobability();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getIdentifiedpresenceprobability();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getLastmotioneventtimestamp();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional float activeProbability = 1;
 * @return {number}
 */
proto.nest.trait.occupancy.StructureModeTrait.ConsumeOccupancyStateBeliefRequest.prototype.getActiveprobability = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.ConsumeOccupancyStateBeliefRequest} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.ConsumeOccupancyStateBeliefRequest.prototype.setActiveprobability = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float sleepProbability = 2;
 * @return {number}
 */
proto.nest.trait.occupancy.StructureModeTrait.ConsumeOccupancyStateBeliefRequest.prototype.getSleepprobability = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.ConsumeOccupancyStateBeliefRequest} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.ConsumeOccupancyStateBeliefRequest.prototype.setSleepprobability = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float vacantProbability = 3;
 * @return {number}
 */
proto.nest.trait.occupancy.StructureModeTrait.ConsumeOccupancyStateBeliefRequest.prototype.getVacantprobability = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.ConsumeOccupancyStateBeliefRequest} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.ConsumeOccupancyStateBeliefRequest.prototype.setVacantprobability = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float identifiedPresenceProbability = 4;
 * @return {number}
 */
proto.nest.trait.occupancy.StructureModeTrait.ConsumeOccupancyStateBeliefRequest.prototype.getIdentifiedpresenceprobability = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.ConsumeOccupancyStateBeliefRequest} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.ConsumeOccupancyStateBeliefRequest.prototype.setIdentifiedpresenceprobability = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp lastMotionEventTimestamp = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.nest.trait.occupancy.StructureModeTrait.ConsumeOccupancyStateBeliefRequest.prototype.getLastmotioneventtimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.ConsumeOccupancyStateBeliefRequest} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.ConsumeOccupancyStateBeliefRequest.prototype.setLastmotioneventtimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.ConsumeOccupancyStateBeliefRequest} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.ConsumeOccupancyStateBeliefRequest.prototype.clearLastmotioneventtimestamp = function() {
  return this.setLastmotioneventtimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.ConsumeOccupancyStateBeliefRequest.prototype.hasLastmotioneventtimestamp = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.nest.trait.occupancy.StructureModeTrait.ConsumeSecurityArmStateChangeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.occupancy.StructureModeTrait.ConsumeSecurityArmStateChangeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.ConsumeSecurityArmStateChangeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.ConsumeSecurityArmStateChangeRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.ConsumeSecurityArmStateChangeRequest}
 */
proto.nest.trait.occupancy.StructureModeTrait.ConsumeSecurityArmStateChangeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.occupancy.StructureModeTrait.ConsumeSecurityArmStateChangeRequest;
  return proto.nest.trait.occupancy.StructureModeTrait.ConsumeSecurityArmStateChangeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.ConsumeSecurityArmStateChangeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.ConsumeSecurityArmStateChangeRequest}
 */
proto.nest.trait.occupancy.StructureModeTrait.ConsumeSecurityArmStateChangeRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.nest.trait.occupancy.StructureModeTrait.ConsumeSecurityArmStateChangeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.occupancy.StructureModeTrait.ConsumeSecurityArmStateChangeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.ConsumeSecurityArmStateChangeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.ConsumeSecurityArmStateChangeRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.nest.trait.occupancy.StructureModeTrait.ConsumeBoltActuatorStateChangeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.occupancy.StructureModeTrait.ConsumeBoltActuatorStateChangeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.ConsumeBoltActuatorStateChangeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.ConsumeBoltActuatorStateChangeRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.ConsumeBoltActuatorStateChangeRequest}
 */
proto.nest.trait.occupancy.StructureModeTrait.ConsumeBoltActuatorStateChangeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.occupancy.StructureModeTrait.ConsumeBoltActuatorStateChangeRequest;
  return proto.nest.trait.occupancy.StructureModeTrait.ConsumeBoltActuatorStateChangeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.ConsumeBoltActuatorStateChangeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.ConsumeBoltActuatorStateChangeRequest}
 */
proto.nest.trait.occupancy.StructureModeTrait.ConsumeBoltActuatorStateChangeRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.nest.trait.occupancy.StructureModeTrait.ConsumeBoltActuatorStateChangeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.occupancy.StructureModeTrait.ConsumeBoltActuatorStateChangeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.ConsumeBoltActuatorStateChangeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.ConsumeBoltActuatorStateChangeRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.nest.trait.occupancy.StructureModeTrait.ConsumeLegacyStructureModeChangeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.occupancy.StructureModeTrait.ConsumeLegacyStructureModeChangeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.ConsumeLegacyStructureModeChangeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.ConsumeLegacyStructureModeChangeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    away: jspb.Message.getFieldWithDefault(msg, 1, 0),
    awaysetter: jspb.Message.getFieldWithDefault(msg, 2, 0),
    manualawaytimestamp: (f = msg.getManualawaytimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    touchedby: jspb.Message.getFieldWithDefault(msg, 4, 0),
    touchedid: (f = msg.getTouchedid()) && weave_common_pb.ResourceId.toObject(includeInstance, f)
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
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.ConsumeLegacyStructureModeChangeRequest}
 */
proto.nest.trait.occupancy.StructureModeTrait.ConsumeLegacyStructureModeChangeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.occupancy.StructureModeTrait.ConsumeLegacyStructureModeChangeRequest;
  return proto.nest.trait.occupancy.StructureModeTrait.ConsumeLegacyStructureModeChangeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.ConsumeLegacyStructureModeChangeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.ConsumeLegacyStructureModeChangeRequest}
 */
proto.nest.trait.occupancy.StructureModeTrait.ConsumeLegacyStructureModeChangeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.nest.trait.occupancy.StructureModeTrait.LegacyAwayState} */ (reader.readEnum());
      msg.setAway(value);
      break;
    case 2:
      var value = /** @type {!proto.nest.trait.occupancy.StructureModeTrait.LegacyAwaySetter} */ (reader.readEnum());
      msg.setAwaysetter(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setManualawaytimestamp(value);
      break;
    case 4:
      var value = /** @type {!proto.nest.trait.occupancy.StructureModeTrait.LegacyTouchedBy} */ (reader.readEnum());
      msg.setTouchedby(value);
      break;
    case 5:
      var value = new weave_common_pb.ResourceId;
      reader.readMessage(value,weave_common_pb.ResourceId.deserializeBinaryFromReader);
      msg.setTouchedid(value);
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
proto.nest.trait.occupancy.StructureModeTrait.ConsumeLegacyStructureModeChangeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.occupancy.StructureModeTrait.ConsumeLegacyStructureModeChangeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.ConsumeLegacyStructureModeChangeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.ConsumeLegacyStructureModeChangeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAway();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getAwaysetter();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getManualawaytimestamp();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTouchedby();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getTouchedid();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      weave_common_pb.ResourceId.serializeBinaryToWriter
    );
  }
};


/**
 * optional LegacyAwayState away = 1;
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.LegacyAwayState}
 */
proto.nest.trait.occupancy.StructureModeTrait.ConsumeLegacyStructureModeChangeRequest.prototype.getAway = function() {
  return /** @type {!proto.nest.trait.occupancy.StructureModeTrait.LegacyAwayState} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.LegacyAwayState} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.ConsumeLegacyStructureModeChangeRequest} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.ConsumeLegacyStructureModeChangeRequest.prototype.setAway = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional LegacyAwaySetter awaySetter = 2;
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.LegacyAwaySetter}
 */
proto.nest.trait.occupancy.StructureModeTrait.ConsumeLegacyStructureModeChangeRequest.prototype.getAwaysetter = function() {
  return /** @type {!proto.nest.trait.occupancy.StructureModeTrait.LegacyAwaySetter} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.LegacyAwaySetter} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.ConsumeLegacyStructureModeChangeRequest} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.ConsumeLegacyStructureModeChangeRequest.prototype.setAwaysetter = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp manualAwayTimestamp = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.nest.trait.occupancy.StructureModeTrait.ConsumeLegacyStructureModeChangeRequest.prototype.getManualawaytimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.ConsumeLegacyStructureModeChangeRequest} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.ConsumeLegacyStructureModeChangeRequest.prototype.setManualawaytimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.ConsumeLegacyStructureModeChangeRequest} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.ConsumeLegacyStructureModeChangeRequest.prototype.clearManualawaytimestamp = function() {
  return this.setManualawaytimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.ConsumeLegacyStructureModeChangeRequest.prototype.hasManualawaytimestamp = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional LegacyTouchedBy touchedBy = 4;
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.LegacyTouchedBy}
 */
proto.nest.trait.occupancy.StructureModeTrait.ConsumeLegacyStructureModeChangeRequest.prototype.getTouchedby = function() {
  return /** @type {!proto.nest.trait.occupancy.StructureModeTrait.LegacyTouchedBy} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.LegacyTouchedBy} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.ConsumeLegacyStructureModeChangeRequest} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.ConsumeLegacyStructureModeChangeRequest.prototype.setTouchedby = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional weave.common.ResourceId touchedId = 5;
 * @return {?proto.weave.common.ResourceId}
 */
proto.nest.trait.occupancy.StructureModeTrait.ConsumeLegacyStructureModeChangeRequest.prototype.getTouchedid = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 5));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.ConsumeLegacyStructureModeChangeRequest} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.ConsumeLegacyStructureModeChangeRequest.prototype.setTouchedid = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.ConsumeLegacyStructureModeChangeRequest} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.ConsumeLegacyStructureModeChangeRequest.prototype.clearTouchedid = function() {
  return this.setTouchedid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.ConsumeLegacyStructureModeChangeRequest.prototype.hasTouchedid = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    structuremode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    priorstructuremode: jspb.Message.getFieldWithDefault(msg, 2, 0),
    reason: jspb.Message.getFieldWithDefault(msg, 3, 0),
    userid: (f = msg.getUserid()) && weave_common_pb.ResourceId.toObject(includeInstance, f),
    deviceid: (f = msg.getDeviceid()) && weave_common_pb.ResourceId.toObject(includeInstance, f),
    rtsdeviceid: (f = msg.getRtsdeviceid()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    controleventtypeurl: (f = msg.getControleventtypeurl()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    wwnid: (f = msg.getWwnid()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
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
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent;
  return proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode} */ (reader.readEnum());
      msg.setStructuremode(value);
      break;
    case 2:
      var value = /** @type {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode} */ (reader.readEnum());
      msg.setPriorstructuremode(value);
      break;
    case 3:
      var value = /** @type {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeReason} */ (reader.readEnum());
      msg.setReason(value);
      break;
    case 4:
      var value = new weave_common_pb.ResourceId;
      reader.readMessage(value,weave_common_pb.ResourceId.deserializeBinaryFromReader);
      msg.setUserid(value);
      break;
    case 5:
      var value = new weave_common_pb.ResourceId;
      reader.readMessage(value,weave_common_pb.ResourceId.deserializeBinaryFromReader);
      msg.setDeviceid(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setRtsdeviceid(value);
      break;
    case 7:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setControleventtypeurl(value);
      break;
    case 8:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setWwnid(value);
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
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStructuremode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPriorstructuremode();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getReason();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getUserid();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      weave_common_pb.ResourceId.serializeBinaryToWriter
    );
  }
  f = message.getDeviceid();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      weave_common_pb.ResourceId.serializeBinaryToWriter
    );
  }
  f = message.getRtsdeviceid();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getControleventtypeurl();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getWwnid();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional StructureMode structureMode = 1;
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent.prototype.getStructuremode = function() {
  return /** @type {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent.prototype.setStructuremode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional StructureMode priorStructureMode = 2;
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent.prototype.getPriorstructuremode = function() {
  return /** @type {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent.prototype.setPriorstructuremode = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional StructureModeReason reason = 3;
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeReason}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent.prototype.getReason = function() {
  return /** @type {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeReason} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeReason} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent.prototype.setReason = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional weave.common.ResourceId userId = 4;
 * @return {?proto.weave.common.ResourceId}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent.prototype.getUserid = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 4));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent.prototype.setUserid = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent.prototype.clearUserid = function() {
  return this.setUserid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent.prototype.hasUserid = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional weave.common.ResourceId deviceId = 5;
 * @return {?proto.weave.common.ResourceId}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent.prototype.getDeviceid = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 5));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent.prototype.setDeviceid = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent.prototype.clearDeviceid = function() {
  return this.setDeviceid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent.prototype.hasDeviceid = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.StringValue rtsDeviceId = 6;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent.prototype.getRtsdeviceid = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 6));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent.prototype.setRtsdeviceid = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent.prototype.clearRtsdeviceid = function() {
  return this.setRtsdeviceid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent.prototype.hasRtsdeviceid = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.StringValue controlEventTypeUrl = 7;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent.prototype.getControleventtypeurl = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 7));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent.prototype.setControleventtypeurl = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent.prototype.clearControleventtypeurl = function() {
  return this.setControleventtypeurl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent.prototype.hasControleventtypeurl = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.StringValue wwnId = 8;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent.prototype.getWwnid = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 8));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent.prototype.setWwnid = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent.prototype.clearWwnid = function() {
  return this.setWwnid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeChangeEvent.prototype.hasWwnid = function() {
  return jspb.Message.getField(this, 8) != null;
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
proto.nest.trait.occupancy.StructureModeTrait.OccupancyChangeEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.occupancy.StructureModeTrait.OccupancyChangeEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.OccupancyChangeEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.OccupancyChangeEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    occupancy: (f = msg.getOccupancy()) && proto.nest.trait.occupancy.StructureModeTrait.Occupancy.toObject(includeInstance, f),
    prioroccupancy: (f = msg.getPrioroccupancy()) && proto.nest.trait.occupancy.StructureModeTrait.Occupancy.toObject(includeInstance, f)
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
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.OccupancyChangeEvent}
 */
proto.nest.trait.occupancy.StructureModeTrait.OccupancyChangeEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.occupancy.StructureModeTrait.OccupancyChangeEvent;
  return proto.nest.trait.occupancy.StructureModeTrait.OccupancyChangeEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.OccupancyChangeEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.OccupancyChangeEvent}
 */
proto.nest.trait.occupancy.StructureModeTrait.OccupancyChangeEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.nest.trait.occupancy.StructureModeTrait.Occupancy;
      reader.readMessage(value,proto.nest.trait.occupancy.StructureModeTrait.Occupancy.deserializeBinaryFromReader);
      msg.setOccupancy(value);
      break;
    case 2:
      var value = new proto.nest.trait.occupancy.StructureModeTrait.Occupancy;
      reader.readMessage(value,proto.nest.trait.occupancy.StructureModeTrait.Occupancy.deserializeBinaryFromReader);
      msg.setPrioroccupancy(value);
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
proto.nest.trait.occupancy.StructureModeTrait.OccupancyChangeEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.occupancy.StructureModeTrait.OccupancyChangeEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.OccupancyChangeEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.OccupancyChangeEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOccupancy();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.nest.trait.occupancy.StructureModeTrait.Occupancy.serializeBinaryToWriter
    );
  }
  f = message.getPrioroccupancy();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.nest.trait.occupancy.StructureModeTrait.Occupancy.serializeBinaryToWriter
    );
  }
};


/**
 * optional Occupancy occupancy = 1;
 * @return {?proto.nest.trait.occupancy.StructureModeTrait.Occupancy}
 */
proto.nest.trait.occupancy.StructureModeTrait.OccupancyChangeEvent.prototype.getOccupancy = function() {
  return /** @type{?proto.nest.trait.occupancy.StructureModeTrait.Occupancy} */ (
    jspb.Message.getWrapperField(this, proto.nest.trait.occupancy.StructureModeTrait.Occupancy, 1));
};


/**
 * @param {?proto.nest.trait.occupancy.StructureModeTrait.Occupancy|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.OccupancyChangeEvent} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.OccupancyChangeEvent.prototype.setOccupancy = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.OccupancyChangeEvent} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.OccupancyChangeEvent.prototype.clearOccupancy = function() {
  return this.setOccupancy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.OccupancyChangeEvent.prototype.hasOccupancy = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Occupancy priorOccupancy = 2;
 * @return {?proto.nest.trait.occupancy.StructureModeTrait.Occupancy}
 */
proto.nest.trait.occupancy.StructureModeTrait.OccupancyChangeEvent.prototype.getPrioroccupancy = function() {
  return /** @type{?proto.nest.trait.occupancy.StructureModeTrait.Occupancy} */ (
    jspb.Message.getWrapperField(this, proto.nest.trait.occupancy.StructureModeTrait.Occupancy, 2));
};


/**
 * @param {?proto.nest.trait.occupancy.StructureModeTrait.Occupancy|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.OccupancyChangeEvent} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.OccupancyChangeEvent.prototype.setPrioroccupancy = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.OccupancyChangeEvent} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.OccupancyChangeEvent.prototype.clearPrioroccupancy = function() {
  return this.setPrioroccupancy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.OccupancyChangeEvent.prototype.hasPrioroccupancy = function() {
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
proto.nest.trait.occupancy.StructureModeTrait.AllowanceChangeEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.occupancy.StructureModeTrait.AllowanceChangeEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.AllowanceChangeEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.AllowanceChangeEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    allowance: (f = msg.getAllowance()) && proto.nest.trait.occupancy.StructureModeTrait.Allowance.toObject(includeInstance, f),
    priorallowance: (f = msg.getPriorallowance()) && proto.nest.trait.occupancy.StructureModeTrait.Allowance.toObject(includeInstance, f)
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
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.AllowanceChangeEvent}
 */
proto.nest.trait.occupancy.StructureModeTrait.AllowanceChangeEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.occupancy.StructureModeTrait.AllowanceChangeEvent;
  return proto.nest.trait.occupancy.StructureModeTrait.AllowanceChangeEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.AllowanceChangeEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.AllowanceChangeEvent}
 */
proto.nest.trait.occupancy.StructureModeTrait.AllowanceChangeEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.nest.trait.occupancy.StructureModeTrait.Allowance;
      reader.readMessage(value,proto.nest.trait.occupancy.StructureModeTrait.Allowance.deserializeBinaryFromReader);
      msg.setAllowance(value);
      break;
    case 2:
      var value = new proto.nest.trait.occupancy.StructureModeTrait.Allowance;
      reader.readMessage(value,proto.nest.trait.occupancy.StructureModeTrait.Allowance.deserializeBinaryFromReader);
      msg.setPriorallowance(value);
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
proto.nest.trait.occupancy.StructureModeTrait.AllowanceChangeEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.occupancy.StructureModeTrait.AllowanceChangeEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.AllowanceChangeEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.AllowanceChangeEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAllowance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.nest.trait.occupancy.StructureModeTrait.Allowance.serializeBinaryToWriter
    );
  }
  f = message.getPriorallowance();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.nest.trait.occupancy.StructureModeTrait.Allowance.serializeBinaryToWriter
    );
  }
};


/**
 * optional Allowance allowance = 1;
 * @return {?proto.nest.trait.occupancy.StructureModeTrait.Allowance}
 */
proto.nest.trait.occupancy.StructureModeTrait.AllowanceChangeEvent.prototype.getAllowance = function() {
  return /** @type{?proto.nest.trait.occupancy.StructureModeTrait.Allowance} */ (
    jspb.Message.getWrapperField(this, proto.nest.trait.occupancy.StructureModeTrait.Allowance, 1));
};


/**
 * @param {?proto.nest.trait.occupancy.StructureModeTrait.Allowance|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.AllowanceChangeEvent} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.AllowanceChangeEvent.prototype.setAllowance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.AllowanceChangeEvent} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.AllowanceChangeEvent.prototype.clearAllowance = function() {
  return this.setAllowance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.AllowanceChangeEvent.prototype.hasAllowance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Allowance priorAllowance = 2;
 * @return {?proto.nest.trait.occupancy.StructureModeTrait.Allowance}
 */
proto.nest.trait.occupancy.StructureModeTrait.AllowanceChangeEvent.prototype.getPriorallowance = function() {
  return /** @type{?proto.nest.trait.occupancy.StructureModeTrait.Allowance} */ (
    jspb.Message.getWrapperField(this, proto.nest.trait.occupancy.StructureModeTrait.Allowance, 2));
};


/**
 * @param {?proto.nest.trait.occupancy.StructureModeTrait.Allowance|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.AllowanceChangeEvent} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.AllowanceChangeEvent.prototype.setPriorallowance = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.AllowanceChangeEvent} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.AllowanceChangeEvent.prototype.clearPriorallowance = function() {
  return this.setPriorallowance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.AllowanceChangeEvent.prototype.hasPriorallowance = function() {
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
proto.nest.trait.occupancy.StructureModeTrait.AutoAsk.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.occupancy.StructureModeTrait.AutoAsk.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.AutoAsk} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.AutoAsk.toObject = function(includeInstance, msg) {
  var f, obj = {
    autoaskarm: jspb.Message.getFieldWithDefault(msg, 1, 0),
    autoasklock: jspb.Message.getFieldWithDefault(msg, 2, 0),
    autoaskstructuremode: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.AutoAsk}
 */
proto.nest.trait.occupancy.StructureModeTrait.AutoAsk.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.occupancy.StructureModeTrait.AutoAsk;
  return proto.nest.trait.occupancy.StructureModeTrait.AutoAsk.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.AutoAsk} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.AutoAsk}
 */
proto.nest.trait.occupancy.StructureModeTrait.AutoAsk.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.nest.trait.occupancy.StructureModeTrait.AutoAskArm} */ (reader.readEnum());
      msg.setAutoaskarm(value);
      break;
    case 2:
      var value = /** @type {!proto.nest.trait.occupancy.StructureModeTrait.AutoAskLock} */ (reader.readEnum());
      msg.setAutoasklock(value);
      break;
    case 3:
      var value = /** @type {!proto.nest.trait.occupancy.StructureModeTrait.AutoAskStructureMode} */ (reader.readEnum());
      msg.setAutoaskstructuremode(value);
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
proto.nest.trait.occupancy.StructureModeTrait.AutoAsk.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.occupancy.StructureModeTrait.AutoAsk.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.AutoAsk} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.AutoAsk.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAutoaskarm();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getAutoasklock();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getAutoaskstructuremode();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional AutoAskArm autoAskArm = 1;
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.AutoAskArm}
 */
proto.nest.trait.occupancy.StructureModeTrait.AutoAsk.prototype.getAutoaskarm = function() {
  return /** @type {!proto.nest.trait.occupancy.StructureModeTrait.AutoAskArm} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.AutoAskArm} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.AutoAsk} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.AutoAsk.prototype.setAutoaskarm = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional AutoAskLock autoAskLock = 2;
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.AutoAskLock}
 */
proto.nest.trait.occupancy.StructureModeTrait.AutoAsk.prototype.getAutoasklock = function() {
  return /** @type {!proto.nest.trait.occupancy.StructureModeTrait.AutoAskLock} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.AutoAskLock} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.AutoAsk} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.AutoAsk.prototype.setAutoasklock = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional AutoAskStructureMode autoAskStructureMode = 3;
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.AutoAskStructureMode}
 */
proto.nest.trait.occupancy.StructureModeTrait.AutoAsk.prototype.getAutoaskstructuremode = function() {
  return /** @type {!proto.nest.trait.occupancy.StructureModeTrait.AutoAskStructureMode} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.AutoAskStructureMode} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.AutoAsk} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.AutoAsk.prototype.setAutoaskstructuremode = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent.repeatedFields_ = [2];



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
proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    asktype: jspb.Message.getFieldWithDefault(msg, 1, 0),
    useridList: jspb.Message.toObjectList(msg.getUseridList(),
    weave_common_pb.ResourceId.toObject, includeInstance),
    deviceid: (f = msg.getDeviceid()) && weave_common_pb.ResourceId.toObject(includeInstance, f),
    dryrun: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    autoask: (f = msg.getAutoask()) && proto.nest.trait.occupancy.StructureModeTrait.AutoAsk.toObject(includeInstance, f)
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
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent}
 */
proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent;
  return proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent}
 */
proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.nest.trait.occupancy.StructureModeTrait.AutoAskType} */ (reader.readEnum());
      msg.setAsktype(value);
      break;
    case 2:
      var value = new weave_common_pb.ResourceId;
      reader.readMessage(value,weave_common_pb.ResourceId.deserializeBinaryFromReader);
      msg.addUserid(value);
      break;
    case 3:
      var value = new weave_common_pb.ResourceId;
      reader.readMessage(value,weave_common_pb.ResourceId.deserializeBinaryFromReader);
      msg.setDeviceid(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDryrun(value);
      break;
    case 5:
      var value = new proto.nest.trait.occupancy.StructureModeTrait.AutoAsk;
      reader.readMessage(value,proto.nest.trait.occupancy.StructureModeTrait.AutoAsk.deserializeBinaryFromReader);
      msg.setAutoask(value);
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
proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAsktype();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getUseridList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      weave_common_pb.ResourceId.serializeBinaryToWriter
    );
  }
  f = message.getDeviceid();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      weave_common_pb.ResourceId.serializeBinaryToWriter
    );
  }
  f = message.getDryrun();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getAutoask();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.nest.trait.occupancy.StructureModeTrait.AutoAsk.serializeBinaryToWriter
    );
  }
};


/**
 * optional AutoAskType askType = 1;
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.AutoAskType}
 */
proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent.prototype.getAsktype = function() {
  return /** @type {!proto.nest.trait.occupancy.StructureModeTrait.AutoAskType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.AutoAskType} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent.prototype.setAsktype = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated weave.common.ResourceId userId = 2;
 * @return {!Array<!proto.weave.common.ResourceId>}
 */
proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent.prototype.getUseridList = function() {
  return /** @type{!Array<!proto.weave.common.ResourceId>} */ (
    jspb.Message.getRepeatedWrapperField(this, weave_common_pb.ResourceId, 2));
};


/**
 * @param {!Array<!proto.weave.common.ResourceId>} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent.prototype.setUseridList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.weave.common.ResourceId=} opt_value
 * @param {number=} opt_index
 * @return {!proto.weave.common.ResourceId}
 */
proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent.prototype.addUserid = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.weave.common.ResourceId, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent.prototype.clearUseridList = function() {
  return this.setUseridList([]);
};


/**
 * optional weave.common.ResourceId deviceId = 3;
 * @return {?proto.weave.common.ResourceId}
 */
proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent.prototype.getDeviceid = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 3));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent.prototype.setDeviceid = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent.prototype.clearDeviceid = function() {
  return this.setDeviceid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent.prototype.hasDeviceid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool dryRun = 4;
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent.prototype.getDryrun = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent.prototype.setDryrun = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional AutoAsk autoAsk = 5;
 * @return {?proto.nest.trait.occupancy.StructureModeTrait.AutoAsk}
 */
proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent.prototype.getAutoask = function() {
  return /** @type{?proto.nest.trait.occupancy.StructureModeTrait.AutoAsk} */ (
    jspb.Message.getWrapperField(this, proto.nest.trait.occupancy.StructureModeTrait.AutoAsk, 5));
};


/**
 * @param {?proto.nest.trait.occupancy.StructureModeTrait.AutoAsk|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent.prototype.setAutoask = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent.prototype.clearAutoask = function() {
  return this.setAutoask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.AutoAskEvent.prototype.hasAutoask = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.nest.trait.occupancy.StructureModeTrait.ActivityAgnosticStructureModeChangeEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.occupancy.StructureModeTrait.ActivityAgnosticStructureModeChangeEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.ActivityAgnosticStructureModeChangeEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.ActivityAgnosticStructureModeChangeEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    activityagnosticstructuremode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    prioractivityagnosticstructuremode: jspb.Message.getFieldWithDefault(msg, 2, 0),
    reason: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.ActivityAgnosticStructureModeChangeEvent}
 */
proto.nest.trait.occupancy.StructureModeTrait.ActivityAgnosticStructureModeChangeEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.occupancy.StructureModeTrait.ActivityAgnosticStructureModeChangeEvent;
  return proto.nest.trait.occupancy.StructureModeTrait.ActivityAgnosticStructureModeChangeEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.ActivityAgnosticStructureModeChangeEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.ActivityAgnosticStructureModeChangeEvent}
 */
proto.nest.trait.occupancy.StructureModeTrait.ActivityAgnosticStructureModeChangeEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode} */ (reader.readEnum());
      msg.setActivityagnosticstructuremode(value);
      break;
    case 2:
      var value = /** @type {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode} */ (reader.readEnum());
      msg.setPrioractivityagnosticstructuremode(value);
      break;
    case 3:
      var value = /** @type {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeReason} */ (reader.readEnum());
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
proto.nest.trait.occupancy.StructureModeTrait.ActivityAgnosticStructureModeChangeEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.occupancy.StructureModeTrait.ActivityAgnosticStructureModeChangeEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.ActivityAgnosticStructureModeChangeEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.ActivityAgnosticStructureModeChangeEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActivityagnosticstructuremode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPrioractivityagnosticstructuremode();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getReason();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional StructureMode activityAgnosticStructureMode = 1;
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode}
 */
proto.nest.trait.occupancy.StructureModeTrait.ActivityAgnosticStructureModeChangeEvent.prototype.getActivityagnosticstructuremode = function() {
  return /** @type {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.ActivityAgnosticStructureModeChangeEvent} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.ActivityAgnosticStructureModeChangeEvent.prototype.setActivityagnosticstructuremode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional StructureMode priorActivityAgnosticStructureMode = 2;
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode}
 */
proto.nest.trait.occupancy.StructureModeTrait.ActivityAgnosticStructureModeChangeEvent.prototype.getPrioractivityagnosticstructuremode = function() {
  return /** @type {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.ActivityAgnosticStructureModeChangeEvent} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.ActivityAgnosticStructureModeChangeEvent.prototype.setPrioractivityagnosticstructuremode = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional StructureModeReason reason = 3;
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeReason}
 */
proto.nest.trait.occupancy.StructureModeTrait.ActivityAgnosticStructureModeChangeEvent.prototype.getReason = function() {
  return /** @type {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeReason} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeReason} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.ActivityAgnosticStructureModeChangeEvent} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.ActivityAgnosticStructureModeChangeEvent.prototype.setReason = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
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
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState.toObject = function(includeInstance, msg) {
  var f, obj = {
    structuremode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    occupancy: (f = msg.getOccupancy()) && proto.nest.trait.occupancy.StructureModeTrait.Occupancy.toObject(includeInstance, f),
    allowance: (f = msg.getAllowance()) && proto.nest.trait.occupancy.StructureModeTrait.Allowance.toObject(includeInstance, f),
    structuremodereason: jspb.Message.getFieldWithDefault(msg, 4, 0),
    structuremodesetter: (f = msg.getStructuremodesetter()) && weave_common_pb.ResourceId.toObject(includeInstance, f),
    structuremodeeffectivetime: (f = msg.getStructuremodeeffectivetime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    activityagnosticstructuremode: jspb.Message.getFieldWithDefault(msg, 7, 0),
    activityagnosticstructuremodeeffectivetime: (f = msg.getActivityagnosticstructuremodeeffectivetime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState;
  return proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode} */ (reader.readEnum());
      msg.setStructuremode(value);
      break;
    case 2:
      var value = new proto.nest.trait.occupancy.StructureModeTrait.Occupancy;
      reader.readMessage(value,proto.nest.trait.occupancy.StructureModeTrait.Occupancy.deserializeBinaryFromReader);
      msg.setOccupancy(value);
      break;
    case 3:
      var value = new proto.nest.trait.occupancy.StructureModeTrait.Allowance;
      reader.readMessage(value,proto.nest.trait.occupancy.StructureModeTrait.Allowance.deserializeBinaryFromReader);
      msg.setAllowance(value);
      break;
    case 4:
      var value = /** @type {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeReason} */ (reader.readEnum());
      msg.setStructuremodereason(value);
      break;
    case 5:
      var value = new weave_common_pb.ResourceId;
      reader.readMessage(value,weave_common_pb.ResourceId.deserializeBinaryFromReader);
      msg.setStructuremodesetter(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStructuremodeeffectivetime(value);
      break;
    case 7:
      var value = /** @type {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode} */ (reader.readEnum());
      msg.setActivityagnosticstructuremode(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setActivityagnosticstructuremodeeffectivetime(value);
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
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStructuremode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getOccupancy();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.nest.trait.occupancy.StructureModeTrait.Occupancy.serializeBinaryToWriter
    );
  }
  f = message.getAllowance();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.nest.trait.occupancy.StructureModeTrait.Allowance.serializeBinaryToWriter
    );
  }
  f = message.getStructuremodereason();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getStructuremodesetter();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      weave_common_pb.ResourceId.serializeBinaryToWriter
    );
  }
  f = message.getStructuremodeeffectivetime();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getActivityagnosticstructuremode();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getActivityagnosticstructuremodeeffectivetime();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional StructureMode structureMode = 1;
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState.prototype.getStructuremode = function() {
  return /** @type {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState.prototype.setStructuremode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Occupancy occupancy = 2;
 * @return {?proto.nest.trait.occupancy.StructureModeTrait.Occupancy}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState.prototype.getOccupancy = function() {
  return /** @type{?proto.nest.trait.occupancy.StructureModeTrait.Occupancy} */ (
    jspb.Message.getWrapperField(this, proto.nest.trait.occupancy.StructureModeTrait.Occupancy, 2));
};


/**
 * @param {?proto.nest.trait.occupancy.StructureModeTrait.Occupancy|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState.prototype.setOccupancy = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState.prototype.clearOccupancy = function() {
  return this.setOccupancy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState.prototype.hasOccupancy = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Allowance allowance = 3;
 * @return {?proto.nest.trait.occupancy.StructureModeTrait.Allowance}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState.prototype.getAllowance = function() {
  return /** @type{?proto.nest.trait.occupancy.StructureModeTrait.Allowance} */ (
    jspb.Message.getWrapperField(this, proto.nest.trait.occupancy.StructureModeTrait.Allowance, 3));
};


/**
 * @param {?proto.nest.trait.occupancy.StructureModeTrait.Allowance|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState.prototype.setAllowance = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState.prototype.clearAllowance = function() {
  return this.setAllowance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState.prototype.hasAllowance = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional StructureModeReason structureModeReason = 4;
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeReason}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState.prototype.getStructuremodereason = function() {
  return /** @type {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeReason} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeReason} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState.prototype.setStructuremodereason = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional weave.common.ResourceId structureModeSetter = 5;
 * @return {?proto.weave.common.ResourceId}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState.prototype.getStructuremodesetter = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 5));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState.prototype.setStructuremodesetter = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState.prototype.clearStructuremodesetter = function() {
  return this.setStructuremodesetter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState.prototype.hasStructuremodesetter = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp structureModeEffectiveTime = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState.prototype.getStructuremodeeffectivetime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState.prototype.setStructuremodeeffectivetime = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState.prototype.clearStructuremodeeffectivetime = function() {
  return this.setStructuremodeeffectivetime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState.prototype.hasStructuremodeeffectivetime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional StructureMode activityAgnosticStructureMode = 7;
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState.prototype.getActivityagnosticstructuremode = function() {
  return /** @type {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState.prototype.setActivityagnosticstructuremode = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional google.protobuf.Timestamp activityAgnosticStructureModeEffectiveTime = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState.prototype.getActivityagnosticstructuremodeeffectivetime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState.prototype.setActivityagnosticstructuremodeeffectivetime = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState.prototype.clearActivityagnosticstructuremodeeffectivetime = function() {
  return this.setActivityagnosticstructuremodeeffectivetime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState.prototype.hasActivityagnosticstructuremodeeffectivetime = function() {
  return jspb.Message.getField(this, 8) != null;
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
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStateChange.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStateChange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStateChange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStateChange.toObject = function(includeInstance, msg) {
  var f, obj = {
    from: (f = msg.getFrom()) && proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState.toObject(includeInstance, f),
    to: (f = msg.getTo()) && proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState.toObject(includeInstance, f)
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
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStateChange}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStateChange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStateChange;
  return proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStateChange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStateChange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStateChange}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStateChange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState;
      reader.readMessage(value,proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState.deserializeBinaryFromReader);
      msg.setFrom(value);
      break;
    case 2:
      var value = new proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState;
      reader.readMessage(value,proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState.deserializeBinaryFromReader);
      msg.setTo(value);
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
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStateChange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStateChange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStateChange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStateChange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState.serializeBinaryToWriter
    );
  }
  f = message.getTo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState.serializeBinaryToWriter
    );
  }
};


/**
 * optional StructureModeTraceEventState from = 1;
 * @return {?proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStateChange.prototype.getFrom = function() {
  return /** @type{?proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState} */ (
    jspb.Message.getWrapperField(this, proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState, 1));
};


/**
 * @param {?proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStateChange} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStateChange.prototype.setFrom = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStateChange} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStateChange.prototype.clearFrom = function() {
  return this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStateChange.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional StructureModeTraceEventState to = 2;
 * @return {?proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStateChange.prototype.getTo = function() {
  return /** @type{?proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState} */ (
    jspb.Message.getWrapperField(this, proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState, 2));
};


/**
 * @param {?proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventState|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStateChange} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStateChange.prototype.setTo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStateChange} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStateChange.prototype.clearTo = function() {
  return this.setTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStateChange.prototype.hasTo = function() {
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
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStep.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStep.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStep} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStep.toObject = function(includeInstance, msg) {
  var f, obj = {
    time: (f = msg.getTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStep}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStep.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStep;
  return proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStep.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStep} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStep}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStep.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 2:
      var value = msg.getLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
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
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStep.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStep.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStep} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStep.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional google.protobuf.Timestamp time = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStep.prototype.getTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStep} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStep.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStep} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStep.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStep.prototype.hasTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * map<string, string> labels = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStep.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStep} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStep.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent.repeatedFields_ = [7,8];



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
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    trigger: jspb.Message.getFieldWithDefault(msg, 1, ""),
    triggeragent: jspb.Message.getFieldWithDefault(msg, 2, ""),
    triggereventkey: jspb.Message.getFieldWithDefault(msg, 3, ""),
    triggertime: (f = msg.getTriggertime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    starttime: (f = msg.getStarttime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    statechange: (f = msg.getStatechange()) && proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStateChange.toObject(includeInstance, f),
    stepsList: jspb.Message.toObjectList(msg.getStepsList(),
    proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStep.toObject, includeInstance),
    scenarioidList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    error: jspb.Message.getFieldWithDefault(msg, 9, ""),
    rtsstructureid: jspb.Message.getFieldWithDefault(msg, 10, "")
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
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent;
  return proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrigger(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTriggeragent(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTriggereventkey(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTriggertime(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStarttime(value);
      break;
    case 6:
      var value = new proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStateChange;
      reader.readMessage(value,proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStateChange.deserializeBinaryFromReader);
      msg.setStatechange(value);
      break;
    case 7:
      var value = new proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStep;
      reader.readMessage(value,proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStep.deserializeBinaryFromReader);
      msg.addSteps(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addScenarioid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setRtsstructureid(value);
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
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrigger();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTriggeragent();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTriggereventkey();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTriggertime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStarttime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStatechange();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStateChange.serializeBinaryToWriter
    );
  }
  f = message.getStepsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStep.serializeBinaryToWriter
    );
  }
  f = message.getScenarioidList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getRtsstructureid();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional string trigger = 1;
 * @return {string}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent.prototype.getTrigger = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent.prototype.setTrigger = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string triggerAgent = 2;
 * @return {string}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent.prototype.getTriggeragent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent.prototype.setTriggeragent = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string triggerEventKey = 3;
 * @return {string}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent.prototype.getTriggereventkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent.prototype.setTriggereventkey = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp triggerTime = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent.prototype.getTriggertime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent.prototype.setTriggertime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent.prototype.clearTriggertime = function() {
  return this.setTriggertime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent.prototype.hasTriggertime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp startTime = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent.prototype.getStarttime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent.prototype.setStarttime = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent.prototype.clearStarttime = function() {
  return this.setStarttime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent.prototype.hasStarttime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional StructureModeTraceEventStateChange stateChange = 6;
 * @return {?proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStateChange}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent.prototype.getStatechange = function() {
  return /** @type{?proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStateChange} */ (
    jspb.Message.getWrapperField(this, proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStateChange, 6));
};


/**
 * @param {?proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStateChange|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent.prototype.setStatechange = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent.prototype.clearStatechange = function() {
  return this.setStatechange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent.prototype.hasStatechange = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated StructureModeTraceEventStep steps = 7;
 * @return {!Array<!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStep>}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent.prototype.getStepsList = function() {
  return /** @type{!Array<!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStep>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStep, 7));
};


/**
 * @param {!Array<!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStep>} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent.prototype.setStepsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStep=} opt_value
 * @param {number=} opt_index
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStep}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent.prototype.addSteps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEventStep, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent.prototype.clearStepsList = function() {
  return this.setStepsList([]);
};


/**
 * repeated string scenarioId = 8;
 * @return {!Array<string>}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent.prototype.getScenarioidList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent.prototype.setScenarioidList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent.prototype.addScenarioid = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent.prototype.clearScenarioidList = function() {
  return this.setScenarioidList([]);
};


/**
 * optional string error = 9;
 * @return {string}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string rtsStructureId = 10;
 * @return {string}
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent.prototype.getRtsstructureid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.StructureModeTraceEvent.prototype.setRtsstructureid = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional StructureMode structureMode = 1;
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode}
 */
proto.nest.trait.occupancy.StructureModeTrait.prototype.getStructuremode = function() {
  return /** @type {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.prototype.setStructuremode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Occupancy occupancy = 2;
 * @return {?proto.nest.trait.occupancy.StructureModeTrait.Occupancy}
 */
proto.nest.trait.occupancy.StructureModeTrait.prototype.getOccupancy = function() {
  return /** @type{?proto.nest.trait.occupancy.StructureModeTrait.Occupancy} */ (
    jspb.Message.getWrapperField(this, proto.nest.trait.occupancy.StructureModeTrait.Occupancy, 2));
};


/**
 * @param {?proto.nest.trait.occupancy.StructureModeTrait.Occupancy|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.prototype.setOccupancy = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.prototype.clearOccupancy = function() {
  return this.setOccupancy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.prototype.hasOccupancy = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Allowance allowance = 3;
 * @return {?proto.nest.trait.occupancy.StructureModeTrait.Allowance}
 */
proto.nest.trait.occupancy.StructureModeTrait.prototype.getAllowance = function() {
  return /** @type{?proto.nest.trait.occupancy.StructureModeTrait.Allowance} */ (
    jspb.Message.getWrapperField(this, proto.nest.trait.occupancy.StructureModeTrait.Allowance, 3));
};


/**
 * @param {?proto.nest.trait.occupancy.StructureModeTrait.Allowance|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.prototype.setAllowance = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.prototype.clearAllowance = function() {
  return this.setAllowance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.prototype.hasAllowance = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional StructureModeReason structureModeReason = 4;
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeReason}
 */
proto.nest.trait.occupancy.StructureModeTrait.prototype.getStructuremodereason = function() {
  return /** @type {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeReason} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureModeReason} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.prototype.setStructuremodereason = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional weave.common.ResourceId structureModeSetter = 5;
 * @return {?proto.weave.common.ResourceId}
 */
proto.nest.trait.occupancy.StructureModeTrait.prototype.getStructuremodesetter = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 5));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.prototype.setStructuremodesetter = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.prototype.clearStructuremodesetter = function() {
  return this.setStructuremodesetter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.prototype.hasStructuremodesetter = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp structureModeEffectiveTime = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.nest.trait.occupancy.StructureModeTrait.prototype.getStructuremodeeffectivetime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.prototype.setStructuremodeeffectivetime = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.prototype.clearStructuremodeeffectivetime = function() {
  return this.setStructuremodeeffectivetime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.prototype.hasStructuremodeeffectivetime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional StructureMode activityAgnosticStructureMode = 7;
 * @return {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode}
 */
proto.nest.trait.occupancy.StructureModeTrait.prototype.getActivityagnosticstructuremode = function() {
  return /** @type {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.prototype.setActivityagnosticstructuremode = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional google.protobuf.Timestamp activityAgnosticStructureModeEffectiveTime = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.nest.trait.occupancy.StructureModeTrait.prototype.getActivityagnosticstructuremodeeffectivetime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.prototype.setActivityagnosticstructuremodeeffectivetime = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.prototype.clearActivityagnosticstructuremodeeffectivetime = function() {
  return this.setActivityagnosticstructuremodeeffectivetime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.prototype.hasActivityagnosticstructuremodeeffectivetime = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional PrivateTraitHandlerState privateState = 9;
 * @return {?proto.nest.trait.occupancy.StructureModeTrait.PrivateTraitHandlerState}
 */
proto.nest.trait.occupancy.StructureModeTrait.prototype.getPrivatestate = function() {
  return /** @type{?proto.nest.trait.occupancy.StructureModeTrait.PrivateTraitHandlerState} */ (
    jspb.Message.getWrapperField(this, proto.nest.trait.occupancy.StructureModeTrait.PrivateTraitHandlerState, 9));
};


/**
 * @param {?proto.nest.trait.occupancy.StructureModeTrait.PrivateTraitHandlerState|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeTrait} returns this
*/
proto.nest.trait.occupancy.StructureModeTrait.prototype.setPrivatestate = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeTrait} returns this
 */
proto.nest.trait.occupancy.StructureModeTrait.prototype.clearPrivatestate = function() {
  return this.setPrivatestate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeTrait.prototype.hasPrivatestate = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.repeatedFields_ = [2];



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
proto.nest.trait.occupancy.StructureModeSettingsTrait.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.occupancy.StructureModeSettingsTrait.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.occupancy.StructureModeSettingsTrait} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.toObject = function(includeInstance, msg) {
  var f, obj = {
    enableautosleep: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    sleepscheduleList: jspb.Message.toObjectList(msg.getSleepscheduleList(),
    proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan.toObject, includeInstance),
    deriveddailysleepschedule: (f = msg.getDeriveddailysleepschedule()) && proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan.toObject(includeInstance, f),
    occupancysensorarmtimestamp: (f = msg.getOccupancysensorarmtimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait}
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.occupancy.StructureModeSettingsTrait;
  return proto.nest.trait.occupancy.StructureModeSettingsTrait.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.occupancy.StructureModeSettingsTrait} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait}
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableautosleep(value);
      break;
    case 2:
      var value = new proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan;
      reader.readMessage(value,proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan.deserializeBinaryFromReader);
      msg.addSleepschedule(value);
      break;
    case 3:
      var value = new proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan;
      reader.readMessage(value,proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan.deserializeBinaryFromReader);
      msg.setDeriveddailysleepschedule(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setOccupancysensorarmtimestamp(value);
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
proto.nest.trait.occupancy.StructureModeSettingsTrait.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.occupancy.StructureModeSettingsTrait.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.occupancy.StructureModeSettingsTrait} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnableautosleep();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getSleepscheduleList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan.serializeBinaryToWriter
    );
  }
  f = message.getDeriveddailysleepschedule();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan.serializeBinaryToWriter
    );
  }
  f = message.getOccupancysensorarmtimestamp();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleResponseType = {
  BUILD_UNIFORM_DAILY_SLEEP_SCHEDULE_RESPONSE_TYPE_UNSPECIFIED: 0,
  BUILD_UNIFORM_DAILY_SLEEP_SCHEDULE_RESPONSE_TYPE_SUCCESS: 1,
  BUILD_UNIFORM_DAILY_SLEEP_SCHEDULE_RESPONSE_TYPE_FAIL_ALREADY: 2
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
proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan.toObject = function(includeInstance, msg) {
  var f, obj = {
    starttime: (f = msg.getStarttime()) && weave_common_pb.TimeOfDay.toObject(includeInstance, f),
    endtime: (f = msg.getEndtime()) && weave_common_pb.TimeOfDay.toObject(includeInstance, f)
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
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan}
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan;
  return proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan}
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new weave_common_pb.TimeOfDay;
      reader.readMessage(value,weave_common_pb.TimeOfDay.deserializeBinaryFromReader);
      msg.setStarttime(value);
      break;
    case 2:
      var value = new weave_common_pb.TimeOfDay;
      reader.readMessage(value,weave_common_pb.TimeOfDay.deserializeBinaryFromReader);
      msg.setEndtime(value);
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
proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStarttime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      weave_common_pb.TimeOfDay.serializeBinaryToWriter
    );
  }
  f = message.getEndtime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      weave_common_pb.TimeOfDay.serializeBinaryToWriter
    );
  }
};


/**
 * optional weave.common.TimeOfDay startTime = 1;
 * @return {?proto.weave.common.TimeOfDay}
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan.prototype.getStarttime = function() {
  return /** @type{?proto.weave.common.TimeOfDay} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.TimeOfDay, 1));
};


/**
 * @param {?proto.weave.common.TimeOfDay|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan} returns this
*/
proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan.prototype.setStarttime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan} returns this
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan.prototype.clearStarttime = function() {
  return this.setStarttime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan.prototype.hasStarttime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional weave.common.TimeOfDay endTime = 2;
 * @return {?proto.weave.common.TimeOfDay}
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan.prototype.getEndtime = function() {
  return /** @type{?proto.weave.common.TimeOfDay} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.TimeOfDay, 2));
};


/**
 * @param {?proto.weave.common.TimeOfDay|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan} returns this
*/
proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan.prototype.setEndtime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan} returns this
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan.prototype.clearEndtime = function() {
  return this.setEndtime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan.prototype.hasEndtime = function() {
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
proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan.toObject = function(includeInstance, msg) {
  var f, obj = {
    startday: jspb.Message.getFieldWithDefault(msg, 1, 0),
    starttime: (f = msg.getStarttime()) && weave_common_pb.TimeOfDay.toObject(includeInstance, f),
    endday: jspb.Message.getFieldWithDefault(msg, 3, 0),
    endtime: (f = msg.getEndtime()) && weave_common_pb.TimeOfDay.toObject(includeInstance, f)
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
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan}
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan;
  return proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan}
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.weave.common.DayOfWeek} */ (reader.readEnum());
      msg.setStartday(value);
      break;
    case 2:
      var value = new weave_common_pb.TimeOfDay;
      reader.readMessage(value,weave_common_pb.TimeOfDay.deserializeBinaryFromReader);
      msg.setStarttime(value);
      break;
    case 3:
      var value = /** @type {!proto.weave.common.DayOfWeek} */ (reader.readEnum());
      msg.setEndday(value);
      break;
    case 4:
      var value = new weave_common_pb.TimeOfDay;
      reader.readMessage(value,weave_common_pb.TimeOfDay.deserializeBinaryFromReader);
      msg.setEndtime(value);
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
proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartday();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getStarttime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      weave_common_pb.TimeOfDay.serializeBinaryToWriter
    );
  }
  f = message.getEndday();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getEndtime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      weave_common_pb.TimeOfDay.serializeBinaryToWriter
    );
  }
};


/**
 * optional weave.common.DayOfWeek startDay = 1;
 * @return {!proto.weave.common.DayOfWeek}
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan.prototype.getStartday = function() {
  return /** @type {!proto.weave.common.DayOfWeek} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.weave.common.DayOfWeek} value
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan} returns this
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan.prototype.setStartday = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional weave.common.TimeOfDay startTime = 2;
 * @return {?proto.weave.common.TimeOfDay}
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan.prototype.getStarttime = function() {
  return /** @type{?proto.weave.common.TimeOfDay} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.TimeOfDay, 2));
};


/**
 * @param {?proto.weave.common.TimeOfDay|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan} returns this
*/
proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan.prototype.setStarttime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan} returns this
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan.prototype.clearStarttime = function() {
  return this.setStarttime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan.prototype.hasStarttime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional weave.common.DayOfWeek endDay = 3;
 * @return {!proto.weave.common.DayOfWeek}
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan.prototype.getEndday = function() {
  return /** @type {!proto.weave.common.DayOfWeek} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.weave.common.DayOfWeek} value
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan} returns this
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan.prototype.setEndday = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional weave.common.TimeOfDay endTime = 4;
 * @return {?proto.weave.common.TimeOfDay}
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan.prototype.getEndtime = function() {
  return /** @type{?proto.weave.common.TimeOfDay} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.TimeOfDay, 4));
};


/**
 * @param {?proto.weave.common.TimeOfDay|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan} returns this
*/
proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan.prototype.setEndtime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan} returns this
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan.prototype.clearEndtime = function() {
  return this.setEndtime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan.prototype.hasEndtime = function() {
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
proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    timespan: (f = msg.getTimespan()) && proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan.toObject(includeInstance, f),
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
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleRequest}
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleRequest;
  return proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleRequest}
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan;
      reader.readMessage(value,proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan.deserializeBinaryFromReader);
      msg.setTimespan(value);
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
proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimespan();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan.serializeBinaryToWriter
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
 * optional TimeSpan timeSpan = 1;
 * @return {?proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan}
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleRequest.prototype.getTimespan = function() {
  return /** @type{?proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan} */ (
    jspb.Message.getWrapperField(this, proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan, 1));
};


/**
 * @param {?proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleRequest} returns this
*/
proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleRequest.prototype.setTimespan = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleRequest} returns this
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleRequest.prototype.clearTimespan = function() {
  return this.setTimespan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleRequest.prototype.hasTimespan = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional weave.common.ResourceId userId = 2;
 * @return {?proto.weave.common.ResourceId}
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleRequest.prototype.getUserid = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 2));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleRequest} returns this
*/
proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleRequest.prototype.setUserid = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleRequest} returns this
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleRequest.prototype.clearUserid = function() {
  return this.setUserid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleRequest.prototype.hasUserid = function() {
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
proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    responsetype: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleResponse}
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleResponse;
  return proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleResponse}
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleResponseType} */ (reader.readEnum());
      msg.setResponsetype(value);
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
proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponsetype();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional BuildUniformDailySleepScheduleResponseType responseType = 1;
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleResponseType}
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleResponse.prototype.getResponsetype = function() {
  return /** @type {!proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleResponseType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleResponseType} value
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleResponse} returns this
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.BuildUniformDailySleepScheduleResponse.prototype.setResponsetype = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent.repeatedFields_ = [3,4];



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
proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    enableautosleep: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    priorenableautosleep: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    sleepscheduleList: jspb.Message.toObjectList(msg.getSleepscheduleList(),
    proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan.toObject, includeInstance),
    priorsleepscheduleList: jspb.Message.toObjectList(msg.getPriorsleepscheduleList(),
    proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan.toObject, includeInstance),
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
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent}
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent;
  return proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent}
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableautosleep(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPriorenableautosleep(value);
      break;
    case 3:
      var value = new proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan;
      reader.readMessage(value,proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan.deserializeBinaryFromReader);
      msg.addSleepschedule(value);
      break;
    case 4:
      var value = new proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan;
      reader.readMessage(value,proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan.deserializeBinaryFromReader);
      msg.addPriorsleepschedule(value);
      break;
    case 5:
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
proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnableautosleep();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getPriorenableautosleep();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getSleepscheduleList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan.serializeBinaryToWriter
    );
  }
  f = message.getPriorsleepscheduleList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan.serializeBinaryToWriter
    );
  }
  f = message.getUserid();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      weave_common_pb.ResourceId.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool enableAutoSleep = 1;
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent.prototype.getEnableautosleep = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent} returns this
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent.prototype.setEnableautosleep = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool priorEnableAutoSleep = 2;
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent.prototype.getPriorenableautosleep = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent} returns this
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent.prototype.setPriorenableautosleep = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * repeated DayTimeSpan sleepSchedule = 3;
 * @return {!Array<!proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan>}
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent.prototype.getSleepscheduleList = function() {
  return /** @type{!Array<!proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan, 3));
};


/**
 * @param {!Array<!proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan>} value
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent} returns this
*/
proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent.prototype.setSleepscheduleList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan=} opt_value
 * @param {number=} opt_index
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan}
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent.prototype.addSleepschedule = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent} returns this
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent.prototype.clearSleepscheduleList = function() {
  return this.setSleepscheduleList([]);
};


/**
 * repeated DayTimeSpan priorSleepSchedule = 4;
 * @return {!Array<!proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan>}
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent.prototype.getPriorsleepscheduleList = function() {
  return /** @type{!Array<!proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan, 4));
};


/**
 * @param {!Array<!proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan>} value
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent} returns this
*/
proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent.prototype.setPriorsleepscheduleList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan=} opt_value
 * @param {number=} opt_index
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan}
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent.prototype.addPriorsleepschedule = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent} returns this
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent.prototype.clearPriorsleepscheduleList = function() {
  return this.setPriorsleepscheduleList([]);
};


/**
 * optional weave.common.ResourceId userId = 5;
 * @return {?proto.weave.common.ResourceId}
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent.prototype.getUserid = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 5));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent} returns this
*/
proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent.prototype.setUserid = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent} returns this
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent.prototype.clearUserid = function() {
  return this.setUserid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.SleepScheduleChangeEvent.prototype.hasUserid = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool enableAutoSleep = 1;
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.prototype.getEnableautosleep = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait} returns this
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.prototype.setEnableautosleep = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * repeated DayTimeSpan sleepSchedule = 2;
 * @return {!Array<!proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan>}
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.prototype.getSleepscheduleList = function() {
  return /** @type{!Array<!proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan, 2));
};


/**
 * @param {!Array<!proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan>} value
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait} returns this
*/
proto.nest.trait.occupancy.StructureModeSettingsTrait.prototype.setSleepscheduleList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan=} opt_value
 * @param {number=} opt_index
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan}
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.prototype.addSleepschedule = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.nest.trait.occupancy.StructureModeSettingsTrait.DayTimeSpan, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait} returns this
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.prototype.clearSleepscheduleList = function() {
  return this.setSleepscheduleList([]);
};


/**
 * optional TimeSpan derivedDailySleepSchedule = 3;
 * @return {?proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan}
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.prototype.getDeriveddailysleepschedule = function() {
  return /** @type{?proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan} */ (
    jspb.Message.getWrapperField(this, proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan, 3));
};


/**
 * @param {?proto.nest.trait.occupancy.StructureModeSettingsTrait.TimeSpan|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait} returns this
*/
proto.nest.trait.occupancy.StructureModeSettingsTrait.prototype.setDeriveddailysleepschedule = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait} returns this
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.prototype.clearDeriveddailysleepschedule = function() {
  return this.setDeriveddailysleepschedule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.prototype.hasDeriveddailysleepschedule = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp occupancySensorArmTimestamp = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.prototype.getOccupancysensorarmtimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait} returns this
*/
proto.nest.trait.occupancy.StructureModeSettingsTrait.prototype.setOccupancysensorarmtimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureModeSettingsTrait} returns this
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.prototype.clearOccupancysensorarmtimestamp = function() {
  return this.setOccupancysensorarmtimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeSettingsTrait.prototype.hasOccupancysensorarmtimestamp = function() {
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
proto.nest.trait.occupancy.StructureGeofencingTrait.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.occupancy.StructureGeofencingTrait.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.occupancy.StructureGeofencingTrait} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureGeofencingTrait.toObject = function(includeInstance, msg) {
  var f, obj = {
    geofenceenhancedautoawaystatus: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.nest.trait.occupancy.StructureGeofencingTrait}
 */
proto.nest.trait.occupancy.StructureGeofencingTrait.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.occupancy.StructureGeofencingTrait;
  return proto.nest.trait.occupancy.StructureGeofencingTrait.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.occupancy.StructureGeofencingTrait} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.occupancy.StructureGeofencingTrait}
 */
proto.nest.trait.occupancy.StructureGeofencingTrait.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.nest.trait.occupancy.StructureGeofencingTrait.GeofenceEnhancedAutoAwayStatus} */ (reader.readEnum());
      msg.setGeofenceenhancedautoawaystatus(value);
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
proto.nest.trait.occupancy.StructureGeofencingTrait.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.occupancy.StructureGeofencingTrait.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.occupancy.StructureGeofencingTrait} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureGeofencingTrait.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeofenceenhancedautoawaystatus();
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
proto.nest.trait.occupancy.StructureGeofencingTrait.GeofenceEnhancedAutoAwayStatus = {
  GEOFENCE_ENHANCED_AUTO_AWAY_STATUS_UNSPECIFIED: 0,
  GEOFENCE_ENHANCED_AUTO_AWAY_STATUS_NOT_SET: 1,
  GEOFENCE_ENHANCED_AUTO_AWAY_STATUS_ENABLED: 2,
  GEOFENCE_ENHANCED_AUTO_AWAY_STATUS_DISABLED: 3
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
proto.nest.trait.occupancy.StructureGeofencingTrait.StructureGeofenceStateAssertionEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.occupancy.StructureGeofencingTrait.StructureGeofenceStateAssertionEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.occupancy.StructureGeofencingTrait.StructureGeofenceStateAssertionEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureGeofencingTrait.StructureGeofenceStateAssertionEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    userid: (f = msg.getUserid()) && weave_common_pb.ResourceId.toObject(includeInstance, f),
    rtsfenceid: (f = msg.getRtsfenceid()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    rtsmobiledeviceid: (f = msg.getRtsmobiledeviceid()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
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
 * @return {!proto.nest.trait.occupancy.StructureGeofencingTrait.StructureGeofenceStateAssertionEvent}
 */
proto.nest.trait.occupancy.StructureGeofencingTrait.StructureGeofenceStateAssertionEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.occupancy.StructureGeofencingTrait.StructureGeofenceStateAssertionEvent;
  return proto.nest.trait.occupancy.StructureGeofencingTrait.StructureGeofenceStateAssertionEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.occupancy.StructureGeofencingTrait.StructureGeofenceStateAssertionEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.occupancy.StructureGeofencingTrait.StructureGeofenceStateAssertionEvent}
 */
proto.nest.trait.occupancy.StructureGeofencingTrait.StructureGeofenceStateAssertionEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.nest.trait.occupancy.Geofencing.GeofenceState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = new weave_common_pb.ResourceId;
      reader.readMessage(value,weave_common_pb.ResourceId.deserializeBinaryFromReader);
      msg.setUserid(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setRtsfenceid(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setRtsmobiledeviceid(value);
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
proto.nest.trait.occupancy.StructureGeofencingTrait.StructureGeofenceStateAssertionEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.occupancy.StructureGeofencingTrait.StructureGeofenceStateAssertionEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.occupancy.StructureGeofencingTrait.StructureGeofenceStateAssertionEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureGeofencingTrait.StructureGeofenceStateAssertionEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
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
  f = message.getRtsfenceid();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getRtsmobiledeviceid();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional Geofencing.GeofenceState state = 1;
 * @return {!proto.nest.trait.occupancy.Geofencing.GeofenceState}
 */
proto.nest.trait.occupancy.StructureGeofencingTrait.StructureGeofenceStateAssertionEvent.prototype.getState = function() {
  return /** @type {!proto.nest.trait.occupancy.Geofencing.GeofenceState} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.nest.trait.occupancy.Geofencing.GeofenceState} value
 * @return {!proto.nest.trait.occupancy.StructureGeofencingTrait.StructureGeofenceStateAssertionEvent} returns this
 */
proto.nest.trait.occupancy.StructureGeofencingTrait.StructureGeofenceStateAssertionEvent.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional weave.common.ResourceId userId = 2;
 * @return {?proto.weave.common.ResourceId}
 */
proto.nest.trait.occupancy.StructureGeofencingTrait.StructureGeofenceStateAssertionEvent.prototype.getUserid = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 2));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureGeofencingTrait.StructureGeofenceStateAssertionEvent} returns this
*/
proto.nest.trait.occupancy.StructureGeofencingTrait.StructureGeofenceStateAssertionEvent.prototype.setUserid = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureGeofencingTrait.StructureGeofenceStateAssertionEvent} returns this
 */
proto.nest.trait.occupancy.StructureGeofencingTrait.StructureGeofenceStateAssertionEvent.prototype.clearUserid = function() {
  return this.setUserid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureGeofencingTrait.StructureGeofenceStateAssertionEvent.prototype.hasUserid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.StringValue rtsFenceId = 3;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.nest.trait.occupancy.StructureGeofencingTrait.StructureGeofenceStateAssertionEvent.prototype.getRtsfenceid = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 3));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureGeofencingTrait.StructureGeofenceStateAssertionEvent} returns this
*/
proto.nest.trait.occupancy.StructureGeofencingTrait.StructureGeofenceStateAssertionEvent.prototype.setRtsfenceid = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureGeofencingTrait.StructureGeofenceStateAssertionEvent} returns this
 */
proto.nest.trait.occupancy.StructureGeofencingTrait.StructureGeofenceStateAssertionEvent.prototype.clearRtsfenceid = function() {
  return this.setRtsfenceid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureGeofencingTrait.StructureGeofenceStateAssertionEvent.prototype.hasRtsfenceid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.StringValue rtsMobileDeviceId = 4;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.nest.trait.occupancy.StructureGeofencingTrait.StructureGeofenceStateAssertionEvent.prototype.getRtsmobiledeviceid = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.nest.trait.occupancy.StructureGeofencingTrait.StructureGeofenceStateAssertionEvent} returns this
*/
proto.nest.trait.occupancy.StructureGeofencingTrait.StructureGeofenceStateAssertionEvent.prototype.setRtsmobiledeviceid = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.occupancy.StructureGeofencingTrait.StructureGeofenceStateAssertionEvent} returns this
 */
proto.nest.trait.occupancy.StructureGeofencingTrait.StructureGeofenceStateAssertionEvent.prototype.clearRtsmobiledeviceid = function() {
  return this.setRtsmobiledeviceid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureGeofencingTrait.StructureGeofenceStateAssertionEvent.prototype.hasRtsmobiledeviceid = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional GeofenceEnhancedAutoAwayStatus geofenceEnhancedAutoawayStatus = 1;
 * @return {!proto.nest.trait.occupancy.StructureGeofencingTrait.GeofenceEnhancedAutoAwayStatus}
 */
proto.nest.trait.occupancy.StructureGeofencingTrait.prototype.getGeofenceenhancedautoawaystatus = function() {
  return /** @type {!proto.nest.trait.occupancy.StructureGeofencingTrait.GeofenceEnhancedAutoAwayStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.nest.trait.occupancy.StructureGeofencingTrait.GeofenceEnhancedAutoAwayStatus} value
 * @return {!proto.nest.trait.occupancy.StructureGeofencingTrait} returns this
 */
proto.nest.trait.occupancy.StructureGeofencingTrait.prototype.setGeofenceenhancedautoawaystatus = function(value) {
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
proto.nest.trait.occupancy.Geofencing.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.occupancy.Geofencing.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.occupancy.Geofencing} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.Geofencing.toObject = function(includeInstance, msg) {
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
 * @return {!proto.nest.trait.occupancy.Geofencing}
 */
proto.nest.trait.occupancy.Geofencing.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.occupancy.Geofencing;
  return proto.nest.trait.occupancy.Geofencing.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.occupancy.Geofencing} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.occupancy.Geofencing}
 */
proto.nest.trait.occupancy.Geofencing.deserializeBinaryFromReader = function(msg, reader) {
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
proto.nest.trait.occupancy.Geofencing.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.occupancy.Geofencing.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.occupancy.Geofencing} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.Geofencing.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.nest.trait.occupancy.Geofencing.GeofenceState = {
  GEOFENCE_STATE_UNSPECIFIED: 0,
  GEOFENCE_STATE_INSIDE: 1,
  GEOFENCE_STATE_OUTSIDE: 2,
  GEOFENCE_STATE_UNKNOWN: 3
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
proto.nest.trait.occupancy.OccupancyInputSettingsTrait.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.occupancy.OccupancyInputSettingsTrait.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.occupancy.OccupancyInputSettingsTrait} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.OccupancyInputSettingsTrait.toObject = function(includeInstance, msg) {
  var f, obj = {
    deviceactivityconsidered: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.nest.trait.occupancy.OccupancyInputSettingsTrait}
 */
proto.nest.trait.occupancy.OccupancyInputSettingsTrait.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.occupancy.OccupancyInputSettingsTrait;
  return proto.nest.trait.occupancy.OccupancyInputSettingsTrait.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.occupancy.OccupancyInputSettingsTrait} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.occupancy.OccupancyInputSettingsTrait}
 */
proto.nest.trait.occupancy.OccupancyInputSettingsTrait.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeviceactivityconsidered(value);
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
proto.nest.trait.occupancy.OccupancyInputSettingsTrait.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.occupancy.OccupancyInputSettingsTrait.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.occupancy.OccupancyInputSettingsTrait} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.OccupancyInputSettingsTrait.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeviceactivityconsidered();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool deviceActivityConsidered = 1;
 * @return {boolean}
 */
proto.nest.trait.occupancy.OccupancyInputSettingsTrait.prototype.getDeviceactivityconsidered = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.nest.trait.occupancy.OccupancyInputSettingsTrait} returns this
 */
proto.nest.trait.occupancy.OccupancyInputSettingsTrait.prototype.setDeviceactivityconsidered = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
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
proto.nest.trait.occupancy.StructureModeCapabilitiesTrait.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.occupancy.StructureModeCapabilitiesTrait.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.occupancy.StructureModeCapabilitiesTrait} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeCapabilitiesTrait.toObject = function(includeInstance, msg) {
  var f, obj = {
    sleepstructuremodeenabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.nest.trait.occupancy.StructureModeCapabilitiesTrait}
 */
proto.nest.trait.occupancy.StructureModeCapabilitiesTrait.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.occupancy.StructureModeCapabilitiesTrait;
  return proto.nest.trait.occupancy.StructureModeCapabilitiesTrait.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.occupancy.StructureModeCapabilitiesTrait} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.occupancy.StructureModeCapabilitiesTrait}
 */
proto.nest.trait.occupancy.StructureModeCapabilitiesTrait.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSleepstructuremodeenabled(value);
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
proto.nest.trait.occupancy.StructureModeCapabilitiesTrait.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.occupancy.StructureModeCapabilitiesTrait.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.occupancy.StructureModeCapabilitiesTrait} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.occupancy.StructureModeCapabilitiesTrait.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSleepstructuremodeenabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool sleepStructureModeEnabled = 1;
 * @return {boolean}
 */
proto.nest.trait.occupancy.StructureModeCapabilitiesTrait.prototype.getSleepstructuremodeenabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.nest.trait.occupancy.StructureModeCapabilitiesTrait} returns this
 */
proto.nest.trait.occupancy.StructureModeCapabilitiesTrait.prototype.setSleepstructuremodeenabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


goog.object.extend(exports, proto.nest.trait.occupancy);
