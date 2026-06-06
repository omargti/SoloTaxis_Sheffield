

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingMain from './features/landing/landingmain'
import Booking from './features/booking/Booking'
import AppPage from './features/app/App'
import Terms from './features/terms/Terms'
import Privacy from './features/privacy/Privacy'
import DriverApply from './features/drive/DriverApply'

const App = () => {
  return (
    
      <Routes>
        
        <Route path="/" element= {<LandingMain />}/>
        <Route path="/booking" element={<Booking />} />
        <Route path="/app" element={<AppPage />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/drive/apply" element={<DriverApply />} />
      </Routes>
  
  )
}

export default App
