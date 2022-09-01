import React from "react";
import { useParams } from "react-router-dom";
import MinMax from "../MinMax";
// import StoreContext from './context/store'
import useStore from "../hooks/useStore";
import {observer} from "mobx-react-lite";

export default observer(Product)

function Product() {
  const [ productsStore ] = useStore('products')
  const params = useParams()
  const { products } = productsStore
  console.log(params)
  return <div>
    <h1>Product {params.id}</h1>
    <hr/>
    <hr/>
    <hr/>
  </div>
}