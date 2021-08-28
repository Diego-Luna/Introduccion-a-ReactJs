import React from "react";

import { TareaContex } from "../tareaContex";

import { TareasCounter } from "../components/TareasCounter";
import { Search } from "../components/Search";
import { TareasList } from "../components/TareasList";
import { Item } from "../components/Item";
import { CreateButton } from "../components/CreateButton";

function AppUI() {
  return (
    // ponemos una etiqueta invisible
    <React.Fragment>
      <TareasCounter />
      {/* <TareasCounter total={totalTareas} completed={completesTareas} /> */}

      <Search />
      {/* <Search searchValue={searchValue} setSearchValue={setSearchValue} /> */}

      <TareaContex.Consumer>
        {/* traemos el contexto de nuestra app, con el consumer */}
        {({
          error,
          loading,
          tareas,
          filterTareas,
          deleteTarea,
          completeTarea,
        }) => (
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
        )}
      </TareaContex.Consumer>

      <CreateButton />
    </React.Fragment>
  );
}

export { AppUI };
