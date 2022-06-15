import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../Spotify/SpotifyHome.css";
import { setShowMusicPlayer } from "../store/actions/dashboardActions";
export default function SpotifyHome({ AUTH_URL }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const skipHandler = () => {
    dispatch(setShowMusicPlayer(false));
    navigate("/home");
  };
  return (
    <div className="home-spotify">
      <div className="login-spotify">
        <div className="login-area-spotify">
          <a className="login-btn-spotify" href={AUTH_URL}>
            Login Spotify
          </a>
          <button className="spotify-btn" onClick={skipHandler}>
            <i className="fas fa-forward" style={{ color: "white" }}></i>
          </button>
        </div>
      </div>
    </div>
  );
}
