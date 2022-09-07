import React from "react";
import MinMax from "./MinMax";
import PropTypes from "prop-types";

const CartRow = ({ num, id, title, price, rest, cnt, onChange, onRemove }) => {
  const change = cnt => onChange(id, cnt)
  const remove = () => onRemove(id)
  const setMax = () => onChange(id, rest)
  console.log('render')

  return <tr key={id}>
    <td>{ num }</td>
    <td>{ title }</td>
    <td>{ price }</td>
    <td>
      <MinMax min={1} max={rest} current={cnt} onChange={change} />
    </td>
    <td>{ price * cnt }</td>
    <td>
      <button type="button" onClick={remove}>X</button>
      <button type="button" onClick={setMax}>MAX</button>
    </td>
  </tr>
}


CartRow.propTypes = {
  num: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  cnt: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
}

export default React.memo(CartRow)