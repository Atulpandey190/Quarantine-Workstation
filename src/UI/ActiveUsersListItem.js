import React from "react";

const ActiveUserListItem = (props) => {
  const { activeUser } = props;
  return <h1>{activeUser}</h1>;
};

export default ActiveUserListItem;
