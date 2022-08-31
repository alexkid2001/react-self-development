import React, {useState} from "react";
import { Button, Modal } from "react-bootstrap";

import useStore from "./hooks/useStore";
import {observer} from "mobx-react-lite";

export default observer(function({ onNext, onPrev }) {

  const [ orderStore ] = useStore('order')

  const [showModal, setShowModal] = useState(false)
  const [confirmed, setConfirmed] = useState(false)
  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)
  const sendForm = () => {
    setConfirmed(true)
    setShowModal(false)
  }
  const onExited = () => {
    if(confirmed) onNext()
  }

  return <div>
    <h1>Input Data</h1>
    <hr/>
    <form>
      {orderStore.form.map(i => {
        return (
          <div className="mb-3" key={i.name}>
            <label htmlFor={i.name} className="form-label">{i.label}</label>
            <input
                type="text"
                className={`form-control ${i.value.length && !i.valid ? 'border border-danger' : ''}`}
                value={i.value}
                id={i.name}
                name={i.name}
                onChange={e => orderStore.change(i.name, e.target.value.trim())}
            />
            <div className="invalid-feedback">
              {i.warning}
            </div>
          </div>)
        })
      }

    </form>
    <button type="button" className="btn btn-secondary" onClick={onPrev}>Move to prev</button>
    <button
        type="button"
        className="btn btn-primary"
        onClick={openModal}
        disabled={!orderStore.isFormValid}
    >Send</button>
    <Modal show={showModal} onExit={onExited}>
      <Modal.Header>
        <Modal.Title>Check Data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>....</p>
        <p>....</p>
        <p>....</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>Close</Button>
        <Button variant="primary" onClick={sendForm}>Save change</Button>
      </Modal.Footer>
    </Modal>
  </div>
})