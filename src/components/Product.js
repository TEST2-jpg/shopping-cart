import React from "react";
import { useParams } from "react-router-dom";
import products from "../product";
import uniqid from "uniqid"

const Product = (props) => {
    const [quantity, setQuantity] = React.useState(0)
    function handleC(e) {
        setQuantity(e.target.value)
    }

    function buy(name, price, quantity) {
        quantity > 0 && props.setshopList(list => ({
            ...list,
            product: {
                quantity,
                price,
                name,
                id: uniqid()
            },
        }))
        quantity > 0 && props.setshopList(list => ({
            productList: list.productList.concat(list.product)

        }))
    }
    React.useEffect(() => {
        const value = Math.max(Math.min(21, Number(quantity)));
        setQuantity(value)
    }, [quantity])

    const { name } = useParams()
    const details = products.data.find(item => item.link === name)
    return (
        <div className="product">
            <div className="product--content">
                <img src={details.url}></img>
                <div className="product--details">
                    <div className="product--name">{details.name}</div>
                    <div>
                        <div className="product--price">{`${details.price}$`}</div>
                        <div className="product--desc">{details.description}</div>
                    </div>
                    {details.spec && <ul className="spec">
                        {details.spec.map((x, key) => <li key={key}>{x}</li>)}
                    </ul>}
                    <div className="container">
                        <span><img className="plus" src="https://iconoir.com/source/plus.svg" onClick={() => setQuantity((pre) => parseInt(pre) + 1)} /></span>
                        <input type="number" onKeyDown={(e) => e.key === ('.') || e.key === ('e') ? e.preventDefault() : null} onChange={handleC} value={quantity} />
                        <span><img className="plus" src="https://iconoir.com/source/minus.svg" onClick={() => setQuantity((pre) => parseInt(pre) - 1)} /></span>
                    </div>
                    <button className="product--add" onClick={() => {
                        buy(details.name, details.price * quantity, quantity)
                    }}>ADD TO CART</button>

                </div>
            </div>
        </div>
    )
}

export default Product