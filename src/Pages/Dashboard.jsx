import { useContext, useMemo } from 'react'
import { TransactionContext } from '../context/TransactionContext'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts'
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

  const pieData = [
    { name: 'درآمد', value: totalIncome },
    { name: 'هزینه', value: totalExpense },
  ]

  const barData = [
    { name: 'درآمد', amount: totalIncome },
    { name: 'هزینه', amount: totalExpense },
  ]

  if (transactions.length === 0) {
    return (
      <div className="dashboard-wrapper">
        <div className="dashboard-card empty">هنوز تراکنشی ثبت نشده است</div>
      </div>
    )
  }

  const renderPercent = ({ cx, cy, midAngle, outerRadius, percent }) => {
    const RADIAN = Math.PI / 180
    const offset = 20
    const x = cx + (outerRadius + offset) * Math.cos(-midAngle * RADIAN)
    const y = cy + (outerRadius + offset) * Math.sin(-midAngle * RADIAN)

    return (
      <text
        x={x}
        y={y}
        fill="#333"
        textAnchor="middle"
        dominantBaseline="central"
        style={{ fontSize: 14, fontWeight: 'bold' }}
      >
        {(percent * 100).toFixed(1)}%
      </text>
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

      <div className="charts-row">
        {/* PIE CHART */}
        <div className="chart-box">
          <h3>نسبت درآمد به هزینه</h3>

          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                innerRadius={55}
                outerRadius={95}
                paddingAngle={3}
                label={renderPercent}
                labelLine={false}
              >
                <Cell fill="#4CAF50" />
                <Cell fill="#F44336" />
              </Pie>

              <Tooltip
                formatter={(value) => `${value.toLocaleString('fa-IR')} تومان`}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* BAR CHART */}
        <div className="chart-box">
          <h3>مقایسه درآمد و هزینه</h3>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={barData} barSize={40}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
              <XAxis dataKey="name" />

              <YAxis
                tick={{ fontSize: 12, dx: -10, fill: '#555' }}
                tickLine={false}
                axisLine={false}
              />

              <Tooltip />

              <Bar dataKey="amount" radius={[8, 8, 0, 0]}>
                <Cell fill="#4CAF50" />
                <Cell fill="#F44336" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
