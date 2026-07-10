import React, { useState } from "react";
import NavBar from "./NavBar";

const ViewHouseBoat = () => {

  const [data, changeData] = useState([
    {
      boatId: "HB101",
      boatName: "Royal Cruise",
      category: "Luxury",
      bedrooms: 4,
      capacity: 8,
      price: "₹18,000",
      route: "Alleppey - Kumarakom",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600"
    },
    {
      boatId: "HB102",
      boatName: "Kerala Queen",
      category: "Premium",
      bedrooms: 3,
      capacity: 6,
      price: "₹15,000",
      route: "Alleppey - Pathiramanal",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600"
    },
    {
      boatId: "HB103",
      boatName: "Backwater Pearl",
      category: "Deluxe",
      bedrooms: 2,
      capacity: 4,
      price: "₹10,500",
      route: "Kumarakom - Vaikom",
      image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600"
    },
    {
      boatId: "HB104",
      boatName: "Lake Palace",
      category: "Luxury",
      bedrooms: 5,
      capacity: 10,
      price: "₹22,000",
      route: "Alleppey - Kuttanad",
      image: "https://images.unsplash.com/photo-1468413253725-0d5181091126?w=600"
    },
    {
      boatId: "HB105",
      boatName: "Green Waves",
      category: "Budget",
      bedrooms: 1,
      capacity: 2,
      price: "₹6,000",
      route: "Alleppey Canal Cruise",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600"
    },
    {
      boatId: "HB106",
      boatName: "Blue Lagoon",
      category: "Premium",
      bedrooms: 3,
      capacity: 6,
      price: "₹14,500",
      route: "Kumarakom - Alleppey",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600"
    },
    {
      boatId: "HB107",
      boatName: "Sunset Paradise",
      category: "Deluxe",
      bedrooms: 2,
      capacity: 5,
      price: "₹11,000",
      route: "Alleppey - Marari",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600"
    },
    {
      boatId: "HB108",
      boatName: "Golden River",
      category: "Luxury",
      bedrooms: 4,
      capacity: 8,
      price: "₹19,500",
      route: "Kumarakom - Kottayam",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600"
    }
  ]);

  return (
    <div>
      <NavBar />

      <div className="container mt-4">
        <div className="row g-4">

          {data.map((value, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
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
                    <strong>Price/Night:</strong> {value.price}
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