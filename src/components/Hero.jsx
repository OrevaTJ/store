import { Stack, Box, Typography, Button } from "@mui/material"
import hero1 from '../images/hero1.jpg'
export const Hero = () => {

  return (
    <Stack sx={{m: '6rem 2rem 2rem',
        background: `url(${hero1}) center/cover no-repeat`,
        height: '60vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: '0.25rem',
        p: '0 20px'
    }}>
        {/* <Box> */}
            <Typography variant='h6' sx={{pb: '1', color: '#1c2d41'}}>Trade-in-offer</Typography>
            <Typography variant='h4'>Super value deals</Typography>
            <Typography variant='h3' color='#064641'>On all products</Typography>
            <Typography variant='body2'>Save more with coupons & up to 70% off!</Typography>
            <Button variant='contained' 
              sx={{cursor: 'pointer', bgcolor: '#ff8f00', mt: '1rem'}}>
                Shop Now
            </Button>
        {/* </Box> */}
    </Stack>
  )
}
