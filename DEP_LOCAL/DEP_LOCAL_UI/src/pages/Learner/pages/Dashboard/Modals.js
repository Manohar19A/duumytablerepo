import React from 'react'
import { useState } from 'react';
import { Modal,Button } from 'react-bootstrap';
import  CourseStatus from './CourseStatus'
const Modals = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="white" onClick={handleShow}>
         <h3>10</h3>
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Learner Table Menu</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            {/* table added in modal */}
            < CourseStatus />

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>                                      
              Close
            </Button>
           
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default Modals
                             