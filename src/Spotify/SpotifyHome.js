import React from "react";
import { useNavigate } from "react-router-dom";

import "../Home/Home.css";

export default function SpotifyHome({ AUTH_URL }) {
  return (
    <div className="home">
      <div className="login">
        <div className="login-area">
          <a className="login-btn" href={AUTH_URL}>
            Login Spotify
          </a>
        </div>
      </div>
    </div>
  );
}
