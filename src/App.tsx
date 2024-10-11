import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Alert from "../src/components/Common/Alert";

function App() {
  const [userToken, setUserToken] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertClassName, setAlertClassName] = useState("d-none");

  const navigate = useNavigate();

  const logout = () => {
    setUserToken("");
    navigate("/login");
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="mt-3">Void</h1>
        </div>
        <div className="col text-end">
          {userToken === "" ?
            <Link to="/login"><span className="badge bg-success">Login</span></Link>
            : <a href="#!" onClick={logout}><span className="badge bg-danger">Logout</span></a>
          }
        </div>
        <hr className="mb-3"></hr>
      </div>

      <div className="row">
        <div className="col-md-2">
          <nav>
            <div className="list-group">
              <Link to="/" className="list-group-item list-group-item-action">Home</Link>
              {userToken !== "" &&
                <>
                  <Link to="/give" className="list-group-item list-group-item-action">Give</Link>
                  <Link to="/redeem" className="list-group-item list-group-item-action">Redeem</Link>
                  <Link to="/graphql" className="list-group-item list-group-item-action">GraphQL</Link>
                </>
              }
            </div>
          </nav>
        </div>

        <div className="col-md-10">
          <Alert
            message={alertMessage}
            className={alertClassName}
          />
          <Outlet context={{
            userToken, setUserToken, setAlertClassName, setAlertMessage
          }} />
        </div>
      </div>
    </div>
  );
}

export default App;
