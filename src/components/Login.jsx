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
import { BG_URL, USER_AVATAR } from "../utils/constants";

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
          // console.log(user);
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
          // console.log(user);
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
          src={BG_URL}
          alt="bgimage"
        />
      </div>
      <form
        className="absolute left-0 right-0 w-3/12 p-12 mx-auto text-white bg-black rounded-md my-36 bg-opacity-80"
        onClick={(e) => e.preventDefault()}
      >
        {/* Form Heading Toggle */}

        <h1 className="p-2 m-2 text-3xl font-bold ">
          {signInForm ? "Sign In" : "Sign Up"}{" "}
        </h1>

        {/* sign in and sign up input toggle */}
        {!signInForm ? (
          // name input
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="w-full p-4 my-4 bg-gray-700 rounded-md "
          />
        ) : null}

        {/* Email input */}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="w-full p-4 my-4 bg-gray-700 rounded-md "
        />
        {/* Password input */}
        <input
          autoComplete="current-password"
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full p-4 my-4 bg-gray-700 rounded-md "
        />

        {/* Error messfe */}
        <p className="py-2 font-bold text-red-600 text-md ">{errorMessage}</p>

        {/* Sign In or Sign Up button */}
        <button
          className="w-full p-4 my-6 bg-red-600 rounded-md "
          onClick={handleSignButtonClick}
        >
          {signInForm ? "Sign In" : "Sign Up"}
        </button>

        {!signInForm ? (
          <p className="py-6 cursor-pointer " onClick={toggleForm}>
            Already have a Netflix acoount ? Sign in Now
          </p>
        ) : (
          <p className="py-6 cursor-pointer " onClick={toggleForm}>
            New to Netflix ? Sign Up Now
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
