import React, { use, useRef, useState } from "react";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEyeSlash } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { Helmet } from "react-helmet";
import { AuthContext } from "./AuthProvider";

const Login = () => {
  <Helmet>
    <title>Profile</title>
</Helmet>
  
  const { login, loginWithGoogle, resetPassword } = use(AuthContext);
  const emailRef = useRef()
  const [hideShow, setHideShow] = useState(false)
  const location  = useLocation()
  const navigate = useNavigate();

  
  console.log(location);

  const handelLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    login(email, password)
      .then((result) => {
        console.log(result);
        // if(result.user.emailVerified !== true){
        //   return (
        //     Swal.fire({
        //   icon: "error",
        //   title: "Oops...",
        //  text: "Your Email Is Not Verifide"
        // })
        //   )
        // }
        Swal.fire({
          title: "Welcome back!",
          text: "You’re now logged in.",
          icon: "success",
        });
       navigate(location.state?.pathname || '/')
      })
      .catch((error) => {
      
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };


  const handelGoogleLogin = () => {
    loginWithGoogle()
      .then(() => {
        Swal.fire({
          title: "Welcome back!",
          text: "You’re now logged in.",
          icon: "success",
        });
    
        navigate(location.state?.pathname || '/')
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  const handelResetPassword =()=>{
    console.log(emailRef);
    const email = emailRef.current.value;
    resetPassword(email).then(()=>{
      // console.log(result);
       
      Swal.fire({
                title: "Check your email!",
                text: "We've emailed you a link to reset your password",
                icon: "success",
              });
             
    }).catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
    })
  }
  const handelPasswordHideShow = ()=>{
    setHideShow(!hideShow)
  }
  return (
    <div className="hero min-h-screen ">
      <Helmet>
    <title>LogIn</title>
</Helmet>
      <div className="hero-content flex-col">
        <div className="card w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-2xl text-center p-4 font-bold">
            Login and explore what’s waiting for you!
          </h1>

          <div className="card-body border-t border-dashed border-gray-400">
            <form onSubmit={handelLogin}>
              <label className="label  text-xl">Email</label>
              <input
                type="email"
                name="email"
                ref={emailRef}
                className="input bg-gray-400 text-xl"
                placeholder="Email"
                required
              />
              <div  className="relative">
              <label className="label  text-xl">Password</label>
              <input
                type={hideShow ? 'text' : 'password'}
                name="password"
                className="input relative bg-gray-400 text-xl"
                placeholder="*******"
                required
              />
              <div onClick={handelPasswordHideShow} className="top-9 right-7 z-2 absolute cursor-pointer">
                  {hideShow ? <FaEyeSlash size={20} color="gray" /> : <IoMdEye size={20} color="gray" />}
              </div>
              </div>
              <div onClick={handelResetPassword}>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral w-full mt-3  bg-gray-800 text-2xl ">Login</button>
            </form>
          </div>
          <span
                className="text-center my-2
              "
              >
                Or
              </span>
              <button
                onClick={handelGoogleLogin}
                className="btn bg-white  text-black border-[#e5e5e5]"
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
               <p className="p-5">New here? please <Link className="underline text-indigo-800 font-medium" to='/sing-up'>Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;



// https://ibb.co/Fqf5btNj
// https://ibb.co/rKchcHBh
// https://ibb.co/wZ5pq7dJ
// https://ibb.co/MDD1z65y
// https://ibb.co/FbmpHtgj
// https://ibb.co/m5Mn9RyG
// https://ibb.co/6cNWN1Wf
// https://ibb.co/ZRBVCykR
// https://ibb.co/27w0Pd87
// https://ibb.co/VWZXHtwT
// https://ibb.co/PvBGhYMv
// https://ibb.co/1fwgBm87
// https://ibb.co/390mSfMs

// erteri440@gmail.com