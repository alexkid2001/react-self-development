import { makeAutoObservable } from 'mobx'

export default class Cart {
  items = [
    { id: 100, cnt: 1 },
    { id: 101, cnt: 5 }
  ]

  get total() {
    // return this.products.reduce((sum, pr) => sum + pr.price * pr.cnt, 0)
    return 0
  }

  get inCart() {
    return id => this.items.some(item => item.id == id)
  }


  change(id, cnt){
    // const product = this.products.find(pr => pr.id === id)
    // if (product) product.cnt = Math.max(1, Math.min(product.rest, cnt))
  }

  remove(id) {
    // this.products = this.products.filter(p => p.id !== id)
  }

  constructor(rootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore

    setTimeout(() => this.items.pop(), 5000)
  }
}