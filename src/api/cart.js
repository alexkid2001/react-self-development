const BASE_URL = 'http://faceprog.ru/reactcourseapi'
const urlCartLoad = `${BASE_URL}/cart/load.php`
const urlCartAdd = `${BASE_URL}/cart/add.php`
const urlCartRemove = `${BASE_URL}/cart/remove.php`

export async function change(id, cnt, token) {
  let response = await fetch(`${BASE_URL}/cart/change.php?token=${token}&id=${id}&cnt=${cnt}`)
  return  await response.json()
}

export function load(token) {
  return fetch(`${urlCartLoad}?token=${token}`)
      .then(resp => resp.json())
}

export function add(id, token) {
  return fetch(`${urlCartAdd}?token=${token}&id=${id}`)
      .then(res => res.json())
}

export function remove(id, token) {
  return fetch(`${urlCartRemove}?token=${token}&id=${id}`)
      .then(res => res.json())
}