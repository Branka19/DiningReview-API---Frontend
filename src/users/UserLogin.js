import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function UserLogin() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    displayName: "",
    password: "",
  });

  const { displayName, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/users/login", user);
    navigate(`/users/${user.displayName}/view`);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-5 mt-5 shadow">
          <h1
            className="col-8 offset-2 text-center border shadow-sm py-3 mb-5"
            style={{ borderRadius: 15 }}
          >
            SIGN IN
          </h1>
          <form onSubmit={(e) => onFormSubmit(e)}>
            <div className="row mb-3">
              <label
                for="displayName"
                className="col-md-2 form-label mt-2 text-end p-0"
              >
                Username:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="col-md-2 form-control"
                  name="displayName"
                  value={displayName}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                for="password"
                className="col-md-2 form-label mt-2 text-end p-0"
              >
                Password:
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="col-md-2 form-control"
                  name="password"
                  value={password}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary m-3"
              style={{ width: 100 }}
            >
              Done
            </button>

            <Link
              className="btn btn-danger m-3 btn-block"
              style={{ width: 100 }}
              to="/"
            >
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
