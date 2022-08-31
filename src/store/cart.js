import { makeAutoObservable } from 'mobx'

export default class Cart {
  products = productsStub()

  get total() {
    return this.products.reduce((sum, pr) => sum + pr.price * pr.cnt, 0)
  }

  change(id, cnt){
    const product = this.products.find(pr => pr.id === id)
    if (product) product.cnt = Math.max(1, Math.min(product.rest, cnt))
  }

  remove(id) {
    this.products = this.products.filter(p => p.id !== id)
  }

  constructor(rootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
  }
}

function productsStub(){
  return [
    {
      id: 100,
      title: 'Ipnone 200',
      price: 12000,
      rest: 10,
      cnt: 1
    },
    {
      id: 101,
      title: 'Samsung AAZ8',
      price: 22000,
      rest: 5,
      cnt: 1
    },
    {
      id: 103,
      title: 'Nokia 3310',
      price: 5000,
      rest: 2,
      cnt: 1
    },
    {
      id: 105,
      title: 'Huawei ZZ',
      price: 15000,
      rest: 8,
      cnt: 1
    }
  ];
}

// constructor() {
//   this.products = observable(this.products)
//   this.total = computed(this.total)
//   this.change = action(this.change)
//   this.remove = action(this.remove)
//
// }