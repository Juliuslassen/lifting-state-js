import { useRef } from "react";

function ShoppingForm({shoppingCart, setShoppingCart}) {

    const itemRef = useRef()
    const priceRef = useRef()

    return (  
        <div>
            <input type="text" placeholder="Item Name" ref={itemRef}/>
            <input type="number" min={0} placeholder="Price" ref={priceRef}/>
            <button onClick={() => {
                setShoppingCart([...shoppingCart, {
                    name: itemRef.current.value,
                    price: priceRef.current.value
                }]
                )
                alert("Item added to cart")
                alert("You have items in your cart")
            }}>Add to cart</button>
        </div>
    );
}

export default ShoppingForm;