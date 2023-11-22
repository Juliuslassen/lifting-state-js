import React, {useState} from 'react';
import ShoppingForm from './ShoppingForm';
import ShoppingList from './ShoppingList';

function Shopping() {

    const initialShoppingCart = [
        {price: 10, name: "Apple"},
        {name: "Orange", price: 20},
        {price: 30, name: "Banana"},
        {name: "Grapes", price: 40}
    ]

    const [shoppingCart, setShoppingCart] = useState(initialShoppingCart)

    return (  
        <div>
            <ShoppingList shoppingCart={shoppingCart}/>
            <ShoppingForm shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}/>
        </div>
    );
}

export default Shopping;