import React, { useEffect, useState } from "react";
import { Link } from "react-router"; 
import axios from "axios";

const AllPlants = () => {
  const [plants, setPlants] = useState([]);
  const [sortBy, setSortBy] = useState("");


  const fetchPlants = async () => {
    try {
      const res = await axios.get(`http://localhost:5400/plant${sortBy ? `?sort=${sortBy}` : ""}`);
      setPlants(res.data);
    } catch (error) {
      console.error("Error fetching plants:", error);
    }
  };

  useEffect(() => {
    fetchPlants();
  }, [sortBy]);

  return (
    <div className="px-1 md:w-9/12 mx-auto md:p-10 my-20">
      <div className="mb-6">
        <label className="font-semibold mr-2">Sort By:</label>
        <select
          onChange={(e) => setSortBy(e.target.value)}
          className="border px-3 py-1 rounded"
        >
          <option value="">None</option>
          <option value="careLevel">Care Level</option>
          <option value="watering">Next Watering Date</option>
        </select>
      </div>

      <table className="table mx-auto md:text-2xl">
        <thead>
          <tr>
            <th>No</th>
            <th className="hidden md:block">Photo</th>
            <th>Name</th>
            <th>Category</th>
            <th className="break-all hidden md:block">Watering Frequency</th>
            <th>Show Details</th>
          </tr>
        </thead>

        <tbody>
          {plants.map((plant, i) => (
            <tr key={plant._id}>
              <td>{i + 1}</td>
              <td className="hidden md:block">
                <div className="md:flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-7 w-7 md:h-12 md:w-12">
                      <img src={plant.photo} alt="photo" />
                    </div>
                  </div>
                </div>
              </td>
              <td>{plant.userName}</td>
              <td>{plant.plantCategory}</td>
              <td className="hidden md:block">{plant.wateringFrequency}</td>
              <td>
                <Link
                  to={`/details/${plant._id}`}
                  className="border border-gray-500 px-5 py-2 rounded-md"
                >
                  Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllPlants;
