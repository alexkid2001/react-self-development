import { makeAutoObservable, runInAction } from 'mobx'

const BASE_URL = 'http://faceprog.ru/reactcourseapi'
const urlCartLoad = `${BASE_URL}/cart/load.php`
const urlCartAdd = `${BASE_URL}/cart/add.php`
const urlCartRemove = `${BASE_URL}/cart/remove.php`


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

  inPending(id) {
    return this.inProcess.some(item => item == id)
  }

  async change(id, cnt){
    const item = this.items.find(pr => pr.id === id)
    const detail = this.itemsDetailed.find(pr => pr.id === id)

    if (item) {
      cnt = Math.max(1, Math.min(detail.rest, cnt))
      let response = await fetch(`${BASE_URL}/cart/change.php?token=${this.#token}&id=${id}&cnt=${cnt}`)
      let res = await response.json()
      if(res) item.cnt = cnt
    }
  }

  add = (id) => {
    if (!this.inCart(id) && !this.inPending(id)) {
      this.inProcess.push(id)
      fetch(`${urlCartAdd}?token=${this.#token}&id=${id}`)
          .then(res => res.json())
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
      fetch(`${urlCartRemove}?token=${this.#token}&id=${id}`)
          .then(res => res.json())
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
    fetch(`${urlCartLoad}?token=${curToken}`)
        .then(resp => resp.json())
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
  }
}