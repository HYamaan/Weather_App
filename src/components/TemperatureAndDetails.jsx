import React from "react";
import {UilArrowDown, UilArrowUp, UilSun, UilSunset, UilTear, UilTemperature, UilWind} from "@iconscout/react-unicons";
import {formatToLocalTime, iconUrlFromCode} from "../services/WeatherService";

const TemperatureAndDetails = ({weather: {details, icon,temp,temp_min,temp_max,sunrise,sunset,speed,humidity,feels_like,timezone}}) => {
    return (
        <div>
            <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
                <p>{details}</p>
            </div>

            <div className="flex flex-row items-center justify-between text-primary py-3">
                <img src={iconUrlFromCode(icon)} className="w-20"/>
                <p className="text-5xl">{`${temp.toFixed()}°`}</p>
                <div className="flex flex-col justify-center items-center gap-2">
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTemperature size={18} className="mr-1"/>
                        <span>Real fell:</span>
                        <span className="font-medium ml-2">{`${feels_like.toFixed()}°`}</span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTear size={18} className="mr-1"/>
                        <span>Humidty:</span>
                        <span className="font-medium ml-2">{`${humidity.toFixed()}%`}</span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilWind size={18} className="mr-1"/>
                        <span>Wind:</span>
                        <span className="font-medium ml-2">{`${humidity.toFixed()}km/h`} </span>
                    </div>
                </div>
            </div>

            <div className="flex flex-row items-center justify-center gap-1 text-white text-sm py-3 ">
                <div className="flex items-center justify-center gap-1">
                    <UilSun/>
                    <p className="font-light">Rise:</p>
                    <span className="font-medium ">{formatToLocalTime(sunrise,timezone,"hh:mm a")}</span>
                    <p className="font-light">|</p>
                </div>
                <div className="flex items-center justify-center gap-1">
                    <UilSunset/>
                    <p className="font-light">Set:</p>
                    <span className="font-medium">{formatToLocalTime(sunset,timezone,"hh:mm a")}</span>
                    <p className="font-light">|</p>
                </div>
                <div className="flex items-center justify-center gap-1">
                    <UilArrowUp/>
                    <p className="font-light">High:</p>
                    <span className="font-medium">{`${temp_max.toFixed()}°`}</span>
                    <p className="font-light font-medium">|</p>
                </div>
                <div className="flex items-center justify-center gap-1">
                    <UilArrowDown/>
                    <p className="font-light">Low:</p>
                    <span className="font-medium">{`${temp_min.toFixed()}°`}</span>
                </div>

            </div>
        </div>
    );
}
export default TemperatureAndDetails;


