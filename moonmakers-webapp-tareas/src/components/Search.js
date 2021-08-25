import React from "react";
import "../css/components/Search.css"

function Search() {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
  }
  return <input onChange={onSearchValueChange} className="Search" placeholder="buscar" />;
}

export { Search };
