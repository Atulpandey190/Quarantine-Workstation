import { Modal, Button } from "react-bootstrap";
import SearchComponent from "./SearchComponent";
function ModalSearch(props) {
  return (
    <Modal
    
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Search</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SearchComponent
          playingTrack={props.playingTrack}
          setPlayingTrack={props.setPlayingTrack}
          accessToken={props.accessToken}
          toggleSearch={props.toggleSearch}
          setToggleSearch={props.setToggleSearch}
        ></SearchComponent>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}
export default ModalSearch;
