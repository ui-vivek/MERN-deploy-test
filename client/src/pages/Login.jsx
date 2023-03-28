import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Login = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      toast.success("Sign In Successfully");
      localStorage.setItem("authToken", true);
      Navigate("/");
    } catch (err) {
      if (err.response.data.error) {
        toast.error(err.response.data.error, "Something Wrong");
      } else if (err.message) {
        toast.error(err.message, "Something Wrong");
      }
      console.log(err);
    }
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  placeholder="email"
                  className="input input-bordered"
                  type="email"
                  aria-label="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  required
                  minLength={6}
                  className="input input-bordered"
                  type="password"
                  aria-label="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-active btn-primary">
                  Sign In
                </button>
              </div>
              <label className="label">
                Not have account
                <Link to={"/register"} className=" btn btn-link">
                  Sign Up
                </Link>
              </label>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
