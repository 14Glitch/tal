import PropTypes from 'prop-types';

// material-ui
import { Box, Grid, Typography, Stack, Container } from '@mui/material';

// project import
import AuthCard from './AuthCard';
import Logo from 'components/Logo';
import AuthFooter from 'components/cards/AuthFooter';

// assets
import AuthBackground from 'assets/images/auth/AuthBackground';

// ==============================|| AUTHENTICATION - WRAPPER ||============================== //

const AuthWrapper = ({ children }) => (
  <Box sx={{ minHeight: '100vh' }} className="container-login">
    <Grid
      container
      direction="column"
      justifyContent="flex-end"
      sx={{
        minHeight: '100vh'
      }}
    >
      <Container maxWidth="xl" sx={{ mt: 1 }}>
        <Logo />
      </Container>
      <Grid item xs={12}>
        <Grid
          item
          xs={12}
          container
          justifyContent="center"
          alignItems="center"
          sx={{ minHeight: { xs: 'calc(100vh - 145px)', md: 'calc(100vh - 112px)' } }}
        >
          <Grid item>
            <AuthCard>{children}</AuthCard>

            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Typography variant="caption" color="primary">v1.0.5</Typography>
            </Stack>

          </Grid>

        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ m: 2, mt: .5 }}>
        <AuthFooter />
      </Grid>
    </Grid>
    <AuthBackground />
  </Box>
);

AuthWrapper.propTypes = {
  children: PropTypes.node
};

export default AuthWrapper;