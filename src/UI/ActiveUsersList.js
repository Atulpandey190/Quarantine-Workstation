import React from "react";
import ActiveUserListItem from "./ActiveUsersListItem";

const ActiveUsersList = ({ activeUsers }) => {
  return activeUsers ? (
    <div>
      {activeUsers.map((activeUser) => (
        <ActiveUserListItem activeUser={activeUser} />
      ))}
    </div>
  ) : (
    <div>No Active User</div>
  );
};

export default ActiveUsersList;
