import React from 'react'
import './Home.css';
import Product from './Product';



function Home() {
    return (
        <div className='home'>
            <Product
            id='1'
            title='Zapatos_Cuero'
            price={100}
            desc='zapatos cuero vacuno negro 100% argentino'
            image='/Assets/zapatosCuero.jpeg'
            />
            <Product
            id='2'
            title='Campera_Cuero'
            price={500}
            desc='campera cuero ovino negro 100% argentino'
            image='/Assets/camperaCuero.jpeg'
            />
        </div>
    )
}

export default Home
