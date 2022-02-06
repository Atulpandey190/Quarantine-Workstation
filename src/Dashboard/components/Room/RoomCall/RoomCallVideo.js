import React, { useRef, useEffect } from "react";

const styles = {
  videoContainer: {
    width: "150px",
    height: "150px",
    borderRadius: "8px",
    backgroundColor: "black",
    position: "absolute",
    top: "5%",
    right: "23%",
    zIndex: "100",
  },
  videoElement: {
    width: "100%",
    height: "100%",
  },
};

const RoomCallVideo = ({ stream }) => {
  console.log(stream);
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
