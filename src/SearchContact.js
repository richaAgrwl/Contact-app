import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchContact = (props) => {
   
        const [searchText, setSearchText] = useState("");
      
        const handleSearch = () => {
          props.onSearch(searchText);
        };
      
        const handleChange = (event) => {
          setSearchText(event.target.value);
          handleSearch()
        };
          

  return (
    <>
       <div className="col-6 md-6 sm-8">
       <input type="text" className="form-control" placeholder="Search contact"
            value={searchText}
            onChange={handleChange}
/>
              </div>
    </>
  );
};

export default SearchContact;
