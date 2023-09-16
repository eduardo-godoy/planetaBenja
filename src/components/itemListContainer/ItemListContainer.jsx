import ItemList from '../itemList/ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../firebase/Client'

function ItemlistContainer () {
    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
        
        const collectionRef = id 
        ? query(collection(db, 'products'), where('categoryId', '==', id))
        : collection(db, 'products')

        getDocs(collectionRef)
            .then(response => { 
                const products = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(products)
            })
            .catch(e => {
                console.log(e)
            })
            .finally(()=>{
                setLoading(false)
            })
    },[id])

    return(
        <>
        { id ? (<h1 className='loading'>{id}</h1>) : (<h1 className='loading'>Nuestros Productos</h1>)}
        { loading  ? (<h1 className='loading'>Cargando...</h1>) : (<ItemList products={products} />)}
        </>
    )
}

export default ItemlistContainer

