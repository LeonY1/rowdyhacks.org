import { useState, useEffect } from "react";

const offset = Date.now();

function useTimer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(Date.now() - offset);
    }, 10);
    return () => {
      clearInterval(timer);
    };
  }, [time]);

  return time % 43000;
}

export default useTimer;
