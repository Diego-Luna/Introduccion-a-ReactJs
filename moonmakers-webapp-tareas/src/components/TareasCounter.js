import React from "react";
import "../css/components/TareasCounter.css";

function TareasCounter({ total, completed }) {
  return <h2 className="TareasCounter">Has completado {completed} de {total} tareas.</h2>;
}

export { TareasCounter };
