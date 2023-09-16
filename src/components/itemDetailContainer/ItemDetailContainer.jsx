import ItemDetail from '../itemDetail/ItemDetail'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase/Client'

function ItemDetailContainer () {
    const [product, setProduct] = useState (null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)
        
        const docRef = doc(db, 'products', itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productAdapted = {id: response.id, ...data}
                setProduct(productAdapted)
            })
            .catch(e => {
                console.log(e)
            })
            .finally(()=>{
                setLoading(false)
            })
    },[itemId])

    return(
        <section className='section-itemDetail'>
             { loading  ? (<h1 className='loading'>Cargando...</h1>)  : (<ItemDetail {...product} />)}
        </section>
    )
}

export default ItemDetailContainer