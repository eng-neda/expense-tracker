import AddTransactionForm from './Transactionform.jsx'

function AddTransactionModal({ onClose, onAddTransaction }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <AddTransactionForm
          onClose={onClose}
          onAddTransaction={onAddTransaction}
        />
      </div>
    </div>
  )
}

export default AddTransactionModal
