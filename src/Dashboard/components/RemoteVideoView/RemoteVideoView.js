import React, { useEffect, useRef } from "react";
const styles = {
  videoContainer: {
    width: "100%",
    height: "100%",
    zIndex: "100",
  },
  videoElement: {
    width: "100%",
    height: "100%",
  },
};

const RemoteVideoView = (props) => {
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
    <div style={styles.videoContainer} className="background_secondary_color">
      <video style={styles.videoElement} ref={localVideoRef} autoPlay muted />
    </div>
  );
};

export default RemoteVideoView;
