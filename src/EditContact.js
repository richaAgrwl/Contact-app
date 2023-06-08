import React, { useState, useEffect, useRef } from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const EditContact = (props) => {
  const nameBox = useRef();
  const emailBox = useRef();
  const phoneBox = useRef();
  const addBox = useRef();

  useEffect(() => {
    if (props.contact) {
      nameBox.current.value = props.contact.name;
      emailBox.current.value = props.contact.email;
      phoneBox.current.value = props.contact.mobile;
      addBox.current.value = props.contact.address;
    }
  }, [props.contact]);

  const save = (event) => {
    event.preventDefault();
    const name = nameBox.current.value;
    const email = emailBox.current.value;
    const mobile = phoneBox.current.value;
    const address = addBox.current.value;

    const updatedContact = { name, email, mobile, address };
    props.saveContact(updatedContact);
    props.close();
  };

  return (
    <>
      <Modal show={props.show} onHide={props.close} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Contact
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={save}>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  ref={nameBox}
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email1">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email1"
                  ref={emailBox}
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  ref={phoneBox}
                  placeholder="Enter Your Phone Number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  ref={addBox}
                  placeholder="Enter Your Address"
                />
              </div>
            </div>
            <div className="modal-footer border-top-0 d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">
               Update
              </button>{" "}
              &nbsp;&nbsp;
              <button type="button" className="btn btn-dark" onClick={props.close}>
                Cancel
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditContact;
