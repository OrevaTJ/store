import { Stack, Box, Typography, Grid } from '@mui/material';
import aboutImage from '../images/aboutImage.jpg';
import aboutHero from '../images/aboutHero.jpg';

export const About = () => {
  return (
    <>
      <Box sx={{height: '20vh',
        m: '4rem 0 2rem', position: 'relative',
        background: `url(${aboutHero}) center/cover no-repeat`
      }}>
        <Box sx={{position: 'absolute', top: '0', left: '0',
          width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
          justifyContent: 'center', alignItems: 'center',
          background: 'rgba(0, 0, 0, 0.6)'
        }}>
          <Typography variant='h3' 
          sx={{color: '#fff'}}>
            #KnowUs
          </Typography>
          <Typography variant='body2'
          sx={{color: '#fff'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        </Box>
      </Box>
      {/* <Stack sx={{display: 'flex', alignItems: 'center', 
        justifyContent: 'center',
        flexDirection: 'row', m: '2rem'}}> */}
      <Grid container spacing={0} sx={{mb: '2rem'}}>
        <Grid item md={6}>
          <Box component='img' src={aboutImage}
            alt='About hero image' sx={{
              width: '70%', height: 'auto', m: '1.5rem auto'
            }}
        />
        </Grid>
        <Grid item md={6}>
          <Box sx={{m: '0 2rem'}}>
            <Typography variant='h5'>
              About Us
            </Typography>
            <Typography variant='body2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Odit laborum quaerat vel dolorem nesciunt obcaecati expedita 
              qui ipsam corrupti pariatur? Ea ipsam assumenda, mollitia 
              praesentium aliquid ad recusandae sunt nisi sapiente fugit
              inventore tempore cumque culpa quo non tempora beatae?
              praesentium aliquid ad recusandae sunt nisi sapiente fugit 
              inventore tempore cumque culpa quo non tempora beatae?
            </Typography><br/>
            <Typography variant='body2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Odit laborum quaerat vel dolorem nesciunt obcaecati expedita 
              qui ipsam corrupti pariatur? Ea ipsam assumenda, mollitia 
              praesentium aliquid ad recusandae sunt nisi sapiente fugit
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
