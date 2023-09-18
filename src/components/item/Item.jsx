import { Link } from 'react-router-dom'

function Item ({ id, title, image, price, stock }) {
    return(
        <article className='card'>
            <h4 className='name-card'>{title}</h4>
            <img src={image} alt={title} className='img-card'/>
            <p className='price-card'>Precio: ${price}</p>
            <p className='stock-card'> Stock disponible: {stock}</p>
        <section className='section-btn-card'>
            <Link to={`/item/${id}`}>
                <button className='myButton'>Ver más</button>
            </Link>
        </section>
        </article>
    )
}

export default Item 