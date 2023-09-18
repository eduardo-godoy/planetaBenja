import ItemCount from '../itemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'

function ItemDetail ({ id, title, image, categoryId, description, price, stock }) {
    const [quantity, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id,title,price
        }

        addItem(item,quantity)
    }

    return(
        <section className='section-detail'>
            <article className='article-detail'>
            <img className='img-detail' src={image} alt={title}/>
            <section className='detail-detail'>
            <h2 className='name-detail'>{title}</h2>
            <p className='category-detail'><b className='title-description'>Categoria:</b>{categoryId}</p>
            <p className='description-detail'><b className='title-description'>Descripcion:</b>{description}</p>
            <p className='price-detail'>Precio: ${price}</p>
            {
                quantity > 0 ? (
                    <Link to='/cart' className='btn-cart-2'>Terminar Compra</Link>
                ) : (
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                )
            }
            </section>
            </article>
        </section>
    )
}

export default ItemDetail