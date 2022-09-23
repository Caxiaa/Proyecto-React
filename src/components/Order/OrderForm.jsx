import React,{ useState } from "react";
import { db } from '../../firebaseConfig';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const OrderForm = ({cart, total, clear, handleId}) =>{
    
    const [name,setName] = useState("");
    const [last_name,setLName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");


    const handleSubmit = (event) =>{
        event.preventDefault();

        const orderCollection = collection(db,'orders');

        const order = {
            buyer: {nombre: name,apellido: last_name,email: email,telefono: phone},
            items: cart,
            total:total,
            timestamp: serverTimestamp(),
        }

        addDoc(orderCollection,order)
        .then((data)=>{
            handleId(data.id);
            clear();
        })
        .catch((err)=>{
            console.log(err);
        })

    }

    const handleChangeName = (event) =>{
        setName(event.target.value);
    }

    const handleChangeLastName = (event) =>{
        setLName(event.target.value);
    }

    const handleChangeEmail = (event) =>{
        setEmail(event.target.value);
    }

    const handleChangePhone = (event) =>{
        setPhone(event.target.value);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={handleChangeName} placeholder="Nombre" name="name"></input>
                <input type="text" value={last_name} onChange={handleChangeLastName} placeholder="Apellido" name="last_name"></input>
                <input type="email" value={email} onChange={handleChangeEmail} placeholder="Email" name="email"></input>
                <input type="tel" value={phone} onChange={handleChangePhone} placeholder="Telefono" name="phone"></input>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}


export default OrderForm;