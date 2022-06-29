import * as wss from "../wssConnection/wssConnection";
import store from "../../store/store";
import {
  setGroupCallActive,
  setCallState,
  callStates,
  clearGroupCallData,
  setLocalStream,
  setGroupCallIncomingStreams,
} from "../../store/actions/groupCallActions";
import { getTurnServers } from "./TURN";

const defaultConstraints = {
  video: {
    width: 480,
    height: 360,
  },
  audio: true,
};
let myPeer;
let myPeerId;
let groupCallRoomId;

export const connectWithMyPeer = () => {
  myPeer = new window.Peer(undefined, {
    config: {
      iceServers: [...getTurnServers(), { url: "stun:stun.1und1.de:3478" }],
      //iceTransportPolicy: "relay",
    },
  });

  myPeer.on("open", (id) => {
    console.log("Succesfully Connected With Peer Server");
    myPeerId = id;
  });

  myPeer.on("call", (call) => {
    console.log(call);
    call.answer(store.getState().groupcallReducer.localStream);
    call.on("stream", (incomingStream) => {
      console.log("Stream Came");
      const streams = store.getState().groupcallReducer.groupCallStreams;
      console.log(streams);
      const stream = streams.find((stream) => stream.id === incomingStream.id);

      if (!stream) {
        addVideoStream(incomingStream);
      }
    });
  });
};
export const newGroupCallRoom = (data) => {
  console.log(data);
  const localStream = store.getState().groupcallReducer.localStream;
  groupCallRoomId = data.room;

  wss.joinNewRoom({
    ...data,
    peerId: myPeerId,
    username: store.getState().dashboardReducer.username,
    localStreamId: localStream.id,
  });
  store.dispatch(setGroupCallActive(true));
  store.dispatch(setCallState(callStates.CALL_IN_PROGRESS));
};
//Remove this emitter
export const createNewGroupCall = () => {
  wss.registerGroupCall({
    username: store.getState().dashboardReducer.username,
    peerId: myPeerId,
  });
  console.log("Creating Group");
  store.dispatch(setGroupCallActive(true));
  store.dispatch(setCallState(callStates.CALL_IN_PROGRESS));
};

export const connectToNewUser = (data) => {
  const localStream = store.getState().groupcallReducer.localStream;
  console.log(data, store.getState().groupcallReducer);

  const call = myPeer.call(data.peerId, localStream);

  call.on("stream", (incomingStream) => {
    console.log("Stream Came");
    const streams = store.getState().groupcallReducer.groupCallStreams;
    console.log(streams);
    const stream = streams.find((stream) => stream.id === incomingStream.id);

    if (!stream) {
      addVideoStream(incomingStream);
    }
  });
};

const addVideoStream = (incomingStream) => {
  console.log(incomingStream);
  const groupCallStreams = [
    ...store.getState().groupcallReducer.groupCallStreams,
    incomingStream,
  ];

  store.dispatch(setGroupCallIncomingStreams(groupCallStreams));
};
export const leaveGroupCall = () => {
  console.log("Leaving Group");
  wss.userLeftGroupCall({
    // roomId
    streamId: store.getState().groupcallReducer.localStream.id,
    roomId: groupCallRoomId,
  });
  groupCallRoomId = null;
  clearGroupData();
  console.log(myPeer);
  myPeer.destroy();
  connectWithMyPeer();
};

export const removeInactiveStream = (data) => {
  console.log(data);
  const groupCallStreams = store
    .getState()
    .groupcallReducer.groupCallStreams.filter(
      (stream) => stream.id !== data.streamId
    );

  store.dispatch(setGroupCallIncomingStreams(groupCallStreams));
};
export const sendMessageThroughSocket = (messageData) => {
  console.log("Sending Message");
  wss.sendMessage(messageData);
};

export const getLocalStream = () => {
  navigator.mediaDevices
    .getUserMedia(defaultConstraints)
    .then((stream) => {
      console.log("get", stream);
      store.dispatch(setLocalStream(stream));
    })
    .catch((err) => {
      console.log("Error while getting local stream");
      console.log(err);
    });
};
export const clearGroupData = () => {
  store.dispatch(clearGroupCallData());
};
