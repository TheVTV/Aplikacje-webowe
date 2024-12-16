import React, { useState } from "react";

const Licznik: React.FC = () => {
  const [state, setState] = useState(0);

  const inc = () => {
    setState((prevState) => prevState + 1);
  };

  return (
    <div>
      <h2>Licznik: {state}</h2>
      <button onClick={inc}>Dodaj</button>
    </div>
  );
};

export default Licznik;
