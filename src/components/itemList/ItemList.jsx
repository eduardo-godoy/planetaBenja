import Item from '../item/Item'

function ItemList ({ products }) {
    return(
        <section className='section-cards'>
            { products.map(product => <Item key={product.id} {...product}/> )}
        </section>
    )
}

export default ItemList