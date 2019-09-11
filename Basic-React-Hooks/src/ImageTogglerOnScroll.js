import React, { useRef, useEffect, useState } from "react";

const ImageTogglerOnScroll = ({ primaryImg, secondaryImg, alt }) => {
    
    const imageRef = useRef(null);  // imageRef now has access to the attributes of the image via imageRef.current

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        return (() => {
            window.removeEventListener("scroll", scrollHandler);
        });
    })

    const [inView, setInView] = useState(false); // Image not in view by default

    const isInView = () => {
        if (imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom <= window.innerHeight;
        }
        return false;
    }

    const scrollHandler = () => {
        setInView(() => {
            return isInView();
        });
    }

    return (
        <img
            src={inView ? secondaryImg : primaryImg}
            alt={alt}
            ref={imageRef}
        />
    );
};

export default ImageTogglerOnScroll;