import React, { useState } from "react";

const Logowanie: React.FC = () => {
  const [login, setLogin] = useState("");
  const [pwd1, setPwd1] = useState("");
  const [pwd2, setPwd2] = useState("");

  const loginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const pwd1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPwd1(event.target.value);
  };

  const pwd2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPwd2(event.target.value);
  };

  const canLogin = login && pwd1 && pwd2;

  const message = () => {
    if (canLogin) {
      if (pwd1 != pwd2) {
        alert("Hasła nie są zgodne");
        return;
      } else {
        alert("Zalogowano poprawnie");
        return;
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        value={login}
        onChange={loginChange}
        placeholder="Wpisz Login: "
      />
      <br></br>
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
      <br></br>
      <button type="button" onClick={message} disabled={!canLogin}>
        Logowanie
      </button>
    </div>
  );
};

export default Logowanie;
