import React from "react";
import { Link } from "react-router-dom";
import MinMax from "../MinMax";
// import StoreContext from './context/store'
import useStore from "../hooks/useStore";
import {observer} from "mobx-react-lite";
import {Button} from "react-bootstrap";

export default observer(Home)

function Home() {
  const [ productsStore, cartStore ] = useStore('products', 'cart')
  const { products } = productsStore

  return <div>
    <h1>Catalog</h1>
    <hr/>
    <div className="row">
      { products.map(pr => (
          <div className="col col-4 mb-3 mt-3" key={pr.id}>
            <div className="card">
              <div className="card-body">
                <h2>{ pr.title }</h2>
                <p>{pr.price}</p>
                <Link to={`/product/${pr.id}`}>Read more</Link>
                <div className="flex mb-2">
                  {cartStore.inCart(pr.id) ?
                    <Button
                        className="btn btn-danger"
                        onClick={() => cartStore.remove(pr.id)}
                    >Remove from cart</Button> :
                    <Button
                        className="btn btn-success"
                        onClick={() => cartStore.add(pr.id)}
                    >Add to cart</Button>
                  }
                </div>
              </div>
            </div>
          </div>
      )) }
    </div>
    <hr/>
    <hr/>

  </div>
}