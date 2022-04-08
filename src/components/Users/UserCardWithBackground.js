import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import VerifiedIcon from '@mui/icons-material/Verified';

import Container from 'components/Container';

const mock = {
  avatar: 'avatar-03.png',
  name: 'Clara Bertoletti',
  isVerified: true,
  title: 'Freelance',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  followers: 84,
  href: '#',
  location: 'กรุงเทพมหานคร',
  website: 'www.example.com',
  email: 'mail@example.com',
};

const UserCardWithBackground = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        background: 'transparent',
        backgroundImage: `linear-gradient(0deg, ${theme.palette.background.paper} 40%, ${theme.palette.primary.main} 0%)`,
      }}
    >
      <Container maxWidth={800}>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <Avatar
            src={mock.avatar}
            variant={'circular'}
            sx={{
              width: { xs: theme.spacing(16), sm: theme.spacing(20) },
              height: { xs: theme.spacing(16), sm: theme.spacing(20) },
              border: `8px solid ${theme.palette.background.paper}`,
            }}
          />
          <Card
            sx={{
              p: { xs: 2, md: 4 },
              marginTop: theme.spacing(-10),
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: 1,
              height: 1,
            }}
          >
            <Box marginTop={2}>
              <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                marginTop={2}
              >
                <Typography fontWeight={700} variant={'h4'} marginRight={1}>
                  {mock.name}
                </Typography>
                {mock.isVerified && <VerifiedIcon color='success' />}
              </Box>
              <Typography
                color={'text.secondary'}
                variant={'h6'}
                align={'center'}
              >
                {mock.title}
              </Typography>
              <Stack spacing={2} marginTop={4} width={1} alignItems={'center'}>
                <Stack
                  direction={{ xs: 'column', md: 'row' }}
                  spacing={{ xs: 1, md: 2 }}
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
              </Stack>
              <Box sx={{ py: 2 }}>
                <Typography>
                  {mock.bio}
                </Typography>
              </Box>
            </Box>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default UserCardWithBackground;
