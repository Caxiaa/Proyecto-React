import React, {useState,useEffect} from 'react';
import Cards from '../Cards/Cards';
import { Array } from '../Mocks/array_shoes';
import estilo from './CardList.module.scss';
import { useParams } from 'react-router-dom';

const CardList = () =>{
    const [shoes,setShoes] = useState([]);
    const { categoryId } = useParams();

    useEffect(()=>{
        const getShoes = new Promise((res, rej)=>{
            const prodFiltrados = Array.filter((prod)=>prod.category === categoryId);
            setTimeout(()=>{
                res(categoryId ? prodFiltrados : Array);
            },(1000));
        })
        getShoes
        .then((data)=>{
            setShoes(data);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[categoryId]);


    return(
        <div className={estilo.shoes_container}>
            {
                shoes.map((shoe)=>{
                    return <Cards props={shoe} key={shoe.id}/>
                })
            }
        </div>
    );
}

export default CardList;