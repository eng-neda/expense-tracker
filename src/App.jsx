import { useState } from 'react'
import './App.css'
import TransactionTable from './components/TransactionTable'
import AddTransactionModal from './components/TransactionModal'

function App() {
  const [transactions, setTransactions] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

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

export default App
