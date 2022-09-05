import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Array } from '../Mocks/array_shoes';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () =>{
    const [shoes,setShoes] = useState([]);
    const { idProd } = useParams();

    
    useEffect(()=>{
        const getProd = new Promise((res,rej)=>{
            const prod = Array.find((prod)=>prod.id===Number(idProd));
            setTimeout(() => {
                res(prod);
            }, 800);
        })
        getProd
        .then((data)=>{
            setShoes(data);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[idProd]);

    return(
        <div>
            <ItemDetail product={shoes} key={shoes.id}/>
        </div>
    );
}

export default ItemDetailContainer;