import Navbar from '../Navbar/Navbar';
import PreNav from '../PreNav/PreNav';
import estilos from './Header.module.scss';

const Header = () =>{
    return (
        <div>
            <PreNav/>
            <header className={estilos.header_container}>
                <Navbar/>
            </header>
        </div>
    );
}

export default Header;