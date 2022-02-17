import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setLocalCameraEnabled,
  setLocalMicrophoneEnabled,
} from "../store/actions/groupCallActions";
import { setGroupCallRoom } from "../store/actions/dashboardActions";
import * as webRTCGroupCallHandler from "../utils/webRTC/webRTCGroupCallHandler";
import "./ControlButtons.css";
const style = {};

export const CameraButton = ({ localStream }) => {
  const dispatch = useDispatch();
  const callState = useSelector((state) => state.groupcallReducer);
  const handleCameraButtonPressed = () => {
    const cameraEnabled = callState.localCameraEnabled;
    localStream.getVideoTracks()[0].enabled = !cameraEnabled;
    dispatch(setLocalCameraEnabled(!cameraEnabled));
  };
  return (
    <div
      style={style}
      onClick={handleCameraButtonPressed}
      className="control-btn"
    >
      {callState.localCameraEnabled ? (
        <i className="fas fa-camera" style={{ color: "green" }}></i>
      ) : (
        <i className="fas fa-camera" style={{ color: "red" }}></i>
      )}
    </div>
  );
};

export const MicButton = ({ localStream }) => {
  const dispatch = useDispatch();
  const callState = useSelector((state) => state.groupcallReducer);
  const handleMicButtonPressed = () => {
    const micEnabled = callState.localMicrophoneEnabled;
    localStream.getAudioTracks()[0].enabled = !micEnabled;
    dispatch(setLocalMicrophoneEnabled(!micEnabled));
  };
  return (
    <div style={style} onClick={handleMicButtonPressed} className="control-btn">
      {callState.localMicrophoneEnabled ? (
        <i
          className="fas fa-microphone"
          style={{ color: "green", padding: "auto" }}
        ></i>
      ) : (
        <i className="fas fa-microphone" style={{ color: "red" }}></i>
      )}
    </div>
  );
};

export const LeaveButton = () => {
  const dispatch = useDispatch();
  const leaveRoom = (e) => {
    e.preventDefault();
    dispatch(setGroupCallRoom(""));
    webRTCGroupCallHandler.leaveGroupCall();
  };
  return (
    <>
      <button className="leave-btn" onClick={(e) => leaveRoom(e)}>
        Leave Group Call
      </button>
    </>
  );
};
