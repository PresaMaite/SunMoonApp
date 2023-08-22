import "./_Home.scss";

import { Hour } from "./../../components/Hour/Hour";

import { useContext } from "react";
import { DataContext } from "../../layouts/Layout";






export const Home = () => {
    const data = useContext(DataContext);
    const datetime = data.datetime;
    const newDate = new Date(datetime);
    const isDay = newDate.getHours() >= 6 && newDate.getHours() <= 18;

    return(
        <main className= {`hourPage ${isDay ? "dayStyles" : "nightStyles"}`}>

            <Hour isDay={isDay} />

        </main>
    )
};
