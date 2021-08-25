import React from "react";

import "../css/components/Item.css";

function Item(props) {
  const onComplete = () => {
    alert("Tarea completada");
  };
  const onDelete = () => {
    alert("Tarea borrada");
  };

  return (
    <li className="Item">
      <span
        onClick={onComplete}
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      >
        {props.completed ? "" : "√"}
      </span>
      <p className={`Item-p ${props.completed && "Item-p--complete"}`}>
        {props.text}
      </p>
      <span onClick={onDelete} className="Icon Icon-delete">
        X
      </span>{" "}
    </li>
  );
}

export { Item };
