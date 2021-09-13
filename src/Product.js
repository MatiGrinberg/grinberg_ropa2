import React from 'react'
import './product.css';
import './Home.css';
import {useStateValue} from './Context'

function Product({id, title, image, desc, price}) {
    const [{canasto},dispatch] = useStateValue()
    const agregar =() =>{
        dispatch({
        type: 'AGREGAR',
            item: {
                id: id,
                title: title,
                price: price,
                desc: desc,
                image: image

                }
        })
    } 

    return (
    <div >
        <div className='home_img'>
            <img src={image} alt='product'/> 
        </div>
        <div>   
            <h3>{title}</h3>
            <h3>{price}</h3>
            <p>{desc}</p>
        </div>
        <div>
            <button onClick={agregar}>Agregar</button>
        </div>
        
    </div>
    )
}

export default Product
