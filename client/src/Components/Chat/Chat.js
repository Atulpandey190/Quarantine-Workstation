import React from 'react'
import {useState,useEffect} from 'react'
import { socket } from 'socket.io-client'
function Chat({socket, username, room}) {
    const [currentMessage,setcurrentMessage]=useState('')
    const [messageList,setmessageList]=useState([])
    const sendMessage=async()=>{
        if(currentMessage!=="")
        {
            const messageData={
                room:room,
                author:username,
                message:currentMessage,
                time:new Date(Date.now()).getHours()+':'+new Date(Date.now()).getMinutes(),
            }
            await socket.emit("send_message",messageData)
            setmessageList((list)=>[...list,messageData])
        }
    }
    useEffect(() => {
          socket.on("recieve_message",(data)=>{
             setmessageList((list)=>[...list,data])
          })
    }, [socket])
    return (
        <div className='chat-window'>
            <div className='chat-header'>
                <p>Live Chat</p>
            </div>
            <div className='chat-body'>
                {messageList.map((messageContent)=>{
                    return <div className='message' id={ username!== messageContent.author ? "you" : "other" }>
                        <div>
                            <div className='message-content'>
                                <p>{messageContent.message}</p>
                            </div>
                            <div className='message-meta'>
                                <p>{messageContent.time}</p>
                                <p>{messageContent.author}</p>
                            </div>
                        </div>
                    </div>
                })}
            </div>
            <div className='chat-footer'>
                <input type="text" placeholder="Write your message here"      
                onChange={(event)=>{
                console.log(event.target.value)
                setcurrentMessage(event.target.value)
                }}></input>
                <button onClick={sendMessage}>&#9658;</button>
            </div>
        </div>
    )
}

export default Chat
