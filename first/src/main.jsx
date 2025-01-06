import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Gokul from './Gokul.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
