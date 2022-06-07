import React, {useState} from 'react'
//cuando tenemos un array y queremos recorrelo o pintarlo dentro de nuestro html vamos a usar los estados y ademas el map
//dentro de los parentesis vamos a pintar el estado inicial o hacer una constante que se llame estado inicial y hacer el array


const Listas = () => {

    //const estadoInicial = [1,2,3,4,5]
    //ahora voy a hacer el array pero en vez de numeros que sean objetos con un id
    const estadoInicial = [
        {id:1,texto:'tarea 1'},
        {id:2,texto:'tarea 2'},
        {id:3,texto:'tarea 3'},
    ]



    //dentro de los parentesis le coloco el estado inicial
    const [lista,setLista] = useState(estadoInicial) 



    return (
        <div>
            <h2>Listas</h2>
            {
                //el parametro item siguiente va a ser cada uno de nuestros numeros , dentro del parentesis está lo que retorna
                //si uso el map, tengo que tener un key
                //en la arrow function si uso map el primer elemento de la guarda es el "item" osea cada elemento del array y el index es el indice  
                //si tuvieramos un id lo pintariamos dentro del key
                lista.map((item,index) => (
                    <h4 key={item.id}>{item.texto}</h4>
                ))
            }
        </div>
    )
}

export default Listas