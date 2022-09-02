import {Route, Routes} from "react-router-dom";
import React from "react";

import Home from "./views/Home";
import Cart from './views/Cart'
import Order from './views/Order'
import Result from './views/Result'
import Product from "./views/Product";
import E404 from './views/E404'

export default function () {
  return <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='/product/:id' element={<Product />} />
    <Route path='/order' element={<Order />} />
    <Route path='/result' element={<Result />} />
    <Route path='*' element={<E404 />} />
  </Routes>
}