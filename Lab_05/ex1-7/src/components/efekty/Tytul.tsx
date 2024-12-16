import React, { useState, useEffect } from "react";

const Tytul: React.FC = () => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    document.title = title || "Domyślny tytuł";
  }, [title]);

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Wpisz tytuł strony"
      />
    </div>
  );
};

export default Tytul;
