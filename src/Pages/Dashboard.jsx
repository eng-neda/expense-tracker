import { useContext, useMemo } from 'react'
import { TransactionContext } from '../context/TransactionContext'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import './Dashboard.css'

function Dashboard() {
  const { transactions } = useContext(TransactionContext)

  const totalIncome = useMemo(() => {
    return transactions
      .filter((t) => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0)
  }, [transactions])

  const totalExpense = useMemo(() => {
    return transactions
      .filter((t) => t.type === 'outcome')
      .reduce((sum, t) => sum + t.amount, 0)
  }, [transactions])

  const balance = totalIncome - totalExpense

  const chartData = [
    { name: 'درآمد', value: totalIncome },
    { name: 'هزینه', value: totalExpense },
  ]

  if (transactions.length === 0) {
    return (
      <div className="dashboard-wrapper">
        <div className="dashboard-card">هنوز تراکنشی ثبت نشده است</div>
      </div>
    )
  }

  return (
    <div className="dashboard-container">
      <div className="summary-cards">
        <div className="card income">
          <h4>مجموع درآمد</h4>
          <p>{totalIncome.toLocaleString('fa-IR')} تومان</p>
        </div>

        <div className="card expense">
          <h4>مجموع هزینه</h4>
          <p>{totalExpense.toLocaleString('fa-IR')} تومان</p>
        </div>

        <div
          className={`card balance ${balance >= 0 ? 'positive' : 'negative'}`}
        >
          <h4>تراز نهایی</h4>
          <p>{balance.toLocaleString('fa-IR')} تومان</p>
        </div>
      </div>

      <div className="chart-box">
        <h3>نسبت درآمد به هزینه</h3>

        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie data={chartData} dataKey="value" outerRadius={100}>
              <Cell fill="#4CAF50" />
              <Cell fill="#F44336" />
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Dashboard
