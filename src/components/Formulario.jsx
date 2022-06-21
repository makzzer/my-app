import React from 'react'

//con className le meto codigo b
const Formulario = () => {

  //Hooks
  //Lo siguiente que voy a hacer va a ser configurar los Hooks
  //me instalo React developer tools en el Chrome y lo checkeo desde inspeccionar-->componentes-->hook
  //trabajando con el useState, creo constante con valor inicial del estado como un string vacio
  //porque vamos a hacer un estado por cada uno de nuestros inputs

  const [fruta, setFruta] = React.useState('')
  const [descripcion, setDescripcion] = React.useState('')

  //conocer un evento llamado OnChange, con eso voy a relacionar nuestros inputs
  //Con nuestro estado, entonces voy a usar setFruta y setDescripcion, que son los que cambian nuestro estado inicial
  //el evento lo incorporamos en el input (onChange={})


//esta funcion la voy a usar en el form
  const guardarDatos = () => {
    console.log("procesando datos...")
  }



  return (
    <div>
      <h2>Formulario</h2>
      <form onSubmit={guardarDatos}>
        <input type="text"
          placeholder='Ingrese Fruta'
          className='form-control mb-2'
          //en la siguiete linea el evento onChange recibe como parametro otro evento y el resultado que se va a retornar va a ser el setFruta 
          //(esta es la manera mas facil de trabajar con formularios)
          //nosotros receibbimos a traves de parentesis () y como React.useState('') es un String, tenemos que mandar un String
          //con setFruta(e.target.value), voy a estar detectando todo lo que el usuario puso en el input, 
          onChange={(e) => setFruta(e.target.value)}
        />

        <input type="text"
          placeholder='Ingrese Descripción'
          className='form-control mb-2'
          //lo siguiente si lo miro en chrome en components en la consola, voy a ir viendo el cambio de estado mientras escribo 
          onChange={(e) => setDescripcion(e.target.value)}
        />

        <button className="btn btn-danger btn-block">Agregar</button>

      </form>
    </div>
  )
}

export default Formulario