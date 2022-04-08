import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import VerifiedIcon from '@mui/icons-material/Verified';
import NextLink from 'next/link';

const mock = {
  avatar: 'https://assets.maccarianagency.com/avatars/img5.jpg',
  name: 'Clara Bertoletti',
  isVerified: true,
  title: 'Freelance',
  username: '@clara.bertoletti',
  href: '#',
  location: 'Bangkok',
  website: 'www.example.com',
  email: 'mail@example.com',
  bio:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};

const UserCard = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        p: { xs: 2, md: 4 },
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        width: 1,
        height: 1,
      }}
    >
      <Stack
        spacing={2}
        width={{ xs: 1, sm: 'auto' }}
        alignItems={'center'}
      >
        <Avatar
          src={'/avatar-03.png'}
          variant={'circular'}
          sx={{
            width: theme.spacing(20),
            height: theme.spacing(20),
          }}
        />
        {/* <NextLink href={'/users'}>
          <Button
            variant={'contained'}
            color={'primary'}
            fullWidth
          >
            รายละเอียด
          </Button>
        </NextLink> */}
      </Stack>
      <Box marginLeft={{ xs: 0, sm: 4 }} marginTop={{ xs: 4, sm: 0 }}>
        <Box display={'flex'} alignItems={'center'} marginBottom={1}>
          <NextLink href={'/users'}>
            <Typography fontWeight={700} variant={'h5'} marginRight={1} sx={{ cursor: 'pointer' }}>
              {mock.name}
            </Typography>
          </NextLink>
          {mock.isVerified && <VerifiedIcon color='success' />}
        </Box>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
          <Typography>{mock.title}</Typography>
        </Stack>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 1, md: 2 }}
          marginY={2}
          alignItems={'flex-start'}
        >
          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Box
              component={'svg'}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width={18}
              height={18}
              color={'primary.dark'}
              marginRight={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </Box>
            <Typography color={'primary'} variant={'subtitle2'}>
              {mock.location}
            </Typography>
          </Box>
          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Box
              component={'svg'}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width={18}
              height={18}
              color={'primary.dark'}
              marginRight={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </Box>
            <Typography color={'primary'} variant={'subtitle2'}>
              {mock.email}
            </Typography>
          </Box>
        </Stack>
        <Typography>
          {mock.bio}
        </Typography>
      </Box>
    </Box>
  );
};

export default UserCard;
