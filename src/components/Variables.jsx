import React from 'react'

const Variables = () => {

    //podriamos pintar esto siguiente dentro del h2
    const saludo = 'Hola desde constante'
    const imagen = 'https://www.mundopeliculas.tv/wp-content/uploads/2019/08/ROCKO.jpg'

  return (
      //este h2 siguiente no es un string, no es html, es jsx, react pinta todo ese componente dentro del documento html
      //la ventaja es que podemos jugar en medio con logica de Javascript

      //si trabajara con javascript puro, tendria que tomar todo el elemento, pintarlo a traves de unos templates literales y asi pintar la constante
      //pero con react es mas sencillo porque tenemos jsx, al trabajar con jsx podemos crear parrafos sin colocar los cierres y aperturas
    <div>
    <h2>Nuevo componente { saludo } </h2>
    <img src={imagen} alt="" />

    </div>
  )
}

export default Variables