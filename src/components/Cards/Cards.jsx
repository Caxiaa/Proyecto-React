import estilo from './Cards.module.scss';

const Cards = ()=>{
    return (
        <div className={estilo.cards_container}>
            <div className={estilo.card}>
                <img src='jordan 1.png'></img>
                <h2>Jordan 1</h2>
                <h4>$40.000</h4>
            </div>
        </div>
    );
}

export default Cards;