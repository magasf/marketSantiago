
import React, {useState} from "react"
/*import { Container } from "react-bootstrap";*/


/*function ComponentUseEffectProduct(){
    const [ count, setCount] = useState(0)
    const [fecha, setFecha] = useState(Date())
    //let count = 0 // este es un estado
    const handlerClick=()=>{
        setCount(count+1)
        setFecha(Date())
    }
    return (
        <div>
            <p>{count}</p>
            <p>{fecha}</p>
            <button onClick={handlerClick}>Click +</button>
        </div>
    );
}
export default ComponentUseEffectProduct


*/



const ItemCount = () =>{
    const inicial = 1;
    const stock = 30;
    
    const [value,setValue] = useState(inicial)
    
    const handleSuma = () => {
        if(value < stock)
        setValue(value + 1)

    }
    const handleResta = () => {
        if(value > inicial)
        setValue(value-1)
        

    }
 
    return(
        <div>
            <h3>Cuantos desea?</h3>
            <h3>{value}</h3>
            <button onClick={handleSuma}>+</button>
            <button onClick={handleResta}>-</button>
            
        </div>
    )

}




export default ItemCount