

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingMain from './features/landing/landingmain'
import Booking from './features/booking/Booking'

const App = () => {
  return (
    
      <Routes>
        
        <Route path="/" element= {<LandingMain />}/>
        <Route path="/booking" element={<Booking />} />
      </Routes>
  
  )
}

export default App
