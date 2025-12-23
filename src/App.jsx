import { useState } from 'react'
import TransactionTable from './components/TransactionTable'
import AddTransactionModal from './components/TransactionModal'
import { transAction } from './data/transaction'

function App() {
  const [transactions, setTransactions] = useState(transAction)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>افزودن تراکنش</button>

      <TransactionTable transactions={transactions} />

      {isModalOpen && (
        <AddTransactionModal
          onClose={() => setIsModalOpen(false)}
          onAddTransaction={(newTransaction) =>
            setTransactions((prev) => [newTransaction, ...prev])
          }
        />
      )}
    </div>
  )
}

export default App
