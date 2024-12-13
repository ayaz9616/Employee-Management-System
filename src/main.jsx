import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './context/AuthProvider.jsx'
import { AuthContext } from './context/AuthProvider.jsx'
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
        <App />
    </AuthProvider>
    
  </StrictMode>
  
)
