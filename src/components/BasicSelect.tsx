import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const BasicSelect = () => {
  const [question, setQuestion] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setQuestion(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120, bgcolor: '#F7F9FC' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Elija el formato de preguntas</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={question}
          label="Format"
          onChange={handleChange}
        >
          <MenuItem value={10}>Opcion múltiple</MenuItem>
          <MenuItem value={20}>Verdadero/Falso</MenuItem>
          <MenuItem value={30}>Respuesta corta</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default BasicSelect