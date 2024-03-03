import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({text}: {text: string}) {
  return (
    <Card sx={{ maxWidth: 345 , fontSize:'25px', borderRadius:'40px', bgcolor:'#DFE8F6'}}>
      <CardActionArea>
        <CardContent sx={{display:'flex', p:'1.5rem' }}>
          <Typography sx={{color:'#121212'}} variant="h5" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}