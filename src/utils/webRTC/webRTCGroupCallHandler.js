import * as wss from "../wssConnection/wssConnection";
import store from "../../store/store";
import {
  setGroupCallActive,
  setCallState,
  callStates,
  clearGroupCallData,
} from "../../store/actions/groupCallActions";
let myPeer;
let myPeerId;
export const connectWithMyPeer = () => {
  myPeer = new window.Peer(undefined, {
    path: "/peerjs",
    host: "/",
    port: "3001",
  });

  myPeer.on("open", (id) => {
    console.log("Succesfully Connected With Peer Server");
    myPeerId = id;
  });
};

export const createNewGroupCall = () => {
  wss.registerGroupCall({
    username: store.getState().dashboardReducer.username,
    peerId: myPeerId,
  });
  console.log("Creating Group");
  store.dispatch(setGroupCallActive(true));
  store.dispatch(setCallState(callStates.CALL_IN_PROGRESS));
};

export const leaveGroupCall = () => {
  console.log("Leaving Group");
  wss.userLeftGroupCall({
    // roomId
  });
  clearGroupData();
};

export const sendMessageThroughSocket = (messageData) => {
  wss.sendMessage(messageData);
};
export const clearGroupData = () => {
  store.dispatch(clearGroupCallData());
};
