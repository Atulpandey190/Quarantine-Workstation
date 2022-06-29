import { useState, useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";

export default function Player({ accessToken, trackUri }) {
  const [play, setPlay] = useState(false);
  console.log(accessToken, trackUri);
  useEffect(() => setPlay(true), [trackUri]);

  if (!accessToken) return null;
  return (
    <SpotifyPlayer
      styles={{
        activeColor: "whitesmoke",
        bgColor: "#1F1A36",
        color: "whitesmoke",
        loaderColor: "yellow",
        sliderColor: "white",
        sliderHandleColor: "rgb(69,179,224)",
        trackArtistColor: "#ccc",
        trackNameColor: "#fff",
        height: "9vh",
      }}
      token={accessToken}
      showSaveIcon
      callback={(state) => {
        if (!state.isPlaying) setPlay(false);
      }}
      play={play}
      uris={trackUri ? [trackUri] : []}
    />
  );
}
