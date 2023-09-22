import { Stack, Box, Typography, TextField, Button } from "@mui/material";

export const NewsLetter = () => {
  return (
    <Stack sx={{display: 'flex', justifyContent: 'space-between',
        flexWrap: 'wrap', alignItems: 'center', flexDirection: 'row',
        bgcolor: '#fff', height: '150px', mt:'28px', p: '16px 24px'}}>
        <Box component='div'>
            <Typography variant='h5' sx={{textTransform: 'capitalize',
            fontSize: '22px', fontWeight: '700', color: '#525151'}}>
                Sign up for newsletters
            </Typography>
            <Typography variant='body2' sx={{textTransform: 'capitalize',
            fontSize: '14px', fontWeight: '600', color: '#677b92'}}>
                Get E-mail updates about our latest shop and  
                <Box component='span' sx={{color: '#ff8f00'}}> special offers.</Box>
            </Typography>
        </Box>
        <Box component='form' sx={{display: 'flex', pt: '16px', width: {md: '40%'}}}>
            <TextField placeholder='E-mail address' variant="outlined" size='small'
            sx={{fontSize: '14px', borderRadius: '4px', 
            bgcolor: '#fff', borderTopRightRadius: '0',
            borderBottomRightRadius: '0', width: '70%'}}/>
            <Button variant='contained' size='small'
            sx={{bgcolor: '#ff8f00', borderTopLeftRadius: '0',
            borderBottomLeftRadius: '0'}}>
                Sign Up
            </Button>
        </Box>
    </Stack>
  )
}
