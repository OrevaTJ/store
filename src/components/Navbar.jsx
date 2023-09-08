import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import {
  Hidden,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Stack,
  Button,
  InputBase,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
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
    <AppBar>
      <Toolbar>
        <Hidden mdUp>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => setIsDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Typography
          variant="h5"
          component="div"
          color="primary.contrastText"
          sx={{ flexGrow: 1 }}
        >
          <Link to="/" style={{ color: 'white' }}>
            GiTi
          </Link>
        </Typography>
        <Search sx={{ flexGrow: 1 }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <Hidden mdDown>
          <Stack direction="row" spacing={2} sx={{ px: '2rem' }}>
            <Button component={Link} to="/" style={{ color: 'white' }}>
              Home
            </Button>
            <Button component={Link} to="/about" style={{ color: 'white' }}>
              About
            </Button>
            <Button component={Link} to="/contact" style={{ color: 'white' }}>
              Contact
            </Button>
            <Button
              sx={{ color: 'white' }}
              id="profile-button"
              onClick={handleClick}
              aria-controls={open ? 'profile-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? true : undefined}
              endIcon={<KeyboardArrowDownIcon />}
            >
              Profile
            </Button>
          </Stack>
        </Hidden>
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
              <Button onClick={logOut}>Log Out</Button>
            ) : (
              <Button onClick={() => navigate('/login')}>Login</Button>
            )}
          </MenuItem>
        </Menu>
        <Link to={user ? '/cart' : '/login'}>
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              color: 'white',
            }}
          >
            <IconButton aria-label="shopping cart">
              <Badge badgeContent={user ? cartAmount : 0} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <Typography>Cart</Typography>
          </Stack>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

// import React from 'react'
// import { Searchbar } from './Searchbar'
// import { Link } from 'react-router-dom'
// import { FaBars, FaTimes, FaHome } from 'react-icons/fa'
// import { FcAbout } from 'react-icons/fc'
// import { GrContact } from 'react-icons/gr'
// import { CgProfile } from 'react-icons/cg'
// import { BsCart4 } from 'react-icons/bs'
// import { useGlobalContext } from '../../Context'
// import { useUser } from '../hooks/useUser'

// export const Navbar = () => {
// const {isSidebar, toggleSidebar, cartAmount} = useGlobalContext()
// const { user, isLoading } = useUser()

//   return (
//     <>
//       <nav className='navbar'>
//         <div className="nav-center">
//           <div className='nav-header'>
//             <button className='nav-toggle' onClick={toggleSidebar}>
//               <FaBars />
//             </button>
//             <Link to='/'>
//               <img src='#' alt='Logo' />
//             </Link>
//           </div>
//           <div className='links-container'>
//             <ul className='nav-links'>
//               <li>
//                 <Link to='/'>Home</Link>
//                 <Link to='/about'>About</Link>
//                 <Link to='/contact'>Contact</Link>
//               </li>
//             </ul>
//           </div>
//           <div className='nav-end'>
//             <Link to={user ? '/profile' : '/login'}>
//               <CgProfile />
//             </Link>
//             <div className='nav-cart'>
//               <Link to={user ? '/cart' : '/login'}>
//                 {/* <h3>Cart</h3> */}
//                 {/* <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
//                   <path d='M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z' />
//                 </svg> */}
//                 <BsCart4 />
//                 <div className='amount-container'>
//                   <p className='total-amount'>{cartAmount}</p>
//                 </div>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>
// </>
//   )
// }
