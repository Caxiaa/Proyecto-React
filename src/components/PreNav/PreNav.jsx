import estilo from './PreNav.module.scss';

const PreNav = () =>{
    return (
        <div className={estilo.prenav_container}>
            <div className={estilo.login_button}>
                <button><span>Login</span></button>
            </div>
            <span>|</span>
            <div className={estilo.signup_button}>
                <button><span>Register</span></button>
            </div>
        </div>
    );
}

export default PreNav;