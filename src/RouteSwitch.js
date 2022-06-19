import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Nav from "./components/Nav"
import Product from "./components/Product";
import Cart from "./components/Cart";
import React from "react";

const RouteSwitch = () => {
    const [shopList, setshopList] = React.useState({
        product: {

        },
        productList:[]
    })
    return (
        <BrowserRouter>
            <Nav productList={shopList.productList}/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" exact element={<Shop />} />
                <Route path="/cart" exact element={<Cart shopList={shopList} setshopList={setshopList} />} />
                <Route path="/shop/:name" element={<Product shopList={shopList} setshopList={setshopList}/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;