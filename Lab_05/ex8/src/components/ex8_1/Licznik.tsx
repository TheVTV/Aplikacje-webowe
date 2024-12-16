import React, { useState, useEffect } from "react";

const Licznik: React.FC = () => {
  const LOCAL_STORAGE_KEY = "cnt-value";

  const getInitValue = (): number => {
    const storedValue = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedValue ? parseInt(storedValue, 10) : 0; // Domyślnie 0, jeśli brak wartości w Local Storage
  };

  const [state, setState] = useState<number>(getInitValue);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, state.toString());
  }, [state]);

  const resetLocalValue = () => {
    setState(0);
  };

  const inc = () => {
    setState((prevState) => prevState + 1);
  };

  return (
    <div>
      <h2>Licznik: {state}</h2>
      <button onClick={inc}>Dodaj</button>
      <br></br>
      <button onClick={resetLocalValue}>Usuń postęp</button>
    </div>
  );
};

export default Licznik;
