import './TransactionTable.css'
import { renderTransactions } from '../helpers/transactionHelpers.jsx'
import PlusIcon from '../../fonts/plus.svg'

function TransactionTable({ transactions }) {
  return (
    <div className="table-container">
      <div className="title">
        <h2 className="table-title">تراکنش‌ها</h2>
        <button className="btn-1">
          <img src={PlusIcon} alt="افزودن" className="btn-icon" />
          افزودن تراکنش‌ها
        </button>
      </div>

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
