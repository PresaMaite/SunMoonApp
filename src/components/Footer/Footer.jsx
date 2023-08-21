 import "./_Footer.scss";
 
 export const Footer = ({datetime}) => {
    const newDate = datetime ? new Date(datetime) : new Date();

    const isDay = newDate.getHours() >= 6 && newDate.getHours() <= 18;

    return (
    <footer className={`footerStyles ${isDay ? "footerDay" : "footerNight"}`}>
        <p>© App SunMoon. All rights reserved.</p>
    </footer>
 )};
