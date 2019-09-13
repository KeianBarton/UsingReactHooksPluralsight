import React from "react";
import Home from "./Home";
import Speakers from "./Speakers";

// Setting up context so we can useContext to gain access to context variables
export const ConfigContext = React.createContext();
//

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

const configValue = {
    showSignMeUp: true,
    showSpeakerSpeakingDays: true
}

const App = ({ pageName }) => {
    return (
        <ConfigContext.Provider value = {configValue} >
            <div>{pageToShow(pageName)}</div>
        </ConfigContext.Provider>
    );
};

export default App;