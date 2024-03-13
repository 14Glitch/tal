// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from '../../components/MainCard';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import support from 'assets/images/icons/support.png'

export default function Support() {
  return (
    <MainCard title="Suporte Técnico 24hs">
    <Typography variant="body2">
      Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif ad
      minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in reprehended
      in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa qui officiate
      descent molls anim id est labours.
    </Typography>
    <Stack direction="row" spacing={2}>
      <Avatar alt="Suporte Técnico" src={support} sx={{ width: 112, height: 112 }} />
      <Typography variant="h3">+55 34 991364924</Typography>
    </Stack>
  </MainCard>
    
  );
}