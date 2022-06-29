import * as webRTCGroupCallHandler from "../utils/webRTC/webRTCGroupCallHandler";
import MusicArea from "./components/MusicArea/MusicArea";
import Chattingarea from "./components/ChattingArea/Chattingarea";
import { Controlarea } from "./components/ControlArea/Controlarea";
import { SpotifyLoginButton } from "../UI/ControlButtons";
import "./Dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import Room from "./components/Room/Room";
import { useEffect, useState } from "react";
import { setSpotifyApp } from "../store/actions/dashboardActions";
import axios from "axios";
import { setTurnServers } from "../utils/webRTC/TURN";
const Dashboard = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const dashboardState = useSelector((state) => state.dashboardReducer);
  const callState = useSelector((state) => state.groupcallReducer);
  let customStyle = {
    height: dashboardState.showMusicPlayer ? "90vh" : "100vh",
  };
  useEffect(() => {
    //Uncomment When Done!!!
    axios
      .get(
        "https://quarantine-workstation-server.herokuapp.com/api/get-turn-credentials"
      )
      .then((responseData) => {
        console.log(responseData);
        setTurnServers(responseData.data.token.iceServers);
        webRTCGroupCallHandler.getLocalStream();
        webRTCGroupCallHandler.connectWithMyPeer();
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="main-container" style={customStyle}>
        {dashboardState.showChat && (
          <div className="upper-container">
            <Chattingarea
              curruser={dashboardState.username}
              socket={props.socket}
            />
          </div>
        )}
        <div className="Video-Section">
          <div id="controlarea" className="controlarea-container">
            <Controlarea
              className="control-area"
              style={customStyle}
              socket={props.socket}
              localStream={callState.localStream}
            />
          </div>
        </div>
      </div>
      {
        <div className="lower-container">
          {<MusicArea className="music-area" code={location.state.code} />}
        </div>
      }
    </>
  );
};
export default Dashboard;
