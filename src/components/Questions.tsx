import { Box, Button, Typography } from '@mui/material'
import Options from './Options'
import { Link } from 'react-router-dom';

interface QuestionsProps {
  isVisible: boolean;
}

const response = [

      {
        "question": "¿Quién ideó la primera computadora mecánica?",
        "options": [
          "Charles Babbage",
          "Alan Turing",
          "Ada Lovelace"
        ],
        "answer": "Charles Babbage"
      },
      {
        "question": "¿Qué sistema operativo dominó el mercado después de UNIX?",
        "options": [
          "Microsoft Windows",
          "Linux",
          "Android"
        ],
        "answer": "Microsoft Windows"
      },
      {
        "question": "¿Qué tecnología permitió el intercambio instantáneo de información a escala global?",
        "options": [
          "Correo postal",
          "Teléfono",
          "Internet"
        ],
        "answer": "Internet"
      }

]

const Questions: React.FC<QuestionsProps> = ({ isVisible })=> {
  if (!isVisible) return null;

  return (
    <Box sx={{display:'flex', flexDirection: 'column', gap:'1rem', bgcolor:'#F7F9FC', borderRadius:'40px', padding:'1rem', paddingLeft:'2rem'}}>
      <Typography sx={{mt:'1rem'}} className="title-form">Elija las preguntas para su evaluación</Typography>
      {
        response.map((question, index) => {
          return (
            <Box key={index} sx={{display:'flex', flexDirection: 'column', gap:'1rem'}}>
              
              <Options question={question.question} options={question.options} answer={question.answer}/>
            </Box>
          )
        })
      }
      <Button variant="contained" sx={{bgcolor:'#043C7C', color:'#fff', borderRadius:'20px', marginTop:'1rem', border:'none', width:'200px', alignSelf:'self-start'}}>Crear Quiz</Button>
    </Box>
  );
};


export default Questions