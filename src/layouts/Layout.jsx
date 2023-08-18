import { Route, Routes} from "react-router-dom";
import { useState, useLayoutEffect, useMemo } from "react";

import { apiService } from "../services/apiServices";

import { NavBar } from "../components/NavBar/NavBar";
import { Hour } from "../components/Hour/Hour";
import { BottomTab } from "../components/BottomTab/BottomTab";
import { Footer } from "../components/Footer/Footer";


export const Layout = () => {

    const [search, setSearch] = useState(localStorage.getItem("lastSearch") || "Spain");
    const [data, setData] = useState({});
    
    const handlerSearch = (e) => 
        setSearch(e.target.value);
    
    const memoizedApiService = useMemo(() => apiService, []);
    
    useLayoutEffect(() => {
        memoizedApiService(search).then((data) => setData(data));
        localStorage.setItem("lastSearch", search);
    
    }, [search, memoizedApiService]);


    return(
        <>
            <NavBar handler={handlerSearch} />
            <Routes>
                <Route path="/" element={<Hour {...data} />} ></Route>
                <Route path="/user" element=""></Route>
                <Route path="/share" element="" ></Route>
            </Routes>
            <BottomTab />
            <Footer {...data} />
        </>
)};
