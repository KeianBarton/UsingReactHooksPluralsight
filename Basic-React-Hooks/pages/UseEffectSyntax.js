import React, { useEffect } from "react";

const Syntax = () => {

    const [checkBoxValue, setCheckBoxValue] = useState(false);

    useEffect(() => {
        console.log("in useEffect");
        return () => {
            console.log("in useEffect Cleanup");
        }
    },
    [checkBoxValue] // list of dependencies - when empty, useEffect is only called once when component is first mounted
    // if rendered output changes and you want useEffect called again, you must provide the dependencies which trigger a re-run
    );

    return (
        <div></div>
    );
};

export default Syntax;