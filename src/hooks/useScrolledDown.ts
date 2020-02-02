import throttle from "lodash/throttle";
import { useState, useEffect } from "react";

function useScrolledDown() {
  const [scrolledDown, setScrolledDown] = useState(false);
  const checkOffset = () => {
    const { scrollY } = window;

    if (scrollY > 0) setScrolledDown(true);
    else setScrolledDown(false);
  };

  const throttleCheck = throttle(checkOffset, 200);

  useEffect(() => {
    window.addEventListener("scroll", throttleCheck);
    checkOffset();
    return () => window.removeEventListener("scroll", checkOffset);
  });
  return scrolledDown;
}

export default useScrolledDown;
