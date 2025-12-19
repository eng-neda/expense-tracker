export function renderTransactions(transactions) {
  return transactions.map((item) => {
    const faDate = item.date.replace(/\d/g, (d) =>
      String.fromCharCode(d.charCodeAt(0) + 1728)
    )

    return (
      <tr key={item.id} className="transaction-row">
        <td className="date-col">{faDate}</td>
        <td className="amount positive">
          {item.income > 0 ? `${item.income.toLocaleString('fa-IR')}+` : ''}
        </td>
        <td className="amount negative">
          {item.outcome > 0 ? `${item.outcome.toLocaleString('fa-IR')}-` : ''}
        </td>
        <td className="status">{item.description}</td>
      </tr>
    )
  })
}
