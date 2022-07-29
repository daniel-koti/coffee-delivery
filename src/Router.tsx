import { Routes, Route } from 'react-router-dom'
import { Default } from './layout/Default'
import { CheckoutPage } from './pages/Checkout'
import { SuccessPage } from './pages/Success'
import { HomePage } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/completeOrder" element={<SuccessPage />} />
      </Route>
    </Routes>
  )
}
