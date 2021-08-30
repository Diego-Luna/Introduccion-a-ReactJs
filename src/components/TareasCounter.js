import React from "react";

// importamos neustro contexto
import { TareaContex } from "../tareaContex";

import "../css/components/TareasCounter.css";

// las props las vamos a poner con el react hook = " useContext(TareaContex); "
function TareasCounter() {
  //  pasamos a nuestro react hook el contexto de nuestra aplicacion: ""
  const { totalTareas, completesTareas } = React.useContext(TareaContex);

  return (
    <h2 className="TareasCounter">
      Has completado {completesTareas} de {totalTareas} tareas.
    </h2>
  );
}

export { TareasCounter };
