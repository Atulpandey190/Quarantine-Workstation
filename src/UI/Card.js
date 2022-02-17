import React from "react";
import "./Card.css";
const styleUser = {
  backgroundColor: "green",
};
const Card = (props) => {
  const { RoomCallVideo, streamId, backgroundColor } = props;
  return (
    <>
      {backgroundColor ? (
        <div className="card-container" style={styleUser}>
          {RoomCallVideo}
        </div>
      ) : (
        <div className="card-container">
          {RoomCallVideo}
        </div>
      )}
    </>
  );
};

export default Card;
