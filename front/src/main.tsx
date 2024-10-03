import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Node from './node.tsx'
import './index.css'
import Header from './Header/Header.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <App />
    {/* <Node /> */}

  </StrictMode>,
)
