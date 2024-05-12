import food from "../Assets/restauranfood.jpg"
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header>
            <section>
                <div className="titleSection">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
                    <Link to="/reservation"> <button id="button" name= "Reserve Table"aria-label="Reserve Table">Reserve Table</button></Link>
                </div>
            </section>
            <section>
                <div className="imageSection">
                    <img src={food} alt="Hero img" />
                </div>
            </section>
        </header>
    );
}
export default Header;