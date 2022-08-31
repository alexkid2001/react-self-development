import { useContext } from "react";
import StoreContext from './../context/store'

export default function(...list) {
  const stores = useContext(StoreContext)
  return list.map(name => stores[name])
}