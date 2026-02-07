function formatAmount(amount, type) {
  const num = Number(amount)
  if (!num || num <= 0) return ''

  const formatted = num.toLocaleString('fa-IR')
  return type === 'income' ? `${formatted}+` : `${formatted}-`
}

export function renderTransactions(transactions, onDeleteTransaction) {
  return transactions.map((item) => {
    const faDate = item.date.replace(/\d/g, (d) =>
      String.fromCharCode(d.charCodeAt(0) + 1728)
    )

    return (
      <tr key={item.id} className="transaction-row">
        <td className="date-col">{faDate}</td>

        <td className="amount positive">
          {item.type === 'income' ? formatAmount(item.amount, 'income') : ''}
        </td>

        <td className="amount negative">
          {item.type === 'outcome' ? formatAmount(item.amount, 'outcome') : ''}
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
                onDeleteTransaction(item.id)
              }
            }}
          ></span>
        </td>
      </tr>
    )
  })
}
