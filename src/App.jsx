import { useState } from 'react'
import TransactionTable from './components/TransactionTable'
import AddTransactionModal from './components/TransactionModal'

function App() {
  const [transactions, setTransactions] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const addTransactionHandler = (newTransaction) => {
    setTransactions((prev) => [newTransaction, ...prev])
  }

  return (
    <>
      <TransactionTable
        transactions={transactions}
        onOpenModal={() => setIsModalOpen(true)}
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
