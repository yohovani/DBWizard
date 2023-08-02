import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {DbContextProvider} from './context/DbContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <DbContextProvider>
    <App />
  </DbContextProvider>,
)