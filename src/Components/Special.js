import Card from "./Card";
const Special = () => {
    ;
    const cardData = [{ "img": "greeksalad.jpg", "title": "Green Salad", "text": "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons." },
    { "img": "bruchetta.jpg", "title": "Bruschetta", "text": "Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables." },
    { "img": "lemondessert.jpg", "title": "Lemon Cake", "text": "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined." },
    ]
    return (
        <div className="SpecialWrapper">
            <div className="SpecialHeadSection">
                <h3> Special</h3>
                <div className="buttonWrapper">
                    <button id="button">Online Menu</button>
                </div>
            </div>
            <div className="cardSectionWrapper">
                {cardData.map((e) => <Card img={e.img} title={e.title} text={e.text} />)}
            </div>
        </div>
    );
}
export default Special;