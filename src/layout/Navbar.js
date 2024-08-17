import React from "react";
import { Link } from "react-router-dom";

//napravi da ima register/log out zavisno od logovanja
//route rate my restaurant na home
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

/*     
 className="bottom-0 end-0"   
  navbar-expand-lg -> determine when their content collapses behind a button
  bg-success -> color of the background
  bg-body-tertiary -> doesn't work
  container-fluid -> a full width container, spanning the entire width of the viewport
  mb -> margin-bottom
  data-bs-toggle="collapse" -> collapses the button
  data-bs-target -> instead of href attribute (goes with button)
  aria-controls -> attribute pointing to the id of the content container
  aria-expanded -> If the collapsible element is closed by default, the attribute on the control element should have a value of aria-expanded="false"
  aria-label -> Since breadcrumbs provide a navigation, it’s a good idea to add a meaningful label such as aria-label="breadcrumb" to describe the type of navigation provided in the <nav> element
  */
