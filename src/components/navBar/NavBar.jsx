import Logo from '../../assets/images/logo2.png'
import CartWidget from '../cartWidget/CartWidget'
import { Link } from 'react-router-dom'

function NavBar () {
    return(    
        <div className='header2'>
        <header className='header'>
            <Link to='/' className='link-header'>
            <img src={Logo} className='logo-header' alt='logo'/>
            </Link>
            <nav className='nav-bar'>
            <li className='navbar-list'>
            <Link to={`/category/juguetes`} className='list-1'><ul className='list-2'>Juguetes</ul></Link>
            <Link to={`/category/libros`} className='list-1'><ul className='list-2'>Libros</ul></Link>
            <Link to={`/category/didacticos`} className='list-1'><ul className='list-2'>Didacticos</ul></Link>
            </li>   
            <CartWidget/>
            </nav>
        </header>
        </div>
    )
}

export default NavBar

