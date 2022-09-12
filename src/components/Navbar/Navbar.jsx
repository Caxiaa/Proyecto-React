import CartWidget from '../CartWidget/CartWidget';
import estilo from './Navbar.module.scss';
import { Link } from 'react-router-dom';

const Navbar = () =>{
    return (
        <nav className={estilo.nav_container}>
            <div className={estilo.logo}>
                <Link to='/'>
                    <img src="logo_small.png"></img>
                </Link>
            </div>
            <div className={estilo.navbar_container}>
                <input type="search" placeholder='Buscar producto...'></input>
            </div>
            <ul className={estilo.nav_list}>
                <li>
                    <Link to="/">All Shoes</Link>
                </li>
                <li>
                    <Link to="/category/Man">Man</Link>
                </li>
                <li>
                    <Link to="/category/Woman">Woman</Link>
                </li>
                <li>
                    <Link to="/category/Kids">Kids</Link>
                </li>
            </ul>
            <Link to='/cart'>
                <CartWidget/>
            </Link>
        </nav>
    );
}

export default Navbar;