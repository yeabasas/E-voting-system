import React from "react";

const Register = ({ previousStep }) => {
  const [FirstName, setFirstName] = React.useState("");
  const [MiddleName, setMiddleName] = React.useState("");
  const [LastName, setLastName] = React.useState("");
  const [Nationality, setNationality] = React.useState("");
  const [Gender, setGender] = React.useState("");
  const [Address, setAddress] = React.useState("");
  const [City, setCity] = React.useState("");
  const [Kebele, setKebele] = React.useState("");
  const [Subcity, setSubcity] = React.useState("");
  const [Duration, setDuration] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [DateOfBirth, setDateOfBirth] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div className="w-2/3 h-full flex flex-col gap-4 items-center justify-center mx-auto">
      <div className="text-lg font-semibold text-blue-600">
        NEBE Registration
      </div>
      <div className="grid grid-cols-3 gap-4">
        <input
          className="w-full outline-none px-2 py-0.5 rounded-md focus:bg-gray-100"
          type="text"
          value={FirstName}
          placeholder='First Name'
          onChange={({ target: { value } }) => {
            setUsername(value);
          }}
        />
        <input
          className="w-full outline-none px-2 py-0.5 rounded-md focus:bg-gray-100"
          type="text"
          value={MiddleName}
          placeholder='Middle Name'
          onChange={({ target: { value } }) => {
            setPassword(value);
          }}
        />
        <input
          className="w-full outline-none px-2 py-0.5 rounded-md focus:bg-gray-100"
          type="text"
          value={LastName}
          placeholder='Last Name'
          onChange={({ target: { value } }) => {
            setUsername(value);
          }}
        />
        <div className="col-span-2">
          <input
            className="w-full outline-none px-2 py-0.5 rounded-md focus:bg-gray-100"
            type="text"
            value={Nationality}
            placeholder='Nationality '
            onChange={({ target: { value } }) => {
              setPassword(value);
            }}
          />
        </div>
        <input
          className="w-full outline-none px-2 py-0.5 rounded-md focus:bg-gray-100"
          type="text"
          value={Gender}
          placeholder='Gender'
          onChange={({ target: { value } }) => {
            setPassword(value);
          }}
        />
        <input
          className="w-full outline-none px-2 py-0.5 rounded-md focus:bg-gray-100"
          type="text"
          value={Address}
          placeholder='Address'
          onChange={({ target: { value } }) => {
            setPassword(value);
          }}
        />
        <input
          className="w-full outline-none px-2 py-0.5 rounded-md focus:bg-gray-100"
          type="text"
          value={City}
          placeholder='City'
          onChange={({ target: { value } }) => {
            setPassword(value);
          }}
        />
        <input
          className="w-full outline-none px-2 py-0.5 rounded-md focus:bg-gray-100"
          type="text"
          value={Kebele}
          placeholder='Kebele'
          onChange={({ target: { value } }) => {
            setPassword(value);
          }}
        />
        <input
          className="w-full outline-none px-2 py-0.5 rounded-md focus:bg-gray-100"
          type="text"
          value={Subcity}
          placeholder='Subcity'
          onChange={({ target: { value } }) => {
            setPassword(value);
          }}
        />
        
        <input
          className="w-full outline-none px-2 py-0.5 rounded-md focus:bg-gray-100"
          type="text"
          value={Duration}
          placeholder='Duration of Residence'
          onChange={({ target: { value } }) => {
            setPassword(value);
          }}
        />
        <input
          className="w-full outline-none px-2 py-0.5 rounded-md focus:bg-gray-100"
          type="text"
          value={DateOfBirth}
          placeholder='Date of Birth'
          onChange={({ target: { value } }) => {
            setPassword(value);
          }}
        />
        <div className="col-span-3">
          <input
            className="w-full outline-none px-2 py-0.5 rounded-md focus:bg-gray-100"
            type="email"
            value={Email}
            placeholder='Email'
            onChange={({ target: { value } }) => {
              setPassword(value);
            }}
          />
        </div>
        <div className="col-span-3">
          <input
            className="w-full outline-none px-2 py-0.5 rounded-md focus:bg-gray-100"
            type="text"
            value={password}
            placeholder='Password'
            onChange={({ target: { value } }) => {
              setPassword(value);
            }}
          />
        </div>
      </div>
      <button className="w-fit h-fit px-4 py-1 bg-blue-500 hover:bg-blue-600 rounded-md text-white font-semibold">
        Register
      </button>
      <div className="w-fit flex items-center gap-2 text-sm">
        <div className="text-blue-600">Already have an account?</div>{" "}
        <button
          onClick={() => {
            previousStep();
          }}
        >
          Log In
        </button>
        
      </div>
    </div>
  );
};

export default Register;
