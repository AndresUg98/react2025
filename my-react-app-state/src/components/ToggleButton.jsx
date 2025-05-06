import React from "react";
import { useState } from "react";

const ToggleButton = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    // !isActive nos permite cambiar el booleano a su opuesto
    <button onClick={() => setIsActive(!isActive)}>
      {isActive ? "Activo" : "Inactivo"}
    </button>
  );
};

export default ToggleButton;
