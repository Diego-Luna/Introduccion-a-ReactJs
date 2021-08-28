import React from "react";

import { TareaContex } from "../tareaContex";

import { TareasCounter } from "../components/TareasCounter";
import { Search } from "../components/Search";
import { TareasList } from "../components/TareasList";
import { Item } from "../components/Item";
import { CreateButton } from "../components/CreateButton";
// traemos anuestro modal
import { Modal } from "../components/Modal";

function AppUI() {
  // nuevo hook,
  const {
    error,
    loading,
    tareas,
    filterTareas,
    deleteTarea,
    completeTarea,
    openModal,
    setOpenModal,
  } = React.useContext(TareaContex);

  return (
    // ponemos una etiqueta invisible
    <React.Fragment>
      <TareasCounter />
      <Search />
      {/* esta es una opcion */}
      {/* <TareaContex.Consumer> */}
      {/* traemos el contexto de nuestra app, con el consumer */}
      {/* {() => ( */}
      <TareasList>
        {error && <p>Estamos cargando</p>}
        {loading && <p>Estamos cargando</p>}
        {!loading && !tareas.length && <p>Crea tu primer tarea</p>}

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
      {/* )} */}
      {/* </TareaContex.Consumer> */}

      {/* cuando openModal sea true, no renderice el componente Modal */}
      {!!openModal && (
        <Modal>
          <p>{tareas[0]?.text}</p>
        </Modal>
      )}

      <CreateButton />
    </React.Fragment>
  );
}

export { AppUI };
