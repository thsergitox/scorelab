import { Box, Typography } from '@mui/material'
import React from 'react'
import Options from './Options'

const Questions = () => {
  return (
    <Box sx={{display:'flex', flexDirection: 'column', gap:'1rem', bgcolor:'#F7F9FC', borderRadius:'40px', padding:'1rem', paddingLeft:'2rem'}}>
      <Typography sx={{mt:'1rem'}} className="title-form">Elija las preguntas para su evaluación</Typography>
      <Options/>
      <Options/>
      <Options/>
    </Box>
  )
}

export default Questions