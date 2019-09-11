import React, { useState, useRef } from "react";

import ImageTogglerOnMouseOver from "../src/ImageTogglerOnMouseOver";

const UseRefExample = () => {  // Primarily used to allow access directly to an element in the DOM
    return (
        <>
            {/* In Next.js, anything we put in a folder called static will be available as a resource to our app with the /static reference */}
            <ImageTogglerOnMouseOver primaryImg="/static/bw/cube.png"
                                    secondaryImg="/static/cube.png"
                                    alt="Cube" />
            &nbsp;&nbsp;&nbsp;
            <ImageTogglerOnMouseOver primaryImg="/static/bw/sphere.png"
                                    secondaryImg="/static/sphere.png"
                                    alt="Sphere" />
        </>
    )
};

export default UseRefExample;