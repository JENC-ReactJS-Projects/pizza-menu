import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
    return <h1> Hello world! </h1>
}
const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);