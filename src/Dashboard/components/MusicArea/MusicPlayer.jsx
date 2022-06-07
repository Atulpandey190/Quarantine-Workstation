import React, { useState } from "react";
import "./MusicPlayer.css";
import Player from "./Player";

function MusicPlayer({ accessToken, playingTrack, setPlayingTrack }) {
  const [value, setValue] = useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="player">
     { <Player accessToken={accessToken} trackUri={playingTrack?.uri} />}
    </div>
  );
}

export default MusicPlayer;
