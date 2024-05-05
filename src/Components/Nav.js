import logo from "../Assets/Logo.svg"
const Nav = () => {
    return (
    <nav>
        <div className="logo">
            <img src={logo} alt="Logo" />
        </div>
        <div className="navigation">
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Menu</a>
                </li>
                <li>
                    <a href="/">Reservations</a>
                </li>
                <li>
                    <a href="/">Order Online</a>
                </li>
                <li>
                    <a href="/">Login</a>
                </li>
            </ul>
        </div>
    </nav>
    );
}
export default Nav