import React from 'react'

const Eventos = () => {

    const eventoClick = () => {
        console.log('me diste un click')
    }
    return (
        <div>
            <hr />
            <h2>Eventos</h2>

            {/* el codigo que sigue esta ok pero como vamos a usar arrowfunctions con parametros algunas veces mejor que quede como el que no está comentado*/}
            {/* <button onClick={eventoClick}>Click</button>*/}

            {/*cuando usamos el onClick es recomendable colocar un arrowfunction y despues nuestra funcion que va a ejecutar alguna acción*/}
            {/*Para tener un orden es recomendable tener funciones aparte (como la de eventoClick)*/}

            <button onClick={() => eventoClick()}>Click</button>
        </div>
    )
}

export default Eventos