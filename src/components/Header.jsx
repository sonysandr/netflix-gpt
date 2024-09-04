import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"
import { addUser, removeUser } from "../utils/userSlice";
import {LOGO} from "../utils/constants";

const Header = () => {
const navigate = useNavigate();
const dispatch = useDispatch();
const user =  useSelector(store => store.user)


  const handleSignOut = () => {
    //

    signOut(auth)
      .then(() => {
        // Sign-out successful.
        
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        const { uid, email, displayName, photoURL } = user;
        // ...
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse")
        // as soon as the user sign in we need to redirect
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/")
      }
    });
    // cleaning up by returning a function  unsubscribe
    return () =>{
      unsubscribe();
    }

  }, []);

  return (
    <div className="absolute px-4 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between ">
      <img
        className=" w-44 "
        src= {LOGO}
        alt="logo"
      />
     {user ?  <div className=" flex items-center p-4 ">
        <img
          className="size-[32px] "
          src=  {user.photoURL}
          alt="usericon"
        />
        <button onClick={handleSignOut} className=" px-2 text-white font-bold ">
          (Sign Out)
        </button>
      </div> : null}
    </div>
  );
};

export default Header;
