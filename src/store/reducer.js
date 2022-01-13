import { combineReducers } from "redux";
import dashboardReducer from "./reducers/DashboardReducer";
import groupcallReducer from "./reducers/GroupCallReducer";

export default combineReducers({
  dashboardReducer: dashboardReducer,
  groupcallReducer: groupcallReducer,
});
