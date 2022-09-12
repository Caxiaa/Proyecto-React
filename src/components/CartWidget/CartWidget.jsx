import React, {useState} from "react";
import estilo from './CartWidget.module.scss'

const CartWidget = () =>{

    return(
        <div className={estilo.cart_container}>
            <i className="fa-solid fa-cart-shopping"></i>
            <span className={estilo.span_cart}></span>
        </div>
    );
}

export default CartWidget;