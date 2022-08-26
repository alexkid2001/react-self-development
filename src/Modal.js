import React, {useRef} from 'react'
import useClickOutSide from "./hooks/useClickOutSide";

export default function({ title, showed, onClose }) {

  const classes = ['alert', 'alert-success']
  if (!showed) classes.push('d-none')

  const root = useRef()
  useClickOutSide(root, function() {
    if (showed) {
      onClose()
    }
  })

  return <div className={classes.join(' ')} ref={root}>
    <h2>{title}</h2>
    <hr/>
    <button className="btn btn-success" onClick={onClose}>Ok</button>
  </div>
}