import './TransactionTable.css'
import { renderTransactions } from '../helpers/transactionHelpers.jsx'
import PlusIcon from '../../photos/plus.svg'
import DangerCircle from '../../photos/Danger Circle.png'

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
                  <img src={DangerCircle} alt="" />
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
