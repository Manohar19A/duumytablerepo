

import React from "react"
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal'
import { BsPersonPlusFill } from 'react-icons/bs'
import ContentCreator from "../CreationContentCreator/ContentCreator";


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
                    Content Creator
                </Modal.Title>

            </Modal.Header>

            <Modal.Body>
                <ContentCreator />
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function CreatorModal() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div style={{ justifyContent: "center" }}>



            <Button
                className="rounded-pill" variant="warning"
                style={{
                    color: "#F4F8F6",
                    backgroundColor: "#FF9B44",
                    float: "right",
                    padding: "10px",
                    width: "10rem",
                }} onClick={() => setModalShow(true)}>
                <BsPersonPlusFill style={{ fontSize: '24px' }} />  &nbsp;   Add Creator
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
}

export default CreatorModal;



