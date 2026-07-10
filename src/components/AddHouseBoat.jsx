import React from 'react'

const AddHouseBoat = () => {
  return (
    <div>


<div className="container mt-4">
  <div className="row">
    <div className="col-12">

      <div className="row g-3">

        <div className="col-12 col-sm-6 col-md-4">
          <label className="form-label">Boat ID</label>
          <input type="text" className="form-control" />
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <label className="form-label">Boat Name</label>
          <input type="text" className="form-control" />
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <label className="form-label">Category</label>
          <select className="form-select">
            <option>Select Category</option>
            <option>Budget</option>
            <option>Deluxe</option>
            <option>Premium</option>
            <option>Luxury</option>
          </select>
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <label className="form-label">Bedrooms</label>
          <input type="number" className="form-control" />
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <label className="form-label">Capacity</label>
          <input type="number" className="form-control" />
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <label className="form-label">AC Type</label>
          <select className="form-select">
            <option>Select AC Type</option>
            <option>Non AC</option>
            <option>Single AC</option>
            <option>Double AC</option>
            <option>Fully Air Conditioned</option>
          </select>
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <label className="form-label">Price Per Night (₹)</label>
          <input type="number" className="form-control" />
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <label className="form-label">Route</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. Alleppey - Kumarakom"
          />
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <label className="form-label">Built Year</label>
          <input type="number" className="form-control" />
        </div>

        <div className="col-12">
          <label className="form-label">Image URL</label>
          <input
            type="text"
            className="form-control"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div className="col-12">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows="4"
            placeholder="Enter houseboat description"
          ></textarea>
        </div>

        <div className="col-12">
          <button className="btn btn-success">
            Add Houseboat
          </button>
        </div>

      </div>

    </div>
  </div>
</div>




    </div>
  )
}

export default AddHouseBoat