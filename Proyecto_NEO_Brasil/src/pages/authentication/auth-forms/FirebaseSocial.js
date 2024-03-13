// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { useMediaQuery, Stack } from '@mui/material';

// assets
import neo from 'assets/images/logos/neo.png';
import mediquo from 'assets/images/logos/mediquo.png';

// Styled Components
const Logoneo = styled('img')(() => ({
  width: '20%',
}))

const Logomed = styled('img')(() => ({
  width: '20%',
  height: '40%',
}))

// ==============================|| FIREBASE - SOCIAL BUTTON ||============================== //

const FirebaseSocial = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack
      direction="row"
      spacing={matchDownSM ? 1 : 2}
      justifyContent={'center'}
      alignItems="center"
      sx={{ '& .MuiButton-startIcon': { mr: matchDownSM ? 0 : 1, ml: matchDownSM ? 0 : -0.5 } }}
    >
      <Logoneo alt='neo gateway' src={neo} />
      <div>+</div>
      <Logomed alt='mediquo' src={mediquo} />
    </Stack>
  );
};

export default FirebaseSocial;
