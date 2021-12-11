
import { NavBar } from './components/NavBar/NavBar';
import ComponentUseEffectProduct from './components/Vehiculos/ItemListContainer';
import ItemCount,{useState} from './components/Vehiculos/ItemListContainer'



import './CSS/style.css'

function App() {
  return (
    <div className="App">
      <div className="Header">
        


      
        <NavBar/>
        

      

      
      
      </div>
     
        <ItemCount/>
        <ComponentUseEffectProduct/>
      
          

    </div>
  );
}

export default App;
