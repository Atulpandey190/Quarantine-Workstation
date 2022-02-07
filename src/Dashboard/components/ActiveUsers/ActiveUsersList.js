import React from "react";
import { useSelector } from "react-redux";
import ActiveUsersListItem from "./ActiveUsersListItem";

const ActiveUsersList = () => {
  const dashboardState = useSelector((state) => state.dashboardReducer);
  const { activeUsers } = dashboardState;
  console.log(activeUsers);
  return (
    <>
      <div>
        {activeUsers.map((activeUser) => (
          <ActiveUsersListItem
            key={activeUser.socketId}
            activeUser={activeUser.username}
          />
        ))}
      </div>
    </>
  );
};

export default ActiveUsersList;
