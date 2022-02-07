import React, { useEffect, useRef } from "react";
const styles = {
  videoContainer: {
    width: "150px",
    height: "150px",
    borderRadius: "8px",
    position: "absolute",
    top: "5%",
    right: "25%",
    zIndex : "100",
  },
  videoElement: {
    width: "100%",
    height: "100%",
  },
};

const LocalVideoView = (props) => {
  console.log(props);
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
    <div style={styles.videoContainer}>
      <p>{localStream.id}</p>
      <video style={styles.videoElement} ref={localVideoRef} autoPlay muted />
    </div>
  );
};

export default LocalVideoView;
