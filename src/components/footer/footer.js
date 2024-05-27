const Footer = (props) => {
    const hour = new Date().getHours();
    const openHour = 12;
    const closedHour = 22;
    const isOpen = hour >= openHour && hour <= closedHour;
    console.log(isOpen);
    return <footer className="footer">{new Date().toLocaleTimeString()} We are open!</footer>
};

export {Footer};