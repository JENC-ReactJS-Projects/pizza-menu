import React from "react";
import ReactDOM from "react-dom/client";


import {Header} from "./components";

const App = () => {
    return <>
        <Header></Header>
    </>
}
const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);