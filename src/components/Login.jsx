import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [signInForm, setSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  //   Sign In and Sign Up toggle
  const toggleForm = () => {
    setSignForm(!signInForm);
  };

  //   useRef hook to reference the values from inputs
  const name = useRef(null); //set initial value to empty string
  const email = useRef(null); // we give initial value null
  const password = useRef(null); // we give initial value null

  const handleSignButtonClick = () => {
    // Validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    //  if there is (message and not null) dont go ahead other wise do sign in and sign up
    if (message) return;
    // sign in /sign up Logic

    if (!signInForm) {
      // SIGN UP LOGIC
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // update the user
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = auth.currentUser;
              // ...
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error.message);
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // Error message for Sign Up
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // SIGN IN LOGIC
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
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
          {signInForm ? "Sign In" : "Sign Up"}{" "}
        </h1>

        {/* sign in and sign up input toggle */}
        {!signInForm ? (
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
          autoComplete="current-password"
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
          {signInForm ? "Sign In" : "Sign Up"}
        </button>

        {!signInForm ? (
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
