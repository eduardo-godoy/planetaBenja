import { useState } from 'react'

function CheckoutForm ({ onConfirm }) {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (e) => {
        e.preventDefault()
        
        if(name === '' && phone === '' && email === '' ){
            e.preventDefault()
        }else{
            const userData = {
                name, phone, email
            }
            onConfirm(userData)
            console.log(userData)
        }
    }
       
    return (
        <form onSubmit={handleConfirm} className='form'>
            <label className='label'>Nombre
            <input className='input' type='text' value={name} onChange={({target}) => setName(target.value)}/>
            </label>
            <label className='label'>Telefono
            <input className='input' type='tel' value={phone} onChange={({target}) => setPhone(target.value)}/>
            </label>
            <label className='label'>Email
            <input className='input' type='email' value={email} onChange={({target}) => setEmail(target.value)}/>
            </label>
            <button type='submit' className='btn-cart-input'>Crear orden</button>
        </form>
    )
}

export default CheckoutForm