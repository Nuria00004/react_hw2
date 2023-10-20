import React from "react";
import "../components/NameInput.css";

const NameInput = ({ name, nameChange }) => {
  return (
    <div>
      <input type="text" value={name} onChange={nameChange} />
    </div>
  );
};

export default NameInput;
