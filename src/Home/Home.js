import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUsername, setSpotifyApp } from "../store/actions/dashboardActions";
import { registerNewUser } from "../utils/wssConnection/wssConnection";
import store from "../store/store";

import "./Home.css";
const codeObj = new URLSearchParams(window.location.search).get("code");

export default function Home() {
  let temp = codeObj;
  const dashboardState = useSelector((state) => {
    return state.dashboardReducer; // dashboardReducer
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitButtonPressed = () => {
    console.log(dashboardState);
    registerNewUser(dashboardState.username);
    console.log(temp);
    navigate("/dashboard", { state: { code: temp } });
  };
  return (
    <div className="home">
      {
        <div className="login">
          <div className="login-area">
            <h1 className="heading">User Login</h1>
            <input
              type="text"
              placeholder="Enter Username"
              className="user-input"
              value={dashboardState.username}
              onChange={(e) => {
                dispatch(setUsername(e.target.value));
              }}
            ></input>
            <button className="login-btn" onClick={handleSubmitButtonPressed}>
              Login
            </button>
          </div>
        </div>
      }
    </div>
  );
}
