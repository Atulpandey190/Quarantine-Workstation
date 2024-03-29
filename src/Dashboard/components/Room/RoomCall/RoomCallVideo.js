import React, { useRef, useEffect } from "react";

const styles = {
  videoContainer: {
    display: "flex",
    height: "245px",
  },
  videoElement: {
    width: "100%",
    height: "100%",
  },
};

const RoomCallVideo = ({ stream }) => {
  const videoRef = useRef();

  useEffect(() => {
    const remoteRoomCallVideo = videoRef.current;
    remoteRoomCallVideo.srcObject = stream;
    remoteRoomCallVideo.onloadedmetadata = () => {
      remoteRoomCallVideo.play();
    };
  }, [stream]);

  return (
    <div style={styles.videoContainer}>
      <video ref={videoRef} autoPlay style={styles.videoElement} />
    </div>
  );
};

export default RoomCallVideo;
