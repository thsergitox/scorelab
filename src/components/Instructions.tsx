import { Box, Typography } from '@mui/material'
import '../styles/instructions.css'

const Instructions = () => {
  return (
    <div className='instructions'>
      <Typography variant='h6'>Comenzar</Typography>
      <Box>
        <Typography variant="h6">1. Crea el cuestionario</Typography>
        <Typography variant="body2">Ingresa el tema principal de la clase junto con los subtemas vistos en la clase. También agrega las diapositivas de la clase para una experiencia más personalizada</Typography>
      </Box>
      <Box>
        <Typography variant="h6">2. Comparte el link</Typography>
        <Typography variant="body2">Se generará un link y un qr el cual podrás compartir con tus alumnos.</Typography>
      </Box>
      <Box>
        <Typography variant="h6">3. Interpreta los resultados</Typography>
        <Typography variant="body2">Al finalizar la evaluación podrás ver las estadísticas de las respuestas de los alumnos para poder identificar los temas a reforzar.</Typography>
      </Box>
    </div>
  )
}

export default Instructions