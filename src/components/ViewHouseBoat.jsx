import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";

const ViewHouseBoat = () => {

  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios
      .get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/houseboat.json")
      .then((response) => {
        changeData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <NavBar />

      <div className="container mt-4">
        <div className="row g-4">

          {data.map((value, index) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3"
              key={index}
            >
              <div className="card h-100 shadow">

                <img
                  src={value.image}
                  className="card-img-top"
                  alt={value.boatName}
                  style={{
                    height: "220px",
                    objectFit: "cover"
                  }}
                />

                <div className="card-body">

                  <h5 className="card-title">
                    {value.boatName}
                  </h5>

                  <p className="card-text">
                    <strong>Category:</strong> {value.category}
                  </p>

                  <p className="card-text">
                    <strong>Bedrooms:</strong> {value.bedrooms}
                  </p>

                  <p className="card-text">
                    <strong>Capacity:</strong> {value.capacity} Persons
                  </p>

                  <p className="card-text">
                    <strong>Price/Night:</strong> ₹{value.pricePerNight}
                  </p>

                  <p className="card-text">
                    <strong>Route:</strong> {value.route}
                  </p>

                  <button className="btn btn-primary w-100">
                    Book Now
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default ViewHouseBoat;