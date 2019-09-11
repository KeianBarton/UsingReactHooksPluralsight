import React from "react";

import ImageTogglerOnScroll from "../src/ImageTogglerOnScroll";

const AllCombinedForColorisedScroll = () => {  // Primarily used to allow access directly to an element in the DOM
    return (
        <>
            <p style={{ height: "80vh" }}></p>
            {/* In Next.js, anything we put in a folder called static will be available as a resource to our app with the /static reference */}
            <ImageTogglerOnScroll primaryImg="/static/bw/cube.png"
                                    secondaryImg="/static/cube.png"
                                    alt="Cube" />
            <br />
            <ImageTogglerOnScroll primaryImg="/static/bw/sphere.png"
                                    secondaryImg="/static/sphere.png"
                                    alt="Sphere" />
        </>
    )
};

export default AllCombinedForColorisedScroll;