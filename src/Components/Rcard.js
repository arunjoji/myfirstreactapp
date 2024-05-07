const Rcard=(props)=>{
    const {rating,photo,name,review}=props;
    return(
        <div className="rcard">
            <img id="rating" src={rating} alt="star"/>
            <img id="photo" src={photo} alt="photo"/>
            <h4>{name}</h4>
            <p>"{review}"</p>
        </div>
    );
}
export default Rcard;