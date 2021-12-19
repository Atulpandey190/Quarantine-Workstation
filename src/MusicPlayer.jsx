import React, { useState } from "react";
import "./MusicPlayer.css";
import PlayerButtons from "./PlayerButtons";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import SongDetails from "./SongDetails";
function MusicPlayer({ playingTrack, setPlayingTrack }) {
  const [value, setValue] = useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(playingTrack);
  return (
    <div className="player">
      <SongDetails />
      <PlayerButtons />
      <div style={{ color: "white" }} className="volume-control">
        <VolumeDown style={{ marginRight: "10px", padding: "5px" }} />
        <Slider
          style={{ color: "#EADEDE" }}
          value={value}
          onChange={handleChange}
          aria-label="Disabled slider"
        />

        <VolumeUp style={{ marginLeft: "10px", padding: "5px" }} />
      </div>
    </div>
  );
}

export default MusicPlayer;
