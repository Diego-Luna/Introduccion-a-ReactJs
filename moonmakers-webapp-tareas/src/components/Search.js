import React from "react";
import "../css/components/Search.css";

function Search() {
  // para crear un estado en una funciona, con react hooks
  const [searchValue, setSearchValue] = React.useState("");

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  return [
    <input
      value={searchValue}
      onChange={onSearchValueChange}
      className="Search"
      placeholder="buscar"
    />,
    <p>{searchValue}</p>
  ];
}

export { Search };
