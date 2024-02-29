import { Box, Typography } from '@mui/material'

import Options from './Options'

const Question = () => {
  return (
    <Box sx={{display:'flex', flexDirection: 'column'}}>
        <Typography variant='h6'>¿Cuál es la capital de Francia?</Typography>
        <Options/>
    </Box>
  )
}

export default Question