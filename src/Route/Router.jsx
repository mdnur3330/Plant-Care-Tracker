import { createBrowserRouter } from "react-router";
import Root from "../LayOut/Root";
import Home from "../Pages/Home";
import Login from "../Component/Login";
import SignUp from "../Component/SignUp";
import AddPlant from "../Pages/AddPlant";

// import TermsAndConditions from "../Pages/TermsAndConditions";
// import PrivacyPolucy from "../Pages/PrivacyPolucy";
// import PrivateRoute from "../Pages/PrivateRoute";
// import Error from "../Pages/Error";


export const route = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "",
        element: <Home></Home>
      },
    //   {
    //     path: "profile",
    //     element: (
    //       <PrivateRoute>
    //         <Profile></Profile>
    //       </PrivateRoute>
    //     ),
    //   },

    //   { path: "/terms", element: <TermsAndConditions></TermsAndConditions> },
    {
        path:'add-plant',
        element: <AddPlant></AddPlant>
    },
      { path: "/login", element: <Login></Login> },

      { path: "/sing-up", element: <SignUp></SignUp> },

    //   { path: "/privacy", element: <PrivacyPolucy></PrivacyPolucy> },
    ],
  },

//   {
//     path: "/*",
//     element: <Error></Error>,
//   },
]);
