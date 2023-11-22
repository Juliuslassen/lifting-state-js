
function ShoppingList({shoppingCart}) {
        
    return (  
        <div>
            <h1>Shopping cart</h1>

            <ul>
                {
                shoppingCart.map((item, index) => {
                    return <li key={index}>Varer: {item.name} - {item.price} kr.</li>
                })}
            </ul>

        </div>
    );
}

export default ShoppingList;