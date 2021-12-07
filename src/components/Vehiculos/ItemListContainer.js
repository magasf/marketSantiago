
import React, {useState} from "react"
/*import { Container } from "react-bootstrap";*/
const ItemCount = () =>{
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
        }*/

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