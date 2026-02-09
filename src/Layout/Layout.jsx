import { Outlet } from 'react-router-dom'
import ProductHeader from '../components/ProductHeader'
import '../App.css'

function Layout() {
  return (
    <div className="app-container">
      <ProductHeader />
      <main className="page-content">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
