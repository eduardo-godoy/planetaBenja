import Cart from '../../assets/images/cart.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

function CartWidget () {
    const { totalQuantity } = useContext(CartContext)

    return (  
        <section className='section-cart'>
            <Link to='/cart'>
            <img src={Cart} className='cart-widget' alt='cart'/><p className='cart-number'>{totalQuantity()}</p>
            </Link>
        </section>
    )
}

export default CartWidget
