import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const LoginModal = (props) => {
  // const [loginModalShow, setLoginModalShow] = useState(props.showModal);

  console.log("PROPS in MODAL", props);
  return (
    <>
      <Modal
        show={props.show}
        close={props.close}
        cancel={props.close}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered onHide={props.close}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Are you sure to Logout?</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.close}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginModal;
