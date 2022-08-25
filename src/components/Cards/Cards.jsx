import estilo from './Cards.module.scss';

const Cards = ({props})=>{

    const addCart = () =>{
        alert("Producto agregado al carrito!");
    }


    return (
        <div className={estilo.card}>
            <img src={props.thumbnail}></img>
            <h2>{props.model}</h2>
            <h4>${props.price}</h4>
            <h4>${props.stock} unidades</h4>
            <button className={estilo.addCart} onClick={addCart}>Agregar al carro</button>
        </div>
    );
}

export default Cards;