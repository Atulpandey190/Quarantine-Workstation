import React from 'react'
import Roommembers from '../../Roommembers';
import MusicArea from '../Musicarea/MusicArea'
import Chattingarea from '../Chattingarea/Chattingarea';
import Controlarea from '../Controlarea/Controlarea';
import './Dashboard.css';
export const Dashboard = ({curruser}) => {
    return (
        <div>
        <h1>{curruser}</h1>
        <div className='upper-container'>
        <Roommembers className="room-members"/>
        <Chattingarea className="chatting-area" curruser={curruser}/>
        <Controlarea className="control-area" />
        </div>
        <div className='lower-container'>
        <MusicArea className="music-area"/>
        </div>            
        </div>
    )
}
