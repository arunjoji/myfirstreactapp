import Rcard from "./Rcard";
  const Testimonials=()=>{
      const reviewDetails=[{"rating":"5star.png","photo":"1.jpg","name":"RAM M","review":"The green salad was excellent!"},
      {"rating":"5star.png","photo":"2.jpg","name":"MANU","review":"You have to try the Green Salad!"},
      {"rating":"5star.png","photo":"3.jpg","name":"RAVI","review":"Really enjoyed the atmosphere."},
      {"rating":"5star.png","photo":"4.jpg","name":"SHALU","review":"Awesome place peaceful atmosphere"}
      ]
      return(
          <div className="TestimonialsWrapper">
              <h3>Testimonials</h3>
              <div className="rcard-wrapper">
              {reviewDetails.map((e)=><Rcard rating={e.rating} photo={e.photo} name={e.name} review={e.review}/>)}
              </div>
          </div>
      );
  }
export default Testimonials;