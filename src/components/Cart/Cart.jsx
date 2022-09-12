import React,{ useContext } from "react";
import { CartContext } from '../Context/CartContext';
import CartProducts from './CartProducts';
import estilos from './CartProducts.module.scss';

const Cart = () =>{

    const { cart,clear } = useContext(CartContext);

    return(
        <div className={estilos.body_cart}>
            <div className={estilos.cart_header}>
                <h2>Carrito</h2>
                <button onClick={clear}>Limpiar Carrito</button>
            </div>
            {
                cart.map((product)=>{
                    return(
                        <CartProducts products={product} key={product.id}/>
                    )
                })
            }            
        </div>
    );
}

export default Cart;