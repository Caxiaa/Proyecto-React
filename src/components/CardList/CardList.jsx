import React, {useState,useEffect} from 'react';
import Cards from '../Cards/Cards';
import estilo from './CardList.module.scss';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const CardList = () =>{
    const [shoes,setShoes] = useState([]);
    const { categoryId } = useParams();

    useEffect(()=>{
        const itemsCollection = collection(db, "productos");
        const q = query(itemsCollection, where("category","==",`${categoryId}`));
        const filtrado = categoryId ? q : itemsCollection;
        getDocs(filtrado)
        .then((data)=>{
            const products = data.docs.map((prod)=>{
                return{
                    id:prod.id,
                    ...prod.data(),
                };
            });
            setShoes(products);
        })
        .catch((err)=>{
            console.log(err);
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