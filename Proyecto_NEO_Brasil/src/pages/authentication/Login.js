// material-ui
import { Grid, Stack } from '@mui/material';

// project import
import AuthLogin from './auth-forms/AuthLogin';
import AuthWrapper from './AuthWrapper';

import logo from 'assets/images/logos/icon-gradient.png';


// ================================|| LOGIN ||================================ //

const Login = ({ setAuth }) => (
  <AuthWrapper>
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="center" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
          <img src={logo} alt="Tal - Da saúde ao lazer." width="60" />
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <AuthLogin setAuth={setAuth} />
      </Grid>
    </Grid>
  </AuthWrapper>
);

export default Login;
