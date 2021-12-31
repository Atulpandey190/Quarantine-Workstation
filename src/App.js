import Roommembers from "./Roommembers";
import MusicArea from "./MusicArea";
import Chattingarea from "./Chattingarea";
import Controlarea from "./Controlarea";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Button from 'react-bootstrap/Button';
const code = new URLSearchParams(window.location.search).get("code");
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;
function App() {
  return (
    <div className="App">
      <div className="upper-container">
        <Roommembers className="room-members" />
        <Chattingarea className="chatting-area" />
        <Controlarea className="control-area" />
      </div>
      <div className="lower-container">
        {code ? (
          <MusicArea className="music-area" code={code} />
        ) : (
          <Button style={{position:'absolute',top:'50%',marginLeft:'45%'}} variant='warning' href={AUTH_URL}>Login Spotify</Button>
        )}
      </div>
    </div>
  );
}

export default App;
