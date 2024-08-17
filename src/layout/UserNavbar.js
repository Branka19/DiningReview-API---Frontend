import React from "react";
import { Link, useParams } from "react-router-dom";

function UserNavbar() {
  const { displayName } = useParams();

  return (
    <div>
      <nav className="navbar bg-success bg-gradient">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1" style={{ color: "white" }}>
            <b>Hello {displayName}!</b>
          </span>
          <div className="btn-group">
            <Link
              to={`http://localhost:3000/users/${displayName}/edit`}
              className="btn btn-outline-success"
              style={{
                color: "white",
                borderColor: "white",
                borderRadius: "2%",
                marginRight: "10px",
              }}
            >
              Edit
            </Link>

            <Link
              className="btn btn-outline-success"
              style={{
                color: "white",
                borderColor: "white",
                borderRadius: "2%",
                marginLeft: "10px",
                marginRight: "10px",
              }}
              to="/"
            >
              Sign Out
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default UserNavbar;
