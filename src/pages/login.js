import React from "react";
import LoginCard from "../components/loginCard";
import Container from "react-bootstrap/Container";

const Login = () => {
  return (
    <Container className="display-flex">
      <LoginCard />
    </Container>
  );
};

export default Login;
