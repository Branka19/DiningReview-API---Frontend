import { isContentEditable } from "@testing-library/user-event/dist/utils";
import React from "react";
import { Link, useParams } from "react-router-dom";

function ViewUser() {
  const { displayName } = useParams();

  return (
    <div className="container-fluid ms-2 vh-100">
      <div className="row h-75">
        <div className="col-md-4 border rounded p-4 mt-2 shadow h-100">
          <div className="list-group rounded">
            <Link
              to={`http://localhost:3000/users/${displayName}/reviews`}
              className="card mb-2 list-group-item list-group-item-action"
            >
              Reviews
            </Link>
            <Link
              to={`http://localhost:3000/users/${displayName}/reviews/addNew`}
              className="card mb-2 list-group-item list-group-item-action"
            >
              Add Review
            </Link>
            <Link
              to={`http://localhost:3000/restaurants/getAll`}
              className="card mb-2 list-group-item list-group-item-action"
            >
              Restaurants
            </Link>
            <Link
              to={`http://localhost:3000/restaurants/addNew`}
              className="card mb-2 list-group-item list-group-item-action"
            >
              Add Restaurant
            </Link>
            <button className="card mb-2 list-group-item list-group-item-action">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewUser;

/*
container-fluid: sets the container to the beginning of the page (left alignment) */

//NEXT: authentication of the user! change NAV accordingly
