import "./_NavBar.scss";

import { Search } from "../Search/Search";
import { BottomTab } from "../BottomTab/BottomTab";

import Logo from "./../../assets/img/sunMoonApp.svg";



export const NavBar = ({handler}) => (
    
    <nav className="homeNav" >
        <div className="navContainer">
            <div className="imgSearchContainer">
                <img src={Logo} alt="Sun Moon App" height="40px" />
                <Search handler={handler} />
            </div>
            <BottomTab responsive="desktopTab" order={2} />
        </div>
    </nav>
);