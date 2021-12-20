import React from 'react';

const ReviewCart = (props) => {
    console.log(props.item)
    const {name, price, quantity, key} = props.item
    return (
        <div className='product'>
            <div>
                <h4 className="product-name">{name}</h4>
                <p>Price: {price}</p>
                <p>Quantity : {quantity}</p>
                <button onClick={() => props.removeItem(key)} className="btn-regular">Remove</button>
            </div>
        </div>
    );
};

export default ReviewCart;