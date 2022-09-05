import Products from "./products";
import Order from "./order";
import Cart from './cart'
import * as cart from '../api/cart'
import * as products from "../api/propducts";

export default class RootStore{
  constructor() {
    this.storage = window.localStorage
    this.api = { cart, products }

    this.products = new Products(this)
    this.order = new Order(this)
    this.cart = new Cart(this)
  }
}