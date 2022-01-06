import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../services/firebase";

function Header() {
  return (
    <header className="bg-red-400 h-12 text-white" >
      <nav className="flex w-full  justify-between max-w-xl mx-auto">
        <Link className=" text-4xl self-center " to="/">
          CHATTY
        </Link>
        <div
          className="self-center align-middle"
          id="navbarNavAltMarkup"
        >
          {auth().currentUser ? (
            <div className="">
              <Link className="" to="/chat">
                Profile
              </Link>
              <button
                className=""
                onClick={() => auth().signOut()}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className=" mt-3 ">
              <Link className=" bg-orange-300 border-gray-800 border-1  rounded-full px-5 py-1 mr-5" to="/login">
                Sign In
              </Link>
              <Link className=" bg-fuchsia-600  border-gray-800 border-1  rounded-full px-5 py-1" to="/signup">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;