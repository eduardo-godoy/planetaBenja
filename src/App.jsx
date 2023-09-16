import './assets/css/App.css'
import NavBar from './components/navBar/NavBar'
import ItemlistContainer from './components/itemListContainer/ItemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import Cart from './components/cart/Cart'
import Checkout from './components/checkout/Checkout'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/CartContext'


function App () {
  return (
    <>
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
      <Routes>
        <Route path='/' element={ <ItemlistContainer/> } />
        <Route path='/category/:id' element={ <ItemlistContainer/> } />
        <Route path='/item/:itemId' element={ <ItemDetailContainer/> } />
        <Route path='/cart' element={ <Cart/> } />
        <Route path='/checkout' element={ <Checkout/> } />
        <Route path='*' element={ <h1 className='loading'>ERROR 404 PAGE NOT FOUND</h1> } />
      </Routes>
      </CartProvider>
    </BrowserRouter>
    </>
  )
}

export default App
