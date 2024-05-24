const Pizza = (props) => {
    return (
    <div>
        <img src={props.img_url} alt="Pizza"/>
        <h2>{props.name}</h2>
        <p>{props.ingredients}</p>
    </div>
    ); 
}

export {Pizza}