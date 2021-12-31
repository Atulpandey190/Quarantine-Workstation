import Roommembers from "./components/RoomMembers/Roommembers";
import MusicArea from "./components/MusicArea/MusicArea";
import Chattingarea from "./components/ChattingArea/Chattingarea";
import { Controlarea } from "./components/ControlArea/Controlarea";
import Button from "react-bootstrap/Button";
import "./Dashboard.css";
import { useSelector } from "react-redux";
const code = new URLSearchParams(window.location.search).get("code");
const Dashboard = (props) => {
  const { AUTH_URL } = props;
  const dashboardState = useSelector((state) => state.dashboardReducer);
  console.log(dashboardState.username);
  return (
    <>
      <h1>{dashboardState.username}</h1>
      <div className="upper-container">
        <Roommembers className="room-members" />
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
