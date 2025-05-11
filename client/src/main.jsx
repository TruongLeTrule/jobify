import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { checkDefaultTheme } from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ToastContainer
      position="top-center"
      theme={checkDefaultTheme() ? 'dark' : 'light'}
    />
  </React.StrictMode>
)
