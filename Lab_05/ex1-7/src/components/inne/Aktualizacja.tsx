import React, { useState } from "react";

const Aktualizacja: React.FC = () => {
  const [product, setProductPrice] = useState({ nazwa: "Pomidor", cena: 50 });

  const changePrice = () => {
    setProductPrice((prevProdukt) => ({ ...prevProdukt, cena: 100 }));
  };

  return (
    <div>
      <div>
        Aktualnie {product.nazwa} kosztuje {product.cena} zł.
      </div>
      <button onClick={changePrice}>Zmień cenę</button>
    </div>
  );
};

export default Aktualizacja;
