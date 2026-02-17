import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Layout from './layout/Layout'
import Dashboard from './Pages/Dashboard'
import Expenses from './Pages/Expenses'
import NotFound from './Pages/NotFound'

import { TransactionProvider } from './context/TransactionContext.jsx'

function App() {
  return (
    <TransactionProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="expenses" element={<Expenses />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TransactionProvider>
  )
}

export default App
