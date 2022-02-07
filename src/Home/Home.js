import React from "react";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { setUsername } from "../store/actions/dashboardActions";
import { registerNewUser } from "../utils/wssConnection/wssConnection";
import "./Home.css";
export default function Home() {
  const dashboardState = useSelector((state) => {
    return state.dashboardReducer; // dashboardReducer
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitButtonPressed = () => {
    console.log(dashboardState);
    registerNewUser(dashboardState.username);
    navigate("/dashboard");
  };
  return (
    <>
      <h1>{dashboardState.username}</h1>
      <div className="home">
        {
          <div className="login">
            <h1>User Login</h1>
            <div className="login-area">
              <input
                type="text"
                placeholder="Enter Username Here...."
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
    </>
  );
}
