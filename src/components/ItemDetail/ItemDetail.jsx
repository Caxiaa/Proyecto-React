import estilo from './ItemDetail.module.scss';
import React from "react";
import Counter from '../Counter/Counter';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

const ItemDetail = ({product}) =>{
    const [count, setCount] = useState(0);

    const { addItem,getProdQuantity } = useContext(CartContext);

    const onAdd = (count) =>{
        setCount(count);
        addItem(product,count);
    }

    const quantity = getProdQuantity(product.id);

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
                    {
                        count === 0 ?
                        <Counter stock={product.stock} initial={quantity} onAdd={onAdd}/>
                        :
                        <Link to="/cart">Ver en carrito</Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;