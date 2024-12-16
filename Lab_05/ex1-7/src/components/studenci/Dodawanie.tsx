import React, { useState } from "react";

interface DodawanieProps {
  onAddStudent: (student: Student) => void;
}

interface Student {
  firstName: string;
  secondName: string;
  startYear: number;
}

const Dodawanie: React.FC<DodawanieProps> = ({ onAddStudent }) => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [startYear, setStartYear] = useState("");

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (firstName && secondName && !isNaN(Number(startYear))) {
      onAddStudent({ firstName, secondName, startYear: Number(startYear) });
      setFirstName("");
      setSecondName("");
      setStartYear("");
    } else {
      alert("Pola nie mogą być puste i rocznik musi być liczbą!");
    }
  };

  return (
    <form onSubmit={submit}>
      <div>
        <label>
          Imię:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Nazwisko:
          <input
            type="text"
            value={secondName}
            onChange={(e) => setSecondName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Rocznik:
          <input
            type="text"
            value={startYear}
            onChange={(e) => setStartYear(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Dodaj</button>
    </form>
  );
};

export default Dodawanie;
