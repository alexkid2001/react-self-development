import Cart from "./cart";
import Order from "./order";

export default class RootStore{
  constructor() {
    this.cart = new Cart(this)
    this.order = new Order(this)
  }
}