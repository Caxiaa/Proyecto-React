import Cards from '../Cards/Cards';
import Counter from '../Counter/Counter';
import estilo from './ItemListContainer.module.scss';

const ItemListContainer = (props) =>{

    const {title} = props;
    return(
        <main>
            <div className={estilo.portada}>
                <img src='pexels-shane-aldendorff-786003.jpg'></img>
            </div>
            <div className={estilo.title_container}>
                <h1>{title}</h1>
            </div>
            <Counter/>
            <div className={estilo.subtitle_container}>
                <h2>Linea Jordan</h2>
            </div>
            <Cards/>
        </main>
    );
}

export default ItemListContainer;