import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { Container, Typography, TextField, Button, Grid } from '@mui/material';

export const CreateAccount = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [errorMessage, setErrorMessage] = useState(true)

    // const [formData, setFormData] = useState({
    //   firstName: '',
    //   lastName: '',
    //   email: '',
    //   password: '',
    // });
    
    // const handleInputChange = (event) => {
    //   const { name, value } = event.target;
    //   setFormData({
    //     ...formData,
    //     [name]: value,
    //   });
    // };
    
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
      setErrorMessage(false)
    };

    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
      setErrorMessage(false)
    };

    const handleConfirmPasswordChange = (e) => {
      setConfirmPassword(e.target.value);
      setErrorMessage(false)
    };

    const navigate = useNavigate()

    const createAccount = async (event) => {
        event.preventDefault();
        try {
            if (password !== confirmPassword) {
                setError('Passwords do not match')
                setErrorMessage(true)
                return
            }
            await createUserWithEmailAndPassword(getAuth(), email, password)
            navigate('/')
        } catch (error) {
            setError(error.message)
        }
    }
    
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
            <form onSubmit={createAccount}>
                <Typography variant="h4" gutterBottom>
                  Sign Up
                </Typography>
                {error && errorMessage ? 
                  <Typography variant="h6" align="center" gutterBottom>
                      {error}
                  </Typography> : 
                  <Typography />
                }
                <Grid container spacing={2}>
                {/*  <Grid item xs={12} sm={6}>
                    <TextField
                      name="firstName"
                      label="First Name"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="lastName"
                      label="Last Name"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid> */}
                  <Grid item xs={12}>
                    <TextField
                      name="email"
                      label="Email"
                      variant="outlined"
                      fullWidth
                      type="email"
                      required
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="password"
                      label="Password"
                      variant="outlined"
                      fullWidth
                      type="password"
                      required
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="confirmPassword"
                      label="Confirm Password"
                      variant="outlined"
                      fullWidth
                      type="password"
                      required
                      value={confirmPassword}
                      onChange={handleConfirmPasswordChange}
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
                  Sign Up
                </Button>
                <Typography variant="body2" style={{ marginTop: '10px' }}>
                    Already have an account? <Link to="/login">Login</Link>
                </Typography>
            </form>
        </Container>
    )
}