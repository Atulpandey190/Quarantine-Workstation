import React, { useEffect, useContext, useState } from "react";
import "./Controlarea.css";
import { MicFill, GearFill, CameraVideoFill } from "react-bootstrap-icons";

export function Controlarea({ socket }) {
  return (
    <div className="control-area">
      <h1>This is the control area</h1>

      <div className="icons-area">
        <MicFill className="icon first" size={25} />
        <CameraVideoFill className="icon second" size={25} />
        <GearFill className="icon third" size={25} />
      </div>
    </div>
  );
}
