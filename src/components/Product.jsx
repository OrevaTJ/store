import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../Context'
import { useUser } from '../hooks/useUser'
import { Typography, 
    Grid, Card, 
    CardMedia, 
    CardContent, 
    CardActions, 
    Button,
    Rating,
    Box
} from '@mui/material'

export const Product = ({ id, title, price, image, rating }) => {
    const {addToCart} = useGlobalContext()
    const { user } = useUser();
    const { rate, count } = rating

  return (
    <Grid item xs={6} md={4} lg={3}>
        <Card elevation={0} sx={{ maxWidth: 455, height: 384, 
        bgcolor: '#f7f7f7',}}
        >
            <Link to={`/singleItem/${id}`} style={{paddingBottom: '0'}}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="210"
                image={image}
                sx={{borderRadius: '0.35rem'}}
            />
            <CardContent sx={{p: '.3' }}>
                <Box sx={{display: 'flex', flexDirection: 'column', 
                m: '0, 4px', textOverflow: 'hidden'}}>
                    <Typography variant='body2'>
                        {title.substring(0, 25)}...
                    </Typography>
                    <Typography variant='body2'>₦{price}</Typography>
                </Box>
                <Box sx={{display: 'flex', m: '0, 4px'}}>
                    <Rating name="read-only" value={rate} readOnly />
                    <Typography>({count})</Typography>
                </Box>
            </CardContent>
            </Link>
            <CardActions sx={{py: '0 '}}>
                <Button variant='contained'
                    sx={{bgcolor: '#ff8f00', width: '100%' }}
                    onClick={user ? () => addToCart(id) : null}>
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    </Grid>
  )
}
