const Pizza = (props) => {
    return (
    <div className="pizza">
        <img src={props.img_url} alt="Pizza"/>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <p>{props.price}</p>
    </div>
    ); 
}

export {Pizza}