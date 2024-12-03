import React from "react";
import Component from "./Component";

function Home() {
  return (
    <div>
      <h1>Inicio</h1>
      <div className="components-container">
        <Component title="Componente 1" description="Descripción del componente 1." />
        <Component title="Componente 2" description="Descripción del componente 2." />
        <Component title="Componente 3" description="Descripción del componente 3." />
      </div>
    </div>
  );
}

export default Home;
