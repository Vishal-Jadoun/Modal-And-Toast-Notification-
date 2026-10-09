import { useState } from 'react'
import Modal from './components/Modal'
import Toast from './components/Toast'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [message, setMessage] = useState('')

  function showToast(text) {
    setMessage(text)
    setTimeout(() => setMessage(''), 5000)
  }

  function openModal() {
    setShowModal(true)
  }

  function closeModal() {
    setShowModal(false)
  }

  function confirmModal() {
    closeModal()
    showToast('Changes saved.')
  }

  return (
    <main className="page-shell">
      <h1>Modal & Toast Notification </h1>
      <button type="button" onClick={openModal}>
        Open modal
      </button>
      <button type="button" onClick={() => showToast('This is a toast notification.')}>
        Show toast
      </button>

      {showModal && (
        <div className="modal-background">
          <Modal close={closeModal} confirm={confirmModal} />
        </div>
      )}

      {message && <Toast message={message} close={() => setMessage('')} />}
    </main>
  )
}

export default App
