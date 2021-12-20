import React from 'react';
import { Link } from 'react-router-dom';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
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
        removeFromDb(id)    
    }
    const placeOrderHandeler = () =>{
        setCart([])
        clearTheCart()
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(item => <ReviewCart key = {item.key} item = {item} removeItem={removeItem}></ReviewCart>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                <Link to = '/confirmed'>
                    <button onClick={() =>placeOrderHandeler()} className='btn-regular'>Place Order</button>
                </Link>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;