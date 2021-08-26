import React from "react";
import "../css/components/Search.css";

function Search({ searchValue, setSearchValue }) {

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
