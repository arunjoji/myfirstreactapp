import chef from "../Assets/chef.jpg"
import restaurant from "../Assets/restaurant.jpg"

const About = () => {
    return (
        <div className="AboutWrapper">
            <section>
                <h3>Little Lemon</h3>
                <h4>Chicago</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ex leo. Maecenas enim sem, laoreet at nulla ac, luctus scelerisque massa. Praesent ut molestie nisi. Aliquam arcu lorem, auctor condimentum blandit id, lobortis in nisi. Ut diam justo, euismod in accumsan id, vehicula sit amet tellus. Pellentesque porttitor elit lacus, vitae lacinia magna ultricies quis. Etiam vitae tellus et mi hendrerit consequat. In dictum ligula in elit euismod malesuada. Curabitur varius augue id tempus ultricies. Mauris suscipit porta odio, et pretium nibh scelerisque ut. </p>
            </section>
            <section className="sec2">
                <img src={chef} alt="chef" id="chef" />
                <img src={restaurant} alt="restaurant" id="restaurant" />


            </section>
        </div>
    );
}
export default About;