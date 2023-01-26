import React from "react";
import {Link} from 'react-router-dom'
const Result = () => {
  const { features } = useSelector((state) => state.setting);

  return (
    <div className="shadow-xl flex justify-center rounded-md">
      <div className="res-announcement">
      <Link
            to={feature.path}
            key={idx}
            className="w-fit h-fit flex flex-col items-center gap-2 rounded-md shadow-2xl pb-2 cursor-pointer"
          >
      </div>
    </div>
);
  
};

export default Result;
