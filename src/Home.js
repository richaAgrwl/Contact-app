import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { setLoginModalShow } from "./CommonLogin";
import LoginModal from "./LoginModal";

const HomePage = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <button onClick={() => setShowLogin(true)}>Open Modal</button>
      <LoginModal show={showLogin} close={() => setShowLogin(false)} />
    </>
  );
};

export default HomePage;
