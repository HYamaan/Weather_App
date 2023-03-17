import React from "react";
import {iconUrlFromCode} from "../services/WeatherService";

const Forecast=({title,items})=>{

    return(
        <div>
            <div className="flex items-center justify-start mt-6">
                <p className="text-white font-medium uppercase">{title}</p>
            </div>
            <hr className="my-2"/>
            {items.map((item,index)=>(
                <div className="flex flex-row items-center justify-between text-white" key={index}>
                    <div className="flex flex-col items-center justify-center">
                        <p className="font-light text-sm"> {`${item.title.toFixed()}`}</p>
                        <img src={iconUrlFromCode(item.icon)} alt="" className="w-12 my-1"/>
                        <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
                    </div>
                </div>

            ))}


        </div>
    );
}
export default Forecast;