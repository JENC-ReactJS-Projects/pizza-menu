import React from "react";
import ReactDOM from "react-dom/client";

import {Footer, Header, Pizza} from "./components";
import { pizzas } from "./mocks/pizzas";
const App = () => {

    const pizzaItems = pizzas.map((pizza, key) =>{
        return <Pizza key={key} img_url={pizza.photoName} name={pizza.name} ingredients={pizza.ingredients} ></Pizza> 
    })

    return <>
        <Header></Header>
        <>{pizzaItems}</>
        <Footer></Footer>
    </>
}
const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);