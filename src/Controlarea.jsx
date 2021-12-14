import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'
import { faMicrophoneSlash } from '@fortawesome/free-solid-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons'
import "./Controlarea.css"
export default function Controlarea() {
    return (
        <div className='control-area'>
            <h1>This is the control area</h1>
            <div className='icons-area'>
            <FontAwesomeIcon  icon={faMicrophone} className='icons'></FontAwesomeIcon>
           {/*<FontAwesomeIcon className='icons' icon={faMicrophoneSlash}></FontAwesomeIcon>*/}
           <FontAwesomeIcon  icon={faVideo} className='icon'></FontAwesomeIcon>
           {/*<FontAwesomeIcon className='icons' icon={faVideoSlash}></FontAwesomeIcon>*/}
            </div>

        </div>
    )
}
