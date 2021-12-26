import React, { useContext } from "react";
import "./Controlarea.css";
import { MicFill, GearFill, CameraVideoFill } from "react-bootstrap-icons";
import ActiveUsersContext from "./store/active-users-context";
import ActiveUsersList from "./UI/ActiveUsersList";
export default function Controlarea() {
  const activeUsersConsumer = useContext(ActiveUsersContext);
  console.log(activeUsersConsumer);
  return (
    <div className="control-area">
      <h1>This is the control area</h1>
      <ActiveUsersList />
      <div className="icons-area">
        <MicFill className="icon first" size={25} />
        <CameraVideoFill className="icon second" size={25} />
        <GearFill className="icon third" size={25} />
      </div>
    </div>
  );
}
