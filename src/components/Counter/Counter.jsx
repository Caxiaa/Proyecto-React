import React, {useState} from "react";
import estilo from './Counter.module.scss';

const Counter = ({stock,initial,onAdd}) =>{
    const [count, setCount] = useState(initial);

    const sumar = () =>{
        if(count == stock){
            alert(`No puedes sumar mas de ${stock} productos.`);
        }else{
            setCount(count+1);
        }
    };
    const restar = () =>{
        if(count == 1){
            alert("No puedes tener 0 productos.");
        }else{
            setCount(count-1);
        }
    }

    return(
        <div className={estilo.counter_container}>
            <span className={estilo.counter_span}>Contador:{count}</span>
            <button onClick={restar} className={estilo.cart_products}>-</button>
            <button onClick={sumar} className={estilo.cart_products}>+</button>
            <button onClick={onAdd}>Agregar al carrito</button>
        </div>
    );
}

export default Counter;