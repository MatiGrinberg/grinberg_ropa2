import React from 'react'
import './checkout.css'
import Subtotal from './Subtotal';


function Checkout() {
    return (
        <div>
            <div className='checkout'>
                <div className='left'>
                    <h2 className='checkout_title'>No tenes productos</h2>
                </div>
                <div className='right'>
                    <Subtotal/>
                </div>
            </div>
        </div>
        
    )
}

export default Checkout
