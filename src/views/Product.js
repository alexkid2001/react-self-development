import React from "react";
import { useParams } from "react-router-dom";
import MinMax from "../componets/MinMax";
// import StoreContext from './context/store'
import useStore from "../hooks/useStore";
import {observer} from "mobx-react-lite";
import E404 from "../views/E404"
import {Button} from "react-bootstrap";


export default observer(Product)

function Product() {
  const [ productsStore, cartStore ] = useStore('products', 'cart')
  const { id } = useParams()
  const product = productsStore.getById(id)

  if(!/^[1-9]+\d*$/.test(id) || product === 'undefined') {
    return <E404 />
  }

  return <div>
    <h1>{product.title}</h1>
    <hr/>
    <div>
      <strong>Price: { product.price }</strong>
    </div>
    <hr/>
    {cartStore.inCart(id) ?
        <Button
            className="btn btn-danger"
            onClick={() => cartStore.remove(id)}
        >Remove from cart</Button> :
        <Button
            className="btn btn-success"
            onClick={() => cartStore.add(id)}
        >Add to cart</Button>
    }
    <hr/>
  </div>
}