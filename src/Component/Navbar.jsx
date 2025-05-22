import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "./AuthProvider";
import { FaMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";


const Navbar = () => {
  const navigate = useNavigate();
  const { user, singOutUser, darkMode, toggleTheme  } = useContext(AuthContext);

  const handelSignOUt = () => {
    singOutUser()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
    <div className="navbar md:flex justify-between shadow px-20 hidden">
      <div className=" flex gap-4 items-center">
        <h3 className="text-2xl font-bold">HariCare</h3>
      <h2 className="break-all">{user?.email}</h2>
      </div>
      <div className="flex gap-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-2xl ${isActive ? "underline pb-2" : ""}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/all-plant"
          className={({ isActive }) =>
            `text-2xl ${isActive ? "underline pb-2" : ""}`
          }
        >
          All Plant
        </NavLink>
        <NavLink
          to="/add-plant"
          className={({ isActive }) =>
            `text-2xl ${isActive ? "underline pb-2" : ""}`
          }
        >
          Add Plant
        </NavLink>
        <NavLink
          to={`/my-plant/${user?.email}`}
          className={({ isActive }) =>
            `text-2xl ${isActive ? "underline pb-2" : ""}`
          }
        >
          My Plant
        </NavLink>
      </div>
      <div className=" flex gap-5">
        <div className="flex gap-3 items-center">
          <h3 className="text-2xl font-medium ">
            {user ? user.displayName : ""}
          </h3>
        
        {user && (
  <img
    className="w-10 h-10 rounded-full"
    src={user.photoURL}
    alt="User Profile"
    title={user?.displayName}
  />
)}

        </div>


        {user ? (
          <button
            onClick={handelSignOUt}
            className="rounded-lg text-gray-600 font-bold px-4 text-2xl"
          >
            SignOut
          </button>
        ) : (
          <>
          <Link
            className="rounded-lg font-medium px-4 py-2"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="rounded-lg font-medium px-4 py-2"
            to="/sing-up"
          >
            Register
          </Link>
          </>
        )}


<button onClick={toggleTheme}>
        {darkMode ?<FaMoon className="Switch to Dark Mode" size={30} color="white"/>:<MdOutlineWbSunny className="Switch to Light Mode" size={30} color="black"/>} </button>

      </div>
    </div>

    {/* mobail navbar */}

    <div className="navbar shadow-sm md:hidden">
    
    <div className="navbar-start">
      <div className="dropdown">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />{" "}
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/all-plant">All Plant</Link>
          </li>
          <li>
            <Link to="/add-plant">Add Plant</Link>
          </li>
          <li>
            <Link to={`/my-plant/${user?.email}`}>My Plant</Link>
          </li>
        </ul>
      </div>
      <button onClick={toggleTheme}>
        {darkMode ?<FaMoon className="Switch to Dark Mode" size={20} color="white"/>:<MdOutlineWbSunny className="Switch to Light Mode" size={20} color="black"/>} </button>
    </div>
 
    <div>
    
      <h3 className="text-xl text-left font-medium">Stacked</h3>
    </div>
    <div className="navbar-end">
      <div className=" flex gap-5">
        <div className="flex gap-3 items-center">
          <img
            className="w-10 h-10 rounded-full"
            alt="Tailwind CSS Navbar component"
            src={`${
              user
                ? user.photoURL
                : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            }`}
            title={user?.displayName}
          />
        </div>
        {user ? (
          <button
            onClick={handelSignOUt}
            className=" font-medium rounded-lg px-2 py-1"
          >
            SignOut
          </button>
        ) : (
          <Link
            className="rounded-lg font-medium px-2 py-1"
            to="/login"
          >
            <h2>Login</h2>
          </Link>
        )}
      </div>
    </div>
    <div>
    
    </div>
  </div>
    </>
  );
};

export default Navbar;
