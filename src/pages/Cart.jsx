import React from "react";
import { useGlobalContext } from '../../Context'
import { Container,
    CssBaseline,
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
    <React.Fragment>
      <CssBaseline />
      <Container fixed sx={{p: '5rem 0'}}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={7} lg={7}>
            {
                cartItems.map((item) => {
                    const {id} = item
                    return <ShoppingCartItem key={id} {...item}/>
                })
            }
          </Grid>
          <Grid item xs={12} sm={6} md={5} lg={5}>
            <OrderSummaryItem />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

// import React from 'react'
// import { CartItem } from '../components/CartItem'
// import { useGlobalContext } from '../../Context'

// export const Cart = () => {
//     const { cartItems, clearCart, totalPrice } = useGlobalContext()
//     console.log(cartItems)

//     if(cartItems.length === 0) {
//         return (
//             <section>
//                 <header>
//                     <h2>Cart items</h2>
//                     <h4>your cart is empty</h4>
//                 </header>
//             </section>
//         )
//     }

//     if(!cartItems) {
//         return <h2 className='section-title'>no product to display</h2>
//       }

//     return (
//       <section className='cart'>
//           <header>
//               <h2>cart items</h2>
//           </header>
//           <div>
//             {
//                 cartItems.map((item) => {
//                     const {id} = item
//                     return <CartItem key={id} {...item}/>
//                 })
//             }
//           </div>
//           <footer>
//             <hr />
//             <div>
//                 <h4>
//                     {totalPrice} <span>$</span>
//                 </h4>
//             </div>
//             <button className='btn clear-btn'
//                 onClick={clearCart}
//             >
//                 clear cart
//             </button>
//           </footer>
//       </section>
//     )
// }
