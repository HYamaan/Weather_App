import React from "react";
import {formatToLocalTime} from "../services/WeatherService";

const TimeAndLocation = ({weather:{dt,timezone,name,country}}) => {
    return (<div className="flex flex-col justify-content align-items">
            <div className="flex justify-center align-center my-6">
                <p className="text-primary text-xl font-extralight">
                    {formatToLocalTime(dt,timezone)}
                </p>
            </div>
            <div className="flex justify-center align-center my-3">
                <p className="text-primary text-3xl font-[500] font-extralight">{`${name}, ${country}`}</p>
            </div>

        </div>
    );
}
export default TimeAndLocation;