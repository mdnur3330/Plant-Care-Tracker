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


    fetch("http://localhost:5400/plant",{
      method: "POST",
      headers:{
        'content-type': "application/json"
      },
      body: JSON.stringify(newPlant)
    }).then(res => res.json()).then(data =>{
      console.log("after adding data ",data);
    })
  }
  return (
    <div className="card w-full  shrink-0 shadow-2xl my-10">
      <h3 className="text-center text-4xl">AddPlant</h3>
      <form onSubmit={handelAddPlant} className="mx-auto">
        <div className="card-body grid md:grid-cols-2 gap-4 mx-auto">
       
          <fieldset className="fieldset">
            <label className="label md:text-2xl">User Name</label>
            <input
              type="text"
              className="input text-xl bg-gray-400 "
              name="userName"
              value={user?.displayName}
              placeholder="Name"
            />
          </fieldset>
            <fieldset className="fieldset">
            <label className="label md:text-2xl">User Email</label>
            <input
              type="email"
              className="input text-xl bg-gray-400"
              name="email"
              value={user?.email}
              placeholder="Email"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label md:text-2xl">Photo Url</label>
            <input
              type="text"
              className="input text-xl bg-gray-400"
              name="photo"
              placeholder="Photo Url"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label md:text-2xl">Plant Name</label>
            <input
              type="text"
              className="input text-xl bg-gray-400"
              name="plantName bg-gray-400"
              placeholder="Plant Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label md:text-2xl">Last Watered Date</label>
            <input
              type="date"
              className="input text-xl bg-gray-400"
              name="lastWateredDate"
              placeholder="Last Watered Date"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label md:text-2xl">Next Watering Date</label>
            <input
              type="date"
              className="input text-xl bg-gray-400"
              name="nextWateringDate"
              placeholder="Next Watering Date"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label md:text-2xl">Watering Frequency</label>
            <input
              type="text"
              className="input text-xl bg-gray-400"
              name="wateringFrequency"
              placeholder="Watering Frequency"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label md:text-2xl">Health Status</label>
            <input
              type="text"
              className="input text-xl bg-gray-400"
              name="healthStatus"
              placeholder="Health Status"
            />
          </fieldset>
          
         <div className="flex gap-3">
            <fieldset>
            <label className="md:text-2xl">Plant Category:</label> <br />
            <select name="plantCategory" className="border px-5 py-2 my-2 text-gray-400">
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
            <label className="md:text-2xl">Plant Care Level:</label> <br />
            <select name="plantCareLevel" className="border px-5 py-2 my-2 text-gray-400">
              
              <option value="">select</option>
              <option value="easy">easy</option>
              <option value="moderate">moderate</option>
              <option value="difficult">difficult</option>
            </select>
          </fieldset>
        </div>
         <fieldset>
              <label className="md:text-2xl">Description</label><br />
              <textarea name="description" id="" className="border border-gray-500 pt-2 text-xl rounded-sm mt-2" cols="45" rows="4" placeholder="Description heare..."></textarea>
            </fieldset>
        <div className="col-span-1 md:col-span-2">
          
         <input type="submit" value='Add Plant' className="btn bg-gray-600 w-full" />
        </div>
        </div>
       
      </form>
    </div>
  );
};

export default AddPlant;


