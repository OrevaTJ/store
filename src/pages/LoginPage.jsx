import { useState } from 'react'
import { TextField, Button, Container, Typography, Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'
import { 
  getAuth, 
  signInWithEmailAndPassword 
} from 'firebase/auth'

  

export const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()

    const login = async (event) => {
        event.preventDefault();
        try {
            await signInWithEmailAndPassword(getAuth(), email, password)
            navigate('/profile')
        } catch (error) {
            setError(error.message)   
        }
    }

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };

  return (
    <Container maxWidth="sm"
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '80vh',
          }}
    >
      <form onSubmit={login}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        {error && <Typography variant="h6" align="center" gutterBottom>
          {error}
        </Typography>}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Email"
              fullWidth
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              fullWidth
              type="password"
              variant="outlined"
              value={password}
              onChange={handlePasswordChange}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: '20px' }}
        >
          Log In
        </Button>
        <Typography variant="body2" style={{ marginTop: '10px' }}>
          Don't have an account? <Link to="/create-account">Sign Up</Link>
        </Typography>
      </form>
    </Container>



    // <div>
    //     <h1 className="text-center">Login</h1><br/>
    //     {error && <p className='error'>{error}</p>}
    //     <input
    //         placeholder='Enter email'
    //         value={email}
    //         onChange={e => setEmail(e.target.value)}
    //         type='text' />
    //     <input
    //         placeholder='Enter Password'
    //         value={password}
    //         onChange={e => setPassword(e.target.value)}
    //         type='password'/>
    //     <button onClick={login}>Log in</button>
    //     <Link to="/create-account" >Sign up here!</Link>
    // </div>
  )
}
