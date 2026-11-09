import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import Solutions from './pages/Solutions'
import Security from './pages/Security'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'

const Router = import.meta.env.MODE === 'github-pages' ? HashRouter : BrowserRouter

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="solutii" element={<Solutions />} />
          <Route path="solutii/:slug" element={<ProductPage />} />
          <Route path="securitate-cibernetica" element={<Security />} />
          <Route path="contact" element={<Contact />} />
          <Route path="confidentialitate" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
)
