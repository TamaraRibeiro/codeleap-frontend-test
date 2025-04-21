import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
    </Routes>
  </BrowserRouter>,
)
