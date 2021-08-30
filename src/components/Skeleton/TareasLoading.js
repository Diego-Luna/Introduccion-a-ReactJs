import React from "react";
import "../../css/components/Skeleton/TareasLoading.css";

function TareasLoading() {
  return (
    <div className="LoadingTareas-container">
      <span className="LoadingTareas-completeIcon"></span>
      <p className="LoadingTareas-text">Cargando Tareas ... </p>
      <span className="LoadingTareas-deleteIcon"></span>
    </div>
  );
}

export { TareasLoading };
