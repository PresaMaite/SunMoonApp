import "./_BottomTab.scss";

import { useState } from "react";
import { Link } from "react-router-dom";

import { TabButtons } from "./components/tabButton/TabButton";
import { TabBar } from "./components/tabBar/TabBar";

import home from "./../../assets/icons/house-door-fill.svg";
import user from "./../../assets/icons/person-fill.svg";
import share from "./../../assets/icons/share-fill.svg";




export const BottomTab = () => {

    const [active, setActive] = useState("Home");

    const handlerBtnClick = (text) => {
        setActive(text)
    };




    return(
        <div className="bottomTab">
            <TabBar isHome={active === "Home"} isUser={active === "User"} isShare={active === "Share"} />

            <div className="tabBtnContainer">
                <Link to="home">
                    <TabButtons isActive={active === "Home"} image={home} text="Home" handler={handlerBtnClick} />
                </Link>
                    
                <Link to="user">
                    <TabButtons isActive={active === "User"} image={user} text="User" handler={handlerBtnClick} />
                </Link>

                <Link to="share">
                    <TabButtons isActive={active === "Share"} image={share} text="Share" handler={handlerBtnClick} />
                </Link>
            </div>
        </div>
    )
};
