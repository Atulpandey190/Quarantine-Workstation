import React, { useEffect, useContext, useState } from "react";
import "./Controlarea.css";
import { MicFill, GearFill, CameraVideoFill } from "react-bootstrap-icons";
import ActiveUsersList from "../ActiveUsers/ActiveUsersList";
export function Controlarea({ socket }) {
  return (
    <div className="control-area">
      <ActiveUsersList />
      <div className="icons-area">
        <MicFill className=" first" size={25} />
        <CameraVideoFill className="icon second" size={25} />
        <GearFill className="icon third" size={25} />
      </div>
    </div>
  );
}
