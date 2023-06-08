import React, { useState, useEffect, useRef } from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AddContact = (props) => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		address: "",
	});
	const [errors, setErrors] = useState({});
	var nameBox = useRef();
	var emailBox = useRef();
	var phoneBox = useRef();
	var addBox = useRef();
	var save = (event) => {
		event.preventDefault();
		// Validate the form fields
		let isValid = true;
		const newErrors = {};
	
		if (!formData.name) {
			newErrors.nameError = "Name is required";
			isValid = false;
		}
	
		if (!formData.email) {
			newErrors.emailError = "Email is required";
			isValid = false;
		}
	
		if (!formData.phone) {
			newErrors.phoneError = "Phone number is required";
			isValid = false;
		}
	
		if (!formData.address) {
			newErrors.addressError = "Address is required";
			isValid = false;
		}
	
		if (isValid) {
			console.log("Contact saved successfully");
			var name = formData.name;
			var email = formData.email;
			var mobile = formData.phone;
			var address = formData.address;
			console.log(name, email, mobile, address);
	
			props.saveContact(name, email, mobile, address);
			event.target.reset();
			props.close();
		}
		setErrors(newErrors);
	};
	
	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
	};
	const handleClose = () => {
		setErrors({});
		props.close();
	};
	console.log("PROPS in CONTACTMODAL", props);
	return (
		<>
			<Modal
				show={props.show}
				close={props.close}
				cancel={props.close}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
        onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						Create Contact
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form onSubmit={save}>
						<div className="modal-body">
							<div className="form-group">
								<label htmlFor="name">Name :</label>
								<input
									type="text"
									className="form-control"
									id="name"
									ref={nameBox}
									name="name"
									value={formData.name}
									placeholder="Enter Your Name"
									onChange={handleChange}
								/>
								{errors.nameError && (
									<div className="text-danger">{errors.nameError}</div>
								)}
							</div>

							<div className="form-group">
								<label htmlFor="email1">Email:</label>
								<input
									type="email"
									className="form-control"
									id="email1"
									name="email"
									value={formData.email}
									placeholder="Enter Your Email"
									onChange={handleChange}
								/>
								{errors.emailError && (
									<div className="text-danger">{errors.emailError}</div>
								)}

								<div className="form-group">
									<label htmlFor="phone">Phone Number:</label>
									<input
										type="text"
										className="form-control"
										id="phone"
										ref={phoneBox}
										name="phone"
										value={formData.phone}
										placeholder="Enter Your Phone Number"
										onChange={handleChange}
									/>
									{errors.phoneError && (
										<div className="text-danger">{errors.phoneError}</div>
									)}
								</div>
								<div className="form-group">
									<label htmlFor="address">Address:</label>
									<input
										type="text"
										className="form-control"
										id="address"
										ref={addBox}
										name="address"
										value={formData.address}
										placeholder="Enter Your Address"
										onChange={handleChange}
									/>
									{errors.addressError && (
										<div className="text-danger">{errors.addressError}</div>
									)}
								</div>
							</div>
						</div>
						<div className="modal-footer border-top-0 d-flex justify-content-center">
							<button type="submit" className="btn btn-primary">
								Submit
							</button>
							&nbsp;&nbsp;
							<button type="reset" className="btn btn-dark">
								Reset
							</button>
						</div>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={handleClose}>Cancel</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default AddContact;
