import { useReducer } from "react";
import ActiveUsersContext from "./active-users-context";

const defaultActiveUsersListState = {
  activeUsersList: [],
};
const activeUsersListReducer = (state, action) => {
  if (action.type === "ADD_ACTIVE_USER") {
    const updatedActiveUsersList = state.activeUsersList.concat(action.user);
    return {
      activeUsersList: updatedActiveUsersList,
    };
  }
  return defaultActiveUsersListState;
};
const ActiveUsersProvider = (props) => {
  const [activeUsersListState, dispatchActiveUsersListAction] = useReducer(
    activeUsersListReducer,
    defaultActiveUsersListState
  );
  const addUserToList = (user) => {
    dispatchActiveUsersListAction({ type: "ADD_ACTIVE_USER", user: user });
  };
  const removeUserFromList = (user) => {};
  const activeUsersList = activeUsersListState.activeUsersList;
  return (
    <ActiveUsersContext.Provider>{props.children}</ActiveUsersContext.Provider>
  );
};

export default ActiveUsersProvider;
