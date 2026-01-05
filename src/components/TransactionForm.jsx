import { useState } from 'react'
import './TransactionModal.css'

function AddTransactionForm({ onClose, onAddTransaction }) {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [type, setType] = useState('income')
  const [date, setDate] = useState('')
  const [errors, setErrors] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()

    //validation form//
    const newErrors = {}
    if (!date) newErrors.date = 'تاریخ الزامی است'
    if (!amount) newErrors.amount = 'مبلغ الزامی است'
    else if (Number(amount) <= 0)
      newErrors.amount = 'مبلغ باید بیشتر از صفر باشد'
    if (!title.trim()) newErrors.title = 'شرح تراکنش الزامی است'

    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) return

    const newTransaction = {
      id: Date.now(),
      title,
      date,
      income: type === 'income' ? Number(amount) : null,
      outcome: type === 'outcome' ? Number(amount) : null,
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
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        {errors.date && <span className="error-text">{errors.date}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="amount">مبلغ(تومان)</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        {errors.amount && <span className="error-text">{errors.amount}</span>}
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
        />
        {errors.title && <span className="error-text">{errors.title}</span>}
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
