import { useState } from "react";
import { NavBar } from "../components/NavBar/NavBar";
import { BottomTab } from "../components/BottomTab/BottomTab";





export const Layout = () => {
    const [search, setSearch] = useState('');
    
    const handlerSearch = (e) => 
        setSearch(e.target.value);

    return(
        <>
            <NavBar handler={handlerSearch} />
            <h2>{search}</h2>
            <BottomTab />
        </>
)};