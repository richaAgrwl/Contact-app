import React, { useRef, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import AddContact from "./AddContact";
import ViewContact from "./ViewContact";
import EditContact from "./EditContact";
import SearchContact from "./SearchContact";
function App() {
	const [showEdit, setShowEdit] = useState(false);
	const [showContact, setshowContact] = useState(false);
	const [viewContact, setViewContact] = useState(false);
	const [currentId, setcurrentId] = useState(undefined);
	const [currentContact, setCurrentContact] = useState(null);
	const [searchResults, setSearchResults] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [contact, setContact] = useState([
		{
			name: "Aaron",
			mobile: "5785664545",
			email: "aaron@gmail.com",
			address: "Indore",
		},
		{
			name: "Buincy Hanson",
			mobile: "5785664545",
			email: "hanson@gmail.com",
			address: "Bhopal",
		},
	]);

	var save = (name, email, mobile, address) => {
		console.log(name, email, mobile);

		var ob = { name, email, mobile, address };
		setContact([...contact, ob]);
	};

	var deleteContact = (event, email) => {
		var btn = event.currentTarget;
		var email = btn.getAttribute("data-email");
		console.log(email);
		var confirm = window.confirm("Are u sure want to delete?");
		console.log(confirm);
		if (confirm) setContact(contact.filter((ob) => ob.email != email));
	};

	const handleSearch = (searchTerm) => {
		setSearchTerm(searchTerm);
		if (searchTerm === "") {
			setSearchResults([]);
		} else {
			const filteredContacts = contact.filter((ob) => {
				const name = ob.name.toLowerCase();
				const phoneNumber = ob.mobile.toLowerCase();
				const searchLower = searchTerm.toLowerCase();

				// Check if the search term matches the first name, last name, or phone number
				return name.includes(searchLower) || phoneNumber.includes(searchLower);
			});

			// Update the search results
			setSearchResults(filteredContacts);
		}
	};

	return (
		<>
			<div className="container">
				<div className="col-lg-5 mt-5 md-5 bg-dark pb-5 sm-3 pb-2 pt-2 px-2 ml-3 box">
					<p className="head text-white ">
						All Contacts
						<button className="btn" onClick={() => setshowContact(true)}>
							{" "}
							<i className="fa fa-plus-circle"></i>
						</button>
					</p>
					<div className="row">
						<div className="col-3 md-3 sm-2"></div>
						<SearchContact onSearch={handleSearch} />
						<div className="col-3 md-3 sm-2"></div>
					</div>
					<div>
						{searchTerm && searchResults.length === 0 ? (
							<div className="no-results text-white">No matching contacts found.</div>
						) : (
							(searchTerm ? searchResults : contact).map((ob, index) => {
							
								return (
									<div className="row mt-3 list px-2 p-2" key={index}>
										<div className="col-lg-2 md-2 sm-2">
											<p>{index + 1}</p>
										</div>
										<div className="col-lg-2 md-2 sm-2">
											<i className="fa fa-user-circle-o" aria-hidden="true"></i>
										</div>
										<div className="col-lg-5 md-5 sm-5">
											<span>{ob.name}</span> <br />
											<span>{ob.mobile}</span>
										</div>
										<div className="col-lg-3 md-3 sm-3">
											<button
												className="btnn"
												onClick={() => {
													setViewContact(true);
													setcurrentId(ob.email);
												}}>
												<i className="fa fa-eye" aria-hidden="true"></i>
											</button>
											&nbsp;
											<button
												className="btnn"
												onClick={(event) => deleteContact(event, ob.email)}
												data-email={ob.email}>
												<i className="fa fa-trash" aria-hidden="true"></i>
											</button>
											&nbsp;
											<button
												className="btnn"
												onClick={() => {
													setCurrentContact(ob);
													setcurrentId(index);
													setShowEdit(true);
												}}>
												<i className="fa fa-pencil" aria-hidden="true"></i>
											</button>
										</div>
									</div>
								);
							})
						)}
					</div>
				</div>
			</div>

			<AddContact
				show={showContact}
				close={() => setshowContact(false)}
				saveContact={save}
			/>
			<ViewContact
				show={viewContact}
				close={() => setViewContact(false)}
				email={currentId}
				contact={contact}
			/>
			<EditContact
				show={showEdit}
				close={() => setShowEdit(false)}
				saveContact={(updatedContact) => {
					const updatedContacts = [...contact];
					updatedContacts[currentId] = updatedContact;
					setContact(updatedContacts);
				}}
				contact={currentContact}
			/>
		</>
	);
}

export default App;
