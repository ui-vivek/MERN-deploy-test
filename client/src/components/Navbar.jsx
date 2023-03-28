import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Navbar = () => {
  const Navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));
  //handleLogout
  const handleLogout = async () => {
    try {
      await axios.post("/api/v1/auth/logout");
      localStorage.removeItem("authToken");
      Navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          daisyUI
        </Link>
      </div>
      <div className="flex-none px-4">
        {loggedIn ? (
          <Link to={"/login"} onClick={handleLogout}>
            <button className="btn btn-circle btn-ghost px-2">LogOut</button>
          </Link>
        ) : (
          <>
            <Link to={"/register"}>
              <button className="btn btn-circle btn-ghost px-2">Sign Up</button>
            </Link>
            <Link to={"/login"}>
              <button className="btn btn-circle btn-ghost px-2">Sign In</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
