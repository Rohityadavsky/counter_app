// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './Header';

function App() {
  const [counter,setCounter] = useState(0);
  const onIncreaseButtonClick = () =>{
    setCounter(counter + 1);
 
  }

  const onDecreaseButtonClick = () =>{
    if(counter !== 0){
       setCounter(counter - 1);
    }
    
  }

  const onResetButtonClick = () =>{
    setCounter(0);
  }
  
  return (
   <div>
    <Header />
    <div className='Apps'>
    <h1 >Counter Apps</h1>
    <button onClick={onIncreaseButtonClick} className='btn-txt1'>Increase(+)</button>
    <span>{counter}</span>
    <button onClick={onDecreaseButtonClick} className='btn-txt2'>Decrese(-)</button>
    <button onClick={onResetButtonClick} >Reset</button>
    </div>
   </div>
  );
}
export default App;
