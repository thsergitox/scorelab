import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';


const QuizTimer = () => {
  return (
    <Grid container component="main" sx={{ height: '100vh', width:'100%' }}>
        
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#0466C8',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
          }}
        >
          
          
          
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{width:'50rem'}}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography sx={{mt:'2rem', mb:'0'}} className="title-form">Nombre del tema</Typography>
            <Box component="form" noValidate  sx={{ mt: 1 }}>
              
               
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>

              
            </Box>
          </Box>
        </Grid>
      </Grid>
  )
}

export default QuizTimer