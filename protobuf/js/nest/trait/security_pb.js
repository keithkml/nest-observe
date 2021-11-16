// source: nest/trait/security.proto
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
var nest_trait_detector_pb = require('../../nest/trait/detector_pb.js');
goog.object.extend(proto, nest_trait_detector_pb);
var nest_trait_occupancy_pb = require('../../nest/trait/occupancy_pb.js');
goog.object.extend(proto, nest_trait_occupancy_pb);
var weave_common_pb = require('../../weave/common_pb.js');
goog.object.extend(proto, weave_common_pb);
goog.exportSymbol('proto.nest.trait.security.AlarmSupervisorTrait', null, global);
goog.exportSymbol('proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorDecisionReason', null, global);
goog.exportSymbol('proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorResponseType', null, global);
goog.exportSymbol('proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorState', null, global);
goog.exportSymbol('proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorStateChangeEvent', null, global);
goog.exportSymbol('proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeRequest', null, global);
goog.exportSymbol('proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeResponse', null, global);
goog.exportSymbol('proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmRequest', null, global);
goog.exportSymbol('proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmResponse', null, global);
goog.exportSymbol('proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerRequest', null, global);
goog.exportSymbol('proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerResponse', null, global);
goog.exportSymbol('proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerRequest', null, global);
goog.exportSymbol('proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerResponse', null, global);
goog.exportSymbol('proto.nest.trait.security.DistributedSecurityTrait', null, global);
goog.exportSymbol('proto.nest.trait.security.EnhancedBoltLockSettingsTrait', null, global);
goog.exportSymbol('proto.nest.trait.security.PanicAlarmingTrait', null, global);
goog.exportSymbol('proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingState', null, global);
goog.exportSymbol('proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateChangeEvent', null, global);
goog.exportSymbol('proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateRequest', null, global);
goog.exportSymbol('proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateResponse', null, global);
goog.exportSymbol('proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateResponseType', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityActionOnNFCTokenGlobalSettingsTrait', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityActionOnNFCTokenSettingsTrait', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityActionOnUnlockSettingsTrait', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityActionOnUnlockSettingsTrait.SecurityAction', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityActor', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityActor.SecurityActorMethod', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityActor.SecurityActorStruct', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityAlarmingSettingsTrait', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityAlarmingTrait', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingDecisionEvent', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingDecisionResult', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingSetToIdleEvent', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingState', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeEvent', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeReason', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityArmCommandSettingsTrait', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityArmSettingsTrait', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityArmTrait', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceState', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceStateChangeEvent', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelRequest', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelResponse', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelResponseType', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityArmTrait.SecurityArmRequest', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityArmTrait.SecurityArmResponse', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityArmTrait.SecurityArmResponseType', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityArmTrait.SecurityArmState', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeEvent', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeReason', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityArmTrait.StatusCode', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityDecisionFact', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactType', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityIntrusionSettingsTrait', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityIntrusionSettingsTrait.CustomIntrusionRule', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityIntrusionSettingsTrait.ExpandedSecurityState', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityIntrusionSettingsTrait.IntrusionAction', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityIssuesAndExceptionsTrait', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityBlockingIssuesChangeEvent', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityExceptionsChangeEvent', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNewIssuesByEndOfAllowanceEvent', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNonBlockingIssuesChangeEvent', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityOpenCloseTrait', null, global);
goog.exportSymbol('proto.nest.trait.security.SecurityOpenCloseTrait.SecurityOpenCloseEvent', null, global);
goog.exportSymbol('proto.nest.trait.security.SecuritySettingsTrait', null, global);
goog.exportSymbol('proto.nest.trait.security.SecuritySettingsTrait.LimitedSettingsAction', null, global);
goog.exportSymbol('proto.nest.trait.security.SecuritySettingsTrait.LimitedSettingsChangeRequest', null, global);
goog.exportSymbol('proto.nest.trait.security.SecuritySettingsTrait.ResetIntrusionSettingsByModeRequest', null, global);
goog.exportSymbol('proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsMode', null, global);
goog.exportSymbol('proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeEvent', null, global);
goog.exportSymbol('proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeRequest', null, global);
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
proto.nest.trait.security.SecurityArmTrait = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.security.SecurityArmTrait, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.SecurityArmTrait.displayName = 'proto.nest.trait.security.SecurityArmTrait';
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
proto.nest.trait.security.SecurityArmTrait.SecurityArmRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.nest.trait.security.SecurityArmTrait.SecurityArmRequest.repeatedFields_, null);
};
goog.inherits(proto.nest.trait.security.SecurityArmTrait.SecurityArmRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.SecurityArmTrait.SecurityArmRequest.displayName = 'proto.nest.trait.security.SecurityArmTrait.SecurityArmRequest';
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
proto.nest.trait.security.SecurityArmTrait.SecurityArmResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.security.SecurityArmTrait.SecurityArmResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.SecurityArmTrait.SecurityArmResponse.displayName = 'proto.nest.trait.security.SecurityArmTrait.SecurityArmResponse';
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
proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelRequest.displayName = 'proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelRequest';
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
proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelResponse.displayName = 'proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelResponse';
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
proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeEvent.displayName = 'proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeEvent';
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
proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceStateChangeEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceStateChangeEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceStateChangeEvent.displayName = 'proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceStateChangeEvent';
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
proto.nest.trait.security.AlarmSupervisorTrait = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.security.AlarmSupervisorTrait, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.AlarmSupervisorTrait.displayName = 'proto.nest.trait.security.AlarmSupervisorTrait';
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
proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorStateChangeEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorStateChangeEvent.repeatedFields_, null);
};
goog.inherits(proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorStateChangeEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorStateChangeEvent.displayName = 'proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorStateChangeEvent';
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
proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeResponse.displayName = 'proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeResponse';
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
proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeRequest.displayName = 'proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeRequest';
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
proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerResponse.displayName = 'proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerResponse';
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
proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerRequest.displayName = 'proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerRequest';
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
proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerResponse.displayName = 'proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerResponse';
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
proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerRequest.displayName = 'proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerRequest';
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
proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmResponse.displayName = 'proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmResponse';
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
proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmRequest.displayName = 'proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmRequest';
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
proto.nest.trait.security.SecuritySettingsTrait = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.security.SecuritySettingsTrait, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.SecuritySettingsTrait.displayName = 'proto.nest.trait.security.SecuritySettingsTrait';
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
proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeEvent.displayName = 'proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeEvent';
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
proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeRequest.displayName = 'proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeRequest';
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
proto.nest.trait.security.SecuritySettingsTrait.ResetIntrusionSettingsByModeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.security.SecuritySettingsTrait.ResetIntrusionSettingsByModeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.SecuritySettingsTrait.ResetIntrusionSettingsByModeRequest.displayName = 'proto.nest.trait.security.SecuritySettingsTrait.ResetIntrusionSettingsByModeRequest';
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
proto.nest.trait.security.SecuritySettingsTrait.LimitedSettingsChangeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.security.SecuritySettingsTrait.LimitedSettingsChangeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.SecuritySettingsTrait.LimitedSettingsChangeRequest.displayName = 'proto.nest.trait.security.SecuritySettingsTrait.LimitedSettingsChangeRequest';
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
proto.nest.trait.security.SecurityDecisionFact = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.security.SecurityDecisionFact, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.SecurityDecisionFact.displayName = 'proto.nest.trait.security.SecurityDecisionFact';
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
proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.displayName = 'proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct';
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
proto.nest.trait.security.SecurityAlarmingTrait = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.nest.trait.security.SecurityAlarmingTrait.repeatedFields_, null);
};
goog.inherits(proto.nest.trait.security.SecurityAlarmingTrait, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.SecurityAlarmingTrait.displayName = 'proto.nest.trait.security.SecurityAlarmingTrait';
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
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeEvent.displayName = 'proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeEvent';
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
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingSetToIdleEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingSetToIdleEvent.repeatedFields_, null);
};
goog.inherits(proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingSetToIdleEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingSetToIdleEvent.displayName = 'proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingSetToIdleEvent';
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
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingDecisionEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingDecisionEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingDecisionEvent.displayName = 'proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingDecisionEvent';
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
proto.nest.trait.security.PanicAlarmingTrait = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.security.PanicAlarmingTrait, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.PanicAlarmingTrait.displayName = 'proto.nest.trait.security.PanicAlarmingTrait';
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
proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateRequest.displayName = 'proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateRequest';
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
proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateResponse.displayName = 'proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateResponse';
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
proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateChangeEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateChangeEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateChangeEvent.displayName = 'proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateChangeEvent';
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
proto.nest.trait.security.SecurityActor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.security.SecurityActor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.SecurityActor.displayName = 'proto.nest.trait.security.SecurityActor';
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
proto.nest.trait.security.SecurityActor.SecurityActorStruct = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.security.SecurityActor.SecurityActorStruct, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.SecurityActor.SecurityActorStruct.displayName = 'proto.nest.trait.security.SecurityActor.SecurityActorStruct';
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
proto.nest.trait.security.SecurityIntrusionSettingsTrait = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.security.SecurityIntrusionSettingsTrait, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.SecurityIntrusionSettingsTrait.displayName = 'proto.nest.trait.security.SecurityIntrusionSettingsTrait';
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
proto.nest.trait.security.SecurityIntrusionSettingsTrait.CustomIntrusionRule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.security.SecurityIntrusionSettingsTrait.CustomIntrusionRule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.SecurityIntrusionSettingsTrait.CustomIntrusionRule.displayName = 'proto.nest.trait.security.SecurityIntrusionSettingsTrait.CustomIntrusionRule';
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
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.repeatedFields_, null);
};
goog.inherits(proto.nest.trait.security.SecurityIssuesAndExceptionsTrait, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.displayName = 'proto.nest.trait.security.SecurityIssuesAndExceptionsTrait';
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
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityBlockingIssuesChangeEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityBlockingIssuesChangeEvent.repeatedFields_, null);
};
goog.inherits(proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityBlockingIssuesChangeEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityBlockingIssuesChangeEvent.displayName = 'proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityBlockingIssuesChangeEvent';
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
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNonBlockingIssuesChangeEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNonBlockingIssuesChangeEvent.repeatedFields_, null);
};
goog.inherits(proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNonBlockingIssuesChangeEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNonBlockingIssuesChangeEvent.displayName = 'proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNonBlockingIssuesChangeEvent';
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
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityExceptionsChangeEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityExceptionsChangeEvent.repeatedFields_, null);
};
goog.inherits(proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityExceptionsChangeEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityExceptionsChangeEvent.displayName = 'proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityExceptionsChangeEvent';
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
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNewIssuesByEndOfAllowanceEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNewIssuesByEndOfAllowanceEvent.repeatedFields_, null);
};
goog.inherits(proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNewIssuesByEndOfAllowanceEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNewIssuesByEndOfAllowanceEvent.displayName = 'proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNewIssuesByEndOfAllowanceEvent';
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
proto.nest.trait.security.SecurityActionOnNFCTokenSettingsTrait = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.security.SecurityActionOnNFCTokenSettingsTrait, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.SecurityActionOnNFCTokenSettingsTrait.displayName = 'proto.nest.trait.security.SecurityActionOnNFCTokenSettingsTrait';
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
proto.nest.trait.security.SecurityArmSettingsTrait = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.security.SecurityArmSettingsTrait, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.SecurityArmSettingsTrait.displayName = 'proto.nest.trait.security.SecurityArmSettingsTrait';
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
proto.nest.trait.security.EnhancedBoltLockSettingsTrait = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.nest.trait.security.EnhancedBoltLockSettingsTrait.repeatedFields_, null);
};
goog.inherits(proto.nest.trait.security.EnhancedBoltLockSettingsTrait, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.EnhancedBoltLockSettingsTrait.displayName = 'proto.nest.trait.security.EnhancedBoltLockSettingsTrait';
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
proto.nest.trait.security.SecurityActionOnNFCTokenGlobalSettingsTrait = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.security.SecurityActionOnNFCTokenGlobalSettingsTrait, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.SecurityActionOnNFCTokenGlobalSettingsTrait.displayName = 'proto.nest.trait.security.SecurityActionOnNFCTokenGlobalSettingsTrait';
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
proto.nest.trait.security.SecurityAlarmingSettingsTrait = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.nest.trait.security.SecurityAlarmingSettingsTrait.repeatedFields_, null);
};
goog.inherits(proto.nest.trait.security.SecurityAlarmingSettingsTrait, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.SecurityAlarmingSettingsTrait.displayName = 'proto.nest.trait.security.SecurityAlarmingSettingsTrait';
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
proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule.displayName = 'proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule';
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
proto.nest.trait.security.SecurityArmCommandSettingsTrait = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.security.SecurityArmCommandSettingsTrait, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.SecurityArmCommandSettingsTrait.displayName = 'proto.nest.trait.security.SecurityArmCommandSettingsTrait';
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
proto.nest.trait.security.SecurityOpenCloseTrait = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.security.SecurityOpenCloseTrait, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.SecurityOpenCloseTrait.displayName = 'proto.nest.trait.security.SecurityOpenCloseTrait';
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
proto.nest.trait.security.SecurityOpenCloseTrait.SecurityOpenCloseEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.security.SecurityOpenCloseTrait.SecurityOpenCloseEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.SecurityOpenCloseTrait.SecurityOpenCloseEvent.displayName = 'proto.nest.trait.security.SecurityOpenCloseTrait.SecurityOpenCloseEvent';
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
proto.nest.trait.security.DistributedSecurityTrait = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.security.DistributedSecurityTrait, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.DistributedSecurityTrait.displayName = 'proto.nest.trait.security.DistributedSecurityTrait';
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
proto.nest.trait.security.SecurityActionOnUnlockSettingsTrait = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.security.SecurityActionOnUnlockSettingsTrait, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.security.SecurityActionOnUnlockSettingsTrait.displayName = 'proto.nest.trait.security.SecurityActionOnUnlockSettingsTrait';
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
proto.nest.trait.security.SecurityArmTrait.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.SecurityArmTrait.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.SecurityArmTrait} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityArmTrait.toObject = function(includeInstance, msg) {
  var f, obj = {
    armstate: jspb.Message.getFieldWithDefault(msg, 1, 0),
    securityarmsessionid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    allowancestate: jspb.Message.getFieldWithDefault(msg, 3, 0),
    allowanceexpirationtime: (f = msg.getAllowanceexpirationtime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    exitallowanceduration: (f = msg.getExitallowanceduration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    armactor: (f = msg.getArmactor()) && proto.nest.trait.security.SecurityActor.SecurityActorStruct.toObject(includeInstance, f),
    armtime: (f = msg.getArmtime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.nest.trait.security.SecurityArmTrait}
 */
proto.nest.trait.security.SecurityArmTrait.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.SecurityArmTrait;
  return proto.nest.trait.security.SecurityArmTrait.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.SecurityArmTrait} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.SecurityArmTrait}
 */
proto.nest.trait.security.SecurityArmTrait.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.nest.trait.security.SecurityArmTrait.SecurityArmState} */ (reader.readEnum());
      msg.setArmstate(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSecurityarmsessionid(value);
      break;
    case 3:
      var value = /** @type {!proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceState} */ (reader.readEnum());
      msg.setAllowancestate(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setAllowanceexpirationtime(value);
      break;
    case 5:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setExitallowanceduration(value);
      break;
    case 6:
      var value = new proto.nest.trait.security.SecurityActor.SecurityActorStruct;
      reader.readMessage(value,proto.nest.trait.security.SecurityActor.SecurityActorStruct.deserializeBinaryFromReader);
      msg.setArmactor(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setArmtime(value);
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
proto.nest.trait.security.SecurityArmTrait.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.SecurityArmTrait.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.SecurityArmTrait} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityArmTrait.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArmstate();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getSecurityarmsessionid();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getAllowancestate();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getAllowanceexpirationtime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getExitallowanceduration();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getArmactor();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.nest.trait.security.SecurityActor.SecurityActorStruct.serializeBinaryToWriter
    );
  }
  f = message.getArmtime();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmState = {
  SECURITY_ARM_STATE_UNSPECIFIED: 0,
  SECURITY_ARM_STATE_DISARMED: 1,
  SECURITY_ARM_STATE_SL1: 2,
  SECURITY_ARM_STATE_SL2: 3
};

/**
 * @enum {number}
 */
proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceState = {
  SECURITY_ALLOWANCE_STATE_UNSPECIFIED: 0,
  SECURITY_ALLOWANCE_STATE_OFF: 1,
  SECURITY_ALLOWANCE_STATE_TIMED_ALLOWANCE: 2
};

/**
 * @enum {number}
 */
proto.nest.trait.security.SecurityArmTrait.StatusCode = {
  STATUS_CODE_UNSPECIFIED: 0,
  STATUS_CODE_ALREADY: 1,
  STATUS_CODE_UNACKNOWLEDGED_ISSUES: 2,
  STATUS_CODE_BLOCKING_ISSUES: 3,
  STATUS_CODE_OUT_OF_SCHEDULE: 4,
  STATUS_CODE_UNAUTHORIZED_STATE_CHANGE: 5,
  STATUS_CODE_LOCATION_OUT_OF_SCOPE: 6
};

/**
 * @enum {number}
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmResponseType = {
  SECURITY_ARM_RESPONSE_TYPE_UNSPECIFIED: 0,
  SECURITY_ARM_RESPONSE_TYPE_SUCCESS: 1,
  SECURITY_ARM_RESPONSE_TYPE_FAIL_ALREADY: 2,
  SECURITY_ARM_RESPONSE_TYPE_FAIL_UNACKNOWLEDGED_ISSUES: 3,
  SECURITY_ARM_RESPONSE_TYPE_FAIL_BLOCKING_ISSUES: 4,
  SECURITY_ARM_RESPONSE_TYPE_FAIL_OUT_OF_SCHEDULE: 5,
  SECURITY_ARM_RESPONSE_TYPE_FAIL_UNAUTHORIZED_STATE_CHANGE: 6,
  SECURITY_ARM_RESPONSE_TYPE_FAIL_LOCATION_OUT_OF_SCOPE: 7
};

/**
 * @enum {number}
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelResponseType = {
  SECURITY_ARM_CANCEL_RESPONSE_TYPE_UNSPECIFIED: 0,
  SECURITY_ARM_CANCEL_RESPONSE_TYPE_SUCCESS: 1,
  SECURITY_ARM_CANCEL_RESPONSE_TYPE_FAIL_ALREADY: 2,
  SECURITY_ARM_CANCEL_RESPONSE_TYPE_TOO_LATE: 3,
  SECURITY_ARM_CANCEL_RESPONSE_TYPE_FAIL_UNAUTHORIZED_STATE_CHANGE: 4,
  SECURITY_ARM_CANCEL_RESPONSE_TYPE_FAIL_LOCATION_OUT_OF_SCOPE: 5
};

/**
 * @enum {number}
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeReason = {
  SECURITY_ARM_STATE_CHANGE_REASON_UNSPECIFIED: 0,
  SECURITY_ARM_STATE_CHANGE_REASON_ARM_REQUEST: 1,
  SECURITY_ARM_STATE_CHANGE_REASON_ARM_CANCELLED: 2
};


/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmRequest.repeatedFields_ = [3];



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
proto.nest.trait.security.SecurityArmTrait.SecurityArmRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.SecurityArmTrait.SecurityArmRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.SecurityArmTrait.SecurityArmRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    armstate: jspb.Message.getFieldWithDefault(msg, 1, 0),
    armactor: (f = msg.getArmactor()) && proto.nest.trait.security.SecurityActor.SecurityActorStruct.toObject(includeInstance, f),
    acknowledgedissuessetList: jspb.Message.toObjectList(msg.getAcknowledgedissuessetList(),
    proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.toObject, includeInstance),
    locationscope: (f = msg.getLocationscope()) && weave_common_pb.ResourceId.toObject(includeInstance, f)
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
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityArmRequest}
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.SecurityArmTrait.SecurityArmRequest;
  return proto.nest.trait.security.SecurityArmTrait.SecurityArmRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.SecurityArmTrait.SecurityArmRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityArmRequest}
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.nest.trait.security.SecurityArmTrait.SecurityArmState} */ (reader.readEnum());
      msg.setArmstate(value);
      break;
    case 2:
      var value = new proto.nest.trait.security.SecurityActor.SecurityActorStruct;
      reader.readMessage(value,proto.nest.trait.security.SecurityActor.SecurityActorStruct.deserializeBinaryFromReader);
      msg.setArmactor(value);
      break;
    case 3:
      var value = new proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct;
      reader.readMessage(value,proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.deserializeBinaryFromReader);
      msg.addAcknowledgedissuesset(value);
      break;
    case 4:
      var value = new weave_common_pb.ResourceId;
      reader.readMessage(value,weave_common_pb.ResourceId.deserializeBinaryFromReader);
      msg.setLocationscope(value);
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
proto.nest.trait.security.SecurityArmTrait.SecurityArmRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.SecurityArmTrait.SecurityArmRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.SecurityArmTrait.SecurityArmRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArmstate();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getArmactor();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.nest.trait.security.SecurityActor.SecurityActorStruct.serializeBinaryToWriter
    );
  }
  f = message.getAcknowledgedissuessetList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.serializeBinaryToWriter
    );
  }
  f = message.getLocationscope();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      weave_common_pb.ResourceId.serializeBinaryToWriter
    );
  }
};


/**
 * optional SecurityArmState armState = 1;
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityArmState}
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmRequest.prototype.getArmstate = function() {
  return /** @type {!proto.nest.trait.security.SecurityArmTrait.SecurityArmState} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.nest.trait.security.SecurityArmTrait.SecurityArmState} value
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityArmRequest} returns this
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmRequest.prototype.setArmstate = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional SecurityActor.SecurityActorStruct armActor = 2;
 * @return {?proto.nest.trait.security.SecurityActor.SecurityActorStruct}
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmRequest.prototype.getArmactor = function() {
  return /** @type{?proto.nest.trait.security.SecurityActor.SecurityActorStruct} */ (
    jspb.Message.getWrapperField(this, proto.nest.trait.security.SecurityActor.SecurityActorStruct, 2));
};


/**
 * @param {?proto.nest.trait.security.SecurityActor.SecurityActorStruct|undefined} value
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityArmRequest} returns this
*/
proto.nest.trait.security.SecurityArmTrait.SecurityArmRequest.prototype.setArmactor = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityArmRequest} returns this
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmRequest.prototype.clearArmactor = function() {
  return this.setArmactor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmRequest.prototype.hasArmactor = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated SecurityDecisionFact.SecurityDecisionFactStruct acknowledgedIssuesSet = 3;
 * @return {!Array<!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct>}
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmRequest.prototype.getAcknowledgedissuessetList = function() {
  return /** @type{!Array<!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct, 3));
};


/**
 * @param {!Array<!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct>} value
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityArmRequest} returns this
*/
proto.nest.trait.security.SecurityArmTrait.SecurityArmRequest.prototype.setAcknowledgedissuessetList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct=} opt_value
 * @param {number=} opt_index
 * @return {!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct}
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmRequest.prototype.addAcknowledgedissuesset = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityArmRequest} returns this
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmRequest.prototype.clearAcknowledgedissuessetList = function() {
  return this.setAcknowledgedissuessetList([]);
};


/**
 * optional weave.common.ResourceId locationScope = 4;
 * @return {?proto.weave.common.ResourceId}
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmRequest.prototype.getLocationscope = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 4));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityArmRequest} returns this
*/
proto.nest.trait.security.SecurityArmTrait.SecurityArmRequest.prototype.setLocationscope = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityArmRequest} returns this
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmRequest.prototype.clearLocationscope = function() {
  return this.setLocationscope(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmRequest.prototype.hasLocationscope = function() {
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
proto.nest.trait.security.SecurityArmTrait.SecurityArmResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.SecurityArmTrait.SecurityArmResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.SecurityArmTrait.SecurityArmResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityArmResponse}
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.SecurityArmTrait.SecurityArmResponse;
  return proto.nest.trait.security.SecurityArmTrait.SecurityArmResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.SecurityArmTrait.SecurityArmResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityArmResponse}
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.nest.trait.security.SecurityArmTrait.SecurityArmResponseType} */ (reader.readEnum());
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
proto.nest.trait.security.SecurityArmTrait.SecurityArmResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.SecurityArmTrait.SecurityArmResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.SecurityArmTrait.SecurityArmResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmResponse.serializeBinaryToWriter = function(message, writer) {
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
 * optional SecurityArmResponseType responseType = 1;
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityArmResponseType}
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmResponse.prototype.getResponsetype = function() {
  return /** @type {!proto.nest.trait.security.SecurityArmTrait.SecurityArmResponseType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.nest.trait.security.SecurityArmTrait.SecurityArmResponseType} value
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityArmResponse} returns this
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmResponse.prototype.setResponsetype = function(value) {
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
proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    armactor: (f = msg.getArmactor()) && proto.nest.trait.security.SecurityActor.SecurityActorStruct.toObject(includeInstance, f),
    locationscope: (f = msg.getLocationscope()) && weave_common_pb.ResourceId.toObject(includeInstance, f)
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
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelRequest}
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelRequest;
  return proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelRequest}
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.nest.trait.security.SecurityActor.SecurityActorStruct;
      reader.readMessage(value,proto.nest.trait.security.SecurityActor.SecurityActorStruct.deserializeBinaryFromReader);
      msg.setArmactor(value);
      break;
    case 2:
      var value = new weave_common_pb.ResourceId;
      reader.readMessage(value,weave_common_pb.ResourceId.deserializeBinaryFromReader);
      msg.setLocationscope(value);
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
proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArmactor();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.nest.trait.security.SecurityActor.SecurityActorStruct.serializeBinaryToWriter
    );
  }
  f = message.getLocationscope();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      weave_common_pb.ResourceId.serializeBinaryToWriter
    );
  }
};


/**
 * optional SecurityActor.SecurityActorStruct armActor = 1;
 * @return {?proto.nest.trait.security.SecurityActor.SecurityActorStruct}
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelRequest.prototype.getArmactor = function() {
  return /** @type{?proto.nest.trait.security.SecurityActor.SecurityActorStruct} */ (
    jspb.Message.getWrapperField(this, proto.nest.trait.security.SecurityActor.SecurityActorStruct, 1));
};


/**
 * @param {?proto.nest.trait.security.SecurityActor.SecurityActorStruct|undefined} value
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelRequest} returns this
*/
proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelRequest.prototype.setArmactor = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelRequest} returns this
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelRequest.prototype.clearArmactor = function() {
  return this.setArmactor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelRequest.prototype.hasArmactor = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional weave.common.ResourceId locationScope = 2;
 * @return {?proto.weave.common.ResourceId}
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelRequest.prototype.getLocationscope = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 2));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelRequest} returns this
*/
proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelRequest.prototype.setLocationscope = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelRequest} returns this
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelRequest.prototype.clearLocationscope = function() {
  return this.setLocationscope(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelRequest.prototype.hasLocationscope = function() {
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
proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelResponse}
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelResponse;
  return proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelResponse}
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelResponseType} */ (reader.readEnum());
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
proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelResponse.serializeBinaryToWriter = function(message, writer) {
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
 * optional SecurityArmCancelResponseType responseType = 1;
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelResponseType}
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelResponse.prototype.getResponsetype = function() {
  return /** @type {!proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelResponseType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelResponseType} value
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelResponse} returns this
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmCancelResponse.prototype.setResponsetype = function(value) {
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
proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    armstate: jspb.Message.getFieldWithDefault(msg, 1, 0),
    priorarmstate: jspb.Message.getFieldWithDefault(msg, 2, 0),
    armactor: (f = msg.getArmactor()) && proto.nest.trait.security.SecurityActor.SecurityActorStruct.toObject(includeInstance, f),
    securityarmsessionid: jspb.Message.getFieldWithDefault(msg, 4, 0),
    changereason: jspb.Message.getFieldWithDefault(msg, 5, 0),
    allowancestate: jspb.Message.getFieldWithDefault(msg, 6, 0),
    priorallowancestate: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeEvent}
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeEvent;
  return proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeEvent}
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.nest.trait.security.SecurityArmTrait.SecurityArmState} */ (reader.readEnum());
      msg.setArmstate(value);
      break;
    case 2:
      var value = /** @type {!proto.nest.trait.security.SecurityArmTrait.SecurityArmState} */ (reader.readEnum());
      msg.setPriorarmstate(value);
      break;
    case 3:
      var value = new proto.nest.trait.security.SecurityActor.SecurityActorStruct;
      reader.readMessage(value,proto.nest.trait.security.SecurityActor.SecurityActorStruct.deserializeBinaryFromReader);
      msg.setArmactor(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSecurityarmsessionid(value);
      break;
    case 5:
      var value = /** @type {!proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeReason} */ (reader.readEnum());
      msg.setChangereason(value);
      break;
    case 6:
      var value = /** @type {!proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceState} */ (reader.readEnum());
      msg.setAllowancestate(value);
      break;
    case 7:
      var value = /** @type {!proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceState} */ (reader.readEnum());
      msg.setPriorallowancestate(value);
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
proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArmstate();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPriorarmstate();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getArmactor();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.nest.trait.security.SecurityActor.SecurityActorStruct.serializeBinaryToWriter
    );
  }
  f = message.getSecurityarmsessionid();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getChangereason();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getAllowancestate();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getPriorallowancestate();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
};


/**
 * optional SecurityArmState armState = 1;
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityArmState}
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeEvent.prototype.getArmstate = function() {
  return /** @type {!proto.nest.trait.security.SecurityArmTrait.SecurityArmState} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.nest.trait.security.SecurityArmTrait.SecurityArmState} value
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeEvent} returns this
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeEvent.prototype.setArmstate = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional SecurityArmState priorArmState = 2;
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityArmState}
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeEvent.prototype.getPriorarmstate = function() {
  return /** @type {!proto.nest.trait.security.SecurityArmTrait.SecurityArmState} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.nest.trait.security.SecurityArmTrait.SecurityArmState} value
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeEvent} returns this
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeEvent.prototype.setPriorarmstate = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional SecurityActor.SecurityActorStruct armActor = 3;
 * @return {?proto.nest.trait.security.SecurityActor.SecurityActorStruct}
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeEvent.prototype.getArmactor = function() {
  return /** @type{?proto.nest.trait.security.SecurityActor.SecurityActorStruct} */ (
    jspb.Message.getWrapperField(this, proto.nest.trait.security.SecurityActor.SecurityActorStruct, 3));
};


/**
 * @param {?proto.nest.trait.security.SecurityActor.SecurityActorStruct|undefined} value
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeEvent} returns this
*/
proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeEvent.prototype.setArmactor = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeEvent} returns this
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeEvent.prototype.clearArmactor = function() {
  return this.setArmactor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeEvent.prototype.hasArmactor = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 securityArmSessionId = 4;
 * @return {number}
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeEvent.prototype.getSecurityarmsessionid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeEvent} returns this
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeEvent.prototype.setSecurityarmsessionid = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional SecurityArmStateChangeReason changeReason = 5;
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeReason}
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeEvent.prototype.getChangereason = function() {
  return /** @type {!proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeReason} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeReason} value
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeEvent} returns this
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeEvent.prototype.setChangereason = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional SecurityAllowanceState allowanceState = 6;
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceState}
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeEvent.prototype.getAllowancestate = function() {
  return /** @type {!proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceState} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceState} value
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeEvent} returns this
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeEvent.prototype.setAllowancestate = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional SecurityAllowanceState priorAllowanceState = 7;
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceState}
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeEvent.prototype.getPriorallowancestate = function() {
  return /** @type {!proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceState} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceState} value
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeEvent} returns this
 */
proto.nest.trait.security.SecurityArmTrait.SecurityArmStateChangeEvent.prototype.setPriorallowancestate = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
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
proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceStateChangeEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceStateChangeEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceStateChangeEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceStateChangeEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    allowancestate: jspb.Message.getFieldWithDefault(msg, 1, 0),
    priorallowancestate: jspb.Message.getFieldWithDefault(msg, 2, 0),
    securityarmsessionid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    duration: (f = msg.getDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceStateChangeEvent}
 */
proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceStateChangeEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceStateChangeEvent;
  return proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceStateChangeEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceStateChangeEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceStateChangeEvent}
 */
proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceStateChangeEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceState} */ (reader.readEnum());
      msg.setAllowancestate(value);
      break;
    case 2:
      var value = /** @type {!proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceState} */ (reader.readEnum());
      msg.setPriorallowancestate(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSecurityarmsessionid(value);
      break;
    case 4:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setDuration(value);
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
proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceStateChangeEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceStateChangeEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceStateChangeEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceStateChangeEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAllowancestate();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPriorallowancestate();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getSecurityarmsessionid();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getDuration();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional SecurityAllowanceState allowanceState = 1;
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceState}
 */
proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceStateChangeEvent.prototype.getAllowancestate = function() {
  return /** @type {!proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceState} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceState} value
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceStateChangeEvent} returns this
 */
proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceStateChangeEvent.prototype.setAllowancestate = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional SecurityAllowanceState priorAllowanceState = 2;
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceState}
 */
proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceStateChangeEvent.prototype.getPriorallowancestate = function() {
  return /** @type {!proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceState} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceState} value
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceStateChangeEvent} returns this
 */
proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceStateChangeEvent.prototype.setPriorallowancestate = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional uint32 securityArmSessionId = 3;
 * @return {number}
 */
proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceStateChangeEvent.prototype.getSecurityarmsessionid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceStateChangeEvent} returns this
 */
proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceStateChangeEvent.prototype.setSecurityarmsessionid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional google.protobuf.Duration duration = 4;
 * @return {?proto.google.protobuf.Duration}
 */
proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceStateChangeEvent.prototype.getDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 4));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceStateChangeEvent} returns this
*/
proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceStateChangeEvent.prototype.setDuration = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceStateChangeEvent} returns this
 */
proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceStateChangeEvent.prototype.clearDuration = function() {
  return this.setDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceStateChangeEvent.prototype.hasDuration = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional SecurityArmState armState = 1;
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityArmState}
 */
proto.nest.trait.security.SecurityArmTrait.prototype.getArmstate = function() {
  return /** @type {!proto.nest.trait.security.SecurityArmTrait.SecurityArmState} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.nest.trait.security.SecurityArmTrait.SecurityArmState} value
 * @return {!proto.nest.trait.security.SecurityArmTrait} returns this
 */
proto.nest.trait.security.SecurityArmTrait.prototype.setArmstate = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional uint32 securityArmSessionId = 2;
 * @return {number}
 */
proto.nest.trait.security.SecurityArmTrait.prototype.getSecurityarmsessionid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.nest.trait.security.SecurityArmTrait} returns this
 */
proto.nest.trait.security.SecurityArmTrait.prototype.setSecurityarmsessionid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional SecurityAllowanceState allowanceState = 3;
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceState}
 */
proto.nest.trait.security.SecurityArmTrait.prototype.getAllowancestate = function() {
  return /** @type {!proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceState} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.nest.trait.security.SecurityArmTrait.SecurityAllowanceState} value
 * @return {!proto.nest.trait.security.SecurityArmTrait} returns this
 */
proto.nest.trait.security.SecurityArmTrait.prototype.setAllowancestate = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp allowanceExpirationTime = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.nest.trait.security.SecurityArmTrait.prototype.getAllowanceexpirationtime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.nest.trait.security.SecurityArmTrait} returns this
*/
proto.nest.trait.security.SecurityArmTrait.prototype.setAllowanceexpirationtime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.security.SecurityArmTrait} returns this
 */
proto.nest.trait.security.SecurityArmTrait.prototype.clearAllowanceexpirationtime = function() {
  return this.setAllowanceexpirationtime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.security.SecurityArmTrait.prototype.hasAllowanceexpirationtime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Duration exitAllowanceDuration = 5;
 * @return {?proto.google.protobuf.Duration}
 */
proto.nest.trait.security.SecurityArmTrait.prototype.getExitallowanceduration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 5));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.nest.trait.security.SecurityArmTrait} returns this
*/
proto.nest.trait.security.SecurityArmTrait.prototype.setExitallowanceduration = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.security.SecurityArmTrait} returns this
 */
proto.nest.trait.security.SecurityArmTrait.prototype.clearExitallowanceduration = function() {
  return this.setExitallowanceduration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.security.SecurityArmTrait.prototype.hasExitallowanceduration = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional SecurityActor.SecurityActorStruct armActor = 6;
 * @return {?proto.nest.trait.security.SecurityActor.SecurityActorStruct}
 */
proto.nest.trait.security.SecurityArmTrait.prototype.getArmactor = function() {
  return /** @type{?proto.nest.trait.security.SecurityActor.SecurityActorStruct} */ (
    jspb.Message.getWrapperField(this, proto.nest.trait.security.SecurityActor.SecurityActorStruct, 6));
};


/**
 * @param {?proto.nest.trait.security.SecurityActor.SecurityActorStruct|undefined} value
 * @return {!proto.nest.trait.security.SecurityArmTrait} returns this
*/
proto.nest.trait.security.SecurityArmTrait.prototype.setArmactor = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.security.SecurityArmTrait} returns this
 */
proto.nest.trait.security.SecurityArmTrait.prototype.clearArmactor = function() {
  return this.setArmactor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.security.SecurityArmTrait.prototype.hasArmactor = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp armTime = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.nest.trait.security.SecurityArmTrait.prototype.getArmtime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.nest.trait.security.SecurityArmTrait} returns this
*/
proto.nest.trait.security.SecurityArmTrait.prototype.setArmtime = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.security.SecurityArmTrait} returns this
 */
proto.nest.trait.security.SecurityArmTrait.prototype.clearArmtime = function() {
  return this.setArmtime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.security.SecurityArmTrait.prototype.hasArmtime = function() {
  return jspb.Message.getField(this, 7) != null;
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
proto.nest.trait.security.AlarmSupervisorTrait.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.AlarmSupervisorTrait.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.AlarmSupervisorTrait} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.AlarmSupervisorTrait.toObject = function(includeInstance, msg) {
  var f, obj = {
    alarmsupervisorstate: jspb.Message.getFieldWithDefault(msg, 1, 0),
    alarmingstatetime: (f = msg.getAlarmingstatetime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    alarmacknowledegeactor: (f = msg.getAlarmacknowledegeactor()) && proto.nest.trait.security.SecurityActor.SecurityActorStruct.toObject(includeInstance, f)
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
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait}
 */
proto.nest.trait.security.AlarmSupervisorTrait.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.AlarmSupervisorTrait;
  return proto.nest.trait.security.AlarmSupervisorTrait.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.AlarmSupervisorTrait} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait}
 */
proto.nest.trait.security.AlarmSupervisorTrait.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorState} */ (reader.readEnum());
      msg.setAlarmsupervisorstate(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setAlarmingstatetime(value);
      break;
    case 3:
      var value = new proto.nest.trait.security.SecurityActor.SecurityActorStruct;
      reader.readMessage(value,proto.nest.trait.security.SecurityActor.SecurityActorStruct.deserializeBinaryFromReader);
      msg.setAlarmacknowledegeactor(value);
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
proto.nest.trait.security.AlarmSupervisorTrait.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.AlarmSupervisorTrait.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.AlarmSupervisorTrait} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.AlarmSupervisorTrait.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAlarmsupervisorstate();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getAlarmingstatetime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getAlarmacknowledegeactor();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.nest.trait.security.SecurityActor.SecurityActorStruct.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorState = {
  ALARM_SUPERVISOR_STATE_UNSPECIFIED: 0,
  ALARM_SUPERVISOR_STATE_IDLE: 1,
  ALARM_SUPERVISOR_STATE_EVALUATING: 2,
  ALARM_SUPERVISOR_STATE_SILENCED: 3,
  ALARM_SUPERVISOR_STATE_ALARMING: 4
};

/**
 * @enum {number}
 */
proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorDecisionReason = {
  ALARM_SUPERVISOR_DECISION_REASON_UNSPECIFIED: 0,
  ALARM_SUPERVISOR_DECISION_REASON_SMASH_AND_GRAB: 1,
  ALARM_SUPERVISOR_DECISION_REASON_USER_SILENCING: 2,
  ALARM_SUPERVISOR_DECISION_REASON_DEVICE_ALARMING_STATE_CHANGE: 3
};

/**
 * @enum {number}
 */
proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorResponseType = {
  ALARM_SUPERVISOR_RESPONSE_TYPE_UNSPECIFIED: 0,
  ALARM_SUPERVISOR_RESPONSE_TYPE_SUCCESS: 1,
  ALARM_SUPERVISOR_RESPONSE_TYPE_FAIL_ALREADY: 2,
  ALARM_SUPERVISOR_RESPONSE_TYPE_FAIL_INTERNAL_ISSUES: 3,
  ALARM_SUPERVISOR_RESPONSE_TYPE_UNAUTHORIZED_STATE_CHANGE: 4
};


/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorStateChangeEvent.repeatedFields_ = [3];



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
proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorStateChangeEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorStateChangeEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorStateChangeEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorStateChangeEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    prioralarmingstate: jspb.Message.getFieldWithDefault(msg, 1, 0),
    alarmingstate: jspb.Message.getFieldWithDefault(msg, 2, 0),
    devicealarmreasonList: jspb.Message.toObjectList(msg.getDevicealarmreasonList(),
    proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.toObject, includeInstance),
    alarmsupervisorreason: jspb.Message.getFieldWithDefault(msg, 4, 0),
    triggeringactor: (f = msg.getTriggeringactor()) && proto.nest.trait.security.SecurityActor.SecurityActorStruct.toObject(includeInstance, f)
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
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorStateChangeEvent}
 */
proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorStateChangeEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorStateChangeEvent;
  return proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorStateChangeEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorStateChangeEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorStateChangeEvent}
 */
proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorStateChangeEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorState} */ (reader.readEnum());
      msg.setPrioralarmingstate(value);
      break;
    case 2:
      var value = /** @type {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorState} */ (reader.readEnum());
      msg.setAlarmingstate(value);
      break;
    case 3:
      var value = new proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct;
      reader.readMessage(value,proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.deserializeBinaryFromReader);
      msg.addDevicealarmreason(value);
      break;
    case 4:
      var value = /** @type {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorDecisionReason} */ (reader.readEnum());
      msg.setAlarmsupervisorreason(value);
      break;
    case 5:
      var value = new proto.nest.trait.security.SecurityActor.SecurityActorStruct;
      reader.readMessage(value,proto.nest.trait.security.SecurityActor.SecurityActorStruct.deserializeBinaryFromReader);
      msg.setTriggeringactor(value);
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
proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorStateChangeEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorStateChangeEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorStateChangeEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorStateChangeEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrioralarmingstate();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getAlarmingstate();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getDevicealarmreasonList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.serializeBinaryToWriter
    );
  }
  f = message.getAlarmsupervisorreason();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getTriggeringactor();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.nest.trait.security.SecurityActor.SecurityActorStruct.serializeBinaryToWriter
    );
  }
};


/**
 * optional AlarmSupervisorState priorAlarmingState = 1;
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorState}
 */
proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorStateChangeEvent.prototype.getPrioralarmingstate = function() {
  return /** @type {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorState} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorState} value
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorStateChangeEvent} returns this
 */
proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorStateChangeEvent.prototype.setPrioralarmingstate = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional AlarmSupervisorState alarmingState = 2;
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorState}
 */
proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorStateChangeEvent.prototype.getAlarmingstate = function() {
  return /** @type {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorState} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorState} value
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorStateChangeEvent} returns this
 */
proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorStateChangeEvent.prototype.setAlarmingstate = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated SecurityDecisionFact.SecurityDecisionFactStruct deviceAlarmReason = 3;
 * @return {!Array<!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct>}
 */
proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorStateChangeEvent.prototype.getDevicealarmreasonList = function() {
  return /** @type{!Array<!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct, 3));
};


/**
 * @param {!Array<!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct>} value
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorStateChangeEvent} returns this
*/
proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorStateChangeEvent.prototype.setDevicealarmreasonList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct=} opt_value
 * @param {number=} opt_index
 * @return {!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct}
 */
proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorStateChangeEvent.prototype.addDevicealarmreason = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorStateChangeEvent} returns this
 */
proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorStateChangeEvent.prototype.clearDevicealarmreasonList = function() {
  return this.setDevicealarmreasonList([]);
};


/**
 * optional AlarmSupervisorDecisionReason alarmSupervisorReason = 4;
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorDecisionReason}
 */
proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorStateChangeEvent.prototype.getAlarmsupervisorreason = function() {
  return /** @type {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorDecisionReason} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorDecisionReason} value
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorStateChangeEvent} returns this
 */
proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorStateChangeEvent.prototype.setAlarmsupervisorreason = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional SecurityActor.SecurityActorStruct triggeringActor = 5;
 * @return {?proto.nest.trait.security.SecurityActor.SecurityActorStruct}
 */
proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorStateChangeEvent.prototype.getTriggeringactor = function() {
  return /** @type{?proto.nest.trait.security.SecurityActor.SecurityActorStruct} */ (
    jspb.Message.getWrapperField(this, proto.nest.trait.security.SecurityActor.SecurityActorStruct, 5));
};


/**
 * @param {?proto.nest.trait.security.SecurityActor.SecurityActorStruct|undefined} value
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorStateChangeEvent} returns this
*/
proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorStateChangeEvent.prototype.setTriggeringactor = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorStateChangeEvent} returns this
 */
proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorStateChangeEvent.prototype.clearTriggeringactor = function() {
  return this.setTriggeringactor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorStateChangeEvent.prototype.hasTriggeringactor = function() {
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
proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeResponse}
 */
proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeResponse;
  return proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeResponse}
 */
proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorResponseType} */ (reader.readEnum());
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
proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeResponse.serializeBinaryToWriter = function(message, writer) {
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
 * optional AlarmSupervisorResponseType responseType = 1;
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorResponseType}
 */
proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeResponse.prototype.getResponsetype = function() {
  return /** @type {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorResponseType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorResponseType} value
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeResponse} returns this
 */
proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeResponse.prototype.setResponsetype = function(value) {
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
proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    ackactor: (f = msg.getAckactor()) && proto.nest.trait.security.SecurityActor.SecurityActorStruct.toObject(includeInstance, f)
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
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeRequest}
 */
proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeRequest;
  return proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeRequest}
 */
proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.nest.trait.security.SecurityActor.SecurityActorStruct;
      reader.readMessage(value,proto.nest.trait.security.SecurityActor.SecurityActorStruct.deserializeBinaryFromReader);
      msg.setAckactor(value);
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
proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAckactor();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.nest.trait.security.SecurityActor.SecurityActorStruct.serializeBinaryToWriter
    );
  }
};


/**
 * optional SecurityActor.SecurityActorStruct ackActor = 1;
 * @return {?proto.nest.trait.security.SecurityActor.SecurityActorStruct}
 */
proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeRequest.prototype.getAckactor = function() {
  return /** @type{?proto.nest.trait.security.SecurityActor.SecurityActorStruct} */ (
    jspb.Message.getWrapperField(this, proto.nest.trait.security.SecurityActor.SecurityActorStruct, 1));
};


/**
 * @param {?proto.nest.trait.security.SecurityActor.SecurityActorStruct|undefined} value
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeRequest} returns this
*/
proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeRequest.prototype.setAckactor = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeRequest} returns this
 */
proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeRequest.prototype.clearAckactor = function() {
  return this.setAckactor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.security.AlarmSupervisorTrait.AlarmingAcknowledgeRequest.prototype.hasAckactor = function() {
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
proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerResponse}
 */
proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerResponse;
  return proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerResponse}
 */
proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorResponseType} */ (reader.readEnum());
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
proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerResponse.serializeBinaryToWriter = function(message, writer) {
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
 * optional AlarmSupervisorResponseType responseType = 1;
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorResponseType}
 */
proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerResponse.prototype.getResponsetype = function() {
  return /** @type {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorResponseType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorResponseType} value
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerResponse} returns this
 */
proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerResponse.prototype.setResponsetype = function(value) {
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
proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    reason: (f = msg.getReason()) && proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.toObject(includeInstance, f)
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
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerRequest}
 */
proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerRequest;
  return proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerRequest}
 */
proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct;
      reader.readMessage(value,proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.deserializeBinaryFromReader);
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
proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReason();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.serializeBinaryToWriter
    );
  }
};


/**
 * optional SecurityDecisionFact.SecurityDecisionFactStruct reason = 1;
 * @return {?proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct}
 */
proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerRequest.prototype.getReason = function() {
  return /** @type{?proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct} */ (
    jspb.Message.getWrapperField(this, proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct, 1));
};


/**
 * @param {?proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct|undefined} value
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerRequest} returns this
*/
proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerRequest.prototype.setReason = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerRequest} returns this
 */
proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerRequest.prototype.clearReason = function() {
  return this.setReason(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.security.AlarmSupervisorTrait.SetPrealarmTimerRequest.prototype.hasReason = function() {
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
proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerResponse}
 */
proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerResponse;
  return proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerResponse}
 */
proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorResponseType} */ (reader.readEnum());
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
proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerResponse.serializeBinaryToWriter = function(message, writer) {
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
 * optional AlarmSupervisorResponseType responseType = 1;
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorResponseType}
 */
proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerResponse.prototype.getResponsetype = function() {
  return /** @type {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorResponseType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorResponseType} value
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerResponse} returns this
 */
proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerResponse.prototype.setResponsetype = function(value) {
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
proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    reason: (f = msg.getReason()) && proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.toObject(includeInstance, f)
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
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerRequest}
 */
proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerRequest;
  return proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerRequest}
 */
proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct;
      reader.readMessage(value,proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.deserializeBinaryFromReader);
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
proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReason();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.serializeBinaryToWriter
    );
  }
};


/**
 * optional SecurityDecisionFact.SecurityDecisionFactStruct reason = 1;
 * @return {?proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct}
 */
proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerRequest.prototype.getReason = function() {
  return /** @type{?proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct} */ (
    jspb.Message.getWrapperField(this, proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct, 1));
};


/**
 * @param {?proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct|undefined} value
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerRequest} returns this
*/
proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerRequest.prototype.setReason = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerRequest} returns this
 */
proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerRequest.prototype.clearReason = function() {
  return this.setReason(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.security.AlarmSupervisorTrait.RemovePrealarmTimerRequest.prototype.hasReason = function() {
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
proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmResponse}
 */
proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmResponse;
  return proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmResponse}
 */
proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorResponseType} */ (reader.readEnum());
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
proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmResponse.serializeBinaryToWriter = function(message, writer) {
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
 * optional AlarmSupervisorResponseType responseType = 1;
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorResponseType}
 */
proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmResponse.prototype.getResponsetype = function() {
  return /** @type {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorResponseType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorResponseType} value
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmResponse} returns this
 */
proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmResponse.prototype.setResponsetype = function(value) {
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
proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    reason: (f = msg.getReason()) && proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.toObject(includeInstance, f)
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
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmRequest}
 */
proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmRequest;
  return proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmRequest}
 */
proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct;
      reader.readMessage(value,proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.deserializeBinaryFromReader);
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
proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReason();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.serializeBinaryToWriter
    );
  }
};


/**
 * optional SecurityDecisionFact.SecurityDecisionFactStruct reason = 1;
 * @return {?proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct}
 */
proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmRequest.prototype.getReason = function() {
  return /** @type{?proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct} */ (
    jspb.Message.getWrapperField(this, proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct, 1));
};


/**
 * @param {?proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct|undefined} value
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmRequest} returns this
*/
proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmRequest.prototype.setReason = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmRequest} returns this
 */
proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmRequest.prototype.clearReason = function() {
  return this.setReason(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.security.AlarmSupervisorTrait.RaiseAlarmRequest.prototype.hasReason = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AlarmSupervisorState alarmSupervisorState = 1;
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorState}
 */
proto.nest.trait.security.AlarmSupervisorTrait.prototype.getAlarmsupervisorstate = function() {
  return /** @type {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorState} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.nest.trait.security.AlarmSupervisorTrait.AlarmSupervisorState} value
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait} returns this
 */
proto.nest.trait.security.AlarmSupervisorTrait.prototype.setAlarmsupervisorstate = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp alarmingStateTime = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.nest.trait.security.AlarmSupervisorTrait.prototype.getAlarmingstatetime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait} returns this
*/
proto.nest.trait.security.AlarmSupervisorTrait.prototype.setAlarmingstatetime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait} returns this
 */
proto.nest.trait.security.AlarmSupervisorTrait.prototype.clearAlarmingstatetime = function() {
  return this.setAlarmingstatetime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.security.AlarmSupervisorTrait.prototype.hasAlarmingstatetime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SecurityActor.SecurityActorStruct alarmAcknowledegeActor = 3;
 * @return {?proto.nest.trait.security.SecurityActor.SecurityActorStruct}
 */
proto.nest.trait.security.AlarmSupervisorTrait.prototype.getAlarmacknowledegeactor = function() {
  return /** @type{?proto.nest.trait.security.SecurityActor.SecurityActorStruct} */ (
    jspb.Message.getWrapperField(this, proto.nest.trait.security.SecurityActor.SecurityActorStruct, 3));
};


/**
 * @param {?proto.nest.trait.security.SecurityActor.SecurityActorStruct|undefined} value
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait} returns this
*/
proto.nest.trait.security.AlarmSupervisorTrait.prototype.setAlarmacknowledegeactor = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.security.AlarmSupervisorTrait} returns this
 */
proto.nest.trait.security.AlarmSupervisorTrait.prototype.clearAlarmacknowledegeactor = function() {
  return this.setAlarmacknowledegeactor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.security.AlarmSupervisorTrait.prototype.hasAlarmacknowledegeactor = function() {
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
proto.nest.trait.security.SecuritySettingsTrait.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.SecuritySettingsTrait.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.SecuritySettingsTrait} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecuritySettingsTrait.toObject = function(includeInstance, msg) {
  var f, obj = {
    bypassfeatureenabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    petrejectionenabled: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    motiondetectionenabled: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    securitysettingsmode: jspb.Message.getFieldWithDefault(msg, 4, 0),
    automaticallyarmonschedulednight: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
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
 * @return {!proto.nest.trait.security.SecuritySettingsTrait}
 */
proto.nest.trait.security.SecuritySettingsTrait.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.SecuritySettingsTrait;
  return proto.nest.trait.security.SecuritySettingsTrait.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.SecuritySettingsTrait} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.SecuritySettingsTrait}
 */
proto.nest.trait.security.SecuritySettingsTrait.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBypassfeatureenabled(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPetrejectionenabled(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMotiondetectionenabled(value);
      break;
    case 4:
      var value = /** @type {!proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsMode} */ (reader.readEnum());
      msg.setSecuritysettingsmode(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAutomaticallyarmonschedulednight(value);
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
proto.nest.trait.security.SecuritySettingsTrait.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.SecuritySettingsTrait.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.SecuritySettingsTrait} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecuritySettingsTrait.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBypassfeatureenabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getPetrejectionenabled();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getMotiondetectionenabled();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getSecuritysettingsmode();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getAutomaticallyarmonschedulednight();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsMode = {
  SECURITY_SETTINGS_MODE_UNSPECIFIED: 0,
  SECURITY_SETTINGS_MODE_NEST: 1,
  SECURITY_SETTINGS_MODE_UL_CERT: 2,
  SECURITY_SETTINGS_MODE_EU_CERT: 3,
  SECURITY_SETTINGS_MODE_UK_CERT: 4
};

/**
 * @enum {number}
 */
proto.nest.trait.security.SecuritySettingsTrait.LimitedSettingsAction = {
  LIMITED_SETTINGS_ACTION_UNSPECIFIED: 0,
  LIMITED_SETTINGS_ACTION_ON: 1,
  LIMITED_SETTINGS_ACTION_OFF: 2
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
proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    previoussecuritysettingsmode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    newsecuritysettingsmode: jspb.Message.getFieldWithDefault(msg, 2, 0),
    settodefaults: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeEvent}
 */
proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeEvent;
  return proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeEvent}
 */
proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsMode} */ (reader.readEnum());
      msg.setPrevioussecuritysettingsmode(value);
      break;
    case 2:
      var value = /** @type {!proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsMode} */ (reader.readEnum());
      msg.setNewsecuritysettingsmode(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSettodefaults(value);
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
proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrevioussecuritysettingsmode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getNewsecuritysettingsmode();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getSettodefaults();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional SecuritySettingsMode previousSecuritySettingsMode = 1;
 * @return {!proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsMode}
 */
proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeEvent.prototype.getPrevioussecuritysettingsmode = function() {
  return /** @type {!proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsMode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsMode} value
 * @return {!proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeEvent} returns this
 */
proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeEvent.prototype.setPrevioussecuritysettingsmode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional SecuritySettingsMode newSecuritySettingsMode = 2;
 * @return {!proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsMode}
 */
proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeEvent.prototype.getNewsecuritysettingsmode = function() {
  return /** @type {!proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsMode} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsMode} value
 * @return {!proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeEvent} returns this
 */
proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeEvent.prototype.setNewsecuritysettingsmode = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional bool setToDefaults = 3;
 * @return {boolean}
 */
proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeEvent.prototype.getSettodefaults = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeEvent} returns this
 */
proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeEvent.prototype.setSettodefaults = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
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
proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    securitysettingsmode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    settodefaults: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeRequest}
 */
proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeRequest;
  return proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeRequest}
 */
proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsMode} */ (reader.readEnum());
      msg.setSecuritysettingsmode(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSettodefaults(value);
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
proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSecuritysettingsmode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getSettodefaults();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional SecuritySettingsMode securitySettingsMode = 1;
 * @return {!proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsMode}
 */
proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeRequest.prototype.getSecuritysettingsmode = function() {
  return /** @type {!proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsMode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsMode} value
 * @return {!proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeRequest} returns this
 */
proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeRequest.prototype.setSecuritysettingsmode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bool setToDefaults = 2;
 * @return {boolean}
 */
proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeRequest.prototype.getSettodefaults = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeRequest} returns this
 */
proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsModeChangeRequest.prototype.setSettodefaults = function(value) {
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
proto.nest.trait.security.SecuritySettingsTrait.ResetIntrusionSettingsByModeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.SecuritySettingsTrait.ResetIntrusionSettingsByModeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.SecuritySettingsTrait.ResetIntrusionSettingsByModeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecuritySettingsTrait.ResetIntrusionSettingsByModeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.nest.trait.security.SecuritySettingsTrait.ResetIntrusionSettingsByModeRequest}
 */
proto.nest.trait.security.SecuritySettingsTrait.ResetIntrusionSettingsByModeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.SecuritySettingsTrait.ResetIntrusionSettingsByModeRequest;
  return proto.nest.trait.security.SecuritySettingsTrait.ResetIntrusionSettingsByModeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.SecuritySettingsTrait.ResetIntrusionSettingsByModeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.SecuritySettingsTrait.ResetIntrusionSettingsByModeRequest}
 */
proto.nest.trait.security.SecuritySettingsTrait.ResetIntrusionSettingsByModeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.nest.trait.security.SecurityIntrusionSettingsTrait.ExpandedSecurityState} */ (reader.readEnum());
      msg.setState(value);
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
proto.nest.trait.security.SecuritySettingsTrait.ResetIntrusionSettingsByModeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.SecuritySettingsTrait.ResetIntrusionSettingsByModeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.SecuritySettingsTrait.ResetIntrusionSettingsByModeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecuritySettingsTrait.ResetIntrusionSettingsByModeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional SecurityIntrusionSettingsTrait.ExpandedSecurityState state = 1;
 * @return {!proto.nest.trait.security.SecurityIntrusionSettingsTrait.ExpandedSecurityState}
 */
proto.nest.trait.security.SecuritySettingsTrait.ResetIntrusionSettingsByModeRequest.prototype.getState = function() {
  return /** @type {!proto.nest.trait.security.SecurityIntrusionSettingsTrait.ExpandedSecurityState} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.nest.trait.security.SecurityIntrusionSettingsTrait.ExpandedSecurityState} value
 * @return {!proto.nest.trait.security.SecuritySettingsTrait.ResetIntrusionSettingsByModeRequest} returns this
 */
proto.nest.trait.security.SecuritySettingsTrait.ResetIntrusionSettingsByModeRequest.prototype.setState = function(value) {
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
proto.nest.trait.security.SecuritySettingsTrait.LimitedSettingsChangeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.SecuritySettingsTrait.LimitedSettingsChangeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.SecuritySettingsTrait.LimitedSettingsChangeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecuritySettingsTrait.LimitedSettingsChangeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    action: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.nest.trait.security.SecuritySettingsTrait.LimitedSettingsChangeRequest}
 */
proto.nest.trait.security.SecuritySettingsTrait.LimitedSettingsChangeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.SecuritySettingsTrait.LimitedSettingsChangeRequest;
  return proto.nest.trait.security.SecuritySettingsTrait.LimitedSettingsChangeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.SecuritySettingsTrait.LimitedSettingsChangeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.SecuritySettingsTrait.LimitedSettingsChangeRequest}
 */
proto.nest.trait.security.SecuritySettingsTrait.LimitedSettingsChangeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.nest.trait.security.SecuritySettingsTrait.LimitedSettingsAction} */ (reader.readEnum());
      msg.setAction(value);
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
proto.nest.trait.security.SecuritySettingsTrait.LimitedSettingsChangeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.SecuritySettingsTrait.LimitedSettingsChangeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.SecuritySettingsTrait.LimitedSettingsChangeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecuritySettingsTrait.LimitedSettingsChangeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional LimitedSettingsAction action = 1;
 * @return {!proto.nest.trait.security.SecuritySettingsTrait.LimitedSettingsAction}
 */
proto.nest.trait.security.SecuritySettingsTrait.LimitedSettingsChangeRequest.prototype.getAction = function() {
  return /** @type {!proto.nest.trait.security.SecuritySettingsTrait.LimitedSettingsAction} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.nest.trait.security.SecuritySettingsTrait.LimitedSettingsAction} value
 * @return {!proto.nest.trait.security.SecuritySettingsTrait.LimitedSettingsChangeRequest} returns this
 */
proto.nest.trait.security.SecuritySettingsTrait.LimitedSettingsChangeRequest.prototype.setAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bool bypassFeatureEnabled = 1;
 * @return {boolean}
 */
proto.nest.trait.security.SecuritySettingsTrait.prototype.getBypassfeatureenabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.nest.trait.security.SecuritySettingsTrait} returns this
 */
proto.nest.trait.security.SecuritySettingsTrait.prototype.setBypassfeatureenabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool petRejectionEnabled = 2;
 * @return {boolean}
 */
proto.nest.trait.security.SecuritySettingsTrait.prototype.getPetrejectionenabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.nest.trait.security.SecuritySettingsTrait} returns this
 */
proto.nest.trait.security.SecuritySettingsTrait.prototype.setPetrejectionenabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool motionDetectionEnabled = 3;
 * @return {boolean}
 */
proto.nest.trait.security.SecuritySettingsTrait.prototype.getMotiondetectionenabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.nest.trait.security.SecuritySettingsTrait} returns this
 */
proto.nest.trait.security.SecuritySettingsTrait.prototype.setMotiondetectionenabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional SecuritySettingsMode securitySettingsMode = 4;
 * @return {!proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsMode}
 */
proto.nest.trait.security.SecuritySettingsTrait.prototype.getSecuritysettingsmode = function() {
  return /** @type {!proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsMode} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.nest.trait.security.SecuritySettingsTrait.SecuritySettingsMode} value
 * @return {!proto.nest.trait.security.SecuritySettingsTrait} returns this
 */
proto.nest.trait.security.SecuritySettingsTrait.prototype.setSecuritysettingsmode = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional bool automaticallyArmOnScheduledNight = 5;
 * @return {boolean}
 */
proto.nest.trait.security.SecuritySettingsTrait.prototype.getAutomaticallyarmonschedulednight = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.nest.trait.security.SecuritySettingsTrait} returns this
 */
proto.nest.trait.security.SecuritySettingsTrait.prototype.setAutomaticallyarmonschedulednight = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
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
proto.nest.trait.security.SecurityDecisionFact.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.SecurityDecisionFact.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.SecurityDecisionFact} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityDecisionFact.toObject = function(includeInstance, msg) {
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
 * @return {!proto.nest.trait.security.SecurityDecisionFact}
 */
proto.nest.trait.security.SecurityDecisionFact.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.SecurityDecisionFact;
  return proto.nest.trait.security.SecurityDecisionFact.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.SecurityDecisionFact} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.SecurityDecisionFact}
 */
proto.nest.trait.security.SecurityDecisionFact.deserializeBinaryFromReader = function(msg, reader) {
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
proto.nest.trait.security.SecurityDecisionFact.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.SecurityDecisionFact.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.SecurityDecisionFact} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityDecisionFact.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactType = {
  SECURITY_DECISION_FACT_TYPE_UNSPECIFIED: 0,
  SECURITY_DECISION_FACT_TYPE_OPEN_DOOR: 1,
  SECURITY_DECISION_FACT_TYPE_OPEN_DOOR_BYPASS: 2,
  SECURITY_DECISION_FACT_TYPE_CLOSE_DOOR: 3,
  SECURITY_DECISION_FACT_TYPE_OPEN_WINDOW: 4,
  SECURITY_DECISION_FACT_TYPE_OPEN_WINDOW_BYPASS: 5,
  SECURITY_DECISION_FACT_TYPE_CLOSE_WINDOW: 6,
  SECURITY_DECISION_FACT_TYPE_REMOTE_SENSOR_AMBIENT_MOTION: 7,
  SECURITY_DECISION_FACT_TYPE_HUB_AMBIENT_MOTION: 8,
  SECURITY_DECISION_FACT_TYPE_HUB_DEVICE_MOVED: 9,
  SECURITY_DECISION_FACT_TYPE_REMOTE_SENSOR_OFFLINE: 10,
  SECURITY_DECISION_FACT_TYPE_REMOTE_SENSOR_ONLINE: 11,
  SECURITY_DECISION_FACT_TYPE_HUB_OFFLINE: 12,
  SECURITY_DECISION_FACT_TYPE_HUB_ONLINE: 13,
  SECURITY_DECISION_FACT_TYPE_HUB_TAMPER: 14,
  SECURITY_DECISION_FACT_TYPE_HUB_TAMPER_CLEARED: 15,
  SECURITY_DECISION_FACT_TYPE_REMOTE_SENSOR_TAMPER: 16,
  SECURITY_DECISION_FACT_TYPE_REMOTE_SENSOR_TAMPER_CLEARED: 17,
  SECURITY_DECISION_FACT_TYPE_HUB_ONGOING_SOFTWARE_UPDATE: 18,
  SECURITY_DECISION_FACT_TYPE_HUB_ONGOING_SOFTWARE_UPDATE_FINISHED: 19,
  SECURITY_DECISION_FACT_TYPE_REMOTE_SENSOR_ONGOING_SOFTWARE_UPDATE: 20,
  SECURITY_DECISION_FACT_TYPE_REMOTE_SENSOR_ONGOING_SOFTWARE_UPDATE_FINISHED: 21,
  SECURITY_DECISION_FACT_TYPE_ACTIVE_JAMMING: 22,
  SECURITY_DECISION_FACT_TYPE_ACTIVE_JAMMING_CLEARED: 23,
  SECURITY_DECISION_FACT_TYPE_HUB_CHARGING_BATTERY: 24,
  SECURITY_DECISION_FACT_TYPE_HUB_DISCHARGING_BATTERY_UNSAFE_LEVEL: 25,
  SECURITY_DECISION_FACT_TYPE_HUB_DISCHARGING_BATTERY_SAFE_LEVEL: 26,
  SECURITY_DECISION_FACT_TYPE_MULTIPLE_FAILED_AUTH_ATTEMPTS: 27,
  SECURITY_DECISION_FACT_TYPE_HUB_BUTTON_PRESS: 28,
  SECURITY_DECISION_FACT_TYPE_REMOTE_SENSOR_BUTTON_PRESS: 29,
  SECURITY_DECISION_FACT_TYPE_REMOTE_SENSOR_BATTERY_NORMAL: 30,
  SECURITY_DECISION_FACT_TYPE_REMOTE_SENSOR_BATTERY_LOW: 31,
  SECURITY_DECISION_FACT_TYPE_REMOTE_SENSOR_BATTERY_CRITICALLY_LOW: 32,
  SECURITY_DECISION_FACT_TYPE_THREAD_NETWORK_RESTORED: 33,
  SECURITY_DECISION_FACT_TYPE_THREAD_NETWORK_DOWN: 34,
  SECURITY_DECISION_FACT_TYPE_WIFI_NETWORK_RESTORED: 35,
  SECURITY_DECISION_FACT_TYPE_WIFI_NETWORK_DOWN: 36,
  SECURITY_DECISION_FACT_TYPE_CELLULAR_NETWORK_RESTORED: 37,
  SECURITY_DECISION_FACT_TYPE_CELLULAR_NETWORK_DOWN: 38,
  SECURITY_DECISION_FACT_TYPE_WEAVE_TUNNEL_RESTORED: 39,
  SECURITY_DECISION_FACT_TYPE_WEAVE_TUNNEL_DOWN: 40,
  SECURITY_DECISION_FACT_TYPE_REMOTE_SENSOR_PIR_HEAT_RAMP: 41,
  SECURITY_DECISION_FACT_TYPE_REMOTE_SENSOR_PIR_HEAT_RAMP_CLEARED: 42,
  SECURITY_DECISION_FACT_TYPE_HUB_HARDWARE_FAILURE: 43,
  SECURITY_DECISION_FACT_TYPE_HUB_HARDWARE_FAILURE_CLEARED: 44,
  SECURITY_DECISION_FACT_TYPE_REMOTE_SENSOR_HARDWARE_FAILURE: 45,
  SECURITY_DECISION_FACT_TYPE_REMOTE_SENSOR_HARDWARE_FAILURE_CLEARED: 46,
  SECURITY_DECISION_FACT_TYPE_PANIC_ALARM_IDLE: 47,
  SECURITY_DECISION_FACT_TYPE_PANIC_ALARM_NOT_IDLE: 48,
  SECURITY_DECISION_FACT_TYPE_CREDENTIALS_PROBLEM: 49,
  SECURITY_DECISION_FACT_TYPE_CREDENTIALS_PROBLEM_CLEARED: 50,
  SECURITY_DECISION_FACT_TYPE_MISSED_CRITICAL_EVENTS: 51,
  SECURITY_DECISION_FACT_TYPE_HUB_GLASS_BREAK: 52,
  SECURITY_DECISION_FACT_TYPE_SOUND_CHECK_FAILURE: 53,
  SECURITY_DECISION_FACT_TYPE_SOUND_CHECK_FAILURE_CLEARED: 54
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
proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.toObject = function(includeInstance, msg) {
  var f, obj = {
    facttype: jspb.Message.getFieldWithDefault(msg, 1, 0),
    originresourceid: (f = msg.getOriginresourceid()) && weave_common_pb.ResourceId.toObject(includeInstance, f),
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct}
 */
proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct;
  return proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct}
 */
proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactType} */ (reader.readEnum());
      msg.setFacttype(value);
      break;
    case 2:
      var value = new weave_common_pb.ResourceId;
      reader.readMessage(value,weave_common_pb.ResourceId.deserializeBinaryFromReader);
      msg.setOriginresourceid(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
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
proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFacttype();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getOriginresourceid();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      weave_common_pb.ResourceId.serializeBinaryToWriter
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional SecurityDecisionFactType factType = 1;
 * @return {!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactType}
 */
proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.prototype.getFacttype = function() {
  return /** @type {!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactType} value
 * @return {!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct} returns this
 */
proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.prototype.setFacttype = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional weave.common.ResourceId originResourceId = 2;
 * @return {?proto.weave.common.ResourceId}
 */
proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.prototype.getOriginresourceid = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 2));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct} returns this
*/
proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.prototype.setOriginresourceid = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct} returns this
 */
proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.prototype.clearOriginresourceid = function() {
  return this.setOriginresourceid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.prototype.hasOriginresourceid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp timestamp = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct} returns this
*/
proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct} returns this
 */
proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.nest.trait.security.SecurityAlarmingTrait.repeatedFields_ = [2];



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
proto.nest.trait.security.SecurityAlarmingTrait.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.SecurityAlarmingTrait.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.SecurityAlarmingTrait} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityAlarmingTrait.toObject = function(includeInstance, msg) {
  var f, obj = {
    alarmingstate: jspb.Message.getFieldWithDefault(msg, 1, 0),
    alarmreasonList: jspb.Message.toObjectList(msg.getAlarmreasonList(),
    proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.toObject, includeInstance),
    prealarmexpirationtime: (f = msg.getPrealarmexpirationtime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    prealarmingduration: (f = msg.getPrealarmingduration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    alarmingstatetime: (f = msg.getAlarmingstatetime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.nest.trait.security.SecurityAlarmingTrait}
 */
proto.nest.trait.security.SecurityAlarmingTrait.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.SecurityAlarmingTrait;
  return proto.nest.trait.security.SecurityAlarmingTrait.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.SecurityAlarmingTrait} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.SecurityAlarmingTrait}
 */
proto.nest.trait.security.SecurityAlarmingTrait.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingState} */ (reader.readEnum());
      msg.setAlarmingstate(value);
      break;
    case 2:
      var value = new proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct;
      reader.readMessage(value,proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.deserializeBinaryFromReader);
      msg.addAlarmreason(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setPrealarmexpirationtime(value);
      break;
    case 4:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setPrealarmingduration(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setAlarmingstatetime(value);
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
proto.nest.trait.security.SecurityAlarmingTrait.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.SecurityAlarmingTrait.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.SecurityAlarmingTrait} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityAlarmingTrait.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAlarmingstate();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getAlarmreasonList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.serializeBinaryToWriter
    );
  }
  f = message.getPrealarmexpirationtime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getPrealarmingduration();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getAlarmingstatetime();
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
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingState = {
  SECURITY_ALARMING_STATE_UNSPECIFIED: 0,
  SECURITY_ALARMING_STATE_IDLE: 1,
  SECURITY_ALARMING_STATE_PREALARMING: 2,
  SECURITY_ALARMING_STATE_ALARMING: 3
};

/**
 * @enum {number}
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeReason = {
  SECURITY_ALARMING_STATE_CHANGE_REASON_UNSPECIFIED: 0,
  SECURITY_ALARMING_STATE_CHANGE_REASON_CLEARED: 1,
  SECURITY_ALARMING_STATE_CHANGE_REASON_NEW_TRIGGER: 2,
  SECURITY_ALARMING_STATE_CHANGE_REASON_TIMED_TRANSITION: 3,
  SECURITY_ALARMING_STATE_CHANGE_REASON_RESUMED: 4
};

/**
 * @enum {number}
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingDecisionResult = {
  SECURITY_ALARMING_DECISION_RESULT_UNSPECIFIED: 0,
  SECURITY_ALARMING_DECISION_RESULT_TRIGGERED_PREALARM: 1,
  SECURITY_ALARMING_DECISION_RESULT_TRIGGERED_INSTANT_ALARM: 2,
  SECURITY_ALARMING_DECISION_RESULT_RECONFIRMED_INTRUSION: 3,
  SECURITY_ALARMING_DECISION_RESULT_NO_ACTION: 4
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
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    alarmingstate: jspb.Message.getFieldWithDefault(msg, 1, 0),
    prioralarmingstate: jspb.Message.getFieldWithDefault(msg, 2, 0),
    initialalarmreason: (f = msg.getInitialalarmreason()) && proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.toObject(includeInstance, f),
    securityarmsessionid: jspb.Message.getFieldWithDefault(msg, 4, 0),
    changereason: jspb.Message.getFieldWithDefault(msg, 5, 0),
    latestalarmreason: (f = msg.getLatestalarmreason()) && proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.toObject(includeInstance, f)
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
 * @return {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeEvent}
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeEvent;
  return proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeEvent}
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingState} */ (reader.readEnum());
      msg.setAlarmingstate(value);
      break;
    case 2:
      var value = /** @type {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingState} */ (reader.readEnum());
      msg.setPrioralarmingstate(value);
      break;
    case 3:
      var value = new proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct;
      reader.readMessage(value,proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.deserializeBinaryFromReader);
      msg.setInitialalarmreason(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSecurityarmsessionid(value);
      break;
    case 5:
      var value = /** @type {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeReason} */ (reader.readEnum());
      msg.setChangereason(value);
      break;
    case 6:
      var value = new proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct;
      reader.readMessage(value,proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.deserializeBinaryFromReader);
      msg.setLatestalarmreason(value);
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
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAlarmingstate();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPrioralarmingstate();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getInitialalarmreason();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.serializeBinaryToWriter
    );
  }
  f = message.getSecurityarmsessionid();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getChangereason();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getLatestalarmreason();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.serializeBinaryToWriter
    );
  }
};


/**
 * optional SecurityAlarmingState alarmingState = 1;
 * @return {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingState}
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeEvent.prototype.getAlarmingstate = function() {
  return /** @type {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingState} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingState} value
 * @return {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeEvent} returns this
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeEvent.prototype.setAlarmingstate = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional SecurityAlarmingState priorAlarmingState = 2;
 * @return {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingState}
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeEvent.prototype.getPrioralarmingstate = function() {
  return /** @type {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingState} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingState} value
 * @return {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeEvent} returns this
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeEvent.prototype.setPrioralarmingstate = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional SecurityDecisionFact.SecurityDecisionFactStruct initialAlarmReason = 3;
 * @return {?proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct}
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeEvent.prototype.getInitialalarmreason = function() {
  return /** @type{?proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct} */ (
    jspb.Message.getWrapperField(this, proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct, 3));
};


/**
 * @param {?proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct|undefined} value
 * @return {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeEvent} returns this
*/
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeEvent.prototype.setInitialalarmreason = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeEvent} returns this
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeEvent.prototype.clearInitialalarmreason = function() {
  return this.setInitialalarmreason(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeEvent.prototype.hasInitialalarmreason = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 securityArmSessionId = 4;
 * @return {number}
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeEvent.prototype.getSecurityarmsessionid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeEvent} returns this
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeEvent.prototype.setSecurityarmsessionid = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional SecurityAlarmingStateChangeReason changeReason = 5;
 * @return {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeReason}
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeEvent.prototype.getChangereason = function() {
  return /** @type {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeReason} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeReason} value
 * @return {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeEvent} returns this
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeEvent.prototype.setChangereason = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional SecurityDecisionFact.SecurityDecisionFactStruct latestAlarmReason = 6;
 * @return {?proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct}
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeEvent.prototype.getLatestalarmreason = function() {
  return /** @type{?proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct} */ (
    jspb.Message.getWrapperField(this, proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct, 6));
};


/**
 * @param {?proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct|undefined} value
 * @return {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeEvent} returns this
*/
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeEvent.prototype.setLatestalarmreason = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeEvent} returns this
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeEvent.prototype.clearLatestalarmreason = function() {
  return this.setLatestalarmreason(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingStateChangeEvent.prototype.hasLatestalarmreason = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingSetToIdleEvent.repeatedFields_ = [4];



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
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingSetToIdleEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingSetToIdleEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingSetToIdleEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingSetToIdleEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    alarmactor: (f = msg.getAlarmactor()) && proto.nest.trait.security.SecurityActor.SecurityActorStruct.toObject(includeInstance, f),
    prioralarmingstate: jspb.Message.getFieldWithDefault(msg, 2, 0),
    securityarmsessionid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    alarmreasonsList: jspb.Message.toObjectList(msg.getAlarmreasonsList(),
    proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.toObject, includeInstance)
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
 * @return {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingSetToIdleEvent}
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingSetToIdleEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingSetToIdleEvent;
  return proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingSetToIdleEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingSetToIdleEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingSetToIdleEvent}
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingSetToIdleEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.nest.trait.security.SecurityActor.SecurityActorStruct;
      reader.readMessage(value,proto.nest.trait.security.SecurityActor.SecurityActorStruct.deserializeBinaryFromReader);
      msg.setAlarmactor(value);
      break;
    case 2:
      var value = /** @type {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingState} */ (reader.readEnum());
      msg.setPrioralarmingstate(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSecurityarmsessionid(value);
      break;
    case 4:
      var value = new proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct;
      reader.readMessage(value,proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.deserializeBinaryFromReader);
      msg.addAlarmreasons(value);
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
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingSetToIdleEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingSetToIdleEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingSetToIdleEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingSetToIdleEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAlarmactor();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.nest.trait.security.SecurityActor.SecurityActorStruct.serializeBinaryToWriter
    );
  }
  f = message.getPrioralarmingstate();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getSecurityarmsessionid();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getAlarmreasonsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.serializeBinaryToWriter
    );
  }
};


/**
 * optional SecurityActor.SecurityActorStruct alarmActor = 1;
 * @return {?proto.nest.trait.security.SecurityActor.SecurityActorStruct}
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingSetToIdleEvent.prototype.getAlarmactor = function() {
  return /** @type{?proto.nest.trait.security.SecurityActor.SecurityActorStruct} */ (
    jspb.Message.getWrapperField(this, proto.nest.trait.security.SecurityActor.SecurityActorStruct, 1));
};


/**
 * @param {?proto.nest.trait.security.SecurityActor.SecurityActorStruct|undefined} value
 * @return {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingSetToIdleEvent} returns this
*/
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingSetToIdleEvent.prototype.setAlarmactor = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingSetToIdleEvent} returns this
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingSetToIdleEvent.prototype.clearAlarmactor = function() {
  return this.setAlarmactor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingSetToIdleEvent.prototype.hasAlarmactor = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SecurityAlarmingState priorAlarmingState = 2;
 * @return {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingState}
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingSetToIdleEvent.prototype.getPrioralarmingstate = function() {
  return /** @type {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingState} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingState} value
 * @return {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingSetToIdleEvent} returns this
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingSetToIdleEvent.prototype.setPrioralarmingstate = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional uint32 securityArmSessionId = 3;
 * @return {number}
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingSetToIdleEvent.prototype.getSecurityarmsessionid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingSetToIdleEvent} returns this
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingSetToIdleEvent.prototype.setSecurityarmsessionid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated SecurityDecisionFact.SecurityDecisionFactStruct alarmReasons = 4;
 * @return {!Array<!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct>}
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingSetToIdleEvent.prototype.getAlarmreasonsList = function() {
  return /** @type{!Array<!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct, 4));
};


/**
 * @param {!Array<!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct>} value
 * @return {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingSetToIdleEvent} returns this
*/
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingSetToIdleEvent.prototype.setAlarmreasonsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct=} opt_value
 * @param {number=} opt_index
 * @return {!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct}
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingSetToIdleEvent.prototype.addAlarmreasons = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingSetToIdleEvent} returns this
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingSetToIdleEvent.prototype.clearAlarmreasonsList = function() {
  return this.setAlarmreasonsList([]);
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
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingDecisionEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingDecisionEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingDecisionEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingDecisionEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    decisionfact: (f = msg.getDecisionfact()) && proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.toObject(includeInstance, f),
    result: jspb.Message.getFieldWithDefault(msg, 2, 0),
    securityarmsessionid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    resultingstate: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingDecisionEvent}
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingDecisionEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingDecisionEvent;
  return proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingDecisionEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingDecisionEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingDecisionEvent}
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingDecisionEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct;
      reader.readMessage(value,proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.deserializeBinaryFromReader);
      msg.setDecisionfact(value);
      break;
    case 2:
      var value = /** @type {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingDecisionResult} */ (reader.readEnum());
      msg.setResult(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSecurityarmsessionid(value);
      break;
    case 4:
      var value = /** @type {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingState} */ (reader.readEnum());
      msg.setResultingstate(value);
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
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingDecisionEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingDecisionEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingDecisionEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingDecisionEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDecisionfact();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.serializeBinaryToWriter
    );
  }
  f = message.getResult();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getSecurityarmsessionid();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getResultingstate();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional SecurityDecisionFact.SecurityDecisionFactStruct decisionFact = 1;
 * @return {?proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct}
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingDecisionEvent.prototype.getDecisionfact = function() {
  return /** @type{?proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct} */ (
    jspb.Message.getWrapperField(this, proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct, 1));
};


/**
 * @param {?proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct|undefined} value
 * @return {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingDecisionEvent} returns this
*/
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingDecisionEvent.prototype.setDecisionfact = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingDecisionEvent} returns this
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingDecisionEvent.prototype.clearDecisionfact = function() {
  return this.setDecisionfact(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingDecisionEvent.prototype.hasDecisionfact = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SecurityAlarmingDecisionResult result = 2;
 * @return {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingDecisionResult}
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingDecisionEvent.prototype.getResult = function() {
  return /** @type {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingDecisionResult} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingDecisionResult} value
 * @return {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingDecisionEvent} returns this
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingDecisionEvent.prototype.setResult = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional uint32 securityArmSessionId = 3;
 * @return {number}
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingDecisionEvent.prototype.getSecurityarmsessionid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingDecisionEvent} returns this
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingDecisionEvent.prototype.setSecurityarmsessionid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional SecurityAlarmingState resultingState = 4;
 * @return {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingState}
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingDecisionEvent.prototype.getResultingstate = function() {
  return /** @type {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingState} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingState} value
 * @return {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingDecisionEvent} returns this
 */
proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingDecisionEvent.prototype.setResultingstate = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional SecurityAlarmingState alarmingState = 1;
 * @return {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingState}
 */
proto.nest.trait.security.SecurityAlarmingTrait.prototype.getAlarmingstate = function() {
  return /** @type {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingState} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.nest.trait.security.SecurityAlarmingTrait.SecurityAlarmingState} value
 * @return {!proto.nest.trait.security.SecurityAlarmingTrait} returns this
 */
proto.nest.trait.security.SecurityAlarmingTrait.prototype.setAlarmingstate = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated SecurityDecisionFact.SecurityDecisionFactStruct alarmReason = 2;
 * @return {!Array<!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct>}
 */
proto.nest.trait.security.SecurityAlarmingTrait.prototype.getAlarmreasonList = function() {
  return /** @type{!Array<!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct, 2));
};


/**
 * @param {!Array<!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct>} value
 * @return {!proto.nest.trait.security.SecurityAlarmingTrait} returns this
*/
proto.nest.trait.security.SecurityAlarmingTrait.prototype.setAlarmreasonList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct=} opt_value
 * @param {number=} opt_index
 * @return {!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct}
 */
proto.nest.trait.security.SecurityAlarmingTrait.prototype.addAlarmreason = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.nest.trait.security.SecurityAlarmingTrait} returns this
 */
proto.nest.trait.security.SecurityAlarmingTrait.prototype.clearAlarmreasonList = function() {
  return this.setAlarmreasonList([]);
};


/**
 * optional google.protobuf.Timestamp prealarmExpirationTime = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.nest.trait.security.SecurityAlarmingTrait.prototype.getPrealarmexpirationtime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.nest.trait.security.SecurityAlarmingTrait} returns this
*/
proto.nest.trait.security.SecurityAlarmingTrait.prototype.setPrealarmexpirationtime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.security.SecurityAlarmingTrait} returns this
 */
proto.nest.trait.security.SecurityAlarmingTrait.prototype.clearPrealarmexpirationtime = function() {
  return this.setPrealarmexpirationtime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.security.SecurityAlarmingTrait.prototype.hasPrealarmexpirationtime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Duration prealarmingDuration = 4;
 * @return {?proto.google.protobuf.Duration}
 */
proto.nest.trait.security.SecurityAlarmingTrait.prototype.getPrealarmingduration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 4));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.nest.trait.security.SecurityAlarmingTrait} returns this
*/
proto.nest.trait.security.SecurityAlarmingTrait.prototype.setPrealarmingduration = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.security.SecurityAlarmingTrait} returns this
 */
proto.nest.trait.security.SecurityAlarmingTrait.prototype.clearPrealarmingduration = function() {
  return this.setPrealarmingduration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.security.SecurityAlarmingTrait.prototype.hasPrealarmingduration = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp alarmingStateTime = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.nest.trait.security.SecurityAlarmingTrait.prototype.getAlarmingstatetime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.nest.trait.security.SecurityAlarmingTrait} returns this
*/
proto.nest.trait.security.SecurityAlarmingTrait.prototype.setAlarmingstatetime = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.security.SecurityAlarmingTrait} returns this
 */
proto.nest.trait.security.SecurityAlarmingTrait.prototype.clearAlarmingstatetime = function() {
  return this.setAlarmingstatetime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.security.SecurityAlarmingTrait.prototype.hasAlarmingstatetime = function() {
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
proto.nest.trait.security.PanicAlarmingTrait.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.PanicAlarmingTrait.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.PanicAlarmingTrait} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.PanicAlarmingTrait.toObject = function(includeInstance, msg) {
  var f, obj = {
    panicalarmingstate: jspb.Message.getFieldWithDefault(msg, 1, 0),
    panicalarmactor: (f = msg.getPanicalarmactor()) && proto.nest.trait.security.SecurityActor.SecurityActorStruct.toObject(includeInstance, f),
    panictime: (f = msg.getPanictime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.nest.trait.security.PanicAlarmingTrait}
 */
proto.nest.trait.security.PanicAlarmingTrait.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.PanicAlarmingTrait;
  return proto.nest.trait.security.PanicAlarmingTrait.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.PanicAlarmingTrait} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.PanicAlarmingTrait}
 */
proto.nest.trait.security.PanicAlarmingTrait.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingState} */ (reader.readEnum());
      msg.setPanicalarmingstate(value);
      break;
    case 2:
      var value = new proto.nest.trait.security.SecurityActor.SecurityActorStruct;
      reader.readMessage(value,proto.nest.trait.security.SecurityActor.SecurityActorStruct.deserializeBinaryFromReader);
      msg.setPanicalarmactor(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setPanictime(value);
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
proto.nest.trait.security.PanicAlarmingTrait.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.PanicAlarmingTrait.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.PanicAlarmingTrait} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.PanicAlarmingTrait.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPanicalarmingstate();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPanicalarmactor();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.nest.trait.security.SecurityActor.SecurityActorStruct.serializeBinaryToWriter
    );
  }
  f = message.getPanictime();
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
proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingState = {
  PANIC_ALARMING_STATE_UNSPECIFIED: 0,
  PANIC_ALARMING_STATE_IDLE: 1,
  PANIC_ALARMING_STATE_PREPANIC: 2,
  PANIC_ALARMING_STATE_PANIC: 3
};

/**
 * @enum {number}
 */
proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateResponseType = {
  PANIC_ALARMING_STATE_RESPONSE_TYPE_UNSPECIFIED: 0,
  PANIC_ALARMING_STATE_RESPONSE_TYPE_SUCCESS: 1,
  PANIC_ALARMING_STATE_RESPONSE_TYPE_FAIL_ALREADY: 2,
  PANIC_ALARMING_STATE_RESPONSE_TYPE_FAIL_INVALID_STATE_REQUEST: 3
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
proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    targetpanicalarmingstate: jspb.Message.getFieldWithDefault(msg, 1, 0),
    panicalarmactor: (f = msg.getPanicalarmactor()) && proto.nest.trait.security.SecurityActor.SecurityActorStruct.toObject(includeInstance, f)
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
 * @return {!proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateRequest}
 */
proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateRequest;
  return proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateRequest}
 */
proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingState} */ (reader.readEnum());
      msg.setTargetpanicalarmingstate(value);
      break;
    case 2:
      var value = new proto.nest.trait.security.SecurityActor.SecurityActorStruct;
      reader.readMessage(value,proto.nest.trait.security.SecurityActor.SecurityActorStruct.deserializeBinaryFromReader);
      msg.setPanicalarmactor(value);
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
proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTargetpanicalarmingstate();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPanicalarmactor();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.nest.trait.security.SecurityActor.SecurityActorStruct.serializeBinaryToWriter
    );
  }
};


/**
 * optional PanicAlarmingState targetPanicAlarmingState = 1;
 * @return {!proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingState}
 */
proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateRequest.prototype.getTargetpanicalarmingstate = function() {
  return /** @type {!proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingState} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingState} value
 * @return {!proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateRequest} returns this
 */
proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateRequest.prototype.setTargetpanicalarmingstate = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional SecurityActor.SecurityActorStruct panicAlarmActor = 2;
 * @return {?proto.nest.trait.security.SecurityActor.SecurityActorStruct}
 */
proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateRequest.prototype.getPanicalarmactor = function() {
  return /** @type{?proto.nest.trait.security.SecurityActor.SecurityActorStruct} */ (
    jspb.Message.getWrapperField(this, proto.nest.trait.security.SecurityActor.SecurityActorStruct, 2));
};


/**
 * @param {?proto.nest.trait.security.SecurityActor.SecurityActorStruct|undefined} value
 * @return {!proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateRequest} returns this
*/
proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateRequest.prototype.setPanicalarmactor = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateRequest} returns this
 */
proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateRequest.prototype.clearPanicalarmactor = function() {
  return this.setPanicalarmactor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateRequest.prototype.hasPanicalarmactor = function() {
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
proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateResponse}
 */
proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateResponse;
  return proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateResponse}
 */
proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateResponseType} */ (reader.readEnum());
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
proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateResponse.serializeBinaryToWriter = function(message, writer) {
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
 * optional PanicAlarmingStateResponseType responseType = 1;
 * @return {!proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateResponseType}
 */
proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateResponse.prototype.getResponsetype = function() {
  return /** @type {!proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateResponseType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateResponseType} value
 * @return {!proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateResponse} returns this
 */
proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateResponse.prototype.setResponsetype = function(value) {
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
proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateChangeEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateChangeEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateChangeEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateChangeEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    panicalarmingstate: jspb.Message.getFieldWithDefault(msg, 1, 0),
    priorpanicalarmingstate: jspb.Message.getFieldWithDefault(msg, 2, 0),
    panicalarmactor: (f = msg.getPanicalarmactor()) && proto.nest.trait.security.SecurityActor.SecurityActorStruct.toObject(includeInstance, f)
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
 * @return {!proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateChangeEvent}
 */
proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateChangeEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateChangeEvent;
  return proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateChangeEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateChangeEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateChangeEvent}
 */
proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateChangeEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingState} */ (reader.readEnum());
      msg.setPanicalarmingstate(value);
      break;
    case 2:
      var value = /** @type {!proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingState} */ (reader.readEnum());
      msg.setPriorpanicalarmingstate(value);
      break;
    case 3:
      var value = new proto.nest.trait.security.SecurityActor.SecurityActorStruct;
      reader.readMessage(value,proto.nest.trait.security.SecurityActor.SecurityActorStruct.deserializeBinaryFromReader);
      msg.setPanicalarmactor(value);
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
proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateChangeEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateChangeEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateChangeEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateChangeEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPanicalarmingstate();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPriorpanicalarmingstate();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getPanicalarmactor();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.nest.trait.security.SecurityActor.SecurityActorStruct.serializeBinaryToWriter
    );
  }
};


/**
 * optional PanicAlarmingState panicAlarmingState = 1;
 * @return {!proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingState}
 */
proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateChangeEvent.prototype.getPanicalarmingstate = function() {
  return /** @type {!proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingState} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingState} value
 * @return {!proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateChangeEvent} returns this
 */
proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateChangeEvent.prototype.setPanicalarmingstate = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional PanicAlarmingState priorPanicAlarmingState = 2;
 * @return {!proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingState}
 */
proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateChangeEvent.prototype.getPriorpanicalarmingstate = function() {
  return /** @type {!proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingState} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingState} value
 * @return {!proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateChangeEvent} returns this
 */
proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateChangeEvent.prototype.setPriorpanicalarmingstate = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional SecurityActor.SecurityActorStruct panicAlarmActor = 3;
 * @return {?proto.nest.trait.security.SecurityActor.SecurityActorStruct}
 */
proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateChangeEvent.prototype.getPanicalarmactor = function() {
  return /** @type{?proto.nest.trait.security.SecurityActor.SecurityActorStruct} */ (
    jspb.Message.getWrapperField(this, proto.nest.trait.security.SecurityActor.SecurityActorStruct, 3));
};


/**
 * @param {?proto.nest.trait.security.SecurityActor.SecurityActorStruct|undefined} value
 * @return {!proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateChangeEvent} returns this
*/
proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateChangeEvent.prototype.setPanicalarmactor = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateChangeEvent} returns this
 */
proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateChangeEvent.prototype.clearPanicalarmactor = function() {
  return this.setPanicalarmactor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingStateChangeEvent.prototype.hasPanicalarmactor = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional PanicAlarmingState panicAlarmingState = 1;
 * @return {!proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingState}
 */
proto.nest.trait.security.PanicAlarmingTrait.prototype.getPanicalarmingstate = function() {
  return /** @type {!proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingState} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.nest.trait.security.PanicAlarmingTrait.PanicAlarmingState} value
 * @return {!proto.nest.trait.security.PanicAlarmingTrait} returns this
 */
proto.nest.trait.security.PanicAlarmingTrait.prototype.setPanicalarmingstate = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional SecurityActor.SecurityActorStruct panicAlarmActor = 2;
 * @return {?proto.nest.trait.security.SecurityActor.SecurityActorStruct}
 */
proto.nest.trait.security.PanicAlarmingTrait.prototype.getPanicalarmactor = function() {
  return /** @type{?proto.nest.trait.security.SecurityActor.SecurityActorStruct} */ (
    jspb.Message.getWrapperField(this, proto.nest.trait.security.SecurityActor.SecurityActorStruct, 2));
};


/**
 * @param {?proto.nest.trait.security.SecurityActor.SecurityActorStruct|undefined} value
 * @return {!proto.nest.trait.security.PanicAlarmingTrait} returns this
*/
proto.nest.trait.security.PanicAlarmingTrait.prototype.setPanicalarmactor = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.security.PanicAlarmingTrait} returns this
 */
proto.nest.trait.security.PanicAlarmingTrait.prototype.clearPanicalarmactor = function() {
  return this.setPanicalarmactor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.security.PanicAlarmingTrait.prototype.hasPanicalarmactor = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp panicTime = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.nest.trait.security.PanicAlarmingTrait.prototype.getPanictime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.nest.trait.security.PanicAlarmingTrait} returns this
*/
proto.nest.trait.security.PanicAlarmingTrait.prototype.setPanictime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.security.PanicAlarmingTrait} returns this
 */
proto.nest.trait.security.PanicAlarmingTrait.prototype.clearPanictime = function() {
  return this.setPanictime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.security.PanicAlarmingTrait.prototype.hasPanictime = function() {
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
proto.nest.trait.security.SecurityActor.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.SecurityActor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.SecurityActor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityActor.toObject = function(includeInstance, msg) {
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
 * @return {!proto.nest.trait.security.SecurityActor}
 */
proto.nest.trait.security.SecurityActor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.SecurityActor;
  return proto.nest.trait.security.SecurityActor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.SecurityActor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.SecurityActor}
 */
proto.nest.trait.security.SecurityActor.deserializeBinaryFromReader = function(msg, reader) {
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
proto.nest.trait.security.SecurityActor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.SecurityActor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.SecurityActor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityActor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.nest.trait.security.SecurityActor.SecurityActorMethod = {
  SECURITY_ACTOR_METHOD_UNSPECIFIED: 0,
  SECURITY_ACTOR_METHOD_OTHER: 1,
  SECURITY_ACTOR_METHOD_KEYPAD: 2,
  SECURITY_ACTOR_METHOD_KEYPAD_PIN: 3,
  SECURITY_ACTOR_METHOD_AUTH_TOKEN: 4,
  SECURITY_ACTOR_METHOD_REMOTE_USER_EXPLICIT: 5,
  SECURITY_ACTOR_METHOD_REMOTE_USER_IMPLICIT: 6,
  SECURITY_ACTOR_METHOD_REMOTE_REMINDER_EXPLICIT: 7,
  SECURITY_ACTOR_METHOD_REMOTE_REMINDER_IMPLICIT: 8,
  SECURITY_ACTOR_METHOD_REMOTE_USER_OTHER: 9,
  SECURITY_ACTOR_METHOD_REMOTE_DELEGATE: 10,
  SECURITY_ACTOR_METHOD_LOW_POWER_SHUTDOWN: 11,
  SECURITY_ACTOR_METHOD_VOICE_ASSISTANT: 12,
  SECURITY_ACTOR_METHOD_PEER_LOCK: 13,
  SECURITY_ACTOR_METHOD_REMOTE_SCHEDULE_IMPLICIT: 14
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
proto.nest.trait.security.SecurityActor.SecurityActorStruct.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.SecurityActor.SecurityActorStruct.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.SecurityActor.SecurityActorStruct} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityActor.SecurityActorStruct.toObject = function(includeInstance, msg) {
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
 * @return {!proto.nest.trait.security.SecurityActor.SecurityActorStruct}
 */
proto.nest.trait.security.SecurityActor.SecurityActorStruct.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.SecurityActor.SecurityActorStruct;
  return proto.nest.trait.security.SecurityActor.SecurityActorStruct.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.SecurityActor.SecurityActorStruct} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.SecurityActor.SecurityActorStruct}
 */
proto.nest.trait.security.SecurityActor.SecurityActorStruct.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.nest.trait.security.SecurityActor.SecurityActorMethod} */ (reader.readEnum());
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
proto.nest.trait.security.SecurityActor.SecurityActorStruct.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.SecurityActor.SecurityActorStruct.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.SecurityActor.SecurityActorStruct} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityActor.SecurityActorStruct.serializeBinaryToWriter = function(message, writer) {
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
 * optional SecurityActorMethod method = 1;
 * @return {!proto.nest.trait.security.SecurityActor.SecurityActorMethod}
 */
proto.nest.trait.security.SecurityActor.SecurityActorStruct.prototype.getMethod = function() {
  return /** @type {!proto.nest.trait.security.SecurityActor.SecurityActorMethod} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.nest.trait.security.SecurityActor.SecurityActorMethod} value
 * @return {!proto.nest.trait.security.SecurityActor.SecurityActorStruct} returns this
 */
proto.nest.trait.security.SecurityActor.SecurityActorStruct.prototype.setMethod = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional weave.common.ResourceId originator = 2;
 * @return {?proto.weave.common.ResourceId}
 */
proto.nest.trait.security.SecurityActor.SecurityActorStruct.prototype.getOriginator = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 2));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.nest.trait.security.SecurityActor.SecurityActorStruct} returns this
*/
proto.nest.trait.security.SecurityActor.SecurityActorStruct.prototype.setOriginator = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.security.SecurityActor.SecurityActorStruct} returns this
 */
proto.nest.trait.security.SecurityActor.SecurityActorStruct.prototype.clearOriginator = function() {
  return this.setOriginator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.security.SecurityActor.SecurityActorStruct.prototype.hasOriginator = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional weave.common.ResourceId agent = 3;
 * @return {?proto.weave.common.ResourceId}
 */
proto.nest.trait.security.SecurityActor.SecurityActorStruct.prototype.getAgent = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 3));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.nest.trait.security.SecurityActor.SecurityActorStruct} returns this
*/
proto.nest.trait.security.SecurityActor.SecurityActorStruct.prototype.setAgent = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.security.SecurityActor.SecurityActorStruct} returns this
 */
proto.nest.trait.security.SecurityActor.SecurityActorStruct.prototype.clearAgent = function() {
  return this.setAgent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.security.SecurityActor.SecurityActorStruct.prototype.hasAgent = function() {
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
proto.nest.trait.security.SecurityIntrusionSettingsTrait.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.SecurityIntrusionSettingsTrait.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.SecurityIntrusionSettingsTrait} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityIntrusionSettingsTrait.toObject = function(includeInstance, msg) {
  var f, obj = {
    ambientmotionforintrusionenabled: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    customintrusionrulesMap: (f = msg.getCustomintrusionrulesMap()) ? f.toObject(includeInstance, proto.nest.trait.security.SecurityIntrusionSettingsTrait.CustomIntrusionRule.toObject) : []
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
 * @return {!proto.nest.trait.security.SecurityIntrusionSettingsTrait}
 */
proto.nest.trait.security.SecurityIntrusionSettingsTrait.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.SecurityIntrusionSettingsTrait;
  return proto.nest.trait.security.SecurityIntrusionSettingsTrait.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.SecurityIntrusionSettingsTrait} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.SecurityIntrusionSettingsTrait}
 */
proto.nest.trait.security.SecurityIntrusionSettingsTrait.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAmbientmotionforintrusionenabled(value);
      break;
    case 4:
      var value = msg.getCustomintrusionrulesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readUint32, jspb.BinaryReader.prototype.readMessage, proto.nest.trait.security.SecurityIntrusionSettingsTrait.CustomIntrusionRule.deserializeBinaryFromReader, 0, new proto.nest.trait.security.SecurityIntrusionSettingsTrait.CustomIntrusionRule());
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
proto.nest.trait.security.SecurityIntrusionSettingsTrait.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.SecurityIntrusionSettingsTrait.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.SecurityIntrusionSettingsTrait} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityIntrusionSettingsTrait.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAmbientmotionforintrusionenabled();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getCustomintrusionrulesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeUint32, jspb.BinaryWriter.prototype.writeMessage, proto.nest.trait.security.SecurityIntrusionSettingsTrait.CustomIntrusionRule.serializeBinaryToWriter);
  }
};


/**
 * @enum {number}
 */
proto.nest.trait.security.SecurityIntrusionSettingsTrait.IntrusionAction = {
  INTRUSION_ACTION_UNSPECIFIED: 0,
  INTRUSION_ACTION_NONE: 1,
  INTRUSION_ACTION_PREALARM: 2,
  INTRUSION_ACTION_INSTANTALARM: 3
};

/**
 * @enum {number}
 */
proto.nest.trait.security.SecurityIntrusionSettingsTrait.ExpandedSecurityState = {
  EXPANDED_SECURITY_STATE_UNSPECIFIED: 0,
  EXPANDED_SECURITY_STATE_DISARMED: 1,
  EXPANDED_SECURITY_STATE_ARMED_SL1: 2,
  EXPANDED_SECURITY_STATE_ARMED_SL1_NOT_IDLE: 3,
  EXPANDED_SECURITY_STATE_ARMED_SL2_IN_EXIT_ALLOWANCE: 4,
  EXPANDED_SECURITY_STATE_ARMED_SL2: 5,
  EXPANDED_SECURITY_STATE_ARMED_SL2_NOT_IDLE: 6
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
proto.nest.trait.security.SecurityIntrusionSettingsTrait.CustomIntrusionRule.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.SecurityIntrusionSettingsTrait.CustomIntrusionRule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.SecurityIntrusionSettingsTrait.CustomIntrusionRule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityIntrusionSettingsTrait.CustomIntrusionRule.toObject = function(includeInstance, msg) {
  var f, obj = {
    deviceid: (f = msg.getDeviceid()) && weave_common_pb.ResourceId.toObject(includeInstance, f),
    state: jspb.Message.getFieldWithDefault(msg, 2, 0),
    facttype: jspb.Message.getFieldWithDefault(msg, 3, 0),
    action: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.nest.trait.security.SecurityIntrusionSettingsTrait.CustomIntrusionRule}
 */
proto.nest.trait.security.SecurityIntrusionSettingsTrait.CustomIntrusionRule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.SecurityIntrusionSettingsTrait.CustomIntrusionRule;
  return proto.nest.trait.security.SecurityIntrusionSettingsTrait.CustomIntrusionRule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.SecurityIntrusionSettingsTrait.CustomIntrusionRule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.SecurityIntrusionSettingsTrait.CustomIntrusionRule}
 */
proto.nest.trait.security.SecurityIntrusionSettingsTrait.CustomIntrusionRule.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.nest.trait.security.SecurityIntrusionSettingsTrait.ExpandedSecurityState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 3:
      var value = /** @type {!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactType} */ (reader.readEnum());
      msg.setFacttype(value);
      break;
    case 4:
      var value = /** @type {!proto.nest.trait.security.SecurityIntrusionSettingsTrait.IntrusionAction} */ (reader.readEnum());
      msg.setAction(value);
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
proto.nest.trait.security.SecurityIntrusionSettingsTrait.CustomIntrusionRule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.SecurityIntrusionSettingsTrait.CustomIntrusionRule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.SecurityIntrusionSettingsTrait.CustomIntrusionRule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityIntrusionSettingsTrait.CustomIntrusionRule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeviceid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      weave_common_pb.ResourceId.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getFacttype();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional weave.common.ResourceId deviceId = 1;
 * @return {?proto.weave.common.ResourceId}
 */
proto.nest.trait.security.SecurityIntrusionSettingsTrait.CustomIntrusionRule.prototype.getDeviceid = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 1));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.nest.trait.security.SecurityIntrusionSettingsTrait.CustomIntrusionRule} returns this
*/
proto.nest.trait.security.SecurityIntrusionSettingsTrait.CustomIntrusionRule.prototype.setDeviceid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.security.SecurityIntrusionSettingsTrait.CustomIntrusionRule} returns this
 */
proto.nest.trait.security.SecurityIntrusionSettingsTrait.CustomIntrusionRule.prototype.clearDeviceid = function() {
  return this.setDeviceid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.security.SecurityIntrusionSettingsTrait.CustomIntrusionRule.prototype.hasDeviceid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ExpandedSecurityState state = 2;
 * @return {!proto.nest.trait.security.SecurityIntrusionSettingsTrait.ExpandedSecurityState}
 */
proto.nest.trait.security.SecurityIntrusionSettingsTrait.CustomIntrusionRule.prototype.getState = function() {
  return /** @type {!proto.nest.trait.security.SecurityIntrusionSettingsTrait.ExpandedSecurityState} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.nest.trait.security.SecurityIntrusionSettingsTrait.ExpandedSecurityState} value
 * @return {!proto.nest.trait.security.SecurityIntrusionSettingsTrait.CustomIntrusionRule} returns this
 */
proto.nest.trait.security.SecurityIntrusionSettingsTrait.CustomIntrusionRule.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional SecurityDecisionFact.SecurityDecisionFactType factType = 3;
 * @return {!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactType}
 */
proto.nest.trait.security.SecurityIntrusionSettingsTrait.CustomIntrusionRule.prototype.getFacttype = function() {
  return /** @type {!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactType} value
 * @return {!proto.nest.trait.security.SecurityIntrusionSettingsTrait.CustomIntrusionRule} returns this
 */
proto.nest.trait.security.SecurityIntrusionSettingsTrait.CustomIntrusionRule.prototype.setFacttype = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional IntrusionAction action = 4;
 * @return {!proto.nest.trait.security.SecurityIntrusionSettingsTrait.IntrusionAction}
 */
proto.nest.trait.security.SecurityIntrusionSettingsTrait.CustomIntrusionRule.prototype.getAction = function() {
  return /** @type {!proto.nest.trait.security.SecurityIntrusionSettingsTrait.IntrusionAction} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.nest.trait.security.SecurityIntrusionSettingsTrait.IntrusionAction} value
 * @return {!proto.nest.trait.security.SecurityIntrusionSettingsTrait.CustomIntrusionRule} returns this
 */
proto.nest.trait.security.SecurityIntrusionSettingsTrait.CustomIntrusionRule.prototype.setAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional bool ambientMotionForIntrusionEnabled = 3;
 * @return {boolean}
 */
proto.nest.trait.security.SecurityIntrusionSettingsTrait.prototype.getAmbientmotionforintrusionenabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.nest.trait.security.SecurityIntrusionSettingsTrait} returns this
 */
proto.nest.trait.security.SecurityIntrusionSettingsTrait.prototype.setAmbientmotionforintrusionenabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * map<uint32, CustomIntrusionRule> customIntrusionRules = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.nest.trait.security.SecurityIntrusionSettingsTrait.CustomIntrusionRule>}
 */
proto.nest.trait.security.SecurityIntrusionSettingsTrait.prototype.getCustomintrusionrulesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.nest.trait.security.SecurityIntrusionSettingsTrait.CustomIntrusionRule>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      proto.nest.trait.security.SecurityIntrusionSettingsTrait.CustomIntrusionRule));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.nest.trait.security.SecurityIntrusionSettingsTrait} returns this
 */
proto.nest.trait.security.SecurityIntrusionSettingsTrait.prototype.clearCustomintrusionrulesMap = function() {
  this.getCustomintrusionrulesMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.repeatedFields_ = [1,2,3];



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
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.SecurityIssuesAndExceptionsTrait} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockingissuesetList: jspb.Message.toObjectList(msg.getBlockingissuesetList(),
    proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.toObject, includeInstance),
    nonblockingissuesetList: jspb.Message.toObjectList(msg.getNonblockingissuesetList(),
    proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.toObject, includeInstance),
    exceptionsetList: jspb.Message.toObjectList(msg.getExceptionsetList(),
    proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.toObject, includeInstance)
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
 * @return {!proto.nest.trait.security.SecurityIssuesAndExceptionsTrait}
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.SecurityIssuesAndExceptionsTrait;
  return proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.SecurityIssuesAndExceptionsTrait} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.SecurityIssuesAndExceptionsTrait}
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct;
      reader.readMessage(value,proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.deserializeBinaryFromReader);
      msg.addBlockingissueset(value);
      break;
    case 2:
      var value = new proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct;
      reader.readMessage(value,proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.deserializeBinaryFromReader);
      msg.addNonblockingissueset(value);
      break;
    case 3:
      var value = new proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct;
      reader.readMessage(value,proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.deserializeBinaryFromReader);
      msg.addExceptionset(value);
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
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.SecurityIssuesAndExceptionsTrait} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockingissuesetList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.serializeBinaryToWriter
    );
  }
  f = message.getNonblockingissuesetList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.serializeBinaryToWriter
    );
  }
  f = message.getExceptionsetList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityBlockingIssuesChangeEvent.repeatedFields_ = [1];



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
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityBlockingIssuesChangeEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityBlockingIssuesChangeEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityBlockingIssuesChangeEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityBlockingIssuesChangeEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockingissuesetList: jspb.Message.toObjectList(msg.getBlockingissuesetList(),
    proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.toObject, includeInstance)
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
 * @return {!proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityBlockingIssuesChangeEvent}
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityBlockingIssuesChangeEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityBlockingIssuesChangeEvent;
  return proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityBlockingIssuesChangeEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityBlockingIssuesChangeEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityBlockingIssuesChangeEvent}
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityBlockingIssuesChangeEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct;
      reader.readMessage(value,proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.deserializeBinaryFromReader);
      msg.addBlockingissueset(value);
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
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityBlockingIssuesChangeEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityBlockingIssuesChangeEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityBlockingIssuesChangeEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityBlockingIssuesChangeEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockingissuesetList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SecurityDecisionFact.SecurityDecisionFactStruct blockingIssueSet = 1;
 * @return {!Array<!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct>}
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityBlockingIssuesChangeEvent.prototype.getBlockingissuesetList = function() {
  return /** @type{!Array<!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct, 1));
};


/**
 * @param {!Array<!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct>} value
 * @return {!proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityBlockingIssuesChangeEvent} returns this
*/
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityBlockingIssuesChangeEvent.prototype.setBlockingissuesetList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct=} opt_value
 * @param {number=} opt_index
 * @return {!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct}
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityBlockingIssuesChangeEvent.prototype.addBlockingissueset = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityBlockingIssuesChangeEvent} returns this
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityBlockingIssuesChangeEvent.prototype.clearBlockingissuesetList = function() {
  return this.setBlockingissuesetList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNonBlockingIssuesChangeEvent.repeatedFields_ = [1];



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
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNonBlockingIssuesChangeEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNonBlockingIssuesChangeEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNonBlockingIssuesChangeEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNonBlockingIssuesChangeEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonblockingissuesetList: jspb.Message.toObjectList(msg.getNonblockingissuesetList(),
    proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.toObject, includeInstance)
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
 * @return {!proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNonBlockingIssuesChangeEvent}
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNonBlockingIssuesChangeEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNonBlockingIssuesChangeEvent;
  return proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNonBlockingIssuesChangeEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNonBlockingIssuesChangeEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNonBlockingIssuesChangeEvent}
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNonBlockingIssuesChangeEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct;
      reader.readMessage(value,proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.deserializeBinaryFromReader);
      msg.addNonblockingissueset(value);
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
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNonBlockingIssuesChangeEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNonBlockingIssuesChangeEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNonBlockingIssuesChangeEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNonBlockingIssuesChangeEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonblockingissuesetList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SecurityDecisionFact.SecurityDecisionFactStruct nonblockingIssueSet = 1;
 * @return {!Array<!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct>}
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNonBlockingIssuesChangeEvent.prototype.getNonblockingissuesetList = function() {
  return /** @type{!Array<!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct, 1));
};


/**
 * @param {!Array<!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct>} value
 * @return {!proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNonBlockingIssuesChangeEvent} returns this
*/
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNonBlockingIssuesChangeEvent.prototype.setNonblockingissuesetList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct=} opt_value
 * @param {number=} opt_index
 * @return {!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct}
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNonBlockingIssuesChangeEvent.prototype.addNonblockingissueset = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNonBlockingIssuesChangeEvent} returns this
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNonBlockingIssuesChangeEvent.prototype.clearNonblockingissuesetList = function() {
  return this.setNonblockingissuesetList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityExceptionsChangeEvent.repeatedFields_ = [1];



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
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityExceptionsChangeEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityExceptionsChangeEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityExceptionsChangeEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityExceptionsChangeEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    exceptionsetList: jspb.Message.toObjectList(msg.getExceptionsetList(),
    proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.toObject, includeInstance)
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
 * @return {!proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityExceptionsChangeEvent}
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityExceptionsChangeEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityExceptionsChangeEvent;
  return proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityExceptionsChangeEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityExceptionsChangeEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityExceptionsChangeEvent}
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityExceptionsChangeEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct;
      reader.readMessage(value,proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.deserializeBinaryFromReader);
      msg.addExceptionset(value);
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
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityExceptionsChangeEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityExceptionsChangeEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityExceptionsChangeEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityExceptionsChangeEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExceptionsetList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SecurityDecisionFact.SecurityDecisionFactStruct exceptionSet = 1;
 * @return {!Array<!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct>}
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityExceptionsChangeEvent.prototype.getExceptionsetList = function() {
  return /** @type{!Array<!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct, 1));
};


/**
 * @param {!Array<!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct>} value
 * @return {!proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityExceptionsChangeEvent} returns this
*/
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityExceptionsChangeEvent.prototype.setExceptionsetList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct=} opt_value
 * @param {number=} opt_index
 * @return {!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct}
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityExceptionsChangeEvent.prototype.addExceptionset = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityExceptionsChangeEvent} returns this
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityExceptionsChangeEvent.prototype.clearExceptionsetList = function() {
  return this.setExceptionsetList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNewIssuesByEndOfAllowanceEvent.repeatedFields_ = [1];



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
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNewIssuesByEndOfAllowanceEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNewIssuesByEndOfAllowanceEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNewIssuesByEndOfAllowanceEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNewIssuesByEndOfAllowanceEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    issuesetList: jspb.Message.toObjectList(msg.getIssuesetList(),
    proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.toObject, includeInstance)
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
 * @return {!proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNewIssuesByEndOfAllowanceEvent}
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNewIssuesByEndOfAllowanceEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNewIssuesByEndOfAllowanceEvent;
  return proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNewIssuesByEndOfAllowanceEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNewIssuesByEndOfAllowanceEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNewIssuesByEndOfAllowanceEvent}
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNewIssuesByEndOfAllowanceEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct;
      reader.readMessage(value,proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.deserializeBinaryFromReader);
      msg.addIssueset(value);
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
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNewIssuesByEndOfAllowanceEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNewIssuesByEndOfAllowanceEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNewIssuesByEndOfAllowanceEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNewIssuesByEndOfAllowanceEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIssuesetList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SecurityDecisionFact.SecurityDecisionFactStruct issueSet = 1;
 * @return {!Array<!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct>}
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNewIssuesByEndOfAllowanceEvent.prototype.getIssuesetList = function() {
  return /** @type{!Array<!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct, 1));
};


/**
 * @param {!Array<!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct>} value
 * @return {!proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNewIssuesByEndOfAllowanceEvent} returns this
*/
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNewIssuesByEndOfAllowanceEvent.prototype.setIssuesetList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct=} opt_value
 * @param {number=} opt_index
 * @return {!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct}
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNewIssuesByEndOfAllowanceEvent.prototype.addIssueset = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNewIssuesByEndOfAllowanceEvent} returns this
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.SecurityNewIssuesByEndOfAllowanceEvent.prototype.clearIssuesetList = function() {
  return this.setIssuesetList([]);
};


/**
 * repeated SecurityDecisionFact.SecurityDecisionFactStruct blockingIssueSet = 1;
 * @return {!Array<!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct>}
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.prototype.getBlockingissuesetList = function() {
  return /** @type{!Array<!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct, 1));
};


/**
 * @param {!Array<!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct>} value
 * @return {!proto.nest.trait.security.SecurityIssuesAndExceptionsTrait} returns this
*/
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.prototype.setBlockingissuesetList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct=} opt_value
 * @param {number=} opt_index
 * @return {!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct}
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.prototype.addBlockingissueset = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.nest.trait.security.SecurityIssuesAndExceptionsTrait} returns this
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.prototype.clearBlockingissuesetList = function() {
  return this.setBlockingissuesetList([]);
};


/**
 * repeated SecurityDecisionFact.SecurityDecisionFactStruct nonblockingIssueSet = 2;
 * @return {!Array<!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct>}
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.prototype.getNonblockingissuesetList = function() {
  return /** @type{!Array<!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct, 2));
};


/**
 * @param {!Array<!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct>} value
 * @return {!proto.nest.trait.security.SecurityIssuesAndExceptionsTrait} returns this
*/
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.prototype.setNonblockingissuesetList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct=} opt_value
 * @param {number=} opt_index
 * @return {!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct}
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.prototype.addNonblockingissueset = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.nest.trait.security.SecurityIssuesAndExceptionsTrait} returns this
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.prototype.clearNonblockingissuesetList = function() {
  return this.setNonblockingissuesetList([]);
};


/**
 * repeated SecurityDecisionFact.SecurityDecisionFactStruct exceptionSet = 3;
 * @return {!Array<!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct>}
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.prototype.getExceptionsetList = function() {
  return /** @type{!Array<!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct, 3));
};


/**
 * @param {!Array<!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct>} value
 * @return {!proto.nest.trait.security.SecurityIssuesAndExceptionsTrait} returns this
*/
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.prototype.setExceptionsetList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct=} opt_value
 * @param {number=} opt_index
 * @return {!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct}
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.prototype.addExceptionset = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactStruct, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.nest.trait.security.SecurityIssuesAndExceptionsTrait} returns this
 */
proto.nest.trait.security.SecurityIssuesAndExceptionsTrait.prototype.clearExceptionsetList = function() {
  return this.setExceptionsetList([]);
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
proto.nest.trait.security.SecurityActionOnNFCTokenSettingsTrait.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.SecurityActionOnNFCTokenSettingsTrait.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.SecurityActionOnNFCTokenSettingsTrait} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityActionOnNFCTokenSettingsTrait.toObject = function(includeInstance, msg) {
  var f, obj = {
    featureenabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.nest.trait.security.SecurityActionOnNFCTokenSettingsTrait}
 */
proto.nest.trait.security.SecurityActionOnNFCTokenSettingsTrait.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.SecurityActionOnNFCTokenSettingsTrait;
  return proto.nest.trait.security.SecurityActionOnNFCTokenSettingsTrait.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.SecurityActionOnNFCTokenSettingsTrait} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.SecurityActionOnNFCTokenSettingsTrait}
 */
proto.nest.trait.security.SecurityActionOnNFCTokenSettingsTrait.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFeatureenabled(value);
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
proto.nest.trait.security.SecurityActionOnNFCTokenSettingsTrait.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.SecurityActionOnNFCTokenSettingsTrait.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.SecurityActionOnNFCTokenSettingsTrait} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityActionOnNFCTokenSettingsTrait.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFeatureenabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool featureEnabled = 1;
 * @return {boolean}
 */
proto.nest.trait.security.SecurityActionOnNFCTokenSettingsTrait.prototype.getFeatureenabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.nest.trait.security.SecurityActionOnNFCTokenSettingsTrait} returns this
 */
proto.nest.trait.security.SecurityActionOnNFCTokenSettingsTrait.prototype.setFeatureenabled = function(value) {
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
proto.nest.trait.security.SecurityArmSettingsTrait.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.SecurityArmSettingsTrait.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.SecurityArmSettingsTrait} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityArmSettingsTrait.toObject = function(includeInstance, msg) {
  var f, obj = {
    exitallowanceduration: (f = msg.getExitallowanceduration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    armingrequiresauth: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    ignoringissuesrequiresauth: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    structuremodelinkingenabled: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    disarmondoorunlock: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
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
 * @return {!proto.nest.trait.security.SecurityArmSettingsTrait}
 */
proto.nest.trait.security.SecurityArmSettingsTrait.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.SecurityArmSettingsTrait;
  return proto.nest.trait.security.SecurityArmSettingsTrait.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.SecurityArmSettingsTrait} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.SecurityArmSettingsTrait}
 */
proto.nest.trait.security.SecurityArmSettingsTrait.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setExitallowanceduration(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setArmingrequiresauth(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIgnoringissuesrequiresauth(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStructuremodelinkingenabled(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisarmondoorunlock(value);
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
proto.nest.trait.security.SecurityArmSettingsTrait.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.SecurityArmSettingsTrait.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.SecurityArmSettingsTrait} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityArmSettingsTrait.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExitallowanceduration();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getArmingrequiresauth();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getIgnoringissuesrequiresauth();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getStructuremodelinkingenabled();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getDisarmondoorunlock();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional google.protobuf.Duration exitAllowanceDuration = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.nest.trait.security.SecurityArmSettingsTrait.prototype.getExitallowanceduration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.nest.trait.security.SecurityArmSettingsTrait} returns this
*/
proto.nest.trait.security.SecurityArmSettingsTrait.prototype.setExitallowanceduration = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.security.SecurityArmSettingsTrait} returns this
 */
proto.nest.trait.security.SecurityArmSettingsTrait.prototype.clearExitallowanceduration = function() {
  return this.setExitallowanceduration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.security.SecurityArmSettingsTrait.prototype.hasExitallowanceduration = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool armingRequiresAuth = 2;
 * @return {boolean}
 */
proto.nest.trait.security.SecurityArmSettingsTrait.prototype.getArmingrequiresauth = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.nest.trait.security.SecurityArmSettingsTrait} returns this
 */
proto.nest.trait.security.SecurityArmSettingsTrait.prototype.setArmingrequiresauth = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool ignoringIssuesRequiresAuth = 3;
 * @return {boolean}
 */
proto.nest.trait.security.SecurityArmSettingsTrait.prototype.getIgnoringissuesrequiresauth = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.nest.trait.security.SecurityArmSettingsTrait} returns this
 */
proto.nest.trait.security.SecurityArmSettingsTrait.prototype.setIgnoringissuesrequiresauth = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool structureModeLinkingEnabled = 4;
 * @return {boolean}
 */
proto.nest.trait.security.SecurityArmSettingsTrait.prototype.getStructuremodelinkingenabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.nest.trait.security.SecurityArmSettingsTrait} returns this
 */
proto.nest.trait.security.SecurityArmSettingsTrait.prototype.setStructuremodelinkingenabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool disarmOnDoorUnlock = 5;
 * @return {boolean}
 */
proto.nest.trait.security.SecurityArmSettingsTrait.prototype.getDisarmondoorunlock = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.nest.trait.security.SecurityArmSettingsTrait} returns this
 */
proto.nest.trait.security.SecurityArmSettingsTrait.prototype.setDisarmondoorunlock = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.nest.trait.security.EnhancedBoltLockSettingsTrait.repeatedFields_ = [32];



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
proto.nest.trait.security.EnhancedBoltLockSettingsTrait.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.EnhancedBoltLockSettingsTrait.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.EnhancedBoltLockSettingsTrait} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.EnhancedBoltLockSettingsTrait.toObject = function(includeInstance, msg) {
  var f, obj = {
    autorelockon: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    autorelockduration: (f = msg.getAutorelockduration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    ignoreautorelockonstructuremodeList: (f = jspb.Message.getRepeatedField(msg, 32)) == null ? undefined : f,
    onetouchlock: jspb.Message.getBooleanFieldWithDefault(msg, 33, false),
    homeawayassistlockon: jspb.Message.getBooleanFieldWithDefault(msg, 34, false)
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
 * @return {!proto.nest.trait.security.EnhancedBoltLockSettingsTrait}
 */
proto.nest.trait.security.EnhancedBoltLockSettingsTrait.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.EnhancedBoltLockSettingsTrait;
  return proto.nest.trait.security.EnhancedBoltLockSettingsTrait.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.EnhancedBoltLockSettingsTrait} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.EnhancedBoltLockSettingsTrait}
 */
proto.nest.trait.security.EnhancedBoltLockSettingsTrait.deserializeBinaryFromReader = function(msg, reader) {
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
    case 32:
      var values = /** @type {!Array<!proto.nest.trait.occupancy.StructureModeTrait.StructureMode>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addIgnoreautorelockonstructuremode(values[i]);
      }
      break;
    case 33:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOnetouchlock(value);
      break;
    case 34:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHomeawayassistlockon(value);
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
proto.nest.trait.security.EnhancedBoltLockSettingsTrait.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.EnhancedBoltLockSettingsTrait.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.EnhancedBoltLockSettingsTrait} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.EnhancedBoltLockSettingsTrait.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getIgnoreautorelockonstructuremodeList();
  if (f.length > 0) {
    writer.writePackedEnum(
      32,
      f
    );
  }
  f = message.getOnetouchlock();
  if (f) {
    writer.writeBool(
      33,
      f
    );
  }
  f = message.getHomeawayassistlockon();
  if (f) {
    writer.writeBool(
      34,
      f
    );
  }
};


/**
 * optional bool autoRelockOn = 1;
 * @return {boolean}
 */
proto.nest.trait.security.EnhancedBoltLockSettingsTrait.prototype.getAutorelockon = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.nest.trait.security.EnhancedBoltLockSettingsTrait} returns this
 */
proto.nest.trait.security.EnhancedBoltLockSettingsTrait.prototype.setAutorelockon = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional google.protobuf.Duration autoRelockDuration = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.nest.trait.security.EnhancedBoltLockSettingsTrait.prototype.getAutorelockduration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.nest.trait.security.EnhancedBoltLockSettingsTrait} returns this
*/
proto.nest.trait.security.EnhancedBoltLockSettingsTrait.prototype.setAutorelockduration = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.security.EnhancedBoltLockSettingsTrait} returns this
 */
proto.nest.trait.security.EnhancedBoltLockSettingsTrait.prototype.clearAutorelockduration = function() {
  return this.setAutorelockduration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.security.EnhancedBoltLockSettingsTrait.prototype.hasAutorelockduration = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated nest.trait.occupancy.StructureModeTrait.StructureMode ignoreAutoRelockOnStructureMode = 32;
 * @return {!Array<!proto.nest.trait.occupancy.StructureModeTrait.StructureMode>}
 */
proto.nest.trait.security.EnhancedBoltLockSettingsTrait.prototype.getIgnoreautorelockonstructuremodeList = function() {
  return /** @type {!Array<!proto.nest.trait.occupancy.StructureModeTrait.StructureMode>} */ (jspb.Message.getRepeatedField(this, 32));
};


/**
 * @param {!Array<!proto.nest.trait.occupancy.StructureModeTrait.StructureMode>} value
 * @return {!proto.nest.trait.security.EnhancedBoltLockSettingsTrait} returns this
 */
proto.nest.trait.security.EnhancedBoltLockSettingsTrait.prototype.setIgnoreautorelockonstructuremodeList = function(value) {
  return jspb.Message.setField(this, 32, value || []);
};


/**
 * @param {!proto.nest.trait.occupancy.StructureModeTrait.StructureMode} value
 * @param {number=} opt_index
 * @return {!proto.nest.trait.security.EnhancedBoltLockSettingsTrait} returns this
 */
proto.nest.trait.security.EnhancedBoltLockSettingsTrait.prototype.addIgnoreautorelockonstructuremode = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 32, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.nest.trait.security.EnhancedBoltLockSettingsTrait} returns this
 */
proto.nest.trait.security.EnhancedBoltLockSettingsTrait.prototype.clearIgnoreautorelockonstructuremodeList = function() {
  return this.setIgnoreautorelockonstructuremodeList([]);
};


/**
 * optional bool oneTouchLock = 33;
 * @return {boolean}
 */
proto.nest.trait.security.EnhancedBoltLockSettingsTrait.prototype.getOnetouchlock = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 33, false));
};


/**
 * @param {boolean} value
 * @return {!proto.nest.trait.security.EnhancedBoltLockSettingsTrait} returns this
 */
proto.nest.trait.security.EnhancedBoltLockSettingsTrait.prototype.setOnetouchlock = function(value) {
  return jspb.Message.setProto3BooleanField(this, 33, value);
};


/**
 * optional bool homeAwayAssistLockOn = 34;
 * @return {boolean}
 */
proto.nest.trait.security.EnhancedBoltLockSettingsTrait.prototype.getHomeawayassistlockon = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 34, false));
};


/**
 * @param {boolean} value
 * @return {!proto.nest.trait.security.EnhancedBoltLockSettingsTrait} returns this
 */
proto.nest.trait.security.EnhancedBoltLockSettingsTrait.prototype.setHomeawayassistlockon = function(value) {
  return jspb.Message.setProto3BooleanField(this, 34, value);
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
proto.nest.trait.security.SecurityActionOnNFCTokenGlobalSettingsTrait.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.SecurityActionOnNFCTokenGlobalSettingsTrait.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.SecurityActionOnNFCTokenGlobalSettingsTrait} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityActionOnNFCTokenGlobalSettingsTrait.toObject = function(includeInstance, msg) {
  var f, obj = {
    featureenabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.nest.trait.security.SecurityActionOnNFCTokenGlobalSettingsTrait}
 */
proto.nest.trait.security.SecurityActionOnNFCTokenGlobalSettingsTrait.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.SecurityActionOnNFCTokenGlobalSettingsTrait;
  return proto.nest.trait.security.SecurityActionOnNFCTokenGlobalSettingsTrait.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.SecurityActionOnNFCTokenGlobalSettingsTrait} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.SecurityActionOnNFCTokenGlobalSettingsTrait}
 */
proto.nest.trait.security.SecurityActionOnNFCTokenGlobalSettingsTrait.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFeatureenabled(value);
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
proto.nest.trait.security.SecurityActionOnNFCTokenGlobalSettingsTrait.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.SecurityActionOnNFCTokenGlobalSettingsTrait.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.SecurityActionOnNFCTokenGlobalSettingsTrait} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityActionOnNFCTokenGlobalSettingsTrait.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFeatureenabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool featureEnabled = 1;
 * @return {boolean}
 */
proto.nest.trait.security.SecurityActionOnNFCTokenGlobalSettingsTrait.prototype.getFeatureenabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.nest.trait.security.SecurityActionOnNFCTokenGlobalSettingsTrait} returns this
 */
proto.nest.trait.security.SecurityActionOnNFCTokenGlobalSettingsTrait.prototype.setFeatureenabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.nest.trait.security.SecurityAlarmingSettingsTrait.repeatedFields_ = [4];



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
proto.nest.trait.security.SecurityAlarmingSettingsTrait.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.SecurityAlarmingSettingsTrait.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.SecurityAlarmingSettingsTrait} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityAlarmingSettingsTrait.toObject = function(includeInstance, msg) {
  var f, obj = {
    prealarmingduration: (f = msg.getPrealarmingduration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    prealarmingdurationsl1: (f = msg.getPrealarmingdurationsl1()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    customprealarmdurationrulesMap: (f = msg.getCustomprealarmdurationrulesMap()) ? f.toObject(includeInstance, proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule.toObject) : [],
    advancedmodeexceptionsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.nest.trait.security.SecurityAlarmingSettingsTrait}
 */
proto.nest.trait.security.SecurityAlarmingSettingsTrait.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.SecurityAlarmingSettingsTrait;
  return proto.nest.trait.security.SecurityAlarmingSettingsTrait.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.SecurityAlarmingSettingsTrait} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.SecurityAlarmingSettingsTrait}
 */
proto.nest.trait.security.SecurityAlarmingSettingsTrait.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setPrealarmingduration(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setPrealarmingdurationsl1(value);
      break;
    case 3:
      var value = msg.getCustomprealarmdurationrulesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readUint32, jspb.BinaryReader.prototype.readMessage, proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule.deserializeBinaryFromReader, 0, new proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule());
         });
      break;
    case 4:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint32() : [reader.readUint32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addAdvancedmodeexceptions(values[i]);
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
proto.nest.trait.security.SecurityAlarmingSettingsTrait.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.SecurityAlarmingSettingsTrait.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.SecurityAlarmingSettingsTrait} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityAlarmingSettingsTrait.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrealarmingduration();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getPrealarmingdurationsl1();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getCustomprealarmdurationrulesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeUint32, jspb.BinaryWriter.prototype.writeMessage, proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule.serializeBinaryToWriter);
  }
  f = message.getAdvancedmodeexceptionsList();
  if (f.length > 0) {
    writer.writePackedUint32(
      4,
      f
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
proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule.toObject = function(includeInstance, msg) {
  var f, obj = {
    deviceid: (f = msg.getDeviceid()) && weave_common_pb.ResourceId.toObject(includeInstance, f),
    state: jspb.Message.getFieldWithDefault(msg, 2, 0),
    facttype: jspb.Message.getFieldWithDefault(msg, 3, 0),
    prealarmduration: (f = msg.getPrealarmduration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule}
 */
proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule;
  return proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule}
 */
proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.nest.trait.security.SecurityArmTrait.SecurityArmState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 3:
      var value = /** @type {!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactType} */ (reader.readEnum());
      msg.setFacttype(value);
      break;
    case 4:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setPrealarmduration(value);
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
proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeviceid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      weave_common_pb.ResourceId.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getFacttype();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getPrealarmduration();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional weave.common.ResourceId deviceId = 1;
 * @return {?proto.weave.common.ResourceId}
 */
proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule.prototype.getDeviceid = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 1));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule} returns this
*/
proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule.prototype.setDeviceid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule} returns this
 */
proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule.prototype.clearDeviceid = function() {
  return this.setDeviceid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule.prototype.hasDeviceid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SecurityArmTrait.SecurityArmState state = 2;
 * @return {!proto.nest.trait.security.SecurityArmTrait.SecurityArmState}
 */
proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule.prototype.getState = function() {
  return /** @type {!proto.nest.trait.security.SecurityArmTrait.SecurityArmState} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.nest.trait.security.SecurityArmTrait.SecurityArmState} value
 * @return {!proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule} returns this
 */
proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional SecurityDecisionFact.SecurityDecisionFactType factType = 3;
 * @return {!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactType}
 */
proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule.prototype.getFacttype = function() {
  return /** @type {!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.nest.trait.security.SecurityDecisionFact.SecurityDecisionFactType} value
 * @return {!proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule} returns this
 */
proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule.prototype.setFacttype = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional google.protobuf.Duration prealarmDuration = 4;
 * @return {?proto.google.protobuf.Duration}
 */
proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule.prototype.getPrealarmduration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 4));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule} returns this
*/
proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule.prototype.setPrealarmduration = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule} returns this
 */
proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule.prototype.clearPrealarmduration = function() {
  return this.setPrealarmduration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule.prototype.hasPrealarmduration = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Duration prealarmingDuration = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.nest.trait.security.SecurityAlarmingSettingsTrait.prototype.getPrealarmingduration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.nest.trait.security.SecurityAlarmingSettingsTrait} returns this
*/
proto.nest.trait.security.SecurityAlarmingSettingsTrait.prototype.setPrealarmingduration = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.security.SecurityAlarmingSettingsTrait} returns this
 */
proto.nest.trait.security.SecurityAlarmingSettingsTrait.prototype.clearPrealarmingduration = function() {
  return this.setPrealarmingduration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.security.SecurityAlarmingSettingsTrait.prototype.hasPrealarmingduration = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration prealarmingDurationSl1 = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.nest.trait.security.SecurityAlarmingSettingsTrait.prototype.getPrealarmingdurationsl1 = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.nest.trait.security.SecurityAlarmingSettingsTrait} returns this
*/
proto.nest.trait.security.SecurityAlarmingSettingsTrait.prototype.setPrealarmingdurationsl1 = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.security.SecurityAlarmingSettingsTrait} returns this
 */
proto.nest.trait.security.SecurityAlarmingSettingsTrait.prototype.clearPrealarmingdurationsl1 = function() {
  return this.setPrealarmingdurationsl1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.security.SecurityAlarmingSettingsTrait.prototype.hasPrealarmingdurationsl1 = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * map<uint32, CustomPreAlarmRule> customPrealarmDurationRules = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule>}
 */
proto.nest.trait.security.SecurityAlarmingSettingsTrait.prototype.getCustomprealarmdurationrulesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      proto.nest.trait.security.SecurityAlarmingSettingsTrait.CustomPreAlarmRule));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.nest.trait.security.SecurityAlarmingSettingsTrait} returns this
 */
proto.nest.trait.security.SecurityAlarmingSettingsTrait.prototype.clearCustomprealarmdurationrulesMap = function() {
  this.getCustomprealarmdurationrulesMap().clear();
  return this;};


/**
 * repeated uint32 advancedModeExceptions = 4;
 * @return {!Array<number>}
 */
proto.nest.trait.security.SecurityAlarmingSettingsTrait.prototype.getAdvancedmodeexceptionsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.nest.trait.security.SecurityAlarmingSettingsTrait} returns this
 */
proto.nest.trait.security.SecurityAlarmingSettingsTrait.prototype.setAdvancedmodeexceptionsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.nest.trait.security.SecurityAlarmingSettingsTrait} returns this
 */
proto.nest.trait.security.SecurityAlarmingSettingsTrait.prototype.addAdvancedmodeexceptions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.nest.trait.security.SecurityAlarmingSettingsTrait} returns this
 */
proto.nest.trait.security.SecurityAlarmingSettingsTrait.prototype.clearAdvancedmodeexceptionsList = function() {
  return this.setAdvancedmodeexceptionsList([]);
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
proto.nest.trait.security.SecurityArmCommandSettingsTrait.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.SecurityArmCommandSettingsTrait.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.SecurityArmCommandSettingsTrait} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityArmCommandSettingsTrait.toObject = function(includeInstance, msg) {
  var f, obj = {
    timeout: (f = msg.getTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.nest.trait.security.SecurityArmCommandSettingsTrait}
 */
proto.nest.trait.security.SecurityArmCommandSettingsTrait.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.SecurityArmCommandSettingsTrait;
  return proto.nest.trait.security.SecurityArmCommandSettingsTrait.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.SecurityArmCommandSettingsTrait} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.SecurityArmCommandSettingsTrait}
 */
proto.nest.trait.security.SecurityArmCommandSettingsTrait.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeout(value);
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
proto.nest.trait.security.SecurityArmCommandSettingsTrait.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.SecurityArmCommandSettingsTrait.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.SecurityArmCommandSettingsTrait} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityArmCommandSettingsTrait.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimeout();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Duration timeout = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.nest.trait.security.SecurityArmCommandSettingsTrait.prototype.getTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.nest.trait.security.SecurityArmCommandSettingsTrait} returns this
*/
proto.nest.trait.security.SecurityArmCommandSettingsTrait.prototype.setTimeout = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.security.SecurityArmCommandSettingsTrait} returns this
 */
proto.nest.trait.security.SecurityArmCommandSettingsTrait.prototype.clearTimeout = function() {
  return this.setTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.security.SecurityArmCommandSettingsTrait.prototype.hasTimeout = function() {
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
proto.nest.trait.security.SecurityOpenCloseTrait.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.SecurityOpenCloseTrait.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.SecurityOpenCloseTrait} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityOpenCloseTrait.toObject = function(includeInstance, msg) {
  var f, obj = {
    openclosestate: jspb.Message.getFieldWithDefault(msg, 1, 0),
    firstobservedat: (f = msg.getFirstobservedat()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    firstobservedatms: (f = msg.getFirstobservedatms()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    bypassrequested: jspb.Message.getBooleanFieldWithDefault(msg, 32, false)
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
 * @return {!proto.nest.trait.security.SecurityOpenCloseTrait}
 */
proto.nest.trait.security.SecurityOpenCloseTrait.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.SecurityOpenCloseTrait;
  return proto.nest.trait.security.SecurityOpenCloseTrait.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.SecurityOpenCloseTrait} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.SecurityOpenCloseTrait}
 */
proto.nest.trait.security.SecurityOpenCloseTrait.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.nest.trait.detector.OpenCloseTrait.OpenCloseState} */ (reader.readEnum());
      msg.setOpenclosestate(value);
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
    case 32:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBypassrequested(value);
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
proto.nest.trait.security.SecurityOpenCloseTrait.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.SecurityOpenCloseTrait.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.SecurityOpenCloseTrait} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityOpenCloseTrait.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpenclosestate();
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
  f = message.getBypassrequested();
  if (f) {
    writer.writeBool(
      32,
      f
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
proto.nest.trait.security.SecurityOpenCloseTrait.SecurityOpenCloseEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.SecurityOpenCloseTrait.SecurityOpenCloseEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.SecurityOpenCloseTrait.SecurityOpenCloseEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityOpenCloseTrait.SecurityOpenCloseEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    openclosestate: jspb.Message.getFieldWithDefault(msg, 1, 0),
    prioropenclosestate: jspb.Message.getFieldWithDefault(msg, 2, 0),
    bypassrequested: jspb.Message.getBooleanFieldWithDefault(msg, 32, false)
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
 * @return {!proto.nest.trait.security.SecurityOpenCloseTrait.SecurityOpenCloseEvent}
 */
proto.nest.trait.security.SecurityOpenCloseTrait.SecurityOpenCloseEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.SecurityOpenCloseTrait.SecurityOpenCloseEvent;
  return proto.nest.trait.security.SecurityOpenCloseTrait.SecurityOpenCloseEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.SecurityOpenCloseTrait.SecurityOpenCloseEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.SecurityOpenCloseTrait.SecurityOpenCloseEvent}
 */
proto.nest.trait.security.SecurityOpenCloseTrait.SecurityOpenCloseEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.nest.trait.detector.OpenCloseTrait.OpenCloseState} */ (reader.readEnum());
      msg.setOpenclosestate(value);
      break;
    case 2:
      var value = /** @type {!proto.nest.trait.detector.OpenCloseTrait.OpenCloseState} */ (reader.readEnum());
      msg.setPrioropenclosestate(value);
      break;
    case 32:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBypassrequested(value);
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
proto.nest.trait.security.SecurityOpenCloseTrait.SecurityOpenCloseEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.SecurityOpenCloseTrait.SecurityOpenCloseEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.SecurityOpenCloseTrait.SecurityOpenCloseEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityOpenCloseTrait.SecurityOpenCloseEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpenclosestate();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPrioropenclosestate();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getBypassrequested();
  if (f) {
    writer.writeBool(
      32,
      f
    );
  }
};


/**
 * optional nest.trait.detector.OpenCloseTrait.OpenCloseState openCloseState = 1;
 * @return {!proto.nest.trait.detector.OpenCloseTrait.OpenCloseState}
 */
proto.nest.trait.security.SecurityOpenCloseTrait.SecurityOpenCloseEvent.prototype.getOpenclosestate = function() {
  return /** @type {!proto.nest.trait.detector.OpenCloseTrait.OpenCloseState} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.nest.trait.detector.OpenCloseTrait.OpenCloseState} value
 * @return {!proto.nest.trait.security.SecurityOpenCloseTrait.SecurityOpenCloseEvent} returns this
 */
proto.nest.trait.security.SecurityOpenCloseTrait.SecurityOpenCloseEvent.prototype.setOpenclosestate = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional nest.trait.detector.OpenCloseTrait.OpenCloseState priorOpenCloseState = 2;
 * @return {!proto.nest.trait.detector.OpenCloseTrait.OpenCloseState}
 */
proto.nest.trait.security.SecurityOpenCloseTrait.SecurityOpenCloseEvent.prototype.getPrioropenclosestate = function() {
  return /** @type {!proto.nest.trait.detector.OpenCloseTrait.OpenCloseState} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.nest.trait.detector.OpenCloseTrait.OpenCloseState} value
 * @return {!proto.nest.trait.security.SecurityOpenCloseTrait.SecurityOpenCloseEvent} returns this
 */
proto.nest.trait.security.SecurityOpenCloseTrait.SecurityOpenCloseEvent.prototype.setPrioropenclosestate = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional bool bypassRequested = 32;
 * @return {boolean}
 */
proto.nest.trait.security.SecurityOpenCloseTrait.SecurityOpenCloseEvent.prototype.getBypassrequested = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 32, false));
};


/**
 * @param {boolean} value
 * @return {!proto.nest.trait.security.SecurityOpenCloseTrait.SecurityOpenCloseEvent} returns this
 */
proto.nest.trait.security.SecurityOpenCloseTrait.SecurityOpenCloseEvent.prototype.setBypassrequested = function(value) {
  return jspb.Message.setProto3BooleanField(this, 32, value);
};


/**
 * optional nest.trait.detector.OpenCloseTrait.OpenCloseState openCloseState = 1;
 * @return {!proto.nest.trait.detector.OpenCloseTrait.OpenCloseState}
 */
proto.nest.trait.security.SecurityOpenCloseTrait.prototype.getOpenclosestate = function() {
  return /** @type {!proto.nest.trait.detector.OpenCloseTrait.OpenCloseState} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.nest.trait.detector.OpenCloseTrait.OpenCloseState} value
 * @return {!proto.nest.trait.security.SecurityOpenCloseTrait} returns this
 */
proto.nest.trait.security.SecurityOpenCloseTrait.prototype.setOpenclosestate = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp firstObservedAt = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.nest.trait.security.SecurityOpenCloseTrait.prototype.getFirstobservedat = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.nest.trait.security.SecurityOpenCloseTrait} returns this
*/
proto.nest.trait.security.SecurityOpenCloseTrait.prototype.setFirstobservedat = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.security.SecurityOpenCloseTrait} returns this
 */
proto.nest.trait.security.SecurityOpenCloseTrait.prototype.clearFirstobservedat = function() {
  return this.setFirstobservedat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.security.SecurityOpenCloseTrait.prototype.hasFirstobservedat = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp firstObservedAtMs = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.nest.trait.security.SecurityOpenCloseTrait.prototype.getFirstobservedatms = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.nest.trait.security.SecurityOpenCloseTrait} returns this
*/
proto.nest.trait.security.SecurityOpenCloseTrait.prototype.setFirstobservedatms = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.security.SecurityOpenCloseTrait} returns this
 */
proto.nest.trait.security.SecurityOpenCloseTrait.prototype.clearFirstobservedatms = function() {
  return this.setFirstobservedatms(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.security.SecurityOpenCloseTrait.prototype.hasFirstobservedatms = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool bypassRequested = 32;
 * @return {boolean}
 */
proto.nest.trait.security.SecurityOpenCloseTrait.prototype.getBypassrequested = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 32, false));
};


/**
 * @param {boolean} value
 * @return {!proto.nest.trait.security.SecurityOpenCloseTrait} returns this
 */
proto.nest.trait.security.SecurityOpenCloseTrait.prototype.setBypassrequested = function(value) {
  return jspb.Message.setProto3BooleanField(this, 32, value);
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
proto.nest.trait.security.DistributedSecurityTrait.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.DistributedSecurityTrait.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.DistributedSecurityTrait} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.DistributedSecurityTrait.toObject = function(includeInstance, msg) {
  var f, obj = {
    master: (f = msg.getMaster()) && weave_common_pb.ResourceId.toObject(includeInstance, f)
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
 * @return {!proto.nest.trait.security.DistributedSecurityTrait}
 */
proto.nest.trait.security.DistributedSecurityTrait.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.DistributedSecurityTrait;
  return proto.nest.trait.security.DistributedSecurityTrait.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.DistributedSecurityTrait} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.DistributedSecurityTrait}
 */
proto.nest.trait.security.DistributedSecurityTrait.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new weave_common_pb.ResourceId;
      reader.readMessage(value,weave_common_pb.ResourceId.deserializeBinaryFromReader);
      msg.setMaster(value);
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
proto.nest.trait.security.DistributedSecurityTrait.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.DistributedSecurityTrait.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.DistributedSecurityTrait} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.DistributedSecurityTrait.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaster();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      weave_common_pb.ResourceId.serializeBinaryToWriter
    );
  }
};


/**
 * optional weave.common.ResourceId master = 1;
 * @return {?proto.weave.common.ResourceId}
 */
proto.nest.trait.security.DistributedSecurityTrait.prototype.getMaster = function() {
  return /** @type{?proto.weave.common.ResourceId} */ (
    jspb.Message.getWrapperField(this, weave_common_pb.ResourceId, 1));
};


/**
 * @param {?proto.weave.common.ResourceId|undefined} value
 * @return {!proto.nest.trait.security.DistributedSecurityTrait} returns this
*/
proto.nest.trait.security.DistributedSecurityTrait.prototype.setMaster = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.nest.trait.security.DistributedSecurityTrait} returns this
 */
proto.nest.trait.security.DistributedSecurityTrait.prototype.clearMaster = function() {
  return this.setMaster(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.security.DistributedSecurityTrait.prototype.hasMaster = function() {
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
proto.nest.trait.security.SecurityActionOnUnlockSettingsTrait.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.security.SecurityActionOnUnlockSettingsTrait.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.security.SecurityActionOnUnlockSettingsTrait} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityActionOnUnlockSettingsTrait.toObject = function(includeInstance, msg) {
  var f, obj = {
    enabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    action: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.nest.trait.security.SecurityActionOnUnlockSettingsTrait}
 */
proto.nest.trait.security.SecurityActionOnUnlockSettingsTrait.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.security.SecurityActionOnUnlockSettingsTrait;
  return proto.nest.trait.security.SecurityActionOnUnlockSettingsTrait.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.security.SecurityActionOnUnlockSettingsTrait} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.security.SecurityActionOnUnlockSettingsTrait}
 */
proto.nest.trait.security.SecurityActionOnUnlockSettingsTrait.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 2:
      var value = /** @type {!proto.nest.trait.security.SecurityActionOnUnlockSettingsTrait.SecurityAction} */ (reader.readEnum());
      msg.setAction(value);
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
proto.nest.trait.security.SecurityActionOnUnlockSettingsTrait.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.security.SecurityActionOnUnlockSettingsTrait.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.security.SecurityActionOnUnlockSettingsTrait} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.security.SecurityActionOnUnlockSettingsTrait.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.nest.trait.security.SecurityActionOnUnlockSettingsTrait.SecurityAction = {
  SECURITY_ACTION_UNSPECIFIED: 0,
  SECURITY_ACTION_DISARM_TO_SL0: 1
};

/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.nest.trait.security.SecurityActionOnUnlockSettingsTrait.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.nest.trait.security.SecurityActionOnUnlockSettingsTrait} returns this
 */
proto.nest.trait.security.SecurityActionOnUnlockSettingsTrait.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional SecurityAction action = 2;
 * @return {!proto.nest.trait.security.SecurityActionOnUnlockSettingsTrait.SecurityAction}
 */
proto.nest.trait.security.SecurityActionOnUnlockSettingsTrait.prototype.getAction = function() {
  return /** @type {!proto.nest.trait.security.SecurityActionOnUnlockSettingsTrait.SecurityAction} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.nest.trait.security.SecurityActionOnUnlockSettingsTrait.SecurityAction} value
 * @return {!proto.nest.trait.security.SecurityActionOnUnlockSettingsTrait} returns this
 */
proto.nest.trait.security.SecurityActionOnUnlockSettingsTrait.prototype.setAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


goog.object.extend(exports, proto.nest.trait.security);
