import React from "react";

// importamos nuestro provider, (el estado de nuestra web app)
import { TareaProvider } from "../tareaContex";

import { AppUI } from "./AppUI";

import "../css/App.css";

function App() {
  return (
    <TareaProvider>
      <AppUI />
    </TareaProvider>
  );
}

export default App;
