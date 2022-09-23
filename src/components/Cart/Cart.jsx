import React,{ useContext, useState } from "react";
import { CartContext } from '../Context/CartContext';
import CartProducts from './CartProducts';
import estilos from './CartProducts.module.scss';
import { Link } from 'react-router-dom';
import OrderForm from "../Order/OrderForm";

const Cart = () =>{

    const { cart,clear,totalPrice } = useContext(CartContext);
    const [ id,setId ] = useState("");

    const handleId = (id_compra) =>{
        setId(id_compra);
    }
    
    if(id){
        return(
            <div>
                <h1>Compra finalizada!</h1>
                <h3>Codigo de compra: {id}</h3>
            </div>
        )
    }

    if(cart.length === 0){
        return(
            <div className={estilos.cart_void}>
                <h1>Carrito vacio!</h1>
                <h2><Link to="/">Comienza a comprar!</Link></h2>
            </div>
        )   
    }
    return(
        <div className={estilos.body_cart}>
            <div className={estilos.cart_header}>
                <button onClick={clear}>❌ Limpiar Carrito</button>
                <h4 className={estilos.total_price}>Total: ${totalPrice()}</h4>        
                <button>✔ Finalizar compra</button>
            </div>
            {
                cart.map((product)=>{
                    return(
                        <CartProducts products={product} key={product.id}/>
                    )
                })
            }
            <OrderForm cart={cart} total={totalPrice()} clear={clear} handleId={handleId}></OrderForm>
        </div>
    );
}

export default Cart;