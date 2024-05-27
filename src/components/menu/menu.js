import { pizzas } from "../../mocks/pizzas";
import { Pizza } from "../pizza/pizza";


const Menu = () => {
    const pizzaItems = pizzas.map((pizza, key) =>{
        return <Pizza 
        key={key} 
        img_url={pizza.photoName} 
        name={pizza.name} 
        ingredients={pizza.ingredients} 
        price={pizza.price}>

        </Pizza> 
    })


    return   <main className="menu">
        <h2>Our Menu</h2>
        <ul className="pizzas">
            {pizzaItems}
        </ul>
        </main>
};

export {Menu}
