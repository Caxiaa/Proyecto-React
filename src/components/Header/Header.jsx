import Navbar from '../Navbar/Navbar';
import estilos from './Header.module.scss';

const Header = () =>{
    return (
        <header className={estilos.header_container}>
            <Navbar/>
        </header>
    );
}

export default Header;