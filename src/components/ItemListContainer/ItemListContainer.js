import React, { useContext }  from 'react'
import {Redirect} from 'react-router-dom'
import app from '../Firebase/Firebase'
import Item from '../Item/Item'
import NavBar from '../NavBar/NavBar'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
// import { AuthProvider,AuthContext } from '../NoRequeridas/Context'



function ItemListContainer(props) {
    const {products, cartItems, onRemove, onAdd, onAddFirst } = props;
    return(
    <ItemList onAdd={onAdd} onAddFirst={onAddFirst} onRemove={onRemove} products={products} cartItems={cartItems}></ItemList>
    )
}

export default ItemListContainer
