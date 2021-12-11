
import React, {useState} from "react"
/*import { Container } from "react-bootstrap";*/

function ComponentUseEffectProduct(){
    const [ count, setCount] = useState(0)
    //let count = 0 // este es un estado
    const handlerClick=()=>{
        setCount(count+1)
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={handlerClick}>Click +</button>
        </div>
    );
}
export default ComponentUseEffectProduct






/*const ItemCount = () =>{
    const inicial = 1;
    const stock = 30;
    
    const [value,setValue] = useState(inicial)
    
    const handleSuma = () => {
        setValue(value+1)

    }
    const handleResta = () => {
        setValue(value-1)
        /*if{
            value= 0
        }

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




export default ItemCount*/