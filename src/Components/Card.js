const Card=(props)=>{
    const {img,title,text}=props;
    return(
        <div class="card">
            <img class="card-img-top" src={img}/>
            <div class="card-body">
                <div class="card-title h5">{title}</div>
            <p class="card-text">{text}</p>
            <button type="button" class="cardbutton">Order Delivery </button>
            </div>
        </div>
    );
}
export default Card;