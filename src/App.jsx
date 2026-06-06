

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingMain from './features/landing/landingmain'
import Booking from './features/booking/Booking'
import Terms from './features/terms/Terms'
import Privacy from './features/privacy/Privacy'

const App = () => {
  return (
    
      <Routes>
        
        <Route path="/" element= {<LandingMain />}/>
        <Route path="/booking" element={<Booking />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
  
  )
}

export default App
