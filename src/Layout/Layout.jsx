import { Outlet } from 'react-router-dom'
import ProductHeader from '../components/ProductHeader'
import '../App.css'

function Layout() {
  return (
    <div>
      <ProductHeader />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
