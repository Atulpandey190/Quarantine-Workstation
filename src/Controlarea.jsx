import React from 'react'
import './Controlarea.css'
import { MicFill,MicMuteFill,GearFill,CameraVideoFill,CameraVideoOffFill } from 'react-bootstrap-icons';
export default function Controlarea() {
    return (
        <div className='control-area'>
            <h1>This is the control area</h1>
            <div className='icons-area'>
             <MicFill className="icon first" size={25}/>
             {/*<MicMuteFill size={50}/>*/}
             <CameraVideoFill className="icon second" size={25}/>
             {/*<CameraVideoOffFill size={50}/>*/}
             <GearFill className="icon third"size={25}/>

            </div>

        </div>
    )
}
