import { Link, NavLink, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import {
  Hidden,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Box,
  Stack,
  Button,
  InputBase,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled, alpha } from '@mui/material/styles';
import { useState } from 'react';
import { useGlobalContext } from '../../Context';
import { useUser } from '../hooks/useUser';

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { setIsDrawerOpen, cartAmount } = useGlobalContext();
  const { user } = useUser();

  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    signOut(getAuth())
    navigate('/')
  }

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));


  return (
    <AppBar component='nav'
      sx={{bgcolor: '#f7f7f7', color: '#525151'}}>
      <Toolbar style={{margin: '0 .2rem', display: 'flex',
        justifyContent: 'space-between'}}>
        <Hidden mdUp>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            // sx={{ mr: 2 }}
            onClick={() => setIsDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Link to="/" >
          <Box sx={{display: 'flex', alignItems: 'center', flexGrow: 1}}>
            <Typography
              variant="h4"
              component="div"
              color="primary.contrastText"
              sx={{ flexGrow: 1, fontWeight: '800', color: '#525151' }}
            >
                GiTi 
            </Typography>
            <AcUnitIcon sx={{color: '#ff8f00', fontWeight: '800'}} />
          </Box>
        </Link>
        <Hidden smUp>
          <SearchIcon sx={{mx: '1.5rem'}}/>
        </Hidden>
        <Hidden smDown>
        <Search sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
          <Box sx={{display: 'flex', width: '60%'}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Box>
          <Button variant='contained' size='small' 
            sx={{bgcolor: '#ff8f00', height: ''}}
          >
            Search
          </Button>
        </Search>
        </Hidden>
        <Stack direction="row" spacing={2} 
        sx={{ pl: '2rem', pr: '.7rem'}}>
          <Button
            id="profile-button"
            onClick={handleClick}
            aria-controls={open ? 'profile-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? true : undefined}
            endIcon={<KeyboardArrowDownIcon />}
            sx={{color: '#525151', fontWeight: '600'}}
          >
            <AccountCircleIcon sx={{color: '#ff8f00'}}/> Account
          </Button>
        </Stack>
        <Menu
          id="profile-menu"
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{ 'aria-labelledby': 'profile-button' }}
          onClose={handleClose}
        >
          <MenuItem>
            <Link to={user ? '/profile' : '/login'}>My Account</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>Orders</MenuItem>
          <MenuItem onClick={handleClose}>Inbox</MenuItem>
          <MenuItem onClick={handleClose}>Vouchers</MenuItem>
          <MenuItem onClick={handleClose}>
            {user ? (
              <Button variant='contained' onClick={logOut}
              sx={{bgcolor: '#ff8f00'}}>
                Log Out
              </Button>
            ) : (
              <Button onClick={() => navigate('/login')}
              sx={{bgcolor: '#ff8f00'}}>
                Login
              </Button>
            )}
          </MenuItem>
        </Menu>
        <Link to={user ? '/cart' : '/login'}>
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              fontWeight: '600',
              pr: {sm: '26px'}
            }}
          >
            <IconButton aria-label="shopping cart">
              <Badge badgeContent={user ? cartAmount : 0} color="error"
              sx={{fontWeight: '600', color: 'error'}}>
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <Typography variant='body2' sx={{color: '#525151', fontWeight: '600'}}>Cart</Typography>
          </Stack>
        </Link>
      </Toolbar>
    </AppBar>
  );
};