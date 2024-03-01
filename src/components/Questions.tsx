import { Box, Button, Typography } from '@mui/material'
import Options from './Options'

interface QuestionsProps {
  isVisible: boolean;
}
const Questions: React.FC<QuestionsProps> = ({ isVisible })=> {
  if (!isVisible) return null;

  return (
    <Box sx={{display:'flex', flexDirection: 'column', gap:'1rem', bgcolor:'#F7F9FC', borderRadius:'40px', padding:'1rem', paddingLeft:'2rem'}}>
      <Typography sx={{mt:'1rem'}} className="title-form">Elija las preguntas para su evaluación</Typography>
      <Options/>
      <Options/>
      <Options/>
      <Button variant="contained" sx={{bgcolor:'#043C7C', color:'#fff', borderRadius:'20px', marginTop:'1rem', border:'none', width:'200px', alignSelf:'self-start'}}>Crear Quiz</Button>
    </Box>
  );
};


export default Questions