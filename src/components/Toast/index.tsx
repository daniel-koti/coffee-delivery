import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

export function Toast() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      closeOnClick
      pauseOnFocusLoss={false}
      pauseOnHover={false}
      draggable={false}
      limit={2}
      toastStyle={{ zIndex: 9999 }}
      theme="colored"
    />
  )
}
