import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Component/AuthProvider";
import { Helmet } from "react-helmet";

const MyPlants = () => {
  const initialPlnats = useLoaderData();
  console.log(initialPlnats);

  const { handelDelete } = useContext(AuthContext);
  // const [plants, setPlants] = useState(initialPlnats)
  const [plants, setPlants] = useState(
    Array.isArray(initialPlnats) ? initialPlnats : []
  );

  const handelPlantDelete = (id) => {
    handelDelete(id)
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const newPlants = plants.filter((plant) => plant._id !== id);
          setPlants(newPlants);
        }
        console.log("after deleteing", data);
        Swal.fire({
          title: "Deleted!",
          text: "Your plant has been deleted.",
          icon: "success",
        });
      })
      .catch((err) => {
        console.log("Delete canceled or failed:", err);
      });
  };

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <Helmet>
        <title>My Plants</title>
      </Helmet>
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {plants.lenght < 1
          ? "You haven't added any plant items yet."
          : plants.map((plant) => (
              <div
                key={plant._id}
                className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm border border-gray-300"
              >
                <div>
                  <img
                    src={plant.photo}
                    className="object-cover w-full h-64 border-b border-gray-300"
                    alt=""
                  />
                </div>
                <div className="p-5">
                  <div className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <p className="text-gray-600">last-Watered-date</p>
                    <span className="text-gray-600">
                      — {plant.lastWateredDate}
                    </span>
                  </div>
                  <p className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 text-gray-900">
                    {plant.plantName}
                  </p>
                  <p className="mb-2 text-gray-700 h-12 truncate">
                    {plant.description}
                  </p>
                  <div className="flex justify-between">
                    <Link
                      className="border border-gray-500 text-gray-500 px-5 py-2 font-medium rounded-md"
                      to={`/update/${plant._id}`}
                    >
                      Update Plant
                    </Link>
                    <button
                      className="border border-gray-500  px-5 py-2 font-medium rounded-md"
                      onClick={() => handelPlantDelete(plant._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default MyPlants;
