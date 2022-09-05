import { makeAutoObservable, runInAction } from 'mobx'
import product from "../views/Product";



export default class Products {
  products = []

  constructor(rootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
    this.api = this.rootStore.api.products
  }

  load() {
    this.api.all()
        .then(pr => {
          runInAction(() => this.products = pr)
        })
  }

  getById(id) {
    return this.products.find(pr => pr.id == id)
  }
}

// constructor() {
//   this.products = observable(this.products)
//   this.total = computed(this.total)
//   this.change = action(this.change)
//   this.remove = action(this.remove)
//
// }