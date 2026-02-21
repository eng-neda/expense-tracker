export function formatAmount(amount, type) {
  const num = Number(amount)
  if (!num || num <= 0) return ''

  const formatted = num.toLocaleString('fa-IR')
  return type === 'income' ? `${formatted}+` : `${formatted}-`
}

export function formatDateFa(dateStr) {
  return dateStr.replace(/\d/g, (d) =>
    String.fromCharCode(d.charCodeAt(0) + 1728)
  )
}
