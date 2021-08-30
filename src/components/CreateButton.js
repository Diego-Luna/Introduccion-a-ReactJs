import React from "react";

// importamos neustro contexto
import { TareaContex } from "../tareaContex";

import "../css/components/CreateButton.css";

function CreateButton(props) {

    //  pasamos a nuestro react hook el contexto de nuestra aplicacion: ""
    const { openModal, setOpenModal } = React.useContext(TareaContex);

  const onClickButton = () => {
    setOpenModal(!openModal);
  };
  return (
    <button className="CreateButton" onClick={onClickButton}>
      +
    </button>
  );
}

export { CreateButton };
