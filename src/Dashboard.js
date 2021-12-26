import Roommembers from "./Roommembers";
import MusicArea from "./MusicArea";
import Chattingarea from "./Chattingarea";
import Controlarea from "./Controlarea";
import Button from "react-bootstrap/Button";
import "./Dashboard.css";
const code = new URLSearchParams(window.location.search).get("code");
const Dashboard = (props) => {
  const { AUTH_URL } = props;
  return (
    <>
      <div className="upper-container">
        <Roommembers className="room-members" />
        <Chattingarea className="chatting-area" />
        <Controlarea className="control-area" />
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
