import socketClient from "socket.io-client";

const SERVER_PORT = 3001;
const SERVER = `http://localhost:${SERVER_PORT}`;

const broadcastEventTypes = {
  ACTIVE_USERS: "ACTIVE_USERS",
  GROUP_CALL_ROOMS: "GROUP_CALL_ROOMS",
};

let socket;

export const connectWithWebSocket = () => {
  socket = socketClient(SERVER);

  socket.on("connection", () => {
    console.log("Succesfully connected with wss server");
    console.log(socket.id);
  });

  socket.on("broadcast", (data) => {
    handleBroadcastEvents(data);
  });
};

export const registerNewUser = (username) => {
  socket.emit("register-new-user", {
    username: "Shrey",
    socketId: socket.id,
  });
  socket.on("receive", (message) => {
    console.log(message);
  });
};

const handleBroadcastEvents = (data) => {
  switch (data.event) {
    case broadcastEventTypes.ACTIVE_USERS:
      const activeUsers = data.activeUsers.filter(
        (activeUser) => activeUser.socketId !== socket.id
      );
      break;
    default:
      break;
  }
};
