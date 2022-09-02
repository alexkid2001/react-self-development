import { makeAutoObservable, runInAction } from 'mobx'
import product from "../views/Product";

const BASE_URL = 'http://faceprog.ru/reactcourseapi'
const urlAllProducts = `${BASE_URL}/products/all.php`

export default class Products {
  products = []

  constructor(rootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
  }

  load() {
    fetch(urlAllProducts)
        .then(resp => resp.json())
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