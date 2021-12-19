import React, { useState, useEffect } from "react";
import "./MusicArea.css";
import MusicPlayer from "./MusicPlayer";
import SpotifyWebApi from "spotify-web-api-node";
import useAuth from "./hooks/useAuth";
import SearchComponent from "./SearchComponent";
import ModalSearch from "./ModalSearch";

const spotifyApi = new SpotifyWebApi({
  redirectUri: "http://localhost:3000",
  clientId: "ec5cc05742d84f3abadc11ea6b639f9c",
  clientSecret: "edbcb0b4cda94e67acf9f43e4d635618",
});

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
        <button onClick={searchButtonClickHandler}> Search</button>
        {<MusicPlayer
          playingTrack={playingTrack}
          setPlayingTrack={setPlayingTrack}
        ></MusicPlayer>}

        <ModalSearch
          accessToken={accessToken}
          playingTrack={playingTrack}
          setPlayingTrack={setPlayingTrack}
          show={toggleSearch}
          onHide={() => setToggleSearch(false)}
        />
      </div>
    </>
  );
}
