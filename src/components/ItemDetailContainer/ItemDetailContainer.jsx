import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Array } from '../Mocks/array_shoes';
import ItemDetail from '../ItemDetail/ItemDetail';
import { db } from '../../firebaseConfig';
import { getDoc, doc, collection } from 'firebase/firestore';

const ItemDetailContainer = () =>{
    const [shoes,setShoes] = useState([]);
    const { idProd } = useParams();

    
    useEffect(()=>{
        const itemsCollection = collection(db,"productos");
        const ref = doc(itemsCollection, idProd);
        getDoc(ref)
        .then((data)=>{
            setShoes({
                id: data.id,
                ...data.data()
            })
        })
        .catch((err)=>{
            console.log(err);
        })
    },[idProd]);

    return(
        <div>
            <ItemDetail product={shoes} key={shoes.id}/>
        </div>
    );
}

export default ItemDetailContainer;