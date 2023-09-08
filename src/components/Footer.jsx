import { Container, Grid, Typography, Link } from '@mui/material';

export const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: '#333',
      bottom: '0',
      width: '100%',
      color: '#fff', padding: '2rem 0'}}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Your Store
            </Typography>
            <Typography variant="body2" paragraph>
              The best place to shop online.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <ul>
              <li>
                <Link href="/products" color="inherit">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" color="inherit">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" color="inherit">
                  Contact Us
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Customer Service
            </Typography>
            <ul>
              <li>
                <Link href="/faq" color="inherit">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/returns" color="inherit">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/shipping" color="inherit">
                  Shipping Information
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Stay Connected
            </Typography>
            <ul>
              <li>
                <Link href="/newsletter" color="inherit">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link href="/social" color="inherit">
                  Social Media
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};
