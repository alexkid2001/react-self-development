const BASE_URL = 'http://faceprog.ru/reactcourseapi/products/'
const urlAllProducts = `${BASE_URL}all.php`

export function all() {
  return fetch(urlAllProducts)
      .then(resp => resp.json())
}