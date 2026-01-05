import './TransactionTable.css'
import { renderTransactions } from '../helpers/transactionHelpers.jsx'
import PlusIcon from '../../fonts/plus.svg'

function TransactionTable({ transactions, onOpenModal, onDeleteTransaction }) {
  return (
    <div className="table-container">
      <div className="title">
        <h2 className="table-title">تراکنش‌ها</h2>
        <button className="btn-blue" onClick={onOpenModal}>
          <img src={PlusIcon} alt="افزودن" className="btn-icon" />
          افزودن تراکنش‌ها
        </button>
      </div>

      <table className="transaction-table">
        {transactions.length > 0 && (
          <thead>
            <tr>
              <th>تاریخ</th>
              <th>درآمد (تومان)</th>
              <th>هزینه (تومان)</th>
              <th>شرح</th>
              <th></th>
            </tr>
          </thead>
        )}

        <tbody>
          {transactions.length === 0 ? (
            <tr className="empty-state">
              <td colSpan="5">
                <div className="empty-state-content">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    height={20}
                    width={20}
                    stroke="#6B7580"
                    strokeWidth={1.5}
                  >
                    <path d="M2 12a10 10 0 1 0 20 0 10 10 0 1 0 -20 0" />
                    <path d="M12 7v6" strokeLinecap="round" />
                    <circle cx="12" cy="16" r=".5" fill="#6B7580" />
                  </svg>
                  <div>شما هنوز تراکنشی وارد نکرده‌اید</div>
                </div>
              </td>
            </tr>
          ) : (
            renderTransactions(transactions, onDeleteTransaction)
          )}
        </tbody>
      </table>
    </div>
  )
}

export default TransactionTable
