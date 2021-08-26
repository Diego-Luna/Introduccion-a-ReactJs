import React from "react";

import "../css/components/Item.css";

function Item(props) {
  
  return (
    <li className="Item">
      <span
        onClick={props.onComplete}
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      >
        √
      </span>
      <p className={`Item-p ${props.completed && "Item-p--complete"}`}>
        {props.text}
      </p>
      <span onClick={props.onDelete} className="Icon Icon-delete">
        X
      </span>{" "}
    </li>
  );
}

export { Item };
