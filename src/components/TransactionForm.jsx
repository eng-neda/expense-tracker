import { useState } from 'react'
import './TransactionModal.css'

function AddTransactionForm({ onClose, onAddTransaction }) {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [type, setType] = useState('income')
  const [date, setDate] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    const newTransaction = {
      id: Date.now(),
      title,
      date,
      type: type,
      amount,
    }

    onAddTransaction(newTransaction)
    onClose()
  }

  return (
    <form className="modal-form" onSubmit={submitHandler}>
      <div className="modal-header">
        <h3 className="modal-title">افزودن تراکنش</h3>
        <button type="button" className="modal-close" onClick={onClose}>
          ×
        </button>
      </div>

      <div className="form-group">
        <label htmlFor="date">تاریخ</label>
        <div className="date-input">
          <input
            type="date"
            id="date"
            onClick={(e) => e.currentTarget.showPicker()}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="amount">مبلغ(تومان)</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          min={1}
        />
      </div>

      <div className="form-group">
        <label>نوع تراکنش</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="type"
              value="income"
              checked={type === 'income'}
              onChange={(e) => setType(e.target.value)}
              required
            />
            درآمد
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="outcome"
              checked={type === 'outcome'}
              onChange={(e) => setType(e.target.value)}
              required
            />
            هزینه
          </label>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="title">شرح</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="modal-actions">
        <button type="button" className="btn-cancel" onClick={onClose}>
          انصراف
        </button>
        <button type="submit" className="btn-submit">
          ثبت
        </button>
      </div>
    </form>
  )
}

export default AddTransactionForm
