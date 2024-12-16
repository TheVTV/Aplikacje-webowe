import React from "react";
import Produkt from "./Produkt";

const NowyKoszyk: React.FC = () => {
  const Produkty = [
    "Chleb tostowy",
    "Papierzosy",
    "Grzaniec",
    "Mieszanka studencka",
    "Piwo",
  ];
  return (
    <div>
      <h2>Koszyk</h2>
      {Produkty.map((nazwa, index) => (
        <Produkt key={index} nazwa={nazwa} />
      ))}
    </div>
  );
};

export default NowyKoszyk;