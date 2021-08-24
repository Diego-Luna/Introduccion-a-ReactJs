import React from "react";

import "../css/components/Item.css";

function Item(props) {
  return (
    <li className="Item">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      >
        {props.completed ? "" : "√"}
      </span>
      <p className={`Item-p ${props.completed && "Item-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete">X</span>{" "}
    </li>
  );
}

export { Item };
