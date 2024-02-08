import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function SignIn() {
    const [formData, setFormData] = useState({
        email_id: '',
        password: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log(formData);
            const response = await axios.post('http://localhost:4000/auth', formData);

            if (response && response.data) {
                const { email_id, accessToken, userID } = response.data;

                // Store user ID and token in localStorage
                localStorage.setItem('email_id', email_id);
                localStorage.setItem('token', accessToken);
                localStorage.setItem('userID', userID);

                // Retrieve user ID from localStorage
                const userId = localStorage.getItem('userID');
                console.log('Authentication successful:', response.data);
                console.log(userId); // Check if userId is displayed correctly

                // Optionally, you can redirect the user to another page upon successful login
            } else {
                console.error('Authentication error: Response data is undefined');
            }
        } catch (error) {
            console.error('Authentication error:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <ThemeProvider theme={createTheme()}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOpenIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email_id"
                            label="Email Address"
                            name="email_id"
                            autoComplete="email_id"
                            autoFocus
                            InputProps={{ style: { color: 'white' } }} // Set the text color to white
                            value={formData.email_id}
                            onChange={handleChange} // Update form data on change
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            InputProps={{ style: { color: 'white' } }} // Set the text color to white
                            value={formData.password}
                            onChange={handleChange} // Update form data on change
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default SignIn;
