function formatAmount(amount, type) {
  if (!amount || amount <= 0) return ''
  const formatted = amount.toLocaleString('fa-IR')
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
          {formatAmount(item.income, 'income')}
        </td>

        <td className="amount negative">
          {formatAmount(item.outcome, 'outcome')}
        </td>

        <td className="status">{item.title}</td>

        <td className="action-col">
          <span
            className="icon-trash"
            onClick={() => onDeleteTransaction(item.id)}
            title="حذف تراکنش"
          ></span>
        </td>
      </tr>
    )
  })
}
