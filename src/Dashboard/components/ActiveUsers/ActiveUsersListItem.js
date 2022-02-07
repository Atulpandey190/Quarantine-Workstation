import React from "react";

const ActiveUsersListItem = (props) => {
  const { activeUser } = props;
  const handleListItemPressed = () => {
    console.log("User CLicked!!!");
  };
  return (
    <div>
      <h3 onClick={handleListItemPressed}>{activeUser}</h3>
    </div>
  );
};

export default ActiveUsersListItem;
