import {
  IconButton,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Box,
  Stack,
} from '@mui/material';
import Divider from '@mui/joy/Divider';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { useGlobalContext } from '../../Context';

export default function ShoppingCartItem({
  title,
  image,
  price,
  id,
  amount,
  category,
}) {
  const { remove, increase, decrease } = useGlobalContext();

  return (
    <Card sx={{ display: 'flex', mt: '15px', height: '220px' }}>
      <CardMedia
        component="img"
        sx={{ width: '151px', height: '130px' }}
        image={image}
        alt={title}
      />
      <CardContent>
        <Stack display='flex' flexDirection='row'>
            <Box>
                <Typography color="text.secondary" gutterBottom>
                  {category}
                </Typography>
                <Typography variant="div" component="h2">
                  {title.substring(0, 24)}...
                </Typography>
                <Divider sx={{ my: 2 }} />
            </Box>
            <DeleteIcon 
                sx={{ color: 'error.main' }}
                onClick={() => remove(id)} />
        </Stack>
        <Box display="flex" flexDirection="column" mb={4}>
          <Typography
            variant="body1"
            component="div"
            style={{ fontWeight: 'bold' }}
          >
            ₦{price}
          </Typography>
          <CardActions direction="row" alignItems="center"
            sx={{height: '1rem', p: '0'}}>
            <Typography>Quantity: </Typography>
            <IconButton aria-label="delete" onClick={() => decrease(id)}>
              <RemoveCircleIcon />
            </IconButton>
            <Typography variant="h6" m={2}>
              {amount}
            </Typography>
            <IconButton aria-label="delete" onClick={() => increase(id)}>
              <AddCircleIcon />
            </IconButton>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  );
}
