import { createBrowserRouter } from "react-router";
import Root from "../LayOut/Root";
import Home from "../Pages/Home";
import Login from "../Component/Login";
import SignUp from "../Component/SignUp";
import AddPlant from "../Pages/AddPlant";
import AllPlants from "../Pages/AllPlants";
import Details from "../Pages/Details";
import MyPlants from "../Pages/MyPlants";
import Update from "../Pages/Update";
import Looding from "../Component/Looding";
import PrivateRoute from "../Component/PrivateRoute";
import TermsAndConditions from "../Component/TermsAndConditions";
import PrivacyPolucy from "../Component/PrivacyPolucy";
import ErrorPage from "../Component/ErrorPage";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "",
        element: <Home></Home>,
        loader: () =>
          fetch("https://57-module-assintment-10.vercel.app/latest-plants"),
        hydrateFallbackElement: <Looding></Looding>,
      },
      {
        path: "all-plant",
        element: <AllPlants></AllPlants>,
        loader: () => fetch("https://57-module-assintment-10.vercel.app/plant"),
        hydrateFallbackElement: <Looding></Looding>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://57-module-assintment-10.vercel.app/plant/${params.id}`
          ),
      },
      {
        path: "my-plant/:email",
        element: (
          <PrivateRoute>
            <MyPlants></MyPlants>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://57-module-assintment-10.vercel.app/plant-by-email?email=${params.email}`
          ),
        method: "GET",
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(
            `https://57-module-assintment-10.vercel.app/plant/${params.id}`
          ),
      },
      { path: "/terms", element: <TermsAndConditions></TermsAndConditions> },
      {
        path: "add-plant",
        element: (
          <PrivateRoute>
            <AddPlant></AddPlant>
          </PrivateRoute>
        ),
      },
      { path: "/login", element: <Login></Login> },

      { path: "/sing-up", element: <SignUp></SignUp> },

      { path: "/privacy", element: <PrivacyPolucy></PrivacyPolucy> },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);
