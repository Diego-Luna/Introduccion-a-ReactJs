import React from "react";

import { TareasCounter } from "./components/TareasCounter";
import { Search } from "./components/Search";
import { TareasList } from "./components/TareasList";
import { Item } from "./components/Item";
import { CreateButton } from "./components/CreateButton";

import "./App.css";

const defaultTareas = [
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
  const [tareas, setTareas] = React.useState(defaultTareas);

  // para crear un estado en una funciona, con react hooks
  const [searchValue, setSearchValue] = React.useState("");

  const completesTareas = tareas.filter(
    (tareas) => tareas.completed === true
  ).length;

  const totalTareas = tareas.length;

  const filterTodos = tareas.filter((t) => {
    return t.text.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    // ponemos una etiqueta invisible
    <React.Fragment>
      <TareasCounter total={totalTareas} completed={completesTareas} />

      <Search searchValue={searchValue} setSearchValue={setSearchValue} />

      <TareasList>
        {filterTodos
          ? filterTodos.map((t) => (
              <Item completed={t.completed} text={t.text} key={t.text} />
            ))
          : tareas.map((t, i) => (
              <Item completed={t.completed} text={t.text} key={i} />
            ))}
      </TareasList>

      <CreateButton />
    </React.Fragment>
  );
}

export default App;
