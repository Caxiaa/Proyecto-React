import estilo from './ItemDetail.module.scss';
import React from "react";
import Counter from '../Counter/Counter';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({product}) =>{

    const [count, setCount] = useState(0);

    const onAdd = (count) =>{
        setCount(count);
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
                    {
                        count === 0 ?
                        <Counter stock={product.stock} initial={1} onAdd={onAdd}/>
                        :
                        <Link to="/cart">Ver en carrito</Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;