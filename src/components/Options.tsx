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
  options: string[]; 
  question: string;
  answer: string
}

const Options: React.FC<Props> = ( {question, options, answer} ) => {
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
  

  const handleButtonClick = () => {
    setFormVisible(false);
  };



  return (
    <>
    {formVisible && (
      <form onSubmit={handleSubmit} style={{alignItems:'left', justifyContent:'left', display: 'flex' }} className='question-prew-view'>
        
        <FormControl sx={{ m: 3, mt:0 }} error={error} variant="standard">
          <RadioGroup
            aria-labelledby="demo-error-radios"
            name="quiz"
            value={value}
            onChange={handleRadioChange}
          >
            <Typography variant='h6' align='left' sx={{display:'flex', alignItems:'center'}}>{question}<Button onClick={handleButtonClick} sx={{ml:1}}><DeleteForeverIcon sx={{m:0, p:0}}/></Button></Typography>
            {
              options.map((option, index) => {
                return <FormControlLabel key={index} value={{option}} control={<Radio />} label={option} />
              })
            }
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
          <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
            enviar
          </Button>
        </FormControl>
      </form>
    )}
    </>
  )
}

export default Options;
