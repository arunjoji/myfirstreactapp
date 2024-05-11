import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Reservation = (props) => {
   const navigate= useNavigate();
   const [occasion, setOccasion] = useState("");
   const [guests, setGuests] = useState("");
   const [date, setDate] = useState("");
   const [times, setTimes] = useState("");

   const handleChange = (e) => {
    switch(e.target.name)
    {
        case "date":
            setDate(e.target.value);
            break;
        case "guest":
            setGuests(e.target.value);
            break;
        case "occasion":
            setOccasion(e.target.value);
            break;
        case "time":
            setTimes(e.target.value);
            break;
    }
   };

   const handleSumbit = (e) => {
    e.preventDefault();
    let data ={
        "Date":date,
        "Time":times,
        "Guests":guests,
        "Occation":occasion
    }
    props.setRData(data)
    navigate("/confirmation")
    };


    return (
        <div className="reservation-wrapper">
            <section>
                <form onSubmit={handleSumbit}>
                    <fieldset >
                        <legend>Reservation</legend>
                        <div className="form-field-wrapper">
                            <div>
                                <label htmlFor="book-date">Choose Date</label>
                                <input id="book-date" name="date" type="date" onChange={handleChange}required  />
                            </div>
                            <div>
                                <label htmlFor="book-time">Choose Time</label>
                                <select id="book-time" name="time" onChange={handleChange} required>
                                    <option value="">Select a Time</option>
                                    <option>17:00</option><option>17:30</option>
                                    <option>18:00</option><option>19:00</option>
                                    <option>19:30</option><option>20:00</option>
                                    <option>21:30</option><option>22:30</option>
                                    <option>23:00</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="book-guests">Number of Guests</label>
                                <input id="book-guests"  name="guest" onChange={handleChange} min="1" type="number" placeholder="0" max="10" required  />
                            </div>
                            <div>
                                <label htmlFor="book-occasion">Occasion</label>
                                <select id="book-occasion"   name="occasion" onChange={handleChange} required>
                                    <option value="">Select an Option</option>
                                    <option>Birthday</option>
                                    <option>Anniversary</option>
                                </select>
                            </div>
                            <div className="Fbuttonwrapper">
                                <input aria-label="On Click" type="submit"  value="Make Your Reservation" />
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
}
export default Reservation