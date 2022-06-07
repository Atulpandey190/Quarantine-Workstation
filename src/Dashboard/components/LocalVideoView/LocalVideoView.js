import React, { useEffect, useRef } from "react";
import "./LocalVideoView.css";

const LocalVideoView = (props) => {
  const { localStream } = props;
  const localVideoRef = useRef();

  useEffect(() => {
    if (localStream) {
      const localVideo = localVideoRef.current;
      localVideo.srcObject = localStream;

      localVideo.onloadedmetadata = () => {
        localVideo.play();
      };
    }
  }, [localStream]);
  return (
    <div className="videoContainer">
      <video className="videoElement" ref={localVideoRef} autoPlay muted />
    </div>
  );
};

export default LocalVideoView;
