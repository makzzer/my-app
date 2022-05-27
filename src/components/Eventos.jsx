import React, { Fragment, useState } from 'react'

const Eventos = () => {


    //antes de lo siguiente tengo que llamar en el import en useState
    //dentro de las llaves voy a poner el texto a modificar y despues de la coma, de donde va a tomar la modificacion
    //texto va a ser nuestro estado que va a contener nuestro string y setTexto va a ser la funcion que va a modificar ese texto en cuestion
    //dentro de useState vamos a colocar el valor del texto por defecto
    const [texto, setTexto] = useState('Texto desde estado')



    const eventoClick = () => {
        console.log('me diste un click')
        //acá llamo a setTexto que es el texto que se va a modificar cuando presione el botón
        setTexto('Cambiando el texto..')
    }
    return (

        <>
            {/* el div anterior puedo reemplzarlo por Fragment siguiente yo lo puedo sacar y usar fragment, porque ese div en si dentro del codigo html no tiene sentido que vaya*/}
            {/*Puedo usar la abreviación de Fragment para reemplazar ese codigo que es <> y </> */}

            <hr />
            <h2>{texto}</h2>

            {/* el codigo que sigue esta ok pero como vamos a usar arrowfunctions con parametros algunas veces mejor que quede como el que no está comentado*/}
            {/* <button onClick={eventoClick}>Click</button>*/}

            {/*cuando usamos el onClick es recomendable colocar un arrowfunction y despues nuestra funcion que va a ejecutar alguna acción*/}
            {/*Para tener un orden es recomendable tener funciones aparte (como la de eventoClick)*/}

            <button onClick={() => eventoClick()}>Click</button>
        </>
    )
}

export default Eventos