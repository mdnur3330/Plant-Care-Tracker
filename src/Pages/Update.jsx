import React, { use } from "react";
import { AuthContext } from "../Component/AuthProvider";
import { useLoaderData } from 'react-router';
import Swal from "sweetalert2";



const Update = () => {
      const plant = useLoaderData()
    console.log(plant);
  const {user} = use(AuthContext)


  const handeUpdatePlant = (e)=>{
    e.preventDefault()
    const form = e.target;
    const formData = new FormData(form);
    const newPlant = Object.fromEntries(formData.entries())
    console.log(newPlant);


    fetch(`http://localhost:5400/plant/${plant._id}`,{
      method: "PUT",
      headers:{
        'content-type': "application/json"
      },
      body: JSON.stringify(newPlant)
    }).then(res => res.json()).then(data =>{
        if(data.modifiedCount){
             Swal.fire({
                      title: "Updated!",
                      icon: "success",
                    });
        }
      console.log("after putting data ",data);
    })
  }
  return (
    <div className="card bg-base-100 w-full  shrink-0 shadow-2xl my-10">
      <h3 className="text-center text-4xl">Update Plant</h3>
      <form onSubmit={handeUpdatePlant}>
        <div className="card-body grid md:grid-cols-2 w-9/12 mx-auto">
       
          <fieldset className="fieldset">
            <label className="label">User Name</label>
            <input
              type="text"
              className="input"
              name="userName"
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
            <label className="label">Photo Url</label>
            <input
              type="text"
              className="input"
              name="photo"
              defaultValue={plant.photo}
              placeholder="Photo Url"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Plant Name</label>
            <input
              type="text"
              className="input"
              name="plantName"
              defaultValue={plant.plantName}
              placeholder="Plant Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Last Watered Date</label>
            <input
              type="date"
              className="input"
              name="lastWateredDate"
              defaultValue={plant.lastWateredDate}
              placeholder="Last Watered Date"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Next Watering Date</label>
            <input
              type="date"
              className="input"
              name="nextWateringDate"
              defaultValue={plant.nextWateringDate}
              placeholder="Next Watering Date"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Watering Frequency</label>
            <input
              type="text"
              className="input"
              name="wateringFrequency"
              defaultValue={plant.wateringFrequency}
              placeholder="Watering Frequency"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Health Status</label>
            <input
              type="text"
              className="input"
              name="healthStatus"
              defaultValue={plant.healthStatus}
              placeholder="Health Status"
            />
          </fieldset>
          
         <div className="flex gap-3">
            <fieldset>
            <label>Plant Category:</label> <br />
            <select defaultValue={plant.plantCategory} name="plantCategory" className="border px-5 py-2 my-2">
              <option value=''>select</option>
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
            <select defaultValue={plant.plantCareLevel} name="plantCareLevel" className="border px-5 py-2 my-2">
              
              <option value="">select</option>
              <option value="easy">easy</option>
              <option value="moderate">moderate</option>
              <option value="difficult">difficult</option>
            </select>
          </fieldset>
        </div>
         <fieldset>
              <label htmlFor="">Description</label><br />
              <textarea defaultValue={plant.description} name="description" id="" className="border border-gray-500 pt-2 rounded-sm mt-2" cols="45" rows="4" placeholder="Description heare..."></textarea>
            </fieldset>
        <div className="col-span-1 md:col-span-2">
          
         <input type="submit" value='Update' className="btn w-full" />
        </div>
        </div>
       
      </form>
    </div>
  );
};

export default Update;