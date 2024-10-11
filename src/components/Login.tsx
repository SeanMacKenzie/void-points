import { useState } from "react"
import Input from "./Common/Input";
import { useNavigate, useOutletContext } from "react-router-dom";
import { AlertContextType } from "../types/AlertContext";

interface UserContextType {
  userToken: string;
  setUserToken: React.Dispatch<React.SetStateAction<string>>;
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const { setUserToken } = useOutletContext<UserContextType>();
  const { setAlertClassName, setAlertMessage } = useOutletContext<AlertContextType>();

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("name/email/pass: ", userName, email, password)

    if (email == "admin@admin.com") {
      setUserToken("dubdub");
      setAlertClassName("d-none");
      setAlertMessage("");
      navigate("/");
    } else {
      setAlertClassName("alert-danger");
      setAlertMessage("Invalid Credentials");
    }
  }

  return (
    <div className="col-md-6 offset-md-3">
      <h2>Login</h2>
      <hr />

      <form onSubmit={handleSubmit}>
        <Input
          title="Name"
          type="text"
          className="form-control"
          name="name"
          autoComplete="name-new"
          onChange={(event) => setUserName(event.target.value)}
        />

        <Input
          title="Email address"
          type="email"
          className="form-control"
          name="email"
          autoComplete="email-new"
          onChange={(event) => setEmail(event.target.value)}
        />

        <Input
          title="Password"
          type="password"
          className="form-control"
          name="password"
          autoComplete="passwor-new"
          onChange={(event) => setPassword(event.target.value)}
        />

        <hr />

        <input 
          type="submit"
          className="btn btn-primary" 
          value="Login"
        />
      </form>
    </div>
  )
}

export default Login