import './Toast.css'

function Toast({ message, close }) {
  return (
    <div className="toast" role="status">
      <span>{message}</span>
      <button type="button" onClick={close}>
        X
      </button>
    </div>
  )
}

export default Toast
