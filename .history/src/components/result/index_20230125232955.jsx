import React from "react";
import {Link} from 're'
const Result = () => {
  return (
    <div className="res-container">
      <div className="res-announcement">
          <Link to={'/detailPage'}>
              <button className='can-btn-temp' ></button>
              <h2>Title and year</h2>
          </Link>
      </div>
    </div>
);
  
};

export default Result;
