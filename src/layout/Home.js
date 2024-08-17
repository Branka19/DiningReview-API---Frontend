import React from "react";
import Restaurant from "../images/Restaurant.jpg";

function Home() {
  return (
    <>
      <div>
        <p className="text-center">Welcome to our website!</p>
        <p className="text-center">
          This page is designed to help you find the best restaurants based on
          your location, food preference or allergies. <br />
          The reviews from the users are 100% verified by our admins. <br />
          If you wish to leave a review, feel free to register and create some
          awesome reviews for the restaurantes you've visited.
          <br /> Have a great time reading!
        </p>
      </div>

      <table>
        <tbody>
          <tr>
            <th className="col-sm-4">
              <img
                src={Restaurant}
                className="float-start border border-success border-5"
                alt="People sitting in a restaurant."
                width={500}
                height={500}
              />
            </th>
            <th className="col-sm-8 text-sm-center align-bottom">
              This is a placeholder for review previews.
            </th>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Home;
