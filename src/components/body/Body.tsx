import { Box } from '@mui/material'
import React from 'react'
import Filter from './Filter'
import CardComponent from './Card'
import CardHolder from './CardHolder'
import CardFilter from '../CardType/CardFilter'
import CardTypeHolder from '../CardType/CardTypeHolder'

const Body = () => {
  return (
    <Box sx ={{ padding:'40px'}}>
        <Filter/>
        
        {/* <CardHolder></CardHolder> */}
        <CardTypeHolder/>
    </Box>
  )
}

export default Body