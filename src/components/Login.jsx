import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [signForm, setSignForm] = useState(true);

  const toggleForm = () => {
    setSignForm(!signForm);
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
      <form className=" w-3/12 rounded-md  bg-black p-12 absolute right-0 left-0  mx-auto my-36 text-white bg-opacity-80  ">
        {/* Form Heading Toggle */}
        {signForm ? (
          <h1 className=" font-bold  text-3xl p-2 m-2">Sign In</h1>
        ) : (
          <h1 className=" font-bold  text-3xl p-2 m-2">Sign Up</h1>
        )}

        {/* sign in and sign up input toggle */}
        {!signForm ? <input
          type="text"
          placeholder="Full Name"
          className=" p-4 my-4 w-full rounded-md bg-gray-700"
        /> : null }

        <input
          type="text"
          placeholder="Email Address"
          className=" p-4 my-4 w-full rounded-md bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className=" p-4 my-4 w-full rounded-md bg-gray-700"
        />
        {signForm ? <button className=" p-4 my-6 bg-red-600  rounded-md w-full">
          Sign In
        </button> : <button className=" p-4 my-6 bg-red-600  rounded-md w-full">
          Sign Up
        </button>}

        {!signForm ? <p className=" py-6 cursor-pointer" onClick={toggleForm}>
          Already have a Netflix acoount ? Sign in Now
        </p> : <p className=" py-6 cursor-pointer" onClick={toggleForm}>
          New to Netflix ? Sign Up Now
        </p>  }
        
      </form>
    </div>
  );
};

export default Login;
