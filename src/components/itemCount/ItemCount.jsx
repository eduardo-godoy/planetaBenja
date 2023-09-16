import { useState } from 'react'

function ItemCount ({ stock, initial, onAdd }) {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock){
            setQuantity( quantity + 1)
        }
    }

    const decrement = () => {
        if(quantity > 1){
            setQuantity( quantity - 1)
        }
    }

    return (
        <>
        <section className='section-quantity'>
            <button className='btn-decrement' onClick={decrement}>-</button>
            <h4 className='number'>{quantity}</h4>
            <button className='btn-increment' onClick={increment}>+</button>
        </section>
        <section className='section-cart-2'>
            <button className='btn-cart' onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
        </section>
        </>
    )
}

export default ItemCount