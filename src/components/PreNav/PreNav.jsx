import estilo from './PreNav.module.scss';

const PreNav = () =>{
    return (
        <div className={estilo.prenav_container}>
            <div className={estilo.login_button}>
                <button><span>Iniciar Sesion</span></button>
            </div>
            <span>|</span>
            <div className={estilo.signup_button}>
                <button><span>Registrate</span></button>
            </div>
        </div>
    );
}

export default PreNav;