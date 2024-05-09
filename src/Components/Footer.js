import flogo from "../Assets/flogo.jpg"
const Footer =()=>{
    return(
        <div className="footerWrapper">
            <div className="fsection1">
                <img src={flogo} alt="flogo"/>
            </div>
            <div className="fsection2">
                <ul>
                    <h5>Navigation</h5>
                    <li>
                        <a id="fnav" href="/">Home</a>
                    </li>
                    <li>
                        <a id="fnav" href="/about">About</a>
                    </li>
                    <li>
                        <a id="fnav" href="/menu">Menu</a>
                    </li>
                    <li>
                        <a id="fnav" href="/reservations">Reservations</a>
                    </li>
                    <li>
                        <a id="fnav" href="/order">Order Online</a>
                    </li>
                    <li>
                        <a id="fnav" href="/login">Login</a>
                    </li>
                </ul>
            </div>
            <div className="fsection3">
                <ul>
                    <h5>Contact</h5>
                    <li>
                        <a id="fnav" href="#">Phone Number</a>
                    </li>
                    <li>
                        <a id="fnav" href="#">Email</a>
                    </li>
                    <li>
                        <a id="fnav" href="#">Address</a>
                    </li>
                </ul>
            </div>
            <div className="fsection4">
                <ul>
                    <h5>Social Media</h5>
                    <li>
                        <a id="fnav" href="#">Instagram</a>
                    </li>
                    <li>
                        <a id="fnav" href="#">LinkedIn</a>
                    </li>
                    <li>
                        <a id="fnav" href="#">Pinterest</a>
                    </li>
                </ul>
            </div>


        </div>
    )
}
export default Footer;