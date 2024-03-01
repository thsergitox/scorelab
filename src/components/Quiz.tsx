import { Box, Typography } from '@mui/material'
import {Grid, Paper} from '@mui/material'
import QuestionMultiple from './QuestionMultiple';
import '../styles/formTeacher.css'
import '../styles/quiz.css'

const Quiz = () => {
  return (
    
    <Grid className='quiz-container' item xs={12} sm={8} md={5} component={Paper} elevation={6} square 
    sx={{
        bgcolor:'#F7F9FC', gap:'1rem', width:'100%', alignItems:'center', display:'flex', flexDirection:'column',
        borderRadius:'40px', mt:'1.5rem'}}>
            <Typography sx={{mt:'2rem', mb:'0'}} className="title-form">Nombre del tema</Typography>
          <Box
            className='question-box'
            sx={{
                my: 3,
                mx: 4,
              display: 'flex',
              flexDirection: 'column',
              pl:'1rem',
              pr: { xs: '1rem', sm: '2rem', md: '24rem' },
              alignItems: 'center',
            }}
          >
            
            <QuestionMultiple/>
            <QuestionMultiple/>
            <QuestionMultiple/>
            
            
          </Box>
        </Grid>
  )
}

export default Quiz 