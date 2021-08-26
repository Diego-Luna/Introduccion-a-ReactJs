import React from "react";

import { TareasCounter } from "./components/TareasCounter";
import { Search } from "./components/Search";
import { TareasList } from "./components/TareasList";
import { Item } from "./components/Item";
import { CreateButton } from "./components/CreateButton";

import "./css/App.css";

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

  const filterTareas = tareas.filter((t) => {
    return t.text.toLowerCase().includes(searchValue.toLowerCase());
  });

  const completeTarea = (text) => {
    // buscamos la tarea
    const tareaIndex = tareas.findIndex((t) => t.text === text);
    const newTareas = [...tareas];

    newTareas[tareaIndex].completed = true;

    setTareas(newTareas);
  };

  function deleteTarea(text) {
    const newTareas = tareas.filter((t) => t.text !== text);
    setTareas(newTareas);
  }

  return (
    // ponemos una etiqueta invisible
    <React.Fragment>
      <TareasCounter total={totalTareas} completed={completesTareas} />

      <Search searchValue={searchValue} setSearchValue={setSearchValue} />

      <TareasList>
        {filterTareas
          ? filterTareas.map((t, i) => (
              <Item
                onDelete={() => deleteTarea(t.text)}
                onComplete={() => completeTarea(t.text)}
                completed={t.completed}
                text={t.text}
                key={i}
              />
            ))
          : tareas.map((t, i) => (
              <Item
                onDelete={() => deleteTarea(t.text)}
                onComplete={() => completeTarea(t.text)}
                completed={t.completed}
                text={t.text}
                key={i}
              />
            ))}
      </TareasList>

      <CreateButton />
    </React.Fragment>
  );
}

export default App;
