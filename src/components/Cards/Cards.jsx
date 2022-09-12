import estilo from './Cards.module.scss';
import { Link } from 'react-router-dom';

const Cards = ({props})=>{


    return (
        <div className={estilo.card}>
            <div className={estilo.img_card}>
                <img src={props.thumbnail}></img>
            </div>
            <div className={estilo.info_card}>
                <h2>{props.model}</h2>
                <h4>${props.price}</h4>
                <h4>{props.stock} unidades</h4>
                <Link to={`/detail/${props.id}`}>
                    <button className={estilo.addCart}>Ver Detalles</button>
                </Link>
            </div>
        </div>
    );
}

export default Cards;