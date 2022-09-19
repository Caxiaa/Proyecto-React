import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import estilos from './CartProducts.module.scss';

const CartProducts = (props) =>{

    const {removeItem} = useContext(CartContext);

    let {products} = props;
    return(
        <div className={estilos.product_container}>
            <div className={estilos.img_container}>
                <img src={products.thumbnail}></img>
            </div>
            <div className={estilos.info_container}>
                <h1>{products.model}</h1>
                <h4>Precio unidad: ${products.price}</h4>
                <h4>Cantidad: {products.count}</h4>
                <button onClick={()=>removeItem(products.id)}>Eliminar Producto</button>
            </div>
        </div>
    )
}

export default CartProducts;