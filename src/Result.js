import React from "react";
import {observer} from "mobx-react-lite";
import cartStore from './store/cart'
import useStore from "./hooks/useStore";

export default observer(function({ orderData }) {
  // let total = products.reduce((sum, pr) => sum + pr.price * pr.cnt, 0);
  let [ cart ] = useStore('cart')
  return <div>
    <h1>{orderData.name}, your order is dane!</h1>
    <hr/>
    <strong>Total: {cart.total}</strong>
  </div>
})