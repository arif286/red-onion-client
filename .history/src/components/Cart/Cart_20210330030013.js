import React, { useContext } from 'react';
import { UserContext } from '../../App';

const Cart = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <h1>food Cart</h1>
        </div>
    );
};

export default Cart;