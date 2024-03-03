import { Box, Button, Typography } from '@mui/material'
import Options from './Options'

interface ResponseProps {
  pregunta: string;
  respuesta: string;
  opciones: string[];
}

interface QuestionsProps {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  response: ResponseProps[];
  setResponse: (response: ResponseProps[]) => void;
}

const Questions: React.FC<QuestionsProps> = ({ isVisible , setIsVisible, response, setResponse})=> {
  if (!isVisible) return null;
  
  const handleButtonClick = async () => {
    setIsVisible(true);
  };

  return (
    <Box sx={{display:'flex', flexDirection: 'column', gap:'1rem', bgcolor:'#F7F9FC', borderRadius:'40px', padding:'1rem', paddingLeft:'2rem'}}>
      <Typography sx={{mt:'1rem'}} className="title-form">Elija las preguntas para su evaluación</Typography>
      {
        response.map((question, index) => {
          return (
            <Box key={index} sx={{display:'flex', flexDirection: 'column', gap:'1rem'}}>
              
              <Options question={question.pregunta} options={question.opciones} answer={question.respuesta}/>
            </Box>
          )
        })
      }
      <Button onClick={handleButtonClick} variant="contained" sx={{bgcolor:'#043C7C', color:'#fff', borderRadius:'20px', marginTop:'1rem', border:'none', width:'200px', alignSelf:'self-start'}}>Crear Quiz</Button>
    </Box>
  );
};


export default Questions