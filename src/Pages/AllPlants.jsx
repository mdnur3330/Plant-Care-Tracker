import React, { useEffect, useState } from "react";
import { Link } from "react-router"; 
import axios from "axios";
import { format } from "date-fns";
import { Helmet } from "react-helmet";


const AllPlants = () => {
  const [plants, setPlants] = useState([]);
  const [sortBy, setSortBy] = useState("");


  const fetchPlants = async () => {
    try {
      const res = await axios.get(`https://57-module-assintment-10.vercel.app/plant${sortBy ? `?sort=${sortBy}` : ""}`);
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
        <Helmet>
    <title>All Plants</title>
</Helmet>
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
         Cutrrent Date
        <p className="border border-gray-100 px-5 py-2 rounded-lg">{format(new Date(),'EEEE, MMMM MM, YYY')}</p>
      <table className="table mx-auto text-sm md:text-2xl">
        <thead>
          <tr className="text-gray-500 font-medium md:text-2xl">
            <th className="hidden md:block">No</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Category</th>
            <th>Watering <br /> Frequency</th>
            <th>Show Details</th>
            
          
          </tr>
        </thead>

        <tbody>
          {plants.map((plant, i) => (
            <tr key={plant._id}>
              <td className="hidden md:block">{i + 1}</td>
              <td>
                <div className="md:flex items-center gap-3">
                  <div>
                    <div className="mask mask-squircle h-7 w-7 md:h-12 md:w-12">
                      <img src={plant.photo} alt="photo" />
                    </div>
                  </div>
                </div>
              </td>
              <td>{plant.plantName}</td>
              <td>{plant.plantCategory}</td>
          
              <td>
              {plant.wateringFrequency}
              </td>
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
