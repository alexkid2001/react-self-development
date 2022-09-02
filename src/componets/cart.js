import React from "react";
import {observer} from "mobx-react-lite";
import useStore from "../hooks/useStore";

export default observer(function({ orderData }) {
  let [ cartStore ] = useStore('cart' )
  console.log(cartStore.itemsDetailed)
  return <>
    <div><strong>In cart: { cartStore.items.length }</strong></div>
    <div><strong>Total: { cartStore.total }</strong></div>
  </>
})