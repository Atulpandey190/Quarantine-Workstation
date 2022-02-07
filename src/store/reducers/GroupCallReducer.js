import * as callActions from "../actions/groupCallActions";
const initState = {
  roomMembers: {},
  callState: callActions.callStates.CALL_AVAILABLE,
  localStream: null,
  groupCallStreams: [],
  groupCallActive: false,
  localCameraEnabled: true,
  localMicrophoneEnabled: true,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case callActions.CALL_SET_CALL_STATE:
      return {
        ...state,
        callState: action.callState,
      };
    case callActions.CALL_SET_GROUP_CALL_LOCAL_STREAM:
      return {
        ...state,
        localStream: action.localStream,
      };
    case callActions.CALL_SET_GROUP_CALL_ACTIVE:
      return {
        ...state,
        groupCallActive: action.active,
      };
    case callActions.CALL_SET_GROUP_CALL_STREAMS:
      return {
        ...state,
        groupCallStreams: action.groupCallStreams,
      };
    case callActions.CALL_SET_LOCAL_MICROPHONE_ENABLED:
      return {
        ...state,
        localMicrophoneEnabled: action.enabled,
      };
    case callActions.CALL_SET_LOCAL_CAMERA_ENABLED:
      return {
        ...state,
        localCameraEnabled: action.enabled,
      };
    case callActions.CALL_CLEAR_GROUP_CALL_DATA:
      return {
        ...state,
        groupCallActive: false,
        groupCallStreams: [],
        callState: callActions.callStates.CALL_AVAILABLE,
        localMicrophoneEnabled: false,
        localCameraEnabled: false,
      };
    default:
      return state;
  }
};

export default reducer;
