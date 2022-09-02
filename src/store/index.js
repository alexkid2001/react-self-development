import Products from "./products";
import Order from "./order";
import Cart from './cart'

export default class RootStore{
  constructor() {
    this.storage = window.localStorage

    this.products = new Products(this)
    this.order = new Order(this)
    this.cart = new Cart(this)
  }
}