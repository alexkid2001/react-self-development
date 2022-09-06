import React from "react";
// import { Link } from "react-router-dom";
// import MinMax from "../componets/MinMax";
// import StoreContext from './context/store'
import useStore from "../hooks/useStore";
import {observer} from "mobx-react-lite";
// import ProductCard from '../componets/products/card'
import ProductCard from '../componets/products/cardalt'


export default observer(Home)

function Home() {
  const [ productsStore, cartStore ] = useStore('products', 'cart')
  const { products } = productsStore
  const { inCart, inPending, add, remove } = cartStore

  return <div>
    <h1>Catalog</h1>
    <hr/>
    <div className="row">
      { products.map(pr => (
          <div className="col col-4 mb-3 mt-3" key={pr.id}>
            {/*<ProductCard*/}
            {/*    product={pr}*/}
            {/*    isPending={inPending(pr.id)}*/}
            {/*    inCart={inCart(pr.id)}*/}
            {/*    onAdd={() => add(pr.id)}*/}
            {/*    onRemove={() => remove(pr.id)}*/}
            {/*/>*/}
            <ProductCard id={pr.id} />
          </div>
      )) }
    </div>
    <hr/>
    <hr/>

  </div>
}