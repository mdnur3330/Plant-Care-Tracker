import React, { use } from "react";
import { AuthContext } from "../Component/AuthProvider";
import { useLoaderData } from 'react-router';
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";



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


    fetch(`https://57-module-assintment-10.vercel.app/plant/${plant._id}`,{
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
    <div className="card w-full  shrink-0 shadow-2xl my-10 p-20">
        <Helmet>
    <title>Update Plant</title>
</Helmet>
      <h3 className="text-center text-5xl">Update Plant</h3>
      <form onSubmit={handeUpdatePlant} className="mx-auto">
        <div className="card-body grid md:grid-cols-2 gap-5 mx-auto">
       
          <fieldset className="fieldset">
            <label className="label text-xl">User Name</label>
            <input
              type="text"
              className="input text-xl bg-gray-400"
              name="userName"
              value={user.displayName}
              placeholder="Name"
            />
          </fieldset>
            <fieldset className="fieldset">
            <label className="label text-xl">User Email</label>
            <input
              type="email"
              className="input text-xl bg-gray-400"
              name="email"
              value={user.email}
              placeholder="Email"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label text-xl">Photo Url</label>
            <input
              type="text"
              className="input text-xl bg-gray-400"
              name="photo"
              defaultValue={plant.photo}
              placeholder="Photo Url"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label text-xl">Plant Name</label>
            <input
              type="text"
              className="input text-xl bg-gray-400"
              name="plantName"
              defaultValue={plant.plantName}
              placeholder="Plant Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label text-xl">Last Watered Date</label>
            <input
              type="date"
              className="input text-xl bg-gray-400"
              name="lastWateredDate"
              defaultValue={plant.lastWateredDate}
              placeholder="Last Watered Date"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label text-xl">Next Watering Date</label>
            <input
              type="date"
              className="input text-xl bg-gray-400"
              name="nextWateringDate"
              defaultValue={plant.nextWateringDate}
              placeholder="Next Watering Date"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label text-xl">Watering Frequency</label>
            <input
              type="text"
              className="input text-xl bg-gray-400"
              name="wateringFrequency"
              defaultValue={plant.wateringFrequency}
              placeholder="Watering Frequency"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label text-xl">Health Status</label>
            <input
              type="text"
              className="input text-xl bg-gray-400"
              name="healthStatus"
              defaultValue={plant.healthStatus}
              placeholder="Health Status"
            />
          </fieldset>
          
         <div className="flex gap-3">
            <fieldset>
            <label className="text-xl">Plant Category:</label> <br />
            <select  defaultValue={plant.plantCategory} name="plantCategory" className="border px-5 py-2 my-2 text-xl  text-gray-400">
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
            <label className="text-xl">Care Level</label> <br />
            <select defaultValue={plant.plantCareLevel} name="plantCareLevel" className="border px-5 py-2 my-2 text-gray-400">
              
              <option value="">select</option>
              <option value="easy">easy</option>
              <option value="moderate">moderate</option>
              <option value="difficult">difficult</option>
            </select>
          </fieldset>
        </div>
         <fieldset>
              <label className="text-xl">Description</label><br />
              <textarea defaultValue={plant.description} name="description" id="" className="border border-gray-500  pt-2 rounded-sm mt-2" cols="45" rows="4" placeholder="Description heare..."></textarea>
            </fieldset>
        <div className="col-span-1 md:col-span-2">
          
         <input type="submit" value='Update' className="btn bg-gray-800 w-full" />
        </div>
        </div>
       
      </form>
    </div>
  );
};

export default Update;