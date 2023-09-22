import { useGlobalContext } from '../../Context'
import { Container,
    Typography, 
    Grid, 
    Box 
} from "@mui/material";
import OrderSummaryItem from "../components/OrderSummary";
import ShoppingCartItem from "../components/ShoppingCartItem";



export const Cart = () => {
    const { cartItems, clearCart, totalPrice } = useGlobalContext()

    if(cartItems.length === 0) {
        return (
            <Box 
                display="flex"
                flexDirection='column'
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
            >
                <Typography variant='h3'>Cart items</Typography>
                <Typography variant='h5'>your cart is empty</Typography>
            </Box>
        )
    }

  return (
    <Container fixed sx={{p: '5rem 0'}}>
      <Grid container spacing={3}>
        <Grid item sm={12} md={7} lg={7}>
          {
              cartItems.map((item) => {
                  const {id} = item
                  return <ShoppingCartItem key={id} {...item}/>
              })
          }
        </Grid>
        <Grid item sm={12} md={5} lg={5}>
          <OrderSummaryItem />
        </Grid>
      </Grid>
    </Container>
  );
}