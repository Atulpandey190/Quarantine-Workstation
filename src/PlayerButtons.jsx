import { PauseCircleFill,PlayCircleFill,SkipBackwardFill,SkipForwardFill,SkipEndCircleFill,SkipStartCircleFill} from 'react-bootstrap-icons';

const PlayerButtons = () => {
  return (
    <div className='player-button'>
      {/* <SkipBackwardFill/> */}
      <SkipStartCircleFill className="x" size={30} />
      {/* <PauseCircleFill className="x" size={25} /> */}
      <PlayCircleFill className="x" size={50} />
      {/* <SkipForwardFill/> */}
      <SkipEndCircleFill className="x" size={30} />
    </div>
  );
};
export default PlayerButtons;
