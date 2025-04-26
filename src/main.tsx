import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThirdwebProvider } from '@thirdweb-dev/react';
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThirdwebProvider
      activeChain='celo'
      clientId='c93d40bcd55e35ad79e6335f1c72ea58'
    >
      <App />
    </ThirdwebProvider>
  </StrictMode>,
)
