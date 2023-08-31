import { useState, useEffect } from "react";

const useTime = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Actualiza la fecha cada segundo

    return () => {
      clearInterval(interval);
    };
  }, []);

  return currentDate;
};

export default useTime;
