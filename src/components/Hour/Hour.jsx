import "./_Hour.scss";
import Lottie from 'lottie-react';

import { useContext } from "react";
import { DataContext } from "../../layouts/Layout";

import loading from "./../../assets/animations/SunmoonLoading.json";
import night from "./../../assets/img/cloudMoonFill.svg";
import day from "./../../assets/img/cloudSunFill.svg";



const month= ["January","February","March","April","May","June","July",
"August","September","October","November","December"];

export const Hour = ({isDay}) => {
    
    const data = useContext(DataContext);
    const datetime = data.datetime;

    const timezone_location = data ? data.timezone_location : false;
    
    const newDate = new Date(datetime);

    let dateString = newDate.toLocaleString("es-ES", {
        hour: "2-digit",
        minute: "2-digit",
      });
    

    return (
    <>
        {datetime &&
            <div className="hourMainContainer" >
                <div className="hourTitleContainer">
                    <div className="hourContainer">
                        <p><small>{newDate.getHours() >= 0 && newDate.getHours() <= 11 ? "A.M" : "P.M"}</small></p>
                        <h3>{dateString}</h3>
                    </div>

                    <div className="titleContainer">
                        <h2>Good</h2>
                        <h2>{isDay ? "Day" : "Night"}</h2>
                    </div>
                </div>

                <h6>{timezone_location} · {newDate.getDate()} {month[newDate.getMonth()]} </h6>

                <img src={isDay ? day : night} alt={isDay ? "Sun image" : "Moon image"} />
            </div>
        }
        
        {!datetime && 
            <Lottie animationData={loading} className="loadingAnimation" />
        }
    </>
)};
