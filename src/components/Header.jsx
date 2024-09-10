import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchfView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)

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
        navigate("/browse");
        // as soon as the user sign in we need to redirect
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    // cleaning up by returning a function  unsubscribe
    return () => {
      unsubscribe();
    };
  }, []);

  const handleGptSearch = () => {
    // toggle GPT search
    dispatch(toggleGptSearchfView());
  };
  const handleLanguageChange =(e)=>{
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className="absolute z-10 flex justify-between w-screen px-4 py-2 bg-gradient-to-b from-black ">
      <img className=" w-44" src={LOGO} alt="logo" />
      {user ? (
        <div className="flex items-center p-4 ">
          {showGptSearch && (<select className="p-2 text-white bg-black rounded-lg" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang) => {
              return (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              );
            })}
          </select>)}

          <div
            className="px-1 py-2 mx-4 text-white bg-red-500 rounded-lg cursor-pointer"
            onClick={handleGptSearch}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </div>

          <img className="size-[32px] " src={user.photoURL} alt="usericon" />
          <button
            onClick={handleSignOut}
            className="px-2 font-bold text-white "
          >
            (Sign Out)
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
