import React from "react";

import { TareaContex } from "../tareaContex";

import "../css/components/Form.css";

function TareaFrom() {
  const [newTareaValue, SetNewTareaValue] = React.useState("");

  const { addTarea, setOpenModal } = React.useContext(TareaContex);

  const onChange = (event) => {
    SetNewTareaValue(event.target.value);
  };

  const onCancelModal = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    // cuando apretemos el boton, evita que se recarge la pagina
    event.preventDefault();
    addTarea(newTareaValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nueva tarea</label>
      <textarea
        value={newTareaValue}
        onChange={onChange}
        placeholder="Nueva tarea a realisar"
      />

      <div className="TareaForm-buttonContainer">
        <button
          type="button"
          onClick={onCancelModal}
          className="TareaForm-button TareaForm-button-cancel"
        >
          Cancelar
        </button>
        <button className="TareaForm-button TareaForm-button-add" type="submit">
          Anadir
        </button>
      </div>
    </form>
  );
}

export { TareaFrom };
