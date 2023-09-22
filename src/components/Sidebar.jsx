import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { useGlobalContext } from '../../Context';
import { useUser } from '../hooks/useUser';
import {
  Drawer,
  Box,
  Typography,
  Stack,
  Button,
  Avatar,
  ListItemButton,
} from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import HomeIcon from '@mui/icons-material/Home';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CableIcon from '@mui/icons-material/Cable';
import LaptopIcon from '@mui/icons-material/Laptop';
import GamepadIcon from '@mui/icons-material/Gamepad';

export const Sidebar = () => {
  const { isDrawerOpen, setIsDrawerOpen } = useGlobalContext();
  const { user } = useUser();

  const navigate = useNavigate();

  const logOut = () => {
    signOut(getAuth());
    navigate('/');
    setIsDrawerOpen(false);
  };

  return (
    <Drawer
      anchor="left"
      open={isDrawerOpen}
      onClose={() => setIsDrawerOpen(false)}
    >
      <Stack sx={{width: '200px', p: '10px 20px'}}>
        <Box sx={{display: 'flex', alignItems: 'center', p: '1rem'}}>
          <Typography
            variant="h4"
            component="div"
            color="primary.contrastText"
            sx={{fontWeight: '800' }}
          >
            <Link to="/" >
              GiTi 
            </Link>
          </Typography>
          <AcUnitIcon sx={{color: '#ff8f00', fontWeight: '800'}} />
        </Box>
        <Stack direction="column" sx={{py: '8px'}}>
          <Box sx={{display: 'flex', py: '12px', m: '0 16px'}}>
            <ListItemButton sx={{p: '0'}}>
              <Avatar sx={{width: 18, height: 18, bgcolor: '#646361'}}>
                <HomeIcon sx={{width: 18, height: 18}}/>
              </Avatar>
              <Typography variant='body2' sx={{px: '6px',
                fontSize: '.85rem', fontWeight: '500'}}>
                  Home & Office
              </Typography>
            </ListItemButton>
          </Box>
          <Box sx={{display: 'flex', py: '12px', m: '0 16px'}}>
            <ListItemButton sx={{p: '0'}}>
              <Avatar sx={{width: 18, height: 18, bgcolor: '#646361'}}>
                <MedicationLiquidIcon sx={{width: 18, height: 18}}/>
              </Avatar>
              <Typography variant='body2' sx={{px: '6px',
                fontSize: '.85rem', fontWeight: '500'}}>
                  Health & Beauty
              </Typography>
            </ListItemButton>
          </Box>
          <Box sx={{display: 'flex', py: '12px', m: '0 16px'}}>
            <ListItemButton sx={{p: '0'}}>
              <Avatar sx={{width: 18, height: 18, bgcolor: '#646361'}}>
                <PhoneIphoneIcon sx={{width: 18, height: 18}}/>
              </Avatar>
              <Typography variant='body2' sx={{px: '6px',
                fontSize: '.85rem', fontWeight: '500'}}>
                  Phone & Tablets
              </Typography>
            </ListItemButton>
          </Box>
          <Box sx={{display: 'flex', py: '12px', m: '0 16px'}}>
            <ListItemButton sx={{p: '0'}}>
              <Avatar sx={{width: 18, height: 18, bgcolor: '#646361'}}>
                <CableIcon sx={{width: 18, height: 18}}/>
              </Avatar>
              <Typography variant='body2' sx={{px: '6px',
                fontSize: '.85rem', fontWeight: '500'}}>
                  Electronics
              </Typography>
            </ListItemButton>
          </Box>
          <Box sx={{display: 'flex', py: '12px', m: '0 16px'}}>
            <ListItemButton sx={{p: '0'}}>
              <Avatar sx={{width: 18, height: 18, bgcolor: '#646361'}}>
                <LaptopIcon sx={{width: 18, height: 18}}/>
              </Avatar>
              <Typography variant='body2' sx={{px: '6px',
                fontSize: '.85rem', fontWeight: '500'}}>
                  Computing
              </Typography>
            </ListItemButton>
          </Box>
          <Box sx={{display: 'flex', py: '12px', m: '0 16px'}}>
            <ListItemButton sx={{p: '0'}}>
              <Avatar sx={{width: 18, height: 18, bgcolor: '#646361'}}>
                <GamepadIcon sx={{width: 18, height: 18}}/>
              </Avatar>
              <Typography variant='body2' sx={{px: '6px', 
                fontSize: '.85rem', fontWeight: '500'}}>
                Gaming
              </Typography>
            </ListItemButton>
          </Box>
        </Stack>
        <Box sx={{position: 'absolute', bottom: '0', m: '8px 16px'}}>
          {user ? (
            <Button variant='contained'
              sx={{bgcolor: '#ff8f00'}} onClick={logOut}
            >
              Log Out
            </Button>
          ) : (
            <Button variant='contained' 
              onClick={() => navigate('/login')}
              sx={{bgcolor: '#ff8f00'}}
            >
              Login
            </Button>
          )}
        </Box>
      </Stack>
    </Drawer>
  );
};
