import { useState } from 'react';
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
  Menu,
  MenuItem,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const Sidebar = () => {
  const { isDrawerOpen, setIsDrawerOpen } = useGlobalContext();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { user } = useUser();

  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
      <Box p={2} width="250px" textAlign="center" role="presentation">
        <Typography variant="h6" component="div">
          GiTi
        </Typography>
      </Box>
      <Stack direction="column" spacing={2} sx={{ px: '2rem' }}>
        <Button component={Link} to="/" style={{ color: 'black' }}>
          Home
        </Button>
        <Button component={Link} to="/about" style={{ color: 'black' }}>
          About
        </Button>
        <Button component={Link} to="/contact" style={{ color: 'black' }}>
          Contact
        </Button>
        <Button
          sx={{ color: 'black' }}
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
      </Menu>
      <Box>
        {user ? (
          <Button onClick={logOut}>Log Out</Button>
        ) : (
          <Button onClick={() => navigate('/login')}>Login</Button>
        )}
      </Box>
    </Drawer>
  );
};
