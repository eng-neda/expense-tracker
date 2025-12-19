import './TransactionTable.css'
import { renderTransactions } from '../helpers/transactionHelpers.jsx'

function TransactionTable({ transactions }) {
  return (
    <div className="table-container">
      <h2 className="table-title">تراکنش‌ها</h2>

      <table className="transaction-table">
        <thead>
          <tr>
            <th>تاریخ</th>
            <th>درآمد (تومان) </th>
            <th>هزینه (تومان)</th>
            <th>شرح</th>
          </tr>
        </thead>
        <tbody>{renderTransactions(transactions)}</tbody>
      </table>
    </div>
  )
}

export default TransactionTable
