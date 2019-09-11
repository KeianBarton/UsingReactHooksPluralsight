import React, { useRef, useEffect, useState } from "react";

const ImageTogglerOnScroll = ({ primaryImg, secondaryImg, alt }) => {
    
    const imageRef = useRef(null);  // imageRef now has access to the attributes of the image via imageRef.current
    const [isLoading, setIsLoading] = useState(true);

    // Use effect runs after the first render is completed - so we must have a loading state to determine when to render the correct colour
    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        setInView(isInView());                                  // Ensures images do not start in black and white
        setIsLoading(false);
        return (() => {
            window.removeEventListener("scroll", scrollHandler);
        });
    }, [isLoading]);

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

    return isLoading ? null : (
        <img
            src={inView ? secondaryImg : primaryImg}
            alt={alt}
            ref={imageRef}
        />
    );
};

export default ImageTogglerOnScroll;