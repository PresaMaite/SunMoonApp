import { Route, Routes} from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

import { Hour } from "../components/Hour/Hour";
import { apiService } from "../services/apiServices";

import { NavBar } from "../components/NavBar/NavBar";
import { BottomTab } from "../components/BottomTab/BottomTab";



export const Layout = () => {
    const [search, setSearch] = useState('Spain');
    const [data, setData] = useState({});
    
    const handlerSearch = (e) => 
        setSearch(e.target.value);
    
    useEffect(() => {
        apiService(search).then((data) => setData(data));
    
    }, [search]);



    return(
        <>
            <NavBar handler={handlerSearch} />
            <Routes>
                <Route path="/" element={<Hour {...data} />} ></Route>
                <Route path="/user" element=""></Route>
                <Route path="/share" element="" ></Route>
            </Routes>
            <BottomTab />
        </>
)};
