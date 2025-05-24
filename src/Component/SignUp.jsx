import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router";
import { IoMdEye } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { AuthContext } from "./AuthProvider";

const SignUp = () => {
  const navigate = useNavigate();
  const { signUp, loginWithGoogle, userUpdateProfile } =
    useContext(AuthContext);

  const [hideShow, setHideShow] = useState(false);
  const [hideShowConfirm, setHideShowConfirm] = useState(false);

  const handelSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirm = e.target.confirm.value;
    // console.log(password, email, confirm);

    if (name.length < 6) {
      return Swal.fire({
        icon: "error",
        text: "Invalid! Name must be more than 6 character!",
        color: "#333",
      });
    }

    if (!/[A-Z]/.test(password)) {
      return Swal.fire({
        icon: "error",
        text: "Invalid password! Needs at least one Uppercase letter!",
        color: "#333",
      });
    }

    if (!/[a-z]/.test(password)) {
      return Swal.fire({
        icon: "error",
        text: "Invalid password! Needs at least one Lowercase  letter!",
        color: "#333",
      });
    }

    if (!/[0-9]/.test(password)) {
      return Swal.fire({
        icon: "error",
        text: "Invalid password! Needs at least one Number digit!",
        color: "#333",
      });
    }

    if (!/^(?=.*[^A-Za-z0-9]).+$/.test(password)) {
      return Swal.fire({
        icon: "error",
        text: "Invalid password! Needs at least one Special character!",
        color: "#333",
      });
    }

    if (password !== confirm) {
      return Swal.fire({
        icon: "error",
        text: "Password and confirm password must be equal and same!",
        color: "#333",
      });
    }
    const userData = {
      displayName: name,
      photoURL: photo,
    };

    signUp(email, password)
      .then(() => {
        userUpdateProfile(userData)
          .then(() => {
            console.log("update profile");
          })
          .catch((error) => {
            console.log(error);
          });

        // emailVerification().then(() => {});

        //   .then(() => {
        //     console.log("update profile");
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });

        // alert(
        //   "Your account created successfullu  Verifify your Email to Login!"
        // );
        // window.location.href = "https://mail.google.com/";

        Swal.fire({
          title: "Congratulations!",
          text: "Your account created successfullu!",
          icon: "success",
        });
        navigate("/");
        // console.log(user);
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  const handelGoogleSignUp = () => {
    loginWithGoogle()
      .then(() => {
        Swal.fire({
          title: "Congratulations!",
          text: "Your account created successfullu!",
          icon: "success",
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  const handelPasswordHideShow = () => {
    setHideShow(!hideShow);
  };
  const handelConfirmPasswordHideShow = () => {
    setHideShowConfirm(!hideShowConfirm);
  };
  return (
    <div className="my-10">
      <Helmet>
        <title>SignUp</title>
      </Helmet>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <div className="card  w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body p-8 border border-gray-300">
              <h1 className="text-5xl font-medium">SignUp now!</h1>
              <form onSubmit={handelSignUp}>
                <label className="label text-xl">Name</label>
                <input
                  type="text"
                  className="input text-xl bg-gray-400"
                  placeholder="Name"
                  name="name"
                  required
                />
                <label className="label text-xl">Photo</label>
                <input
                  type="text"
                  className="input text-xl bg-gray-400"
                  placeholder="Photo"
                  name="photo"
                  required
                />
                <label className="label text-xl">Email</label>
                <input
                  type="email"
                  className="input text-xl bg-gray-400"
                  placeholder="Email"
                  name="email"
                  required
                />
                <div className="relative">
                  <label className="label text-xl">Password</label>
                  <input
                    type={hideShow ? "text" : "password"}
                    name="password"
                    className="input relative text-xl bg-gray-400"
                    placeholder="*******"
                    required
                  />
                  <div
                    onClick={handelPasswordHideShow}
                    className="top-10 right-7 z-2 absolute cursor-pointer"
                  >
                    {hideShow ? (
                      <FaEyeSlash size={20} />
                    ) : (
                      <IoMdEye size={20} />
                    )}
                  </div>
                </div>
                <div className="relative">
                  <label className="label text-xl">Confirm Password</label>
                  <input
                    type={hideShowConfirm ? "text" : "password"}
                    name="confirm"
                    className="input relative text-xl bg-gray-400"
                    placeholder="*******"
                    required
                  />
                  <div
                    onClick={handelConfirmPasswordHideShow}
                    className="top-10 right-7 z-2 absolute cursor-pointer"
                  >
                    {hideShowConfirm ? (
                      <FaEyeSlash size={20} />
                    ) : (
                      <IoMdEye size={20} />
                    )}
                  </div>
                </div>

                <input
                  type="submit"
                  className="btn btn-neutral mt-3 w-full bg-gray-800"
                  value="SignUp"
                />
              </form>
              <span
                className="text-center my-4
              "
              >
                Or
              </span>
              <button
                onClick={handelGoogleSignUp}
                className="btn border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                SignUp with Google
              </button>
              <p>
                Already have an acount please{" "}
                <Link
                  className="underline text-indigo-800 font-medium"
                  to="/login"
                >
                  LogIn
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
