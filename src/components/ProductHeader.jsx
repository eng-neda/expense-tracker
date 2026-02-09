import { NavLink } from 'react-router-dom'
import './ProductHeader.css'
import logo from '../../photos/Logo Placeholder.png'

function ProductHeader() {
  return (
    <header className="header">
      <nav className="nav">
        <img src={logo} alt="لوگو" className="logo" />
        <NavLink to="/dashboard" className="nav-link">
          داشبورد
        </NavLink>

        <NavLink to="/expenses" className="nav-link">
          لیست هزینه‌ها
        </NavLink>
      </nav>
    </header>
  )
}

export default ProductHeader
