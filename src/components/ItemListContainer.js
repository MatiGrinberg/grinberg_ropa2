import React, { useContext }  from 'react'
import {Redirect} from 'react-router-dom'
import app from './Firebase'
import Item from './Item'
import NavBar from './NavBar'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import { AuthProvider,AuthContext } from './Context'



function ItemListContainer(props) {
    const {products, cartItems, onRemove, onAdd, onAddFirst } = props;
    return(
    <ItemList onAdd={onAdd} onAddFirst={onAddFirst} onRemove={onRemove} products={products} cartItems={cartItems}></ItemList>
    )
}

export default ItemListContainer
