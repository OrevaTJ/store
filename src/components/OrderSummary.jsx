import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useGlobalContext } from "../../Context";
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';

export default function OrderSummaryItem() {
    const { totalPrice } = useGlobalContext()
    const shippingCost = parseFloat((totalPrice / 20).toFixed(2))
    const total = totalPrice + shippingCost

    const config = {
      public_key: `${import.meta.env.VITE_API_KEY}`,
      tx_ref: Date.now(),
      amount: total,
      currency: 'NGN',
      payment_options: 'card,mobilemoney,ussd',
      customer: {
        email: 'khemical51@gmail.com',
        phone_number: '',
        name: '',
      },
      customizations: {
        title: 'GiTi store',
        description: 'Order Payment',
        logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
      },
    };
  
    const fwConfig = {
      ...config,
      text: 'Pay with Flutterwave!',
      callback: (response) => {
         console.log(response);
        closePaymentModal() // this will close the modal programmatically
      },
      onClose: () => {
        console.log('user close')
      },
    };

  return (
    <Card sx={{position: 'sticky', top: '1rem', minWidth: '275px'}} elevation={15}>
      <CardContent >
        <Typography
          sx={{fontSize: '12px'}}
          color="text.secondary"
          gutterBottom
        >
          Shopping Cart
        </Typography>
        <Typography variant="div" component="h1">
          Order Summary
        </Typography>
        <Typography variant="subtitle2">
          <hr />
        </Typography>
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Typography variant="body1" component="div">
              Shipping
            </Typography>
            <Typography variant="h6" component="div">
              { shippingCost }
            </Typography>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Typography variant="body1" component="div">
              Total
            </Typography>
            <Typography variant="h6" component="div">
            ₦{ total }
            </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <FlutterWaveButton {...fwConfig} />
      </CardActions>
    </Card>
  );
}