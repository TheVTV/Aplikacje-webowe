import React, { useState, useEffect } from "react";

const Odliczanie: React.FC = () => {
  const [timer, setTimer] = useState(15.0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: number | null = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 0.1) {
            clearInterval(interval!);
            return 0;
          }
          return parseFloat((prev - 0.1).toFixed(1));
        });
      }, 100);
    } else if (!isRunning && interval !== null) {
      clearInterval(interval);
    }

    return () => {
      if (interval !== null) {
        clearInterval(interval);
      }
    };
  }, [isRunning]);

  const toggle = () => {
    if (timer > 0) setIsRunning((prev) => !prev);
  };

  return (
    <div>
      <h2>Czas: {timer.toFixed(1)} sek</h2>
      <button onClick={toggle} disabled={timer <= 0}>
        {timer <= 0 ? "Odliczanie zakończone" : isRunning ? "STOP" : "START"}
      </button>
    </div>
  );
};

export default Odliczanie;
