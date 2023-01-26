import React from "react";
import {Link} from 'react-router-dom'
const Result = () => {
  return (
    <div className="my-">
      <div className="res-announcement">
          <Link to={'/'}>
              <button className='can-btn-temp' ></button>
              <h2>Title and year</h2>
          </Link>
      </div>
    </div>
);
  
};

export default Result;
