import React, { useState } from "react";
import "./MusicArea.css";
import MusicPlayer from "./MusicPlayer";
import useAuth from "../../../hooks/useAuth";

import ModalSearch from "./ModalSearch";
import Button from "react-bootstrap/Button";

export default function MusicArea({ code }) {
  const accessToken = useAuth(code);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [playingTrack, setPlayingTrack] = useState();

  const searchButtonClickHandler = () => {
    setToggleSearch(!toggleSearch);
  };
  return (
    <>
      <div className="music-area">
        <Button variant="outline-dark" onClick={searchButtonClickHandler}>
          {" "}
          Search for a Song / Artist{" "}
        </Button>

        <ModalSearch
          accessToken={accessToken}
          playingTrack={playingTrack}
          setPlayingTrack={setPlayingTrack}
          toggleSearch={toggleSearch}
          setToggleSearch={setToggleSearch}
          show={toggleSearch}
          onHide={() => setToggleSearch(false)}
        />

        <MusicPlayer
          accessToken={accessToken}
          playingTrack={playingTrack}
          setPlayingTrack={setPlayingTrack}
        ></MusicPlayer>
      </div>
    </>
  );
}
