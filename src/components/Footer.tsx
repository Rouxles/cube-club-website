import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="h6" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://cube.berkeley.edu">
        Rubik's Cube Club at Berkeley
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  const location = useLocation();
  const is404 = location.pathname === "/404";

  if (is404) {
    return null;
  }

  return (
      <Box
        mt={5}
      >
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="lg">
          <Copyright />
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="body2" align="left">
                        We are a student group acting independently of the University of California. We take full responsibility for our organization and this web site.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <a href="https://www.ocf.berkeley.edu" >
                            <img src="http://www.ocf.berkeley.edu/hosting-logos/ocf-hosted-penguin-dark.svg"
                        alt="Hosted by the OCF" style={{border: 0,}} />
                        </a> 
                    </div>
                 
                </Grid>
            </Grid>


            
            
          </Container>
        </Box>
      </Box>
  );
}