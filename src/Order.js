import React from "react";

export default function({ orderData ,onNext, onPrev, onChange }) {
  return <div>
    <h1>Input Data</h1>
    <hr/>
    <form>
      {orderData.map(i => {
        return (
          <div className="mb-3" key={i.name}>
            <label htmlFor={i.name} className="form-label">{i.label}</label>
            <input
                type="text"
                className="form-control"
                value={i.value}
                id={i.name}
                name={i.name}
                onChange={e => onChange(i.name, e.target.value)}
            />
            <div className="invalid-feedback">
              {i.warning}
            </div>
          </div>)
        })
      }

    </form>
    <button type="button" className="btn btn-primary" onClick={onNext}>Move to result</button>
    <button type="button" className="btn btn-secondary" onClick={onPrev}>Move to prev</button>
  </div>
}