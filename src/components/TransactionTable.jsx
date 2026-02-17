import './TransactionTable.css'
import { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext'
import PlusIcon from '../../photos/plus.svg'
import DangerCircle from '../../photos/Danger Circle.png'
import { formatAmount } from '../helpers/transactionHelpers.jsx'

function TransactionTable({ onOpenModal }) {
  const { transactions, dispatch } = useContext(TransactionContext)

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
            transactions.map((item) => {
              const faDate = item.date.replace(/\d/g, (d) =>
                String.fromCharCode(d.charCodeAt(0) + 1728)
              )

              return (
                <tr key={item.id} className="transaction-row">
                  <td className="date-col">{faDate}</td>
                  <td className="amount positive">
                    {item.type === 'income'
                      ? formatAmount(item.amount, 'income')
                      : ''}
                  </td>
                  <td className="amount negative">
                    {item.type === 'outcome'
                      ? formatAmount(item.amount, 'outcome')
                      : ''}
                  </td>
                  <td className="status">{item.title}</td>
                  <td className="action-col">
                    <span
                      className="icon-trash"
                      title="حذف تراکنش"
                      onClick={() => {
                        const isConfirmed = window.confirm(
                          'آیا مطمئن هستید که می‌خواهید این تراکنش حذف شود؟'
                        )
                        if (isConfirmed) {
                          dispatch({
                            type: 'DELETE_TRANSACTION',
                            payload: item.id,
                          })
                        }
                      }}
                    ></span>
                  </td>
                </tr>
              )
            })
          )}
        </tbody>
      </table>
    </div>
  )
}

export default TransactionTable
