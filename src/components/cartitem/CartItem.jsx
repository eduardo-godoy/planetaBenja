import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

function CartItem ({ id, title, price, quantity }) {
    const { removeItem } = useContext(CartContext)

    return(
        <article className='card-2'>
            <h4 className='name-card-2'>{title}</h4>
            <p className='quantity-card-2'>Cantidad: {quantity}</p>
            <p className='price-card-2'>Precio x unidad: ${price}</p>
            <p className='quantity-card-3'>Total: ${quantity * price}</p>
            <button className='myButton-4' onClick={() => removeItem(id)}>Eliminar</button>
        </article>
    )
}

export default CartItem 