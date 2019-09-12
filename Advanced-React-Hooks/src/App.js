import React from "react";
import Home from "./Home";
import Speakers from "./Speakers";

const pageToShow = (pageName) => {
    switch(pageName) {
        case "Home":
            return <Home />;
        case "Speakers":
            return <Speakers />;
        default:
            return <h1>Not Found</h1>;
    }
}

const App = ({ pageName }) => {
    return <div>{pageToShow(pageName)}</div>
};

export default App;