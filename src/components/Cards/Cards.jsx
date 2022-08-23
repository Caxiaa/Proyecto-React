import estilo from './Cards.module.scss';

const Cards = ()=>{

    const addCart = () =>{
        alert("Producto agregado al carrito!");
    }

    return (
        <div className={estilo.cards_container}>
            <div className={estilo.card}>
                <img src='jordan 1.png'></img>
                <h2>Jordan 1</h2>
                <h4>$40.000</h4>
                <button className={estilo.addCart} onClick={addCart}>Agregar al carro</button>
            </div>
        </div>
    );
}

export default Cards;