import React, { useState } from "react";

const UseStateInputElementExample = () => {

    const [inputText, setInputText] = useState("");   // Initialise inputText to be "", first value is a read-only variable which can only be set by the second value
    const [historyList, setHistoryList] = useState([]);   // The React team recommends using multiple useState calls rather than one with a complex object

    return <>
        <input
            onChange={(e) => {
                setInputText(e.target.value);
                setHistoryList([...historyList, e.target.value]);  // ... Spread Operator - in ES6, allows concatenation of arrys and objects
            }}
            placeholder="Enter some Text" />
            <br />
            {inputText}
            <hr /><br />
            <ul style={{ listStyleType: "none"}}>
                {historyList.map((rec) => {
                    return <li>{rec}</li>
                })}
            </ul>
        </>;

};

export default UseStateInputElementExample;