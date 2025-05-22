import React from "react";
import { Link, useLoaderData } from "react-router";

const AllPlants = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="px-1 md:w-9/12 mx-auto md:p-10 my-20">
      <table className="table mx-auto">
        <tr>
          <th>No</th>
          <th className="hidden md:block">photo</th>
          <th>Name</th>
          <th>category</th>
          <th className="break-all hidden md:block">watering frequencyr</th>
          <th>Show Details</th>
        </tr>

        <tbody>
          {data.map((plant, i) => (
            <tr>
              <td>{i + 1}</td>
              <td className="hidden md:block">
                <div className="md:flex items-center gap-3 ">
                  <div className="avatar">
                    <div className="mask mask-squircle h-7 w-7 md:h-12 md:w-12">
                      <img src={plant.photo} alt="photo" />
                    </div>
                  </div>
                </div>
              </td>
              <td>{plant.userName}</td>
              <td>{plant.plantCategory}</td>
              <th className="hidden md:block">{plant.wateringFrequency}</th>
              <th>
                <Link to={`/details/${plant._id}`} className="border border-gray-500  px-5 py-2 rounded-md">Details</Link>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllPlants;
