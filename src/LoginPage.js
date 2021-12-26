import { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { registerNewUser } from "./utils/wssConnection/wssConnection";

const LoginPage = ({ setSaveUsername }) => {
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const handleSubmitButtonPressed = () => {
    setSaveUsername(username);
    //console.log(username);
    registerNewUser(username);
    navigate("/dashboard");
  };

  return (
    <>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Enter your name"
          type="text"
          value={username}
          onChange={(event) => {
            console.log(event.target.value);
            setUsername(event.target.value);
          }}
        />
      </InputGroup>
      <Button variant="outline-primary" onClick={handleSubmitButtonPressed}>
        Login
      </Button>{" "}
    </>
  );
};

export default LoginPage;
