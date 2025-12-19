import TransactionTable from './components/TransactionTable'
import { transAction } from './data/transaction'
function App() {
  return (
    <div>
      <TransactionTable transactions={transAction} />
    </div>
  )
}

export default App
