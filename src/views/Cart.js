import React from "react";
import { Link } from "react-router-dom";
import MinMax from "../MinMax";
// import StoreContext from './context/store'
import useStore from "../hooks/useStore";
import {observer} from "mobx-react-lite";

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
          <tr key={pr.id}>
            <td>{ i + 1 }</td>
            <td>{ pr.title }</td>
            <td>{ pr.price }</td>
            <td>
              <MinMax min={1} max={pr.rest} current={pr.cnt} onChange={cnt => cartStore.change(pr.id, cnt)} />
            </td>
            <td>{ pr.price * pr.cnt }</td>
            <td>
              <button type="button" onClick={() => cartStore.remove(pr.id)}>X</button>
              <button type="button" onClick={() => cartStore.change(pr.id, pr.rest)}>MAX</button>
            </td>
          </tr>
      )) }
      </tbody>
    </table>
    <hr/>
    <strong>Total: { total }</strong>
    <hr/>
    <Link className="btn btn-primary" to="/order">Move to order</Link>
  </div>
}