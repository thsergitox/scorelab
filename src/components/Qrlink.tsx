import { Box, Link } from '@mui/material'
import * as React from 'react';
import qr from '../assets/8598879.jpg';

interface Qrs {
    link: string;
    isVisible: boolean;
}
const Qrlink: React.FC<Qrs> = ({link, isVisible}) => {
    if (!isVisible) return null;

  return (
    <Box>
        <img src={qr} alt=''/>
        <Link>{link}kmxsakmcskc</Link>
    </Box>
  )
}

export default Qrlink