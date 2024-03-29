import React, { useState } from "react";
import "./MusicArea.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MusicPlayer from "./MusicPlayer";
import useAuth from "../../../hooks/useAuth";

import ModalSearch from "./ModalSearch";
import Button from "react-bootstrap/Button";

export default function MusicArea({ code }) {
  const accessToken = useAuth(code);
  console.log(accessToken);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [playingTrack, setPlayingTrack] = useState();

  const searchButtonClickHandler = () => {
    setToggleSearch(!toggleSearch);
  };
  return (
    <>
      <div className="music-area">
        {/* {<Button variant="outline-dark" onClick={searchButtonClickHandler}>
          {" "}
          Search for a Song / Artist{" "}
        </Button>} */}

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

        <div className="music-search-button" onClick={searchButtonClickHandler}>
          <i className="fas fa-search"></i>
        </div>
      </div>
    </>
  );
}
