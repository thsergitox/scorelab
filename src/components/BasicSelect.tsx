  import * as React from 'react';
  import Box from '@mui/material/Box';
  import InputLabel from '@mui/material/InputLabel';
  import MenuItem from '@mui/material/MenuItem';
  import FormControl from '@mui/material/FormControl';
  import Select, { SelectChangeEvent } from '@mui/material/Select';

const BasicSelect = () => {
  const [tipoPregunta, setTipoPregunta] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setTipoPregunta(event.target.value as string);
  };
  console.log(tipoPregunta)
  return (
    <Box sx={{ minWidth: 120, bgcolor: '#F7F9FC', width:'100%'}}>
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label">Elija el formato de preguntas</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tipoPregunta}
          label="Format"
          onChange={handleChange}
        >
          <MenuItem value={'opcion-multiple'}>Opcion múltiple</MenuItem>
          <MenuItem value={'v-f'}>Verdadero/Falso</MenuItem>
          <MenuItem value={'texto-corto'}>Respuesta corta</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default BasicSelect