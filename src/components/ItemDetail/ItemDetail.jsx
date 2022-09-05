import estilo from './ItemDetail.module.scss';
import React from "react";
import Counter from '../Counter/Counter';

const ItemDetail = ({product}) =>{

    const onAdd = () =>{
        alert("Producto agregado al carrito!")
    }

    return(
        <div className={estilo.cardContainer}>
            <div className={estilo.card}>
                <div className={estilo.imgCard}>
                    <img src={product.thumbnail} alt={product.model}></img>
                </div>
                <div className={estilo.infoCard}>
                    <h1>{product.model}</h1>
                    <h3>${product.price}</h3>
                    <h4>{product.stock} unidades disponibles.</h4>
                    <Counter stock={product.stock} initial={1} onAdd={onAdd}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;