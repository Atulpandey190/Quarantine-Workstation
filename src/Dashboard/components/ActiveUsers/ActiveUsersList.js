import React from "react";
import { useSelector } from "react-redux";

const ActiveUsersList = () => {
  const dashboardState = useSelector((state) => state.dashboardReducer);
  const { activeUsers } = dashboardState;
  console.log(activeUsers);
  return (
    <>
      <div>
        {activeUsers &&
          activeUsers.map((activeUser, index) => {
            return <h3 key={index}>{activeUser.username}</h3>;
          })}
      </div>
    </>
  );
};

export default ActiveUsersList;
