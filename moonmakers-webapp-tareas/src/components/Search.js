import React from "react";

// importamos neustro contexto
import { TareaContex } from "../tareaContex";

import "../css/components/Search.css";

// las props las vamos a poner con el react hook = " useContext(TareaContex); "
function Search() {
  //  pasamos a nuestro react hook el contexto de nuestra aplicacion: ""
  const { searchValue, setSearchValue } = React.useContext(TareaContex);

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  return (
    <input
      value={searchValue}
      onChange={onSearchValueChange}
      className="Search"
      placeholder="buscar"
    />
  );
}

export { Search };
