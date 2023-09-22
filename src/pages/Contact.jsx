import { Box, Typography, Stack, Avatar } from "@mui/material";
import aboutImage from '../images/aboutImage.jpg';
import HomeIcon from '@mui/icons-material/Home';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BusinessIcon from '@mui/icons-material/Business';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TodayIcon from '@mui/icons-material/Today';
import contactHero from '../images/contactHero.jpg'

export const Contact = () => {
  return (
    <div>
      <Box sx={{height: '20vh',
        m: '4rem 0 2rem', position: 'relative',
        background: `url(${contactHero}) center/cover no-repeat`
      }}>
        <Box sx={{position: 'absolute', top: '0', left: '0',
          width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
          justifyContent: 'center', alignItems: 'center',
          background: 'rgba(0, 0, 0, 0.6)'
        }}>
          <Typography variant='h3' 
          sx={{color: '#fff'}}>
            #let's_talk
          </Typography>
          <Typography variant='body2'
          sx={{color: '#fff'}}>
            LEAVE A MESSAGE, We love to hear from you!
          </Typography>
        </Box>
      </Box>
      <Stack spacing={{ xs: 1, sm: 2, md: 4 }}
        direction={{ xs: 'column', sm: 'row' }}
        sx={{display: 'flex', mx: '1.5rem',
          flexDirection: 'row', alignItems: 'center',
          flexWrap: 'wrap',
        }}>
        <Stack direction="column" sx={{width: {md:'40%'}, mr: '24px'}}>
          <Typography variant='body1'>GET IN TOUCH</Typography>
          <Typography variant='h5'>
            Visit our agency locations or get in touch with us today
          </Typography>
          <Typography variant='body2'>Head Office</Typography>
          <Box sx={{display: 'flex', py: '12px', m: '0 16px'}}>
                <BusinessIcon sx={{width: 18, height: 18}}/>
              <Typography variant='body2' sx={{px: '6px',
                fontSize: '.85rem', fontWeight: '500'}}>
                  18 Nnebisi Road Nosike Asaba
              </Typography>
          </Box>
          <Box sx={{display: 'flex', py: '12px', m: '0 16px'}}>
                <MailOutlineIcon sx={{width: 18, height: 18}}/>
              <Typography variant='body2' sx={{px: '6px',
                fontSize: '.85rem', fontWeight: '500'}}>
                  giti@gmail.com
              </Typography>
          </Box>
          <Box sx={{display: 'flex', py: '12px', m: '0 16px'}}>
                <LocalPhoneIcon sx={{width: 18, height: 18}}/>
              <Typography variant='body2' sx={{px: '6px',
                fontSize: '.85rem', fontWeight: '500'}}>
                  +2340703000001
              </Typography>
          </Box>
          <Box sx={{display: 'flex', py: '12px', m: '0 16px'}}>
                <TodayIcon sx={{width: 18, height: 18}}/>
              <Typography variant='body2' sx={{px: '6px',
                fontSize: '.85rem', fontWeight: '500'}}>
                  Monday to Saturday: 9:00am - 6:00pm
              </Typography>
          </Box>
        </Stack>
        <Box component='iframe' loading='lazy'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.440313674378!2d6.719563374310592!3d6.205504526778407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1043f3744aff9d41%3A0x21068f8e7f4a1ba2!2sFirst%20edition%20plaza!5e0!3m2!1sen!2sng!4v1695405744172!5m2!1sen!2sng'
          sx={{width: '500px', height: '300px', border: '0',
        }}
        />
      </Stack>
    </div>
  )
}