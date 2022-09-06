import React from "react";
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

Card.propTypes = {
  product: PropTypes.object.isRequired,
  inCart: PropTypes.bool.isRequired,
  isPending: PropTypes.bool.isRequired,
  onRemove: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired
}

function Card({ product, inCart, isPending, onRemove, onAdd }) {
  const add = () => onAdd(product.id)
  const remove = () => onRemove(product.id)

  return (
    <div className="card">
      <div className="card-body">
        <h2>{ product.title }</h2>
        <p>{product.price}</p>
        <Link to={`/product/${product.id}`}>Read more</Link>
        <div className="flex mb-2">
          {inCart ?
              <Button
                  className="btn btn-danger"
                  onClick={remove}
                  disabled={isPending}
              >Remove from cart</Button> :
              <Button
                  className="btn btn-success"
                  onClick={add}
                  disabled={isPending}
              >Add to cart</Button>
          }
        </div>
      </div>
    </div>
  )

}

export default Card