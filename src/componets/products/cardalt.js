import React from "react";
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import useStore from "../../hooks/useStore";
import { observer } from "mobx-react-lite";

Card.propTypes = {
  id: PropTypes.number.isRequired
}

function Card({ id }) {
  const [ productsStore, cartStore ] = useStore('products', 'cart')
  const product = productsStore.getById(id) // check 404

  const inCart = cartStore.inCart(id)
  const isPending = cartStore.inPending(id)
  const add = () => cartStore.add(id)
  const remove = () => cartStore.remove(id)

  return (
      <div className="card">
        <div className="card-body">
          <h2>{ product.title }</h2>
          <p>{product.price}</p>
          <Link to={`/product/${product.id}`}>Read more</Link>
          <div className="flex mb-2">
            {!!inCart ?
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

export default observer(Card)