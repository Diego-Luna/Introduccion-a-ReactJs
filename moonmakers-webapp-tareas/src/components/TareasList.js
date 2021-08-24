import React from "react";
import "../css/components/TareasList.css"

function TareasList(props) {
  return (
    <section>
      {props.children}
    </section>
  );
}

export { TareasList };
