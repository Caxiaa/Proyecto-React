import React, {useState} from "react";
import estilo from './CartWidget.module.scss';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const CartWidget = () =>{

    const { totalQuantity } = useContext(CartContext);

    return(
        <div className={estilo.cart_container}>
            <i className="fa-solid fa-cart-shopping"></i>
            <span className={estilo.span_cart}>{totalQuantity()===0? "" : totalQuantity()}</span>
        </div>
    );
}

export default CartWidget;