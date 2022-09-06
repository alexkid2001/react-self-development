import { makeAutoObservable, runInAction } from 'mobx'

export default class Cart {
  items = []
  #token = null
  inProcess = []

  get itemsDetailed() {
    return this.items.map(item => {
      const details = this.rootStore.products.getById(item.id)
      return { ...details, ...item }
    })
  }

  get total() {
    return this.itemsDetailed.reduce((sum, pr) => sum + pr.price * pr.cnt, 0)
  }

  get inCart() {
    return id => this.items.some(item => item.id == id)
  }

  inPending = (id) => {
    return this.inProcess.some(item => item == id)
  }

  async change(id, cnt){
    const item = this.items.find(pr => pr.id === id)
    const detail = this.itemsDetailed.find(pr => pr.id === id)

    if (item) {
      cnt = Math.max(1, Math.min(detail.rest, cnt))
      const res = this.api.change(id, cnt, this.#token)
      if(res) item.cnt = cnt
    }
  }

  add = (id) => {
    if (!this.inCart(id) && !this.inPending(id)) {
      this.inProcess.push(id)
      this.api.add(id, this.#token)
          .then(result => {
            runInAction(() => {
              if (result) {
                this.items.push({id, cnt: 1})
              }
              this.inProcess = this.inProcess.filter(item => item !== id)
            })
          })
    }
  }

  remove(id) {
    if(this.inCart(id)) {
      this.inProcess.push(id)
      this.api.remove(id, this.#token)
          .then(result => {
            if (result) {
              runInAction(() => {
                this.items = this.items.filter(p => p.id !== id)
              })
              this.inProcess = this.inProcess.filter(item => item != id)
            }
          })
    }
  }

  load() {
    const curToken = this.rootStore.storage.getItem('CART_TOKEN')
    this.api.load(curToken)
        .then(({cart, token, needUpdate}) => {
          runInAction(() => {
            this.items = cart
            if(needUpdate) this.rootStore.storage.setItem('CART_TOKEN', token)
            this.#token = token
          })
        })
  }

  constructor(rootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore

    this.api = this.rootStore.api.cart
  }
}