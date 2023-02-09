import React from "react";
import LoginCard from "../components/loginCard";
import Container from "react-bootstrap/Container";
import background from "../images/BackgroundLog.jpg";

const Login = () => {
  const newUser = true;

  return (
    <div
      className="mt-0 min-100-vh cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Container className="display-flex mt-5 ml-5">
        <LoginCard />
      </Container>
    </div>
  );
};

export default Login;
