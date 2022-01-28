import * as webRTCGroupCallHandler from "../utils/webRTC/webRTCGroupCallHandler";
import MusicArea from "./components/MusicArea/MusicArea";
import Chattingarea from "./components/ChattingArea/Chattingarea";
import { Controlarea } from "./components/ControlArea/Controlarea";
import Button from "react-bootstrap/Button";
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
    webRTCGroupCallHandler.connectWithMyPeer();
  }, []);
  return (
    <>
      <h1>{dashboardState.username}</h1>
      <div className="upper-container">
        <Room callState={callState} />
        <Chattingarea
          className="chatting-area"
          curruser={dashboardState.username}
        />
        <Controlarea className="control-area" socket={props.socket} />
      </div>
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
      </div>
    </>
  );
};
export default Dashboard;
