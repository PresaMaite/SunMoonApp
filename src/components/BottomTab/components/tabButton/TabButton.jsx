import "./_TabButton.scss";

export const TabButtons = ({image, text, handler, isActive}) => (
    <button className={`tabButtons ${isActive && "activeTab"}`} onClick={() => handler(text)}>
        <div style={{maskImage: `url(${image})`, WebkitMaskImage: `url(${image})`}} />
        <p>{text}</p>
    </button>
);
