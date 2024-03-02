
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import AdbIcon from '@mui/icons-material/Adb';
import '../styles/formTeacher.css'
import ilustration from '../assets/ilustration.png';
import ActionAreaCard from './ActionAreaCard';
import LoginTeachers from './LoginTeachers';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

const cards = ['Generación rápida de quizes', 'Reportes Estadísticos Detallados', 'Personalización Total de Quizes'
, 'Retroalimentación Instantánea', 'Acceso en Cualquier Momento y Lugar', 'Equidad y transparencia en la Evaluación']

const LandingPage = () => {

  const navigate = useNavigate();
  
  const handleCreateEvaluationClick = () => {
    navigate("/generador"); // Usa la función navigate con la ruta a la que deseas ir
  };

  return (


      <div>
        <AppBar position="fixed" sx={{background:'#fff', p:'1rem', boxShadow:'none'}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 500,
                color: 'inherit',
                textDecoration: 'none',
                color:'#121212',
              }}
              className='title-form'
            >
              SCORE<span style={{color:'#043C7C'}}>LAB</span>
            </Typography>
  
            <Box onClick={handleCreateEvaluationClick} sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
               
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                ml:'2rem',
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              
            </Box>
  
            <Box sx={{ flexGrow: 0 }}>
              <Link to="/login" >
                <Button  variant="contained" sx={{bgcolor:'#043C7C', color:'#fff', borderRadius:'40px !important'}}>Crear evaluación</Button>
              </Link>
              

            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Container>
        <Box sx={{display:'flex', flexDirection: 'row', gap:'1rem', justifyContent:'space-between', mt:'7rem'}}>
            <Box sx={{display:'flex', flexDirection: 'column', width:'40%', gap:'1rem'}}>
                <Typography variant="h2" sx={{color:'#000', fontWeight:500, textAlign:'left', width:'100%' , fontFamily:'"Staatliches", sans-serif !important', fontSize:'75px'}}>CREA QUIZES PERSONALIZADOS EN SOLO MINUTOS CON <span style={{color:'#043C7C'}}>IA</span></Typography>
                <Link to='./login' >
                  <Button  variant="contained" sx={{bgcolor:'#043C7C', color:'#fff', borderRadius:'40px !important', width:'200px', border:'none'}}>Crear evaluación</Button>
                </Link>
                
            </Box>
            
            <img src={ilustration} alt='ilustration' style={{width:'50%'}}/>
        </Box>
        <Box sx={{mt:'4rem', bgcolor:"#F7F9FC", borderRadius:'40px', p:'1rem'}}>
            <Typography  variant='h4' sx={{fontFamily:'"Staatliches", sans-serif !important', color:'#000', fontSize:'60px', mt:'1rem'}}>BENEFICIOS DE <span style={{color:'#043C7C'}}>SCORELAB</span></Typography>
            <Box sx={{display:'flex', flexDirection: 'row', gap:'2rem', justifyContent:'start', mt:'4rem',  flexWrap:'wrap', pt:'1rem', pb:'4rem'}}>
            {
              cards.map((text) => {
                  return <ActionAreaCard text={text}/>
              })
            }


            </Box>
        </Box>
        <Box sx={{mt:'4rem', bgcolor:"#fff", borderRadius:'40px', p:'1rem'}}>
          <Typography  variant='h4' sx={{fontFamily:'"Staatliches", sans-serif !important', color:'#000', fontSize:'60px', mt:'1rem'}}>CÓMO <span style={{color:'#043C7C'}}>FUNCIONA</span></Typography>
          <Box sx={{display:'flex', mt:'2.5rem'}} >
            <img src= {ilustration} style={{width:'50%'}}/>
            <Box sx={{display:'flex', flexDirection:'column', mt:'2rem', width:'50%', p:'1rem'}}>
              <Typography variant='h4' sx={{ color:'#000', mt:'1rem', display:'flex'}}><div style={{backgroundColor:'#043C7C', color:'#fff',padding:'.7rem', borderRadius:'50px', width:'20px', height:'20px', alignItems:'center', justifyContent:'center', display:'flex', marginRight:'.7rem', borderColor:'#043C7C'}}>1</div>Crea el cuestionario</Typography>
              <Typography variant='body1' sx={{color:'#000', mt:'1rem', textAlign:'left'}}>Ingresa el tema principal de la clase junto con los subtemas vistos en la clase. También agrega las diapositivas de la clase para una experiencia más personalizada</Typography>
            </Box>
          </Box>
          <Box sx={{display:'flex', mt:'2.5rem'}} >
            <Box sx={{display:'flex', flexDirection:'column', mt:'2rem', width:'50%', p:'1rem'}}>
              <Typography variant='h4' sx={{ color:'#000', mt:'1rem', display:'flex'}}><div 
              style={{
                backgroundColor:'#043C7C', color:'#fff',padding:'.7rem', borderRadius:'50px', width:'20px', height:'20px', alignItems:'center', justifyContent:'center', display:'flex', marginRight:'.7rem', borderColor:'#043C7C'
                }}>2</div>Selecciona las preguntas</Typography>
              <Typography variant='body1' sx={{color:'#000', mt:'1rem', textAlign:'left'}}>Se generarán una cantidad de preguntas y podrás decidir cuáles seleccionar para la evaluación de los alumnos según creas lo más conveniente.</Typography>
            </Box>
            <img src= {ilustration} style={{width:'50%'}}/>
            
          </Box>
          <Box sx={{display:'flex', mt:'2.5rem'}} >
            <img src= {ilustration} style={{width:'50%'}}/>
            <Box sx={{display:'flex', flexDirection:'column', mt:'2rem', width:'50%', p:'1rem'}}>
              <Typography variant='h4' sx={{ color:'#000', mt:'1rem', display:'flex'}}><div 
              style={{
                backgroundColor:'#043C7C', color:'#fff',padding:'.7rem', borderRadius:'50px', width:'20px', height:'20px', alignItems:'center', justifyContent:'center', display:'flex', marginRight:'.7rem', borderColor:'#043C7C'
                }}>3</div>Comparte con tus alumnos</Typography>
              <Typography variant='body1' sx={{color:'#000', mt:'1rem', textAlign:'left'}}>Se generará un link y un qr en caso estés en clase virtual o presencial. Nos adaptamos a tu disponibilidad!</Typography>
            </Box>
            
          </Box>
        </Box>
        <Box sx={{mt:'4rem', bgcolor:"#0466C8", borderRadius:'40px', p:'10rem'}}>
          <Typography  variant='h4' sx={{fontFamily:'"Staatliches", sans-serif !important', color:'#fff', fontSize:'60px', mt:'1rem'}}>ALGUNA FRASE AQUÍ</Typography>
        </Box>
      </Container>
      <footer style={{backgroundColor:'#fff', color:'#000', textAlign:'center', paddingTop:'3rem'}}>
        <Typography variant='body1'>© 2021 ScoreLab. All rights reserved</Typography>
      </footer>
    </div>

    
  )
}

export default LandingPage