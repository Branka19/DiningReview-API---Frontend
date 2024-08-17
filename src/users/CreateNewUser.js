import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function CreateNewUser() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    displayName: "",
    email: "",
    password: "",
    city: "",
    zipCode: "",
    interestedInPeanutAllergies: false,
    interestedInEggAllergies: false,
    interestedInDairyAllergies: false,
  });

  const {
    displayName,
    email,
    password,
    city,
    zipCode,
    interestedInDairyAllergies,
    interestedInEggAllergies,
    interestedInPeanutAllergies,
  } = user;

  const onInputChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setUser({ ...user, [name]: value });
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/users/addNew", user);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-5 mt-5 shadow">
          <h1
            className="col-8 offset-2 text-center border shadow-sm py-3 mb-5"
            style={{ borderRadius: 15 }}
          >
            REGISTER USER
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
                for="email"
                className="col-md-2 form-label mt-2 text-end p-0"
              >
                Email:
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="col-md-2 form-control"
                  name="email"
                  value={email}
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

export default CreateNewUser;
