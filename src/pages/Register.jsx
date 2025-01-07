import React, { useContext } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import registerAnimation from "../assets/register.json";
import { AuthContext } from "../AuthFiles/AuthProvider";
import { updateProfile } from "firebase/auth";
const Register = () => {
  const { user, createUser } = useContext(AuthContext);
  ///
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    if (password.length < 6) {
      Swal.fire({
        title: "Pass should be at least 6 characters!!!",
        icon: "error",
        iconColor: "#f4ec11",
        confirmButtonText: "Okay",
        customClass: {
          confirmButton: "bg-amber-400 text-zinc-800 font-body px-32",
          title: "font-head font-bold text-2xls",
        },
      });
      return;
    }
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);

    if (!hasUpperCase || !hasLowerCase) {
      Swal.fire({
        title:
          "Password must include at least one uppercase and one lowercase letter!!!",
        icon: "error",
      });
      return;
    }
    createUser(email, password).then((result) => {
      const user = result.user;
      updateProfile(user, { displayName: name, photoURL: photoURL })
        .then(() =>
          Swal.fire({
            title: "User Created",
            icon: "success",
            iconColor: "#f4ec11",
            confirmButtonText: "Okay",
            customClass: {
              confirmButton: "bg-amber-400 text-zinc-800 font-body px-32",
              title: "font-head font-bold text-2xls",
            },
          })
        )
        .catch((err) => console.log(err));
    });
  };
  return (
    <div>
      <div className="w-9/12 mx-auto">
        <h2 className="text-center text-4xl mt-32 logo-1 text-zinc-900 tracking-widest">
          Sign Up now!
        </h2>
        <div className="grid grid-cols-2 gap-5">
          <div className="flex justify-center items-center">
            <span className="relative w-full">
              <Lottie animationData={registerAnimation} loop={true} />
            </span>
          </div>
          <div className="mb-20">
            <form className="card-body font-body" onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="Your name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  placeholder="Valid Photo URL (URL should end with .jpg/.jpeg/.png)"
                  name="photoURL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Your password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn  bg-orange-500 hover:bg-zinc-300 border border-zinc-300 hover:border-zinc-400 text-white hover:text-black duration-300 font-body">
                  Sign Up
                </button>
              </div>
            </form>
            <h3 className="font-body text-center text-xl">
              Already have an account?{" "}
              <Link to="/login" className="text-orange-500 font-bold">
                Log in Now
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
