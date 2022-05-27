import React, { Fragment } from 'react'

const Eventos = () => {

    const eventoClick = () => {
        console.log('me diste un click')
    }
    return (

        < Fragment >
            {/* el div anterior puedo reemplzarlo por Fragment siguiente yo lo puedo sacar y usar fragment, porque ese div en si dentro del codigo html no tiene sentido que vaya*/}

            <hr />
            <h2>Eventos</h2>

            {/* el codigo que sigue esta ok pero como vamos a usar arrowfunctions con parametros algunas veces mejor que quede como el que no está comentado*/}
            {/* <button onClick={eventoClick}>Click</button>*/}

            {/*cuando usamos el onClick es recomendable colocar un arrowfunction y despues nuestra funcion que va a ejecutar alguna acción*/}
            {/*Para tener un orden es recomendable tener funciones aparte (como la de eventoClick)*/}

            <button onClick={() => eventoClick()}>Click</button>
        </Fragment >
    )
}

export default Eventos