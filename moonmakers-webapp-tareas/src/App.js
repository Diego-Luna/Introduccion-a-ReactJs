import React from "react";

import { TareasCounter } from "./components/TareasCounter";
import { Search } from "./components/Search";
import { TareasList } from "./components/TareasList";
import { Item } from "./components/Item";
import { CreateButton } from "./components/CreateButton";

import "./css/App.css";

// const defaultTareas = [
//   {
//     text: "Llamar a atencion al cliente",
//     completed: false,
//   },
//   {
//     text: "Cortarse el pelo",
//     completed: false,
//   },
//   {
//     text: "Ver el ultimo video de MoonMakers",
//     completed: false,
//   },
// ];

// custom React Hooks

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem = [];

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = [];
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  function saveItem(newItem) {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  }

  return [item, saveItem];
}

function App() {
  const [tareas, saveTareas] = useLocalStorage("TAREAS_V1", []);

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

    saveTareas(newTareas);
  };

  function deleteTarea(text) {
    const newTareas = tareas.filter((t) => t.text !== text);
    saveTareas(newTareas);
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
