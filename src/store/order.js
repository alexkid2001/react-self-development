import { makeAutoObservable } from "mobx";

export default class Order{
  form = [
     {
       name: 'name',
       label: 'Name',
       value: '',
       pattern: /^.{2,}$/g,
       errorMessage: 'Name is not correct',
       valid: false
     },
     {
       name: 'email',
       label: 'Email',
       value: '',
       pattern: /^.+@.+$/,
       errorMessage: 'Email is not valid',
       valid: false
     },
     {
       name: 'phone',
       label: 'Phone',
       value: '',
       pattern: /^\d{5,10}.$/,
       errorMessage: 'City is not valid',
       valid: false
     },
   ]

  get isFormValid() {
    return this.form.every(f => f.valid)
  }

  get orderData() {
    const res = {}
    this.form.forEach(field => res[field.name] = field.value)
    return res
  }

  change = (name, value) => {
    const field = this.form.find(f => f.name === name)

    if (field) {
      field.value = value.trim()
      field.valid = field.pattern.test(field.value)
    }
  }

  send() {
    // fetch

  }


  constructor(rootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
  }
}