import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TareaContex = React.createContext();

// creamos el estado de nuestra aplicacion
function TareaProvider(props) {
  const {
    item: tareas,
    saveItem: saveTareas,
    loading,
    error,
  } = useLocalStorage("TAREAS_V1", []);

  // para crear un estado en una funciona, con react hooks
  const [searchValue, setSearchValue] = React.useState("");

  // creamos un nuevo estado para nuestro modal
  const [openModal, setOpenModal] = React.useState(false);

  const completesTareas = tareas.filter(
    (tareas) => tareas.completed === true
  ).length;

  const totalTareas = tareas.length;

  const filterTareas = tareas.filter((t) => {
    return t.text.toLowerCase().includes(searchValue.toLowerCase());
  });

  const addTarea = (text) => {
    // buscamos la tarea
    const newTareas = [...tareas];

    newTareas.push({ completed: false, text });

    saveTareas(newTareas);
  };

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
    <TareaContex.Provider
      value={{
        loading,
        error,
        tareas,
        totalTareas,
        searchValue,
        filterTareas,
        completesTareas,
        openModal,
        setOpenModal,
        addTarea,
        deleteTarea,
        completeTarea,
        setSearchValue,
      }}
    >
      {props.children}
    </TareaContex.Provider>
  );
}

export { TareaContex, TareaProvider };
