import { useState } from "react";

export const Input = ({ onAdd }) => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSave = (e) => {
    if (e.key === "Enter") {
      onAdd(text);
      setText("");
    }
  };
  return (
    <div className="panel-block">
      <input
        value={text}
        className="input"
        onChange={handleChange}
        onKeyDown={handleSave}
        placeholder="Add todo"
      />
    </div>
  );
};
