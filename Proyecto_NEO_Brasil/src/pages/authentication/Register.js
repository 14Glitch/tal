import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import FirebaseRegister from './auth-forms/AuthRegister';
import AuthWrapper from './AuthWrapper';

// ================================|| REGISTER ||================================ //

const Register = () => {

  const { user } = useSelector((state) => state.auth);
  console.log('item',user)

  return (<AuthWrapper>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
          <Typography variant="h3">Cadastro</Typography>
          <Typography component={Link} to="/login" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
            Já tem um conta?
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <FirebaseRegister code={user?.subscriber_id || ""} />
      </Grid>
    </Grid>
  </AuthWrapper>)
};

export default Register;
