
import React, { useEffect, useState } from 'react';

const Test = () => {
  const [plants, setPlants] = useState([]);
  const [sortOption, setSortOption] = useState('');

  const fetchPlants = async () => {
    try {
      const res = await fetch(`https://your-server-url.com/plants?sort=${sortOption}`);
      const data = await res.json();
      setPlants(data);
    } catch (error) {
      console.error('Error fetching plants:', error);
    }
  };

  useEffect(() => {
    fetchPlants();
  }, [sortOption]);

  return (
    <div className="p-4">
      <div className="mb-4">
        <label htmlFor="sort" className="mr-2 font-semibold">Sort By:</label>
        <select
          id="sort"
          className="border px-2 py-1"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">None</option>
          <option value="watering">Next Watering Date</option>
          <option value="careLevel">Care Level</option>
        </select>
      </div>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Plant Name</th>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">Care Level</th>
            <th className="border px-4 py-2">Next Watering Date</th>
          </tr>
        </thead>
        <tbody>
          {plants.map(plant => (
            <tr key={plant._id}>
              <td className="border px-4 py-2">{plant.plantName}</td>
              <td className="border px-4 py-2">{plant.category}</td>
              <td className="border px-4 py-2">{plant.careLevel}</td>
              <td className="border px-4 py-2">{new Date(plant.nextWateringDate).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Test;
