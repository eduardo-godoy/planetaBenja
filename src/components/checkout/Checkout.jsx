import CheckoutForm from '../checkoutForm/CheckoutForm'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Timestamp, documentId, getDocs, query, where, writeBatch, collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebase/Client'

function Checkout () {
    const [loading, setLoading] = useState(false)
    const [orderId, setorderId] = useState ('')

    const { cart, totalPrice, clearCart} = useContext(CartContext)

    const createOrder = async ({name, phone, email}) => {
        setLoading(true)

       try{
        const objOrder = {
            buyer: {name, phone, email},
            items: cart,
            total: totalPrice(),
            date: Timestamp.fromDate(new Date())
        }

        const batch = writeBatch(db)

        const outOfStock = []

        const ids = cart.map(prod => prod.id)

        const productsRef = collection(db, 'products')

        const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in' , ids)))
          
        const {docs} = productsAddedFromFirestore

        docs.forEach(doc => {

            const dataDoc = doc.data()
            const stockDb = dataDoc.stock
            const productAddedToCart = cart.find(prod => prod.id === doc.id)
            const prodQuantity = productAddedToCart?.quantity

        if(stockDb >= prodQuantity){
            batch.update(doc.ref, { stock: stockDb - prodQuantity})
        }else{
            outOfStock.push({id: doc.id, ...dataDoc})
        }
    })
    
    if(outOfStock.length === 0) {
            await batch.commit()
            const orderRef = collection(db,'orders')
            const orderAdded = await addDoc(orderRef, objOrder)
            setorderId(orderAdded.id)
            clearCart()
    }else{
        alert('Por el momento no contamos con stock')
    } 

    }catch(error) {
        console.log(error)
    }finally{
        setLoading(false)
    }
}

if(loading){
    return <h1>Se esta generando su pedido...</h1>
}

if(orderId){
    return <h1>EL id de su orden es: {orderId}</h1>
}
    
    return (
        <section>
            <h1 className='loading'>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </section>
    )
}

export default Checkout