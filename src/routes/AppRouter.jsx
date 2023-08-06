import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Layout } from "../layouts/layout";

export const AppRouter = () => (
    <BrowserRouter>

        <Layout>
            
            <Routes>
                <Route path="/" element="" ></Route>
                <Route path="/user" element=""></Route>
                <Route path="/share" element="" ></Route>
            </Routes>
            

        </Layout>

    
    </BrowserRouter>
)