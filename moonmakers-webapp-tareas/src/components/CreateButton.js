import React from "react";
import "../css/components/CreateButton.css"

function CreateButton(props) {
  const onClickButton = (msg) => {
    alert(msg);
  }
  return <button className="CreateButton" onClick={() => onClickButton("Activar modal") } >+</button>;
}

export { CreateButton };
