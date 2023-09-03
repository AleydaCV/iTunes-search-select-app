import React from 'react'
import { Route, Routes } from 'react-router-dom'
import All from '../pages/all'
import Home from '../pages/home'

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/viewAll/:kind/:search" element={<All />} />

    </Routes>
  )
}

export default RoutesComponent