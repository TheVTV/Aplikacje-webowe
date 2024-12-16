import React from "react";
import Produkt from "./Produkt";

const Koszyk: React.FC = () => {
  return (
    <div>
      <h2>Koszyk</h2>
      <Produkt nazwa="Chleb tostowy" />
      <Produkt nazwa="Papierzosy" />
      <Produkt nazwa="Grzaniec" />
      <Produkt nazwa="Mieszanka studencka" />
      <Produkt nazwa="Piwo" />
    </div>
  );
};

export default Koszyk;
