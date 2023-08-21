import "./_Home.scss";

import { Hour } from "./../../components/Hour/Hour";

export const Home = () => {
    return(
        <main className="hourPage">
            <div className="hourCard">
                <Hour />
            </div> 
        </main>
    )
};
