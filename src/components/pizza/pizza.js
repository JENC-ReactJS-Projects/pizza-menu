const Pizza = (props) => {
    return (
    <div>
        <img src={props.img_url} alt="Pizza"/>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
    </div>
    ); 
}

export {Pizza}