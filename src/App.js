import React from 'react';
// import Parrafo from './components/Parrafo';
// import Variables from './components/Variables';
// import Eventos from './components/Eventos';
// import Contador from './components/Contador';
// import Listas from './components/Listas';
import Formulario from './components/Formulario';


//para comentar automatico control+k y seguido control+c, para descomentar control+u

//voy a crear los componentes en src/components , cada componente lo creo en extension .jsx y comenzando con mayusculas
//una vez creado, lo voy a estar llamando desde esta clase App.js

function App() {
  return (
    //puedo usar className en React, como uso Class en Javascript, react agarra className
    // y lo reemplaza internamente por class
    <div className='container mt-5'>
      <h1>Hola Mundo React</h1>
      {/* <Parrafo />
      <Variables />
      <Eventos />
      <Contador />
      <Listas/> */}
      <Formulario />
    </div>
  );
}

export default App;
