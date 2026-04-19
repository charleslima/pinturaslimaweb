import ReactDOM from 'react-dom/client'
import App from './App'
import About from './pages/About';
import './style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './pages/Contact';
import Services from './pages/Services';


import ScrollToTop from './components/ScrollToTop'

ReactDOM.createRoot(document.getElementById('app')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <ScrollToTop />
  </BrowserRouter>
)
