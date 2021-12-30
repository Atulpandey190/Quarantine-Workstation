import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { connectWithWebSocket } from "./utils/wssConnection/wssConnection";
import { socket } from "./utils/wssConnection/wssConnection";
import { Provider } from "react-redux";
import store from "./store/store";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Dashboard/Dashboard";
import LoginPage from "./Dashboard/components/LoginPage";
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const REDIRECT_URI = "http://localhost:3000/dashboard";
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

function App() {
  const [saveUsername, setSaveUsername] = useState("");
  useEffect(() => {
    connectWithWebSocket();
  }, []);
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route
              path="/dashboard"
              element={<Dashboard AUTH_URL={AUTH_URL} socket={socket} />}
            />
            <Route
              path="/"
              element={
                <LoginPage
                  saveUsername={saveUsername}
                  setSaveUsername={setSaveUsername}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
