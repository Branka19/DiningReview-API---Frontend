import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar bg-success bg-gradient">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1" style={{ color: "white" }}>
            <b>RATE MY RESTAURANT!</b>
          </span>
          <div className="btn-group">
            <Link
              className="btn btn-outline-success"
              style={{
                color: "white",
                borderColor: "white",
                borderRadius: "2%",
                marginRight: "10px",
              }}
              to="/login"
            >
              Sign In
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
              to="/users/addNew"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
