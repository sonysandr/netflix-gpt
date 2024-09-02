import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux"

const Header = () => {
const navigate = useNavigate();
const user =  useSelector(store => store.user)


  const handleSignOut = () => {
    //

    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/")
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="absolute px-4 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between ">
      <img
        className=" w-44 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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
