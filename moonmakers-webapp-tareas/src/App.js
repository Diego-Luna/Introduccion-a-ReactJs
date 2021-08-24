// import './App.css';

import React from "react";

import { TareasCounter } from "./components/TareasCounter";
import { Search } from "./components/Search";
import { TareasList } from "./components/TareasList";
import { Item } from "./components/Item";
import { CreateButton } from "./components/CreateButton";

const tareas = [
  {
    text: "Llamar a atencion al cliente",
    completes: false,
  },
  {
    text: "Cortarse el pelo",
    completes: false,
  },
  {
    text: "Ver el ultimo video de MoonMakers",
    completes: false,
  },
];

function App() {
  return (
    // ponemos una etiqueta invisible
    <React.Fragment>
      <TareasCounter />

      <Search />

      <TareasList>
        {tareas.map((t) => (
          <Item text={t.text} key={t.text} />
        ))}
      </TareasList>

      <CreateButton />
    </React.Fragment>
  );
}

export default App;
