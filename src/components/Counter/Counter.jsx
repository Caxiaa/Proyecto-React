import React, {useState} from "react";
import estilo from './Counter.module.scss';

const Counter = () =>{
    const [count, setCount] = useState(0);

    const sumar = () =>{
        if(count == 10){
            alert("No puedes sumar mas de 10 productos.");
        }else{
            setCount(count+1);
        }
    };
    const restar = () =>{
        if(count == 0){
            alert("El contador no puede estar negativo.")
        }else{
            setCount(count-1);
        }
    }

    return(
        <div className={estilo.counter_container}>
            <span className={estilo.counter_span}>Contador:{count}</span>
            <button onClick={restar} className={estilo.cart_products}>-</button>
            <button onClick={sumar} className={estilo.cart_products}>+</button>
        </div>
    );
}

export default Counter;