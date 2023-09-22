import { Container, 
  Grid, 
  Typography, 
  Stack, 
  List,
  Link,
  ListItem,
  Box,
 } from '@mui/material';
 import Divider from '@mui/joy/Divider';
 import InstagramIcon from '@mui/icons-material/Instagram';
 import TwitterIcon from '@mui/icons-material/Twitter';
 import FacebookIcon from '@mui/icons-material/Facebook';
 import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Footer = () => {
   // Get the current date
   const currentDate = new Date();

   // Format the date as "YYYY-MM-DD"
   const formattedDate = `${currentDate.getFullYear()}`
    
  return (
    <footer style={{ backgroundColor: '#333', color: '#b1abab', 
      padding: '2rem 0', width: '100%',
      fontSize: '18px', textAlign: 'center', 
      position: 'absolute', right: '0', left: '0', bottom: '0'}}>
      <Container maxWidth="lg">
        <Grid container spacing={1} textAlign='left'>
          <Grid item xs={4} sm={3}>
            <Typography variant="h4" pb={0} gutterBottom
            component="div"
            color="primary.contrastText"
            sx={{ flexGrow: 1, fontWeight: '800', color: '#ddcdcd' }}>
              GiTi
            </Typography>
            <Typography variant="body2" paragraph>
              The best place to shop online.
            </Typography>
          </Grid>
          <Grid item xs={4} sm={3}>
            <Typography variant="body1" pb={0} gutterBottom
            sx={{color: '#f3e4e4'}}>
              Quick Links
            </Typography>
            <List sx={{p: '0'}}>
              <ListItem>
                <Link href="#" color="inherit" variant="body2">
                  Products
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/about" color="inherit" variant="body2">
                  About Us
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/contact" color="inherit" variant="body2">
                  Contact Us
                </Link>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={4} sm={3}>
            <Typography variant="body1" pb={0} gutterBottom
            sx={{color: '#f3e4e4'}}>
              Customer Service
            </Typography>
            <List sx={{p: '0'}}>
              <ListItem>
                <Link href="/#" color="inherit" variant="body2">
                  FAQ
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/#" color="inherit" variant="body2">
                  Returns & Exchanges
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/#" color="inherit" variant="body2">
                  Shipping Information
                </Link>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={4} sm={3}>
            <Typography variant="body1" pb={0} gutterBottom
            sx={{color: '#f3e4e4'}}>
              Stay Connected
            </Typography>
            <List sx={{p: '0'}}>
              <ListItem >
                <Link href="/#" color="inherit" variant="body2">
                  Newsletter
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/#" color="inherit" variant="body2">
                  Social Media
                </Link>
              </ListItem>
            </List>
            <Stack display='flex' textAlign='left' justifyContent='center' width={152} py={2}>
              <Typography>Join Us</Typography>
              <Box>
                <FacebookIcon sx={{p: '5px'}}/>
                <InstagramIcon sx={{p: '5px'}}/>
                <TwitterIcon sx={{p: '5px'}}/>
                <LinkedInIcon sx={{p: '5px'}}/>
              </Box>
            </Stack>
          </Grid>
        </Grid>
        <Divider sx={{my: '4px'}}/>
        <Stack >
            {/* Display the current date */}
          <Typography variant="body2" sx={{ mt: '1rem' }}>
            &copy; {formattedDate} <Link href='https://github.com/OrevaTJ' color='inherit'>
              OrevaTJ</Link>. All rights reserved.
          </Typography>
        </Stack>
      </Container>
    </footer>
  );
};
