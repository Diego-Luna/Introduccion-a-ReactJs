import React from "react";

import IconCheckBlack from "../img/checkmark-Black.png";
import IconCheckGreen from "../img/checkmark-Green.png";

import IconDeleteBlack from "../img/x-Black.png";
import IconDeleteRed from "../img/x-Red.png";

import "../css/components/Item.css";

function Item(props) {
  const [CloseHover, SetCloseHover] = React.useState(false);
  const [CheckHover, SetCheckHover] = React.useState(false);

  return (
    <li className="Item">
      <span
        onMouseEnter={() => SetCheckHover(true)}
        onMouseLeave={() => SetCheckHover(false)}
        onClick={props.onComplete}
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      >
        <img
          src={props.completed || CheckHover ? IconCheckGreen : IconCheckBlack}
          alt="img-boton-check"
        />
      </span>
      <p className={`Item-p ${props.completed && "Item-p--complete"}`}>
        {props.text}
      </p>
      <span
        onMouseEnter={() => SetCloseHover(true)}
        onMouseLeave={() => SetCloseHover(false)}
        onClick={props.onDelete}
        className="Icon Icon-delete"
      >
        <img
          src={CloseHover ? IconDeleteRed : IconDeleteBlack}
          alt="img-boton-check"
        />
      </span>{" "}
    </li>
  );
}

export { Item };
