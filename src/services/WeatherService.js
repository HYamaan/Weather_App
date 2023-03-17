import {DateTime} from "luxon";

const API_KEY="1152787ea74b3baedacb92fda80c9416";
const BASE_URL = "https://api.openweathermap.org/data/2.5";


const getWeatherData = (infoType,searchParams)=>{
    const url = new URL(BASE_URL +"/" + infoType);

    url.search = new URLSearchParams({...searchParams,appid:API_KEY})

    return fetch(url).then((res)=> res.json()).then((data)=>data);
}
const formatCurrentWeather = (data)=>{
    const {
        coord:{lat,lon},
        main:{temp,humidity,feels_like,temp_max,temp_min},
        name,
        dt,
        sys:{country,sunrise,sunset},
        weather,
        wind:{speed}
    }=data;
    const {main:details,icon}=weather[0];

    return {lat,lon,temp,humidity,feels_like,temp_max,temp_min,name,dt,country,sunrise,sunset,speed,details,icon}
}
const formatForecastWeather = (data)=>{
    let{timezone,hourly,daily}=data;
    daily = daily.slice(1,6).map(d=>{
        return {
            title:formatToLocalTime(d.dt,timezone,'ccc'),
            temp:d.temp.day,
            icon:d.weather[0].icon,
        }
    });
    hourly = hourly.slice(1,6).map(d=>{
        return {
            title:formatToLocalTime(d.dt,timezone,'hh:mm a'),
            temp:d.temp,
            icon:d.weather[0].icon,
        }
    });
    return {timezone,daily,hourly};
}
const getFormattedWeatherData =async (searchParams)=> {
    const formattedCurrentWeather = await getWeatherData("weather",searchParams).then(formatCurrentWeather);
    const {lat,lon}=formattedCurrentWeather;
    const formattedForecastWeather = await getWeatherData("onecall",{
        lat,lon,exclude:"current,minutely,alerts",units:searchParams.units,
    }).then(formatForecastWeather)
    return {...formattedCurrentWeather,...formattedForecastWeather};
}
const formatToLocalTime = (
    secs,
    zone,
    format ="ccc, dd LLL yyyy' | Local time : 'hh:mm a"
)=> DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code)=>  `http://openweathermap.org/img/wn/${code}@2x.png`
export default getFormattedWeatherData;
export {formatToLocalTime,iconUrlFromCode};
