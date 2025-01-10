import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import loginAnimation from "../assets/login.json";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { user, signInUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [passType, setpassType] = useState(true);
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          title: "User Logged In",
          icon: "success",
          iconColor: "#f4ec11",
          confirmButtonText: "Okay",
          customClass: {
            confirmButton: "bg-amber-400 text-zinc-800 font-body px-32",
            title: "font-head font-bold text-2xls",
          },
        });
        navigate(from);
      })
      .catch((error) => {
        const msg = error.message;
        Swal.fire({
          title: "Unsuccessful Login",
          text: msg,
          icon: "error",
          iconColor: "#f4ec11",
          confirmButtonText: "Okay",
          customClass: {
            confirmButton: "bg-amber-400 text-zinc-800 font-body px-32",
            title: "font-head font-bold text-2xls",
          },
        });
      });
  };
  const handleValidate = (e) => {
    const value = e.target.value;
    if (validateCaptcha(value) == true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <div>
      <div className="w-9/12 mx-auto">
        <h2 className="text-center text-4xl mt-32 logo-1 text-zinc-900 tracking-widest">
          Sign In
        </h2>

        <div className="grid grid-cols-2">
          <div className="mt-5 mb-20">
            <form className="card-body font-body" onSubmit={handleSignIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={passType === true ? "password" : "text"}
                    placeholder="Your password"
                    name="password"
                    className="input input-bordered w-full"
                    required
                  />
                  {passType ? (
                    <button
                      className=" absolute  top-4 right-4"
                      onClick={() => setpassType(!passType)}
                      type="button"
                    >
                      <IoEyeOutline />
                    </button>
                  ) : (
                    <button
                      className=" absolute top-4 right-4"
                      onClick={() => setpassType(!passType)}
                      type="button"
                    >
                      <IoEyeOffOutline />
                    </button>
                  )}
                </div>
              </div>

              <div className="form-control">
                <div>
                  <LoadCanvasTemplate />
                </div>
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Captcha"
                    onBlur={handleValidate}
                    name="captcha"
                    className="input input-bordered flex-grow"
                    required
                  />
                  {/* <button
                    type="button"
                    onClick={handleValidate}
                    className="btn border border-zinc-300"
                  >
                    Validate
                  </button> */}
                </div>
              </div>
              <div className="form-control mt-6">
                <button
                  disabled={disabled}
                  className="btn bg-orange-500 hover:bg-zinc-300 border border-zinc-300 hover:border-zinc-400 text-white hover:text-black duration-300 font-body"
                >
                  Log In
                </button>
              </div>
            </form>
            <div className="my-4 text-center">
              <button className="px-20 btn bg-wgite hover:bg-zinc-300 border border-zinc-300 hover:border-zinc-400 text-black hover:text-black duration-300 font-body">
                Sign in with Google
              </button>
            </div>
            <h3 className="font-body text-center text-xl">
              New to this site?{" "}
              <Link to="/register" className="text-orange-500 font-bold">
                Register Now
              </Link>
            </h3>
          </div>
          <div className="flex justify-center items-center">
            <span className="relative w-full">
              <Lottie animationData={loginAnimation} loop={true} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
