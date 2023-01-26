import React from "react";

const Register = ({ previousStep }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div className="w-2/3 h-full flex flex-col gap-4 items-center justify-center mx-auto">
      <div className="text-lg font-semibold text-blue-600">
        NEBE Registration
      </div>
      <div className="grid col-">
        <input
          className="w-full outline-none px-2 py-0.5 rounded-md focus:bg-gray-100"
          type="text"
          value={username}
          placeholder='First Name'
          onChange={({ target: { value } }) => {
            setUsername(value);
          }}
        />
        <input
          className="w-full outline-none px-2 py-0.5 rounded-md focus:bg-gray-100"
          type="password"
          value={password}
          placeholder='Middle Name'
          onChange={({ target: { value } }) => {
            setPassword(value);
          }}
        />
        <input
          className="w-full outline-none px-2 py-0.5 rounded-md focus:bg-gray-100"
          type="text"
          value={username}
          placeholder='Last Name'
          onChange={({ target: { value } }) => {
            setUsername(value);
          }}
        />
        <input
          className="w-full outline-none px-2 py-0.5 rounded-md focus:bg-gray-100"
          type="password"
          value={password}
          placeholder='Nationality '
          onChange={({ target: { value } }) => {
            setPassword(value);
          }}
        />
        <input
          className="w-full outline-none px-2 py-0.5 rounded-md focus:bg-gray-100"
          type="password"
          value={password}
          placeholder='Gender'
          onChange={({ target: { value } }) => {
            setPassword(value);
          }}
        />
        <input
          className="w-full outline-none px-2 py-0.5 rounded-md focus:bg-gray-100"
          type="password"
          value={password}
          placeholder='Address'
          onChange={({ target: { value } }) => {
            setPassword(value);
          }}
        />
        <input
          className="w-full outline-none px-2 py-0.5 rounded-md focus:bg-gray-100"
          type="password"
          value={password}
          placeholder='City'
          onChange={({ target: { value } }) => {
            setPassword(value);
          }}
        />
        <input
          className="w-full outline-none px-2 py-0.5 rounded-md focus:bg-gray-100"
          type="password"
          value={password}
          placeholder='Kebele'
          onChange={({ target: { value } }) => {
            setPassword(value);
          }}
        />
        <input
          className="w-full outline-none px-2 py-0.5 rounded-md focus:bg-gray-100"
          type="password"
          value={password}
          placeholder='Subcity'
          onChange={({ target: { value } }) => {
            setPassword(value);
          }}
        />
        <input
          className="w-full outline-none px-2 py-0.5 rounded-md focus:bg-gray-100"
          type="password"
          value={password}
          placeholder='Duration of Residence'
          onChange={({ target: { value } }) => {
            setPassword(value);
          }}
        />
        <input
          className="w-full outline-none px-2 py-0.5 rounded-md focus:bg-gray-100"
          type="password"
          value={password}
          placeholder='Date of Birth'
          onChange={({ target: { value } }) => {
            setPassword(value);
          }}
        />
        <input
          className="w-full outline-none px-2 py-0.5 rounded-md focus:bg-gray-100"
          type="password"
          value={password}
          placeholder='Email'
          onChange={({ target: { value } }) => {
            setPassword(value);
          }}
        />
        <input
          className="w-full outline-none px-2 py-0.5 rounded-md focus:bg-gray-100"
          type="password"
          value={password}
          placeholder='Password'
          onChange={({ target: { value } }) => {
            setPassword(value);
          }}
        />
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
