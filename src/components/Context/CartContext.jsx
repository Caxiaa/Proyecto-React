import { createContext,useState } from "react";


export const CartContext = createContext();

const CartProvider = ({children}) =>{
    const [cart,setCart] = useState([]);

    const addQuantity = (product,count) => {
        const inCart = cart.map((prod)=>{
            if (prod.id === product.id) {
                const productUpdate = {
                    ...prod,
                    count:prod.count + count
                }
                return productUpdate;
            } else {
                return prod;
            }
        })
        setCart(inCart);
    }

    const addItem = (product,count) =>{
        if (isInCart(product.id)) {
            addQuantity(product,count);
        } else {
            setCart([...cart,{...product,count}]);
        }
    };

    const removeItem = (id) =>{
        const new_Arrary = cart.filter((prod)=>prod.id !== id);
        setCart(new_Arrary);
    };

    const clear = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        return cart.some((prod)=>prod.id === id);
    }

    return <CartContext.Provider value={{addItem,cart,removeItem,clear}}>
                {children}
            </CartContext.Provider>
}

export default CartProvider;



