import "./_Search.scss";

export const Search = ({handler}) => (
    <div className="searchContainer">
        <input 
            className="navInput" 
            type="search" 
            id="" 
            name="" 
            placeholder="Search..." 
            onKeyDown={(event) => event.key === "Enter" && handler(event)} />

        <span className="searchIcon" />
    </div>
);
