import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Material UI;
import './connexion.scss';
import { ThemeProvider } from '@emotion/react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { styled } from '@mui/material';
import customTheme from '../../themes/customTheme';
import wallpaper from '../../images/wallpaper.jpg';

function Connexion({ errorMessage, onLoginSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onLoginSubmit(email, password);
    setEmail('');
    setPassword('');
  };
  const StyledBody = styled('div')({
    background: { wallpaper },
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,

  });
  return (
    <div className="div-login">
      <ThemeProvider theme={customTheme}>
        <StyledBody />
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              padding: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              bgcolor: '#E2D6D7',
              borderRadius: 2,

            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#9C27B0' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" />
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={((event) => setEmail(event.target.value))}
                {...(errorMessage.length > 0 ? {
                  error: true,
                  helperText: errorMessage,
                } : {})}
              />
              <TextField
                color="primary"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={((event) => setPassword(event.target.value))}
                {...(errorMessage.length > 0 ? {
                  error: true,
                  helperText: errorMessage,
                } : {})}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Connecter
              </Button>

            </Box>
          </Box>

        </Container>
      </ThemeProvider>
    </div>
  );
}

Connexion.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  onLoginSubmit: PropTypes.func.isRequired,
};

export default React.memo(Connexion);
