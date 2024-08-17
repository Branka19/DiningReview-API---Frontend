import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function UpdateUser() {
  let navigate = useNavigate();
  const [alert, setAlert] = useState(false);
  const { displayName } = useParams();

  const [user, setUser] = useState({
    city: "",
    zipCode: "",
    interestedInPeanutAllergies: false,
    interestedInEggAllergies: false,
    interestedInDairyAllergies: false,
  });

  const {
    city,
    zipCode,
    interestedInPeanutAllergies,
    interestedInEggAllergies,
    interestedInDairyAllergies,
  } = user;

  const loadUser = async () => {
    const result = await axios.get(
      `http://localhost:8080/users/${displayName}`
    );
    setUser(result.data);
  };

  const onInputChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/users/${displayName}`, user);
    navigate("/");
  };

  function alertUser() {
    return (
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <strong>Username</strong> cannot be changed.
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    );
  }

  function addAlert() {
    setAlert(true);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-5 mt-5 shadow">
          <h1
            className="col-8 offset-2 text-center border shadow-sm py-3 mb-5"
            style={{ borderRadius: 15 }}
          >
            EDIT USER
          </h1>
          <form onSubmit={(e) => onFormSubmit(e)}>
            <div className="row mb-3">
              {alert ? alertUser() : <React.Fragment />}
              <label
                for="displayName"
                className="col-md-2 form-label mt-2 text-end p-0"
              >
                Username:
              </label>
              <div className="col-sm-10">
                <input
                  style={{ color: "grey" }}
                  type="text"
                  className="col-md-2 form-control"
                  name="displayName"
                  value={displayName}
                  readOnly
                  onClick={addAlert}
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                for="city"
                className="col-md-2 form-label mt-2 text-end p-0"
              >
                City:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="col-md-2 form-control"
                  name="city"
                  value={city}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                for="zipCode"
                className="col-md-2 form-label mt-2 text-end p-0"
              >
                Zip code:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="col-md-2 form-control"
                  name="zipCode"
                  placeholder="no letters allowed"
                  value={zipCode}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
            </div>

            <span className="text-center">
              Interested in the following allergies:
            </span>
            <div className="row mb-3 mt-3">
              <label
                for="interestedInPeanutAllergies"
                className="col-md-6 form-label text-end m-0"
              >
                peanuts
              </label>
              <div className="col-md-1 m-0">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="interestedInPeanutAllergies"
                  value={interestedInPeanutAllergies}
                  checked={interestedInPeanutAllergies}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <label
                for="interestedInEggAllergies"
                className="col-md-6 form-label text-end m-0"
              >
                eggs
              </label>
              <div className="col-md-1 m-0">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="interestedInEggAllergies"
                  value={interestedInEggAllergies}
                  checked={interestedInEggAllergies}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <label
                for="interestedInDairyAllergies"
                className="col-md-6 form-label text-end m-0"
              >
                dairy
              </label>
              <div className="col-md-1 m-0">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="interestedInDairyAllergies"
                  value={interestedInDairyAllergies}
                  checked={interestedInDairyAllergies}
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

export default UpdateUser;

/*
need to use useState - to add some JSX to be returned by onClick event 

in App.js:
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

in UpdateUser:

const [alert, setAlert] = useState(false);

  function alertUser() {
    return (
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those
        fields below.
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    );
  }

  function addAlert() {
    setAlert(true);
  }

             <div className="row mb-3">
              <label
                for="displayName"
                className="col-md-2 form-label mt-2 text-end p-0"
              >
                Username:
              </label>
              <div className="col-sm-10">
                {alert ? alertUser() : <React.Fragment />}
                <input
                  type="text"
                  className="col-md-2 form-control"
                  name="displayName"
                  value={displayName}
                  onClick={addAlert}
                />
              </div>
            </div>
*/
