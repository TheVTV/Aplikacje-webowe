import React, { useState } from "react";
import Przycisk from "./Przycisk";

const NowyLicznik: React.FC = () => {
  const [state, setState] = useState(0);

  const inc = () => {
    setState((prevState) => prevState + 1);
  };

  return (
    <div>
      <h2>Licznik: {state}</h2>
      <Przycisk onClick={inc} />
    </div>
  );
};

export default NowyLicznik;
