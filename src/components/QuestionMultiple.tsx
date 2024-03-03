import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

interface Props {
  question: string,
  answer: string,
  options: string[],
}





const QuestionMultiple:React.FC<Props> = ( {question, answer, options} ) => {

  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Elige una opción');
  const [formVisible, setFormVisible] = React.useState(true);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    setHelperText(' ');
    setError(false);
  };
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    // Trim para eliminar espacios en blanco adicionales
    const trimmedValue = value.trim();
    const trimmedAnswer = answer.trim();
  
    if (trimmedValue === trimmedAnswer) {
      setHelperText('¡Respuesta correcta!');
      setError(false);
    } else {
      setHelperText('¡Respuesta incorrecta!');
      setError(true);
    }
  };


  return (
    <form onSubmit={handleSubmit} style={{alignItems:'left', justifyContent:'left', display: 'flex'}} className='question-prew-view'>
        
        <FormControl sx={{ m: 3, mt:0}} error={error} variant="standard">
          <RadioGroup
            aria-labelledby="demo-error-radios"
            name="quiz"
            value={value}
            onChange={handleRadioChange}
          >
            <Typography variant='h5' align='left' sx={{display:'flex', alignItems:'center'}}>{question}</Typography>  
            {
              options.map((option, index) => {
                return <FormControlLabel key={index} value={option} control={<Radio/>} label={option} />
              })
            }
        
          </RadioGroup>
        </FormControl>
      </form>
  )
}

export default QuestionMultiple

