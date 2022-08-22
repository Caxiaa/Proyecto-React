import estilo from './CartWidget.module.scss'

const CartWidget = () =>{
    return(
        <div className={estilo.cart_container}>
            <i className="fa-solid fa-cart-shopping"></i>
            <span className={estilo.span_cart}>2</span>
        </div>
    );
}

export default CartWidget;