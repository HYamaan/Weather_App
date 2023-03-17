import React, {useState} from "react";
import {UilLocationPoint, UilSearch} from "@iconscout/react-unicons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Inputs =({setQuery,setUnits,units})=>{
    const [city,setCity]=useState("");

    const handleSearchClick = ()=>{
        if (city !==''){
            setQuery({q:city})
        }
    }
    const handleLocationClick = ()=>{
        if(navigator.geolocation){
            toast.info("Fetching users locaiton")
            navigator.geolocation.getCurrentPosition((position)=>{
                toast.success("Location fetched!");
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;
                setQuery({lat,lon});
            })
        }
    }
    const handleUnitsChange=(e)=>{
        const selectedUnit = e.currentTarget.value;
        if(units !==selectedUnit) setUnits(selectedUnit);
    }


    return(
       <div className="flex flex-row justify-center my-6">
           <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
               <input
                   value={city}
                   onChange={(e)=>setCity(e.currentTarget.value)}
                   type="text"
                   className="text-xl font-light p-2 w-full focus:outline-none capitalize placeholder:lowercase"
                   placeholder="Search..."
               />
               <UilSearch
                   size={25}
                   className="text-[#ffff] cursor-pointer transition ease-out hover:scale-125"
                    onClick={handleSearchClick}
               />
               <UilLocationPoint
                   size={25}
                   className="text-[#ffff] cursor-pointer transition ease-out hover:scale-125"
                   onClick={handleLocationClick}
               />

           </div>
           <div className="flex flex-row w-1/4 items-center justify-center">
               <button name="metric"className="text-xl text-primary font-light hover:scale-125"
               onClick={(e)=>handleUnitsChange(e)}
               >°C</button>
               <p className="text-xl text-[#ffff] font-light">|</p>
               <button name="imperial" className="text-xl text-[#ffff] font-light hover:scale-125"
                onClick={(e)=>handleUnitsChange(e)}
               >°F</button>
           </div>

       </div>
    )
}
export default Inputs;
