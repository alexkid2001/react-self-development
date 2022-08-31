import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import {Button, ModalBody, ModalFooter, ModalHeader} from "react-bootstrap";

export default function({ orderData ,onNext, onPrev, onChange }) {
  const isValid = orderData.every(f => f.valid)

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
      {orderData.map(i => {
        return (
          <div className="mb-3" key={i.name}>
            <label htmlFor={i.name} className="form-label">{i.label}</label>
            <input
                type="text"
                className={`form-control ${i.value.length && !i.valid ? 'border border-danger' : ''}`}
                value={i.value}
                id={i.name}
                name={i.name}
                onChange={e => onChange(i.name, e.target.value.trim())}
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
        disabled={!isValid}
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
}