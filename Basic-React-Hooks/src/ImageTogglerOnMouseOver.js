import React, { useRef } from "react";

const ImageTogglerOnMouseOver = ({ primaryImg, secondaryImg, alt }) => {
    
    const imageRef = useRef(null);  // imageRef now has access to the attributes of the image via imageRef.current

    return (
        <img
            onMouseOver={() => {
                imageRef.current.src = secondaryImg;
            }}
            onMouseOut={() => {
                imageRef.current.src = primaryImg;
            }}
            src={primaryImg}
            alt={alt}
            ref={imageRef}
        />
    );
};

export default ImageTogglerOnMouseOver;