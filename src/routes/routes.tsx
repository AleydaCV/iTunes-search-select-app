import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/viewAll/:type" element={<Home />} />

    </Routes>
  )
}

export default RoutesComponent