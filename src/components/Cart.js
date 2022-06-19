import React from "react"

const Cart = (props) => {
    const removeItem = (id) => {
        props.setshopList(product => ({ productList: product.productList.filter(product => product.id !== id) }))
    }
    const quantity = props.shopList.productList.reduce((a, b) => {
        return a + b.quantity;
    }, 0);
    const totalPrice = props.shopList.productList.reduce((a, b) => {
        return a + b.price;
    }, 0);
    return (
        <div className="container down">
            <h1 className="cart--title">Cart </h1>
            <h2 className="cart--q"> {quantity !== 0 ? `${quantity} items for ${totalPrice.toFixed(2)}$` : 'No items in the cart'} </h2>
            <div className="cart--cart">
                <h1 className="lbord">Id</h1>
                <h1 className="lbord">Item</h1>
                <h1 className="end">Quantity</h1>
                <h1 className="end">Total</h1>
                <h1></h1>
                {props.shopList.productList.map(product => {
                    return <>
                        <p className="cart--id id lbord">{product.id}</p>
                        <p className="cart--name lbord">{product.name}</p>
                        <p className="cart--quantity end">{product.quantity}</p>   
                        <p className="cart--total end">{`${product.price.toFixed(2)}$`}</p>
                        <span className="center "><button className="cart--button" onClick={() => {
                            removeItem(product.id)
                        }}>Remove</button></span>
                    </>
                })}
            </div>
        </div>
    )
}

export default Cart