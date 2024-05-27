import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

import { Footer, Header } from "./components";
import { Menu } from "./components/menu/menu";
const App = () => {

    return <div className='container'>
        <Header></Header>
        <Menu></Menu>
        <Footer></Footer>
    </div>
}
const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);