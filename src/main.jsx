import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Navbar from './shared/layout/Navbar.jsx';
import Footer from './shared/layout/Footer.jsx';
import PageProgressBar from './shared/ui/PageProgressBar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <PageProgressBar />
    <Navbar/>
    <App />
    <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
