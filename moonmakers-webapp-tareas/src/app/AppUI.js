import React from "react";

// el estado de nuestra aplicacion
import { TareaContex } from "../tareaContex";

// los componentes
import { TareasCounter } from "../components/TareasCounter";
import { Search } from "../components/Search";
import { TareasList } from "../components/TareasList";
import { Item } from "../components/Item";
import { CreateButton } from "../components/CreateButton";

// traemos anuestro modal
import { Modal } from "../components/Modal";
import { TareaFrom } from "../components/Form";

// los componentes de nuestro loading skeleton

import { EmptyTareas } from "../components/Skeleton/EmptyTareas";
import { TareaError } from "../components/Skeleton/TareaError";
import { TareasLoading } from "../components/Skeleton/TareasLoading";

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
    // setOpenModal,
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
        {error && <TareaError error={error} />}
        {loading && (
          <React.Fragment>
            <TareasLoading /> <TareasLoading /> <TareasLoading />
            <TareasLoading />
          </React.Fragment>
        )}
        {!loading && !tareas.length && <EmptyTareas />}

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
          <TareaFrom />
        </Modal>
      )}

      <CreateButton />
    </React.Fragment>
  );
}

export { AppUI };
