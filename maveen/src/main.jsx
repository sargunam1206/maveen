import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'   // ✅ Add this line
import 'bootstrap/dist/js/bootstrap.bundle.min.js'  // ✅ For navbar toggle
import './index.css';  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
