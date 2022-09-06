import React from "react";
import { Link } from "react-router-dom";
// import StoreContext from './context/store'
import useStore from "../hooks/useStore";
import {observer} from "mobx-react-lite";
import CartRow from "../componets/cart-row";

export default observer(Cart)

function Cart() {
  const [ cartStore ] = useStore('cart')
  // const { cart } = useContext(StoreContext);
  const {itemsDetailed, total, remove, change} = cartStore
  return <div>
    <h1>Cart</h1>
    <hr/>
    <table>
      <tbody>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Price</th>
        <th>Cnt</th>
        <th>Total</th>
        <th>Action</th>
      </tr>
      { itemsDetailed.map((pr, i) => (
          <CartRow
            key={pr.id}
            num={i + 1}
            product={pr}
            onChange={change}
            onRemove={remove}
          />
      )) }
      </tbody>
    </table>
    <hr/>
    <strong>Total: { total }</strong>
    <hr/>
    <Link className="btn btn-primary" to="/order">Move to order</Link>
  </div>
}