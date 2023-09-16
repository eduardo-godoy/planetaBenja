import CartItem from '../cartitem/CartItem'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

function Cart () {
    const { cart, clearCart, totalPrice } = useContext(CartContext)

    if(cart.length === 0){
        return (
            <section>
                <h1 className='h1-cart'>No hay productos en el carrito</h1>
                <Link to='/' className='btn-cart-3'>Listado de Productos</Link>
            </section>
        )
    }

    return (
        <section className='section-cart-widget'>
            { cart.map(prod => <CartItem key={prod.id} {...prod}/>)}
            <h2 className='total-price'> Total: $<p>{totalPrice()}</p></h2>
            <button className='btn-card' onClick={() => clearCart()}>Vaciar carrito</button>
            <Link to='/checkout' className='btn-cart-3'>Checkout</Link>
        </section>
    )
}   

export default Cart