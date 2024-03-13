import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import avatar from 'assets/images/users/profile.jpg';

export default function Profile() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Geraldo" src={avatar} sx={{ width: 112, height: 112 }} />
    </Stack>
  );
}