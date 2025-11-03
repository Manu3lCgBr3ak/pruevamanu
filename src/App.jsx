import { BrowserRouter, Routes, Route } from "react-router-dom"
import './GLobal.css'

import HeroPage from "./pages/HeroPage/HeroPage"
import LandingPage from "./pages/LandingPage/LandingPage"

import CookiesNotice from './components/layout/Terms/CookiesNotice'
import QualityGuarantee from './components/layout/Terms/QualityGuarantee'
import LegalPolicy from './components/layout/Terms/LegalPolicy'
import TermsAndConditions from './components/layout/Terms/TermsAndConditions'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/inicio" element={<HeroPage />} />
        <Route path="/LandingPage" element={<LandingPage />} />

        <Route path="/aviso-de-cookies" element={<CookiesNotice />} />
        <Route path="/garantia-de-calidad" element={<QualityGuarantee />} />
        <Route path="/politica-de-privacidad" element={<LegalPolicy />} />
        <Route path="/terminos-y-condiciones" element={<TermsAndConditions />} />
        

        <Route path="*" element={<HeroPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
