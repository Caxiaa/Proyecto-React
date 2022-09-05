import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import CardList from '../CardList/CardList';

const Main = () =>{
    return(
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer title="Off Sale!"/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/detail" element={<ItemDetailContainer/>}/>
                <Route path="/category/:categoryId" element={<CardList/>}/>
                <Route path='/detail/:idProd' element={<ItemDetailContainer/>}/>
            </Routes>
        </main>
    );
}

export default Main;