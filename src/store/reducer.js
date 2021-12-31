import { combineReducers } from "redux";
import dashboardReducer from "./reducers/DashboardReducer";
import callReducer from "./reducers/CallReducer";

export default combineReducers({
  dashboardReducer: dashboardReducer,
});
