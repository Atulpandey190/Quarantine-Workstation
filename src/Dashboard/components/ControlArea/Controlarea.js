import React, { useEffect, useContext, useState } from "react";
import "./Controlarea.css";
import { MicFill, GearFill, CameraVideoFill } from "react-bootstrap-icons";
import ActiveUsersList from "../ActiveUsers/ActiveUsersList";
import { useDispatch, useSelector } from "react-redux";
import {
  setLocalCameraEnabled,
  setLocalMicrophoneEnabled,
} from "../../../store/actions/groupCallActions";
export function Controlarea({ localStream }) {
  const dispatch = useDispatch();
  const callState = useSelector((state) => state.groupcallReducer);
  const handleCameraButtonPressed = () => {
    const cameraEnabled = callState.localCameraEnabled;
    localStream.getVideoTracks()[0].enabled = !cameraEnabled;
    dispatch(setLocalCameraEnabled(!cameraEnabled));
  };
  const handleMicButtonPressed = () => {
    const micEnabled = callState.localMicrophoneEnabled;
    localStream.getAudioTracks()[0].enabled = !micEnabled;
    dispatch(setLocalMicrophoneEnabled(!micEnabled));
    console.log(micEnabled);
  };
  return (
    <div className="control-area">
      <ActiveUsersList />
      <div className="icons-area">
        <MicFill
          className=" first"
          size={25}
          onClick={handleMicButtonPressed}
        />
        <CameraVideoFill
          className="icon second"
          size={25}
          onClick={handleCameraButtonPressed}
        />
        <GearFill className="icon third" size={25} />
      </div>
    </div>
  );
}
