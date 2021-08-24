import React from "react";

import { TareasCounter } from "./components/TareasCounter";
import { Search } from "./components/Search";
import { TareasList } from "./components/TareasList";
import { Item } from "./components/Item";
import { CreateButton } from "./components/CreateButton";

import "./App.css"

const tareas = [
  {
    text: "Llamar a atencion al cliente",
    completed: false,
  },
  {
    text: "Cortarse el pelo",
    completed: false,
  },
  {
    text: "Ver el ultimo video de MoonMakers",
    completed: false,
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
          <Item completed={t.completed} text={t.text} key={t.text} />
        ))}
      </TareasList>

      <CreateButton />
    </React.Fragment>
  );
}

export default App;
