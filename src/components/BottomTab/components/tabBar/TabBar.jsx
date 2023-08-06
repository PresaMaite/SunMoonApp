import "./_TabBar.scss";

export const TabBar = ({isHome, isUser, isShare}) => (
    <div className="barContainer">
        <div className={`tabBar ${isHome && "tabBarHome"} ${isUser && "tabBarUser"} ${isShare && "tabBarShare"}`} />
    </div>
    
)