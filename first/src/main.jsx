import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Gokul from './Gokul.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Gokul/>
  </StrictMode>,
)
