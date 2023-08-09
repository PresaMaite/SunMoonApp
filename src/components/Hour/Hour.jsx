import "./_Hour.scss";

const month= ["January","February","March","April","May","June","July",
"August","September","October","November","December"];

export const Hour = ({requested_location, datetime}) => {
    const newDate = datetime ? new Date(datetime) : new Date();

    const isDay = newDate.getHours() >= 6 && newDate.getHours() <= 18;

    return (
    <main className={`hourMainContainer ${isDay ? "dayStyles" : "nightStyles"}`}>
        <div className="hourTitleContainer">
            <div className="hourContainer">
                <p><small>{newDate.getHours() >= 0 && newDate.getHours() <= 11 ? "A.M" : "P.M"}</small></p>
                <h3>{`${newDate.getHours()} : ${newDate.getMinutes()}`}</h3>
            </div>

            <div className="titleContainer">
                <h2>Good</h2>
                <h2>{isDay ? "Day" : "Night"}</h2>
            </div>
        </div>

        <h6>{requested_location} · {newDate.getDate()} {month[newDate.getMonth()]} </h6>
    </main>
    
)};
