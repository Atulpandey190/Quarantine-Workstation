import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { connectWithWebSocket } from "./utils/wssConnection/wssConnection";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Dashboard";
import LoginPage from "./LoginPage";
import ActiveUsersContext from "./store/active-users-context";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const REDIRECT_URI = "http://localhost:3000/dashboard";
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;
function App() {
  const [saveUsername, setSaveUsername] = useState("");
  useEffect(() => {
    connectWithWebSocket();
  }, []);
  return (
    <ActiveUsersContext.Provider>
      <div className="App">
        <Router>
          <Routes>
            <Route
              path="/dashboard"
              element={<Dashboard AUTH_URL={AUTH_URL} />}
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
    </ActiveUsersContext.Provider>
  );
}

export default App;
