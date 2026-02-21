import AddTransactionForm from './TransactionForm.jsx'
import './TransactionModal.css'

function AddTransactionModal({ onClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <AddTransactionForm onClose={onClose} />
      </div>
    </div>
  )
}

export default AddTransactionModal
