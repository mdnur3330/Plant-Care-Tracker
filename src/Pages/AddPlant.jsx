import React, { use } from "react";
import { AuthContext } from "../Component/AuthProvider";

const AddPlant = () => {
  const {user} = use(AuthContext)
  const handelAddPlant = (e)=>{
    e.preventDefault()
    const form = e.target;
    const formData = new FormData(form);
    const newPlant = Object.fromEntries(formData.entries())
    console.log(newPlant);
  }
  return (
    <div className="card bg-base-100 w-full  shrink-0 shadow-2xl my-10">
      <h3 className="text-center text-4xl">AddPlant</h3>
      <form onSubmit={handelAddPlant}>
        <div className="card-body grid md:grid-cols-2 w-9/12 mx-auto">
       
          <fieldset className="fieldset">
            <label className="label">User Name</label>
            <input
              type="text"
              className="input"
              name="user-name"
              value={user.displayName}
              placeholder="Name"
            />
          </fieldset>
            <fieldset className="fieldset">
            <label className="label">User Email</label>
            <input
              type="email"
              className="input"
              name="email"
              value={user.email}
              placeholder="Email"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Plant Name</label>
            <input
              type="text"
              className="input"
              name="plant-name"
              placeholder="Plant Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Last Watered Date</label>
            <input
              type="date"
              className="input"
              name="last-Watered-date"
              placeholder="Last Watered Date"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Next Watering Date</label>
            <input
              type="date"
              className="input"
              name="next-watering-date"
              placeholder="Next Watering Date"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Watering Frequency</label>
            <input
              type="text"
              className="input"
              name="watering-frequency"
              placeholder="Watering Frequency"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Health Status</label>
            <input
              type="text"
              className="input"
              name="health-status"
              placeholder="Health Status"
            />
          </fieldset>
         

          <fieldset>
            <label>Plant Category:</label> <br />
            <select name="plant-category" className="border px-5 py-2 my-2">
              <option  selected>select</option>
              <option value={"Succulent"}>Succulent</option>
              <option value={"Shrub"}>Shrub</option>
              <option value={"Herb"}>Herb</option>
              <option value={"Flowering"}>Flowering</option>
              <option value={"Outdoor"}>Outdoor</option>
              <option value={"Outdoor"}>Indoor</option>
              <option value={"Tree"}>Tree</option>
              <option value={"Cactus"}>Cactus</option>
              <option value={"Bonsai"}>Bonsai</option>
              <option value={"Aquatic"}> Aquatic</option>
              <option value={"Climber"}>Climber</option>
              <option value={"Vegetable Plant"}>Vegetable Plant</option>
            </select>
          </fieldset>
          <fieldset>
            <label>Plant Care Level:</label> <br />
            <select name="plant-care-level" className="border px-5 py-2 my-2">
              
              <option value="">select</option>
              <option value="easy">easy</option>
              <option value="moderate">moderate</option>
              <option value="difficult">difficult</option>
            </select>
          </fieldset>
          <input type="submit" value='submit' />
        </div>
      </form>
    </div>
  );
};

export default AddPlant;

// easy, moderate, difficult
