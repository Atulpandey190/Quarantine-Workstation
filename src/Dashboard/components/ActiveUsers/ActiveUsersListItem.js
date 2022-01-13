import React from "react";

const ActiveUsersListItem = (props) => {
  const { activeUser } = props;

  return (
    <div>
      <h3>{activeUser}</h3>
    </div>
  );
};

export default ActiveUsersListItem;
