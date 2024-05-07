import food from "../Assets/restauranfood.jpg"
const Header = () => {
    return (
        <header>
            <section>
                <div className="titleSection">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
                    {/* <Link to="/Booking"><button aria-label="On Click">Reserve Table</button></Link> */}
                    <button id="button" aria-label="On Click">Reserve Table</button>
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