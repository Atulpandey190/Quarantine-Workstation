import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { connectWithWebSocket } from "./utils/wssConnection/wssConnection";
import { socket } from "./utils/wssConnection/wssConnection";

import "./App.css";

import Dashboard from "./Dashboard/Dashboard";
import Home from "./Home/Home";
import SpotifyHome from "./Spotify/SpotifyHome";
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const REDIRECT_URI = "http://localhost:3000/home";
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

function App() {
  useEffect(() => {
    connectWithWebSocket();
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard socket={socket} />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<SpotifyHome AUTH_URL={AUTH_URL} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
