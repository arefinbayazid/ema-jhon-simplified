import React from 'react';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../Hooks/UserProduct/useCart';
import useProduct from '../Hooks/UserProduct/useProduct';
import ReviewCart from '../ReviewCart/ReviewCart';

const OrderReview = () => {
    const [products] = useProduct();
    const [cart, setCart] = useCart(products);
    const removeItem = id =>{
        const newCart = cart.filter(item => item.key !== id)
        setCart(newCart)
        removeFromDb(id)    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(item => <ReviewCart item = {item} removeItem={removeItem}></ReviewCart>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default OrderReview;