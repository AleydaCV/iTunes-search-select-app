import { Box } from '@mui/material'
import React from 'react'
import Filter from './Filter'
import CardComponent from './Card'
import CardHolder from './CardHolder'

const Body = () => {
  return (
    <Box sx ={{ padding:'40px'}}>
        <Filter/>
        
        <CardHolder></CardHolder>
    </Box>
  )
}

export default Body