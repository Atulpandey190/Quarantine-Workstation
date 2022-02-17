import * as webRTCGroupCallHandler from "../utils/webRTC/webRTCGroupCallHandler";
import MusicArea from "./components/MusicArea/MusicArea";
import Chattingarea from "./components/ChattingArea/Chattingarea";
import { Controlarea } from "./components/ControlArea/Controlarea";
import "./Dashboard.css";
import { useSelector } from "react-redux";
import Room from "./components/Room/Room";
import { useEffect } from "react";

const code = new URLSearchParams(window.location.search).get("code");
const Dashboard = (props) => {
  const { AUTH_URL } = props;
  const dashboardState = useSelector((state) => state.dashboardReducer);
  const callState = useSelector((state) => state.groupcallReducer);
  useEffect(() => {
    //Uncomment When Done!!!
    webRTCGroupCallHandler.connectWithMyPeer();
    webRTCGroupCallHandler.getLocalStream();
  }, []);

  return (
    <>
      <div className="main-container">
        <div className="upper-container">
          <Chattingarea
            className="chatting-area"
            curruser={dashboardState.username}
          />
        </div>
        <div className="Video-Section">
          <div id="controlarea" className="controlarea-container">
            <Controlarea
              className="control-area"
              socket={props.socket}
              localStream={callState.localStream}
            />
          </div>
        </div>
      </div>
      {/** 
        <div className="lower-container">
          {code ? (
            <MusicArea className="music-area" code={code} />
          ) : (
            <Button
              style={{ position: "absolute", top: "50%", marginLeft: "45%" }}
              variant="warning"
              href={AUTH_URL}
            >
              Login Spotify
            </Button>
          )}
        </div>**/}
    </>
  );
};
export default Dashboard;
