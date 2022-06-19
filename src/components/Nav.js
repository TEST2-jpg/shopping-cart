import React from "react"
import { Link } from 'react-router-dom'


const Nav = (props) => {
    const quantity = props.productList.reduce((a, b) => {
        return a + b.quantity;
    }, 0);
    return (
        <nav>
            <ul>
                <li> <Link to="/">
                    Home
                </Link></li>
                <li><Link to="/shop">
                    Shop
                </Link></li>

                <li className="cart" style={{float: "right"}}> <Link to="/cart">{quantity !== 0 ? `(${quantity})` : null} Cart</Link></li>
            </ul>
        </nav>
    )
}

export default Nav