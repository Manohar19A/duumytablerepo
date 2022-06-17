import ClientAdmin from "./ClientAdmin";
import React from "react"
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal'
import {BsPersonPlusFill} from 'react-icons/bs'
import ClientForm from "./ClientForm";
function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
         {/* <ClientAdmin/> */}
         <ClientForm func={props.func} send={props.onHide}/>


        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close1</Button>
        </Modal.Footer> */}
      </Modal>
    );
  }
  
  function Clientmodal(props) {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <div style={{ justifyContent: "center" }}>

        <Button  
        className="rounded-pill"   variant="warning"
        style={{
          color: "#F4F8F6",
          backgroundColor: "#A020F0",
          float: "right",
          width: "9rem",
        }} 
        onClick={() => setModalShow(true)}>
        <BsPersonPlusFill style={{ fontSize: '24px' }} /> Add Client
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          func={props.func}
        />
      </div>
    );
  }
  
 export default  Clientmodal;