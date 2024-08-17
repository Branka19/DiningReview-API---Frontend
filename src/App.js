import "./App.css";
import Home from "./layout/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import CreateNewUser from "./users/CreateNewUser";
import UserLogin from "./users/UserLogin.js";
import UpdateUser from "./users/UpdateUser";
import ViewUser from "./users/ViewUser.js";
import ViewReviews from "./users/ViewReviews.js";
import AddNewReview from "./users/AddNewReview.js";
import RestaurantsView from "./restaurants/RestaurantsView.js";
import AddNewRestaurant from "./restaurants/AddNewRestaurant.js";
import UserNavbar from "./layout/UserNavbar.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          ></Route>
          <Route exact path="/login" element={<UserLogin />}></Route>
          <Route exact path="/users/addNew" element={<CreateNewUser />} />
          <Route
            exact
            path="/users/:displayName/edit"
            element={<UpdateUser />}
          />
          <Route
            exact
            path="/users/:displayName/view"
            element={
              <>
                <UserNavbar />
                <ViewUser />
              </>
            }
          />
          <Route
            exact
            path="/users/:displayName/reviews"
            element={<ViewReviews />}
          />
          <Route
            exact
            path="/users/:displayName/reviews/addNew"
            element={<AddNewReview />}
          />
          <Route
            exact
            path="/restaurants/getAll"
            element={<RestaurantsView />}
          />
          <Route
            exact
            path="/restaurants/addNew"
            element={<AddNewRestaurant />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

/*
child routes for same page info? */
