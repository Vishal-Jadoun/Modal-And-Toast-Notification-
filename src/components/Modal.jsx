import './Modal.css'

function Modal({ close, confirm }) {
  return (
    <div className="modal-box">
      <button className="close-button" type="button" onClick={close}>
        X
      </button>
      <h2>Ready to continue?</h2>
      <p>Confirm this action to save your changes.</p>
      <div className="modal-buttons">
        <button type="button" onClick={close}>
          Cancel
        </button>
        <button type="button" onClick={confirm}>
          Confirm
        </button>
      </div>
    </div>
  )
}

export default Modal
