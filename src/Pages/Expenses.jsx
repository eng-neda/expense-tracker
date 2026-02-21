import { useState } from 'react'
import TransactionTable from '../components/TransactionTable'
import AddTransactionModal from '../components/TransactionModal'

function Expenses() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <TransactionTable onOpenModal={() => setIsModalOpen(true)} />

      {isModalOpen && (
        <AddTransactionModal onClose={() => setIsModalOpen(false)} />
      )}
    </>
  )
}

export default Expenses
