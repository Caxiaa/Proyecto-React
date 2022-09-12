import CardList from '../CardList/CardList';
import Counter from '../Counter/Counter';
import estilo from './ItemListContainer.module.scss';
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) =>{

    const {title} = props;
    
    return(
        <div>
                <div className={estilo.portada}>
                    <img src='pexels-shane-aldendorff-786003.jpg'></img>
                </div>
                <div className={estilo.title_container}>
                    <h1>{title}</h1>
                </div>
                {/* <Counter stock={10} initial={1} onAdd={onAdd}/> */}
                <hr></hr>
                <CardList/>
        </div>
    );
}

export default ItemListContainer;