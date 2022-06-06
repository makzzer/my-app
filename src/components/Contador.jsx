import React from 'react'

const Contador = () => {

  //esto lo puedo hacer similar a lo que está en Eventos.jsx, sin importar el {useState}
  const [contador, setContador] = React.useState(0)

  //creo la funcion de aumentar

  const aumentar = () => {
    console.log('click')
    //le paso el estado inicial de contador que es 0 y lo vamos a aumentar en 1
    setContador(contador + 1)

  }


  //dentro del h4 voy a hacer un Operador Ternario, para eso comienzo abriendo llavecitas de jsx
  //un operador ternario toma lo que se va a evaluar , signo de pregunta respuesta de exito y despues de los : la respuesta negativa 

  //de la siguiente forma --> evaluar ? exito : negativa
  return (
    <div>
      <h2>Contador</h2>
      <h3>Nuestro numero aumentando: {contador}</h3>
      <h4>{
        
            contador > 2 ? 'es mayor a 2' : 'es menor a 2'

      }</h4>
      <button onClick={() => aumentar()}>Aumentar</button>
    </div>
  )
}

export default Contador