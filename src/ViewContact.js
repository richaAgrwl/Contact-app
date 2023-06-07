import React from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ViewContact = (props) => {
  console.log("PROPS in viewMODAL", props);

  const filteredContacts = props.contact.filter((ob) => ob.email === props.email);

  return (
    <>
      <Modal
        show={props.show}
        close={props.close}
        cancel={props.close}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={props.close}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Contact Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {filteredContacts.map((ob) => {
            return (
              <React.Fragment key={ob.email}>
               <p><b>Name:</b> {ob.name}</p> 
               <p><b>Email:</b> {ob.email}</p>
               <p><b>Number:</b>  {ob.mobile}</p>
               <p><b>Address:</b>  {ob.address}</p>
              </React.Fragment>
            );
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.close}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ViewContact;
