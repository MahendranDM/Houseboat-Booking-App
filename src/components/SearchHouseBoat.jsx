import React from 'react'
import NavBar from './NavBar'

const SearchHouseBoat = () => {
  return (
    <div>
       <NavBar/> 

<div className="container">
                <div className="row">
                    <div className="col col-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6">
                                <label htmlFor="" className="form-label">Houseboat ID</label>

                                <input type="text" className="form-control mt-3" />

                                <button className="btn btn-warning mt-3">Search</button>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6"></div>
                        </div>






                    </div>
                </div>
            </div>





    </div>
  )
}

export default SearchHouseBoat