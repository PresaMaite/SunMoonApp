import "./_Search.scss";

export const Search = ({handler}) => (
    <div className="searchContainer">
        <input className="navInput" type="search" id="" name="" placeholder="Search..." onChange={handler} />
        <span className="searchIcon" />
    </div>
);
