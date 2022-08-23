import React, {useState} from "react";
import estilo from './CartWidget.module.scss'

const CartWidget = () =>{
    const [count, setCount] = useState(0);

    const sumar = () =>{
        setCount(count+1);
    };
    const restar = () =>{
        if(count == 0){
            alert("No puedes tener menos de 0 productos")
        }else{
            setCount(count-1);
        }
    }

    return(
        <div className={estilo.cart_container}>
            <i className="fa-solid fa-cart-shopping"></i>
            <span className={estilo.span_cart}>{count}</span>
            <button onClick={restar} className={estilo.cart_products}>-</button>
            <button onClick={sumar} className={estilo.cart_products}>+</button>
        </div>
    );
}

export default CartWidget;