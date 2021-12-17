import React, { useState } from "react";
import "./MusicPlayer.css";
import PlayerButtons from "./PlayerButtons";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
function MusicPlayer() {
  const [value, setValue] = useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="player">
      <div style={{ color: "white" }} className="volume-control">
        <VolumeDown style={{ marginRight: "10px", padding: "5px" }} />
        <Slider defaultValue={30} aria-label="Disabled slider" />

        <VolumeUp style={{ marginLeft: "10px", padding: "5px" }} />
      </div>
      <PlayerButtons />
      <div style={{ color: "white" }} className="volume-control">
        <VolumeDown style={{ marginRight: "10px", padding: "5px" }} />
        <Slider value={value} onChange={handleChange} aria-label="Disabled slider" />

        <VolumeUp style={{ marginLeft: "10px", padding: "5px" }} />
      </div>
    </div>
  );
}

export default MusicPlayer;
