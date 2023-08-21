import "./_NavBar.scss";

import { Search } from "../Search/Search";
import Logo from "./../../assets/img/sunMoonApp.svg";


export const NavBar = ({handler}) => (
    
    <nav className="homeNav" >
        <div className="navContainer">
            <img src={Logo} alt="Sun Moon App" height="40px" />
            <Search handler={handler} />
        </div>
    </nav>
);