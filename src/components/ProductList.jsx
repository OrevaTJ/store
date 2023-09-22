import { Product } from './Product'
import { Loading } from './Loading'
import { useGlobalContext } from '../../Context'
import { Stack, Typography, Container, Grid } from '@mui/material'

export const ProductList = () => {
    const { products, loading } = useGlobalContext()

    if(loading) {
        return <Loading />
    }

    if(products.length < 1) {
        return (
        <Typography variant='h3'
            sx={{textAlign: 'center',
            textTransform: 'capitalize',
            mb: '3rem', mt: '1rem'
        }}>
            no products to display
        </Typography>
        )
    }

  return (
    <Stack sx={{bgcolor: '#f7f7f7', borderRadius: '0.25rem', m: '0 1rem 2rem' }}>
        <Typography variant='h3'
            sx={{textAlign: 'center',
            textTransform: 'capitalize',
            mt: '1rem',
        }}>
            Featured Products
        </Typography>
        <Typography variant='body1'
            sx={{textAlign: 'center',
            textTransform: 'capitalize',
            mb: '3rem', mt: '1rem'
        }}>
            summer collection new modern design
        </Typography>
        <Container sx={{maxHeight: '100%'}}>
            <Grid container spacing={1}>
                {
                    products.map(item => {
                        return <Product key={item.id} {...item} />
                    })
                }
            </Grid>
        </Container>
    </Stack>
  )
}
