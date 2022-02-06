import socketClient from "socket.io-client";
import store from "../../store/store";
import * as dashboardActions from "../../store/actions/dashboardActions";
import * as webRTCGroupCallHandler from "../webRTC/webRTCGroupCallHandler";

const SERVER_PORT = 3001;
const SERVER = `http://localhost:${SERVER_PORT}`;

const broadcastEventTypes = {
  ACTIVE_USERS: "ACTIVE_USERS",
  GROUP_CALL_ROOM: "GROUP_CALL_ROOM",
  ROOM_MEMBERS: "ROOM_MEMBERS",
};

export let socket = "";

export const connectWithWebSocket = () => {
  socket = socketClient(SERVER);

  socket.on("connection", () => {
    console.log("Succesfully connected with wss server");
    console.log(socket.id);
  });

  socket.on("broadcast", (data) => {
    handleBroadcastEvents(data);
  });
  
  socket.on("new_member", (data) => {
    console.log("Group Call Request");
    console.log(data);
    webRTCGroupCallHandler.connectToNewUser(data);
  });
};
export const joinNewRoom = (data) => {
  console.log({...data} );
  socket.emit("join_room", { ...data });
};
export const registerNewUser = (username) => {
  socket.emit("register-new-user", {
    username: username,
    socketId: socket.id,
  });
};
export const userLeftGroupCall = (data) => {
  socket.emit("group-call-user-left", data);
};
export const sendMessage = (data) => {
  console.log(data);
  socket.emit("send_message", data);
};
export const receiveMessage = (message) => {
  socket.on("receive_message", (data) => {
    console.log(message);
  });
};

export const registerGroupCall = (data) => {
  socket.emit("group-call-register", data);
};
const handleBroadcastEvents = (data) => {
  switch (data.event) {
    case broadcastEventTypes.ACTIVE_USERS:
      const activeUsers = data.activeUsers.filter(
        (activeUser) => activeUser.socketId !== socket.id
      );
      store.dispatch(dashboardActions.setActiveUsers(activeUsers));
      break;
    default:
      break;
  }
};
