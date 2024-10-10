import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="mt-3">Void</h1>
        </div>
        <div className="col text-end">
          <Link to="/login"><span className="badge bg-success">Login</span></Link>
        </div>
        <hr className="mb-3"></hr>
      </div>

      <div className="row">
        <div className="col-md-2">
          <nav>
            <div className="list-group">
              <Link to="/" className="list-group-item list-group-item-action">Home</Link>
              <Link to="/give" className="list-group-item list-group-item-action">Give</Link>
              <Link to="/redeem" className="list-group-item list-group-item-action">Redeem</Link>
              <Link to="/graphql" className="list-group-item list-group-item-action">GraphQL</Link>
            </div>
          </nav>
        </div>
        <div className="col-md-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
