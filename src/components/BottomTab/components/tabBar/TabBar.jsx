import "./_TabBar.scss";

export const TabBar = ({isHome, isUser, isShare, order}) => (
    <div className="barContainer" style={{order, marginTop: order >= 2 ? "-4px" : "0px"}}>
        <div className={`tabBar ${isHome && "tabBarHome"} ${isUser && "tabBarUser"} ${isShare && "tabBarShare"}`} />
    </div>
    
)