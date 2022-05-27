import React from 'react'

const Contador = () => {

    //esto lo puedo hacer similar a lo que está en Eventos.jsx, sin importar el {useState}
    const [contador, setContador] = React.useState(0)

    //creo la funcion de aumentar

    const aumentar = () => {
        console.log('click')
        //le paso el estado inicial de contador que es 0 y lo vamos a aumentar en 1
        setContador(contador+1)

    }


  return (
    <div>
        <h2>Contador</h2>
        <h3>Nuestro numero aumentando: { contador }</h3>
        <button onClick={() => aumentar() }>Aumentar</button>
    </div>
  )
}

export default Contador