
import Roommembers from './Roommembers';
import MusicArea from './MusicArea';
import Chattingarea from './Chattingarea';
import Controlarea from './Controlarea';
import './App.css'
function App() {
  return (
    <div className="App">
        <div className='upper-container'>
        <Roommembers className="room-members"/>
        <Chattingarea className="chatting-area"/>
        <Controlarea className="control-area"/>
        </div>
        <div className='lower-container'>
        <MusicArea className="music-area"/>
        </div>

    </div>
  );
}

export default App;
