import * as webRTCGroupCallHandler from "../utils/webRTC/webRTCGroupCallHandler";
import MusicArea from "./components/MusicArea/MusicArea";
import Chattingarea from "./components/ChattingArea/Chattingarea";
import { Controlarea } from "./components/ControlArea/Controlarea";
import { SpotifyLoginButton } from "../UI/ControlButtons";
import "./Dashboard.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Room from "./components/Room/Room";
import { useEffect } from "react";

const code = new URLSearchParams(window.location.search).get("code");
const Dashboard = (props) => {
  let navigate = useNavigate();
  const { AUTH_URL } = props;
  const dashboardState = useSelector((state) => state.dashboardReducer);
  const callState = useSelector((state) => state.groupcallReducer);
  let customStyle = {
    height: dashboardState.showMusicPlayer ? "90vh" : "100vh",
  };
  useEffect(() => {
    //Uncomment When Done!!!
    webRTCGroupCallHandler.connectWithMyPeer();
    webRTCGroupCallHandler.getLocalStream();
  }, []);

  useEffect(() => {
    if (dashboardState.username == "" || dashboardState.username == null) {
      navigate("/", { replace: true });
    }
  }, [dashboardState.username]);

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
      {dashboardState.showMusicPlayer && (
        <div className="lower-container">
          {code ? (
            <MusicArea className="music-area" code={code} />
          ) : (
            <div className="spotify-button-container">
              <SpotifyLoginButton AUTH_URL={AUTH_URL} />
            </div>
          )}
        </div>
      )}
    </>
  );
};
export default Dashboard;
