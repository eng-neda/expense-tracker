import { useState } from 'react'

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
      income: type === 'income' ? Number(amount) : null,
      outcome: type === 'outcome' ? Number(amount) : null,
    }

    onAddTransaction(newTransaction)
    onClose()
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="شرح"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="مبلغ"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">درآمد</option>
        <option value="outcome">هزینه</option>
      </select>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button type="submit">ثبت</button>
      <button type="button" onClick={onClose}>
        انصراف
      </button>
    </form>
  )
}

export default AddTransactionForm
