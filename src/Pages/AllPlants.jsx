import React from "react";
import { Link, useLoaderData } from "react-router";

const AllPlants = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="px-4 md:w-9/12 mx-auto">
      <table className="table mx-auto ">
        <thead>
          <tr>
            <th>photo</th>
            <th>Name</th>
            <th>category</th>
            <th className="break-all">watering frequencyr</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((plant) => (
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-7 w-7 md:h-12 md:w-12">
                      <img
                        src={plant.photo}
                        alt="photo"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>{plant.userName}</td>
              <td>{plant.plantCategory}</td>
              <th>
                {plant.wateringFrequency}
              </th>
              <th><Link to={`/details/${plant._id}`}>Details</Link></th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllPlants;
