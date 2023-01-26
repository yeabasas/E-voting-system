import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Result = () => {
  const { features } = useSelector((state) => state.contestant);

  return(
    <div className="flex justify-center rounded-md my-9">
    <div className="w-100 grid grid-cols-2 items-center justify-around gap-7">
      {features.map((feature, idx) => (
          <Link
            to={feature.path}
            key={idx}
            className="w-fit h-fit flex flex-col items-center gap-2 rounded-md shadow-2xl pb-2 cursor-pointer"
          >
            <img
              className="w-48 h-48 object-cover"
              src={feature.icon}
              alt="Register"
            />
            <div className="text-lg font-semibold">{feature.title}</div>
            <div className="text-lg font-semibold">From {feature.party}</div>
            <div className="text-lg font-semibold text-blue-840">Collected Votes: {feature.voted}</div>
            
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Result;
