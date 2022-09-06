import React from "react";
import MinMax from "./MinMax";
import PropTypes from "prop-types";

const CartRow = ({ num, product, onChange, onRemove }) => {
  const change = cnt => onChange(product.id, cnt)
  const remove = () => onRemove(product.id)
  const setMax = () => onChange(product.id, product.rest)

  return <tr key={product.id}>
    <td>{ num }</td>
    <td>{ product.title }</td>
    <td>{ product.price }</td>
    <td>
      <MinMax min={1} max={product.rest} current={product.cnt} onChange={change} />
    </td>
    <td>{ product.price * product.cnt }</td>
    <td>
      <button type="button" onClick={remove}>X</button>
      <button type="button" onClick={setMax}>MAX</button>
    </td>
  </tr>
}


CartRow.propTypes = {
  num: PropTypes.number.isRequired,
  product: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
}

export default CartRow