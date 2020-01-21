import { useState, useEffect } from "react";

const useWindowWidth: any = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowWidth = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleWindowWidth);
    return () => {
      window.removeEventListener("resize", handleWindowWidth);
    };
  }, []);

  return width;
};

export default useWindowWidth;
