import { useEffect, useState } from "react";

export const useViewport = () => {
    const [width, setWidth]=useState(window.innerWidth)
 
    const handleWindowResize = () => {
        setWidth(window.innerWidth);
      
      }

      useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
      }, []);

    return { width};
  }