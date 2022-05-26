import React from 'react';
import Parrafo from './components/Parrafo';
import Variables from './components/Variables';



//voy a crear los componentes en src/components , cada componente lo creo en extension .jsx y comenzando con mayusculas
//una vez creado, lo voy a estar llamando desde esta clase App.js

function App() {
  return (
    //puedo usar className en React, como uso Class en Javascript, react agarra className
    // y lo reemplaza internamente por class
    <div>
      <h1>Hola Mundo React</h1>
      <Parrafo />
      <Variables />


    </div>
  );
}

export default App;
