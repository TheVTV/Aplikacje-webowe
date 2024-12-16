import React, { useState } from "react";

const Haslo: React.FC = () => {
  const [pwd1, setPwd1] = useState("");
  const [pwd2, setPwd2] = useState("");

  const pwd1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPwd1(event.target.value);
  };

  const pwd2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPwd2(event.target.value);
  };

  const message = () => {
    if (!pwd1 && !pwd2) return "Proszę wprowadzić hasło";
    if (pwd1 != pwd2) return "Hasła nie są zgodne";
    return "";
  };
  return (
    <div>
      <input
        type="password"
        value={pwd1}
        onChange={pwd1Change}
        placeholder="Wpisz hasło: "
      />
      <br></br>
      <input
        type="password"
        value={pwd2}
        onChange={pwd2Change}
        placeholder="Powtórz hasło: "
      />
      <div>{message()}</div>
    </div>
  );
};

export default Haslo;
