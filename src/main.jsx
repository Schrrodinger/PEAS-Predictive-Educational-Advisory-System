import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'foundation-sites/dist/css/foundation.min.css';
import App from './App.jsx'
// import './index.css'
import './Frontend/Decorator.css'
import 'react-notifications/lib/notifications.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
