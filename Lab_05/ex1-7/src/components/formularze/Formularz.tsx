import React, { useState } from "react";

const Formularz: React.FC = () => {
  const [text, setText] = useState("");

  const textChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={textChange} />
      <div>{text}</div>
    </div>
  );
};

export default Formularz;
