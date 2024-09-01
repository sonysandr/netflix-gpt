import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [signForm, setSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  //   Sign In and Sign Up toggle
  const toggleForm = () => {
    setSignForm(!signForm);
  };

  //   useRef hook to reference the values from inputs
  const name = useRef(null); // initial value as null
  const email = useRef(null); // we give initial value null
  const password = useRef(null); // we give initial value null

  const handleSignButtonClick = () => {
    // Validate the form data

    const message = checkValidData(name.current.value,email.current.value, password.current.value);
    setErrorMessage(message);
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg"
          alt="bgimage"
        />
      </div>
      <form
        className=" w-3/12 rounded-md  bg-black p-12 absolute right-0 left-0  mx-auto my-36 text-white bg-opacity-80  "
        onClick={(e) => e.preventDefault()}
      >
        {/* Form Heading Toggle */}

        <h1 className=" font-bold  text-3xl p-2 m-2">
          {signForm ? "Sign In" : "Sign Up"}{" "}
        </h1>

        {/* sign in and sign up input toggle */}
        {!signForm ? (
          // name input
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className=" p-4 my-4 w-full rounded-md bg-gray-700"
          />
        ) : null}

        {/* Email input */}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className=" p-4 my-4 w-full rounded-md bg-gray-700"
        />
        {/* Password input */}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className=" p-4 my-4 w-full rounded-md bg-gray-700"
        />
        {/* Error messfe */}
        <p className="py-2 text-red-600 font-bold text-md ">{errorMessage}</p>

        {/* Sign In or Sign Up button */}
        <button
          className=" p-4 my-6 bg-red-600  rounded-md w-full"
          onClick={handleSignButtonClick}
        >
          {signForm ? "Sign In" : "Sign Up"}
        </button>

        {!signForm ? (
          <p className=" py-6 cursor-pointer" onClick={toggleForm}>
            Already have a Netflix acoount ? Sign in Now
          </p>
        ) : (
          <p className=" py-6 cursor-pointer" onClick={toggleForm}>
            New to Netflix ? Sign Up Now
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
