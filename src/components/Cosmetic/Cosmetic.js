import React from 'react';
import addDb from '../../utilities/fakedb';
import './Cosmetic.css';

const Cosmetic = ({cosmetic}) => {
    const addToCart = (id) => {
        addDb(id)
    }
    return (
        <div className='product' style={{margin: '10px', padding: '10px', background: '#e6663e', color: 'white'}}>
            <h2>Buy this: {cosmetic.name}</h2>
            <p>Price only: {cosmetic.price}</p>
            <img src={cosmetic.img} alt="" />
            <p>Email: {cosmetic.email}</p>
            <p>Email: {cosmetic.phone}</p>
            <button onClick={() => addToCart(cosmetic._id)}>Add to Cart</button>
        </div>
    );
};

export default Cosmetic;