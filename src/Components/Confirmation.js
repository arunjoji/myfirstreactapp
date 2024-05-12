import { Link } from "react-router-dom";
const Confirmation=()=>{
    return(
        <div className="confirmation-wrapper">
            <section className="reserve-header-text">
            <h1>Your Reservation is Confirmed!</h1>
            <h4>A confirmation message has been sent to your email.</h4>
            <h4>Thanks for dining with us!</h4>
            <Link className="redirect-button" to="/">
            <button>Home Page</button>
            </Link>
      </section>

        </div>
    )
}
export default Confirmation;