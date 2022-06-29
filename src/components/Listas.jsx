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

    //Operador de propagación -> se usa para unir dos arrays en uno solo con todos los elementos

    const agregarElemento = () => {
        console.log()
        //a continuación tomemos el set lista e insertemos un nuevo elemento
        //como es un array tiene nosotros tenemos siempre que tengamos estado inicial
        //tenemos que iniciar con lo que haya inicializado este estado, en este caso es un array por eso coloco un array
        //si no coloco el operador de propagacion con los ... , cuando le de al boton de agregar me va a borrar todo lo que haya y lo reemplazo por lo nuevo
        
        //con el ...lista, >> voy a tomar el estado incial que contiene los elementos que ya tenga el array y voy a ir agregando los nuevos
        setLista([
            ...lista,
            {id:3,texto:'tarea 3'}
        ])
    }


    return (
        <div>
            <h2>Listas</h2>
            {
                //el parametro item siguiente va a ser cada uno de nuestros numeros , dentro del parentesis está lo que retorna
                //si uso el map, tengo que tener un key
                //en la arrow function si uso map el primer elemento de la guarda es el "item" osea cada elemento del array y el index es el indice  
                //si tuvieramos un id lo pintariamos dentro del key
                lista.map((item,index) => (
                    <h4 key={index}>{item.texto}</h4>
                ))
            }
            <button onClick={()=>agregarElemento()}>Agregar</button>
        </div>
    )
}

export default Listas