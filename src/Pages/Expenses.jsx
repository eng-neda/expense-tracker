import { useEffect, useState } from 'react'
import TransactionTable from '../components/TransactionTable'
import AddTransactionModal from '../components/TransactionModal'

function Expenses() {
  const [transactions, setTransactions] = useState(() => {
    const storedData = localStorage.getItem('expenseTrackerData')
    return storedData ? JSON.parse(storedData) : []
  })

  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem('expenseTrackerData', JSON.stringify(transactions))
  }, [transactions])

  const addTransactionHandler = (newTransaction) => {
    setTransactions((prev) => [newTransaction, ...prev])
  }

  const deleteTransactionHandler = (id) => {
    setTransactions((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <>
      <TransactionTable
        transactions={transactions}
        onOpenModal={() => setIsModalOpen(true)}
        onDeleteTransaction={deleteTransactionHandler}
      />

      {isModalOpen && (
        <AddTransactionModal
          onClose={() => setIsModalOpen(false)}
          onAddTransaction={addTransactionHandler}
        />
      )}
    </>
  )
}

export default Expenses
