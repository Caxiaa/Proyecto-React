import estilo from './Navbar.module.scss';

const Navbar = () =>{
    return (
        <nav className={estilo.nav_container}>
            <div className={estilo.logo}>
                <img src="logo_small.png"></img>
            </div>
            <ul className={estilo.nav_list}>
                <li>
                    <a href="https://google.com">Productos</a>
                </li>
                <li>
                    <a href="https://google.com">Nosotros</a>
                </li>
                <li>
                    <a href="https://google.com">Preguntas Frecuentes</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;