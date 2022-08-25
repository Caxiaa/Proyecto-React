import React, {useState,useEffect} from 'react';
import Cards from '../Cards/Cards';
import { Array } from '../Mocks/array_shoes';
import estilo from './CardList.module.scss';

const CardList = () =>{
    const [shoes,setShoes] = useState([]);

    useEffect(()=>{
        const getShoes = new Promise((res, rej)=>{
            setTimeout(()=>{
                res(Array);
            },(2000));
        })
        getShoes
        .then((data)=>{
            setShoes(data);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[])


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