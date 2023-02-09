import { useState } from "react";
import Card from "react-bootstrap/Card";
import LoginForm from "./loginForm";
import SignUpForm from "./signUpForm";

function LoginCard() {
  const [newUser, setNewUser] = useState(false);
  if (newUser) {
    return (
      <Card>
        <SignUpForm />
      </Card>
    );
  }
  return (
    <Card>
      <LoginForm />
    </Card>
  );
}

export default LoginCard;
