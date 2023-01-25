import React from "react";
import StepWizard from "react-step-wizard";
import Login from "./Login";
import Register from "./Register";

const Authenticate = () => {
  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <StepWizard className="w-3/5 h-3/4 bg-blue-100 rounded-md">
        <Login />
        <Register />
      </StepWizard>
    </div>
  );
};

export default Authenticate;
