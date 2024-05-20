import React from "react";
import { useState } from 'react';


function PizzaCard (props){

  const [counter, setCounter] = useState(0);
  
  function increment(){
    setCounter(counter + 1);
  }

  function decrement(){
    if (counter > 0) {
        setCounter(counter - 1);
    }
  }

  function Buy(counter){
    if (counter > 0) {
        alert(`Количество заказанного товара: ${counter}`)
    }
  }
  
  return (
    <div className="container">
        
        <div className="wrapper">
            
            <img src={props.img} alt="error"/>

            <div className="under_img">
                <div>
                    <h1 className="title_and_price">{props.title}</h1>
                    <p className="text">{props.text}</p>
                </div>
    
                <select>
                    <option value='' selected disabled>Диаметр</option>
                    <option>25 см</option>
                    <option>30 см</option>
                </select>

                <h3 className="title_and_price">{props.price}</h3>

                <div>
                    <button onClick={decrement} className="decrement">-</button>
                    <span>{counter}</span>
                    <button onClick={increment} className="increment">+</button>
                    <button className="order-button" onClick={() => Buy(counter)}>\_/</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default PizzaCard;