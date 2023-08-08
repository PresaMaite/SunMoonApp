import { BrowserRouter, Route, Routes} from "react-router-dom";

import { Layout } from "./../layouts/Layout";
import { Hour } from "../components/Hour/Hour";



export const AppRouter = () => (
    <BrowserRouter>

        <Layout>
            
            <Routes>
                <Route path="/" element={<Hour/>} ></Route>
                <Route path="/user" element=""></Route>
                <Route path="/share" element="" ></Route>
            </Routes>
            

        </Layout>

    
    </BrowserRouter>
)