import LoginModal from "./LoginModal";

export const setLoginModalShow = (props) => {
  console.log("PROPS", props);
  return <LoginModal showModal={props} />;
};
