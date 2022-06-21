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


  //esta funcion la voy a usar en el form, el onSummit tambien recibe un evento muy parecido al onChange,
  // por eso usamos e.preventDefault, siempre usar este metodo sobre el evento del parametro
  const guardarDatos = (e) => {
    e.preventDefault()

    //trim() --> esta funcion limpia los datos
    //pregunto en el if negando porque si, se limpiaron los datos, pero el campo sigue vacio, entonces no ingresó nada
    //con el return no va a llegar a la ultima linea de codigo, es para que antes de procesar esten completos los campos
    if (!fruta.trim()) {
      console.log('está vacio Fruta')
      return
    }

    //tal cual como fruta, si ingreso espacios, tambien detecta que está vacio
    //con el return no va a llegar a la ultima linea de codigo, es para que antes de procesar esten completos los campos
    if (!descripcion.trim()) {
      console.log('está vacio Descripción')
      return
    }

    console.log("procesando datos..."+ fruta + descripcion)

    //con lo siguiente limpio los campos que tengo arriba cuando le doy al boton agregar
    e.target.reset()

    //volver a limpiar los estados (en la vista de componentes del navegador) con los textos vacios como al comienzo
    setFruta('')
    setDescripcion('')
    
  }


  //evento onSubmit --> recibe una función, así que es la que defino arriba, tambien recibe un evento, ese evento saca o previene, 
  //lo que hace HTML por defecto cuando presiono el boton agregar en Formulario.jsx, que es mandar el formulario a traves del metodo GET
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
        <button className="btn btn-danger btn-block" type='submit'>Agregar</button>

      </form>
    </div>
  )
}

export default Formulario