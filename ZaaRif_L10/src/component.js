import { useState, useEffect } from "react";

export default function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    function handleResize() {
        setWidth(window.innerWidth);
    }

    useEffect(function setupListener() {
        window.addEventListener("resize", handleResize);

        return function cleanupListener() {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return width;
}

