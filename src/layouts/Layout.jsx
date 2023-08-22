import { createContext, useState, useLayoutEffect, useMemo } from "react";
import { Outlet } from "react-router";

import { apiService } from "../services/apiServices";

import { NavBar } from "../components/NavBar/NavBar";
import { BottomTab } from "../components/BottomTab/BottomTab";
import { Footer } from "../components/Footer/Footer";


export const DataContext = createContext();

export const Layout = () => {

    const [search, setSearch] = useState(localStorage.getItem("lastSearch") || "Spain");
    const [data, setData] = useState({});
    
    const handlerSearch = (e) => {
        setData(null);
        setSearch(e.target.value);
    }
        
    
    const memoizedApiService = useMemo(() => apiService, []);
    
    useLayoutEffect(() => {
        memoizedApiService(search).then((data) => setData(data));
        localStorage.setItem("lastSearch", search);
    
    }, [search, memoizedApiService]);


    return(
        <>
            <NavBar handler={handlerSearch} />
                <DataContext.Provider value={{ ...data }}>
                    <Outlet />
                </DataContext.Provider>

            <BottomTab responsive="mobileTab" />
            <Footer {...data} />
        </>
)};
