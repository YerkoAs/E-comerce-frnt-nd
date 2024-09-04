
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Register from './pages/Register'
import ProductInfo from './pages/ProductInfo'
import CartPage from './pages/CartPage'
import Purchases from './pages/Purchases'
import NavBar from './components/shared/NavBar'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {

  return (
    <div>
      <NavBar />
      <div className='content'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/product/:id' element={<ProductInfo />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/cart' element={<CartPage />} />
            <Route path='/purchases' element={<Purchases />} />
          </Route>
          <Route path='*' element={<h2>This route doesn't exist.</h2>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
