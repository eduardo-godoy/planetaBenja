import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

function CartItem ({ id, title, price, quantity }) {
    const { removeItem, totalPrice } = useContext(CartContext)

    return(
        <article className='card-2'>
            <h4 className='name-card-2'>{title}</h4>
            <p className='price-card'>Cantidad: {quantity}</p>
            <p className='price-card'>Precio x unidad: ${price}</p>
            <p className='price-card'>Total: ${totalPrice()}</p>
            <button className='btn-card' onClick={() => removeItem(id)}>Eliminar</button>
        </article>
    )
}

export default CartItem 