import { Divider, Typography, Stack, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

export const Profile = () => {

  return (
    <Stack
      sx={{
        m: '5rem auto',
        minWidth: '350px'
      }}
    >
      <Paper variant="outlined" square elevation={8} sx={{m: '0 10vh', }}>
        <Typography variant='h5' p={2}>
          Account Overview
        </Typography>
        <Divider />
        <Grid container spacing={2} textAlign='left' p={2}>
          <Grid item xs={12} sm={12} md={6}>
            <Box border={1} borderColor={'rgba(0, 0, 0, 0.12)'} height='200px'>
              <Typography variant="h6" p={1} gutterBottom>
                Account Details
              </Typography>
              <Divider />
              <Box p={1}>
                <Typography variant="body1" paragraph>
                  Taigbenu Oreva
                </Typography>
                <Typography variant="body2" paragraph>
                  khemical51@gmail.com
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box border={1} borderColor={'rgba(0, 0, 0, 0.12)'} height='200px'>
              <Typography variant="h6" p={1} gutterBottom>
                Address Book
              </Typography>
              <Divider />
              <Box p={1}>
                <Typography variant="body1" paragraph>
                  Your Default Shipping Address
                </Typography>
                <Box>
                  <Typography variant="body2" paragraph p={0} m={0}>Oreva Taigbenu</Typography>
                  <Typography variant="body2" paragraph p={0} m={0}>Opposite spc, Asaba, Delta State.</Typography>
                  <Typography variant="body2" paragraph p={0} m={0}>+8103972969</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box border={1} borderColor={'rgba(4, 2, 24, 0.12)'} height='200px'>
              <Typography variant="h6" p={1} gutterBottom>
                Store Credit
              </Typography>
              <Divider />
              <Box p={1} display='flex' color={'rgb(7, 57, 133)'}>
                <AccountBalanceWalletIcon sx={{pr: '4px'}}/>
                <Typography variant="h2" fontSize={18} paragraph>
                  ₦ 0.00
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box border={1} borderColor={'rgba(0, 0, 0, 0.12)'} height='200px'>
              <Typography variant="h6" p={1} gutterBottom>
                Newsletter Preference
              </Typography>
              <Divider />
              <Box p={1}>
              <Typography variant="body2" paragraph>
                You are currently no subscribed to any of our newsletter
              </Typography>
              <Typography variant='body2' bottom={1}
                sx={{m: '68px 0', color: '#ff8f00'}}
              >
                EDIT NEWSLETTER PREFERENCE
              </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Stack>
  );
};
