import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Main from 'layouts/Main';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Container from 'components/Container';
import UserCard from 'components/UserCard';
import SimpleCentered from 'components/SimpleCentered';

import { Gallery } from './components';
import RatingProduct from 'components/RatingProduct';

const links = [
  {
    href: '#',
    title: 'หน้าแรก',
    isActive: false,
  },
  {
    href: '#',
    title: 'หมวดหมู่งาน',
    isActive: false,
  },
  {
    href: '#',
    title: 'งานทั่วไป',
    isActive: true,
  },
];

const mock = [
  {
    price: '999',
    features: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit', 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'Ut enim ad minim veniam', 'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'],
  },
];

const AboutSideCover = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  return (
    <Main>
      <Box bgcolor={'alternate.main'}>
        <Container paddingY={2}>
          <Breadcrumbs aria-label="breadcrumb">
            {links.map((link, index) => (
              <span key={index}>
                {link.isActive ? (
                  <Typography color="text.primary">{link.title}</Typography>
                ) : (
                  <Link
                    sx={{
                      fontWeight: 700,
                      textDecoration: 'none',
                    }}
                  >
                    {link.title}
                  </Link>
                )}
              </span>
            ))}
          </Breadcrumbs>
        </Container>
      </Box>
      <Container>
        <Gallery />
      </Container>
      <Container>
        <Grid container spacing={isMd ? 4 : 2}>
          <Grid item xs={12} md={8}>
            <Box marginBottom={3}>
              <Typography color="text.primary" variant={'h5'} fontWeight={700} gutterBottom>
                Lorem ipsum dolor sit amet
              </Typography>
              <Typography component={'p'}>
                Aenean gravida est nec diam suscipit iaculis. Praesent urna velit,
                auctor nec turpis et, vehicula lobortis sem. Vivamus convallis mi
                sagittis eleifend laoreet. Praesent vitae venenatis enim. Nulla
                tincidunt felis et lectus rhoncus laoreet.
              </Typography>
              <Grid container spacing={1} sx={{ marginTop: 1 }}>
                {[
                  'Lorem ipsum dolor sit amet',
                  'consectetur adipiscing elit',
                  'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                  'Ut enim ad minim veniam',
                  'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
                ].map((item, i) => (
                  <Grid item xs={12} key={i}>
                    <Box
                      component={ListItem}
                      disableGutters
                      width={'auto'}
                      padding={0}
                    >
                      <Box
                        component={ListItemAvatar}
                        minWidth={'auto !important'}
                        marginRight={2}
                      >
                        <Box
                          component={Avatar}
                          bgcolor={theme.palette.secondary.main}
                          width={20}
                          height={20}
                        >
                          <svg
                            width={12}
                            height={12}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Box>
                      </Box>
                      <ListItemText primary={item} />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
            <Container maxWidth={'600px !important'}>
              <Divider />
            </Container>
            <Box>
              <UserCard />
            </Box>
            <Box>
              <SimpleCentered />
            </Box>
            <Container maxWidth={'600px !important'}>
              <Divider />
            </Container>
            <Box>
              <RatingProduct />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container spacing={isMd ? 4 : 2} direction="column">
              <Grid item xs={12}>
                <Box component={Card} variant={'outlined'}>
                  <CardContent>
                    <Box
                      marginBottom={4}
                      display={'flex'}
                      flexDirection={'column'}
                      alignItems={'center'}
                    >
                      <Box display={'flex'} alignItems={'flex-start'}>
                        <Typography variant={'h4'} color={'primary'}>
                          <Box
                            component={'span'}
                            fontWeight={600}
                            marginRight={1 / 2}
                          >
                            ฿
                          </Box>
                        </Typography>
                        <Typography variant={'h2'} color={'primary'} gutterBottom>
                          <Box component={'span'} fontWeight={600}>
                            {mock[0].price}
                          </Box>
                        </Typography>
                      </Box>
                      <Grid container spacing={1} sx={{ marginTop: 1 }}>
                        {[
                          'Lorem ipsum dolor sit amet',
                          'consectetur adipiscing elit',
                          'sed do eiusmod tempor incididunt',
                          'Ut enim ad minim veniam',
                        ].map((item, i) => (
                          <Grid item xs={12} key={i}>
                            <Box
                              component={ListItem}
                              disableGutters
                              width={'auto'}
                              padding={0}
                            >
                              <Box
                                component={ListItemAvatar}
                                minWidth={'auto !important'}
                                marginRight={2}
                              >
                                <Box
                                  component={Avatar}
                                  bgcolor={theme.palette.primary.main}
                                  width={20}
                                  height={20}
                                >
                                  <svg
                                    width={12}
                                    height={12}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </Box>
                              </Box>
                              <ListItemText primary={item} />
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      size="large"
                    >
                      สนใจจ้างงาน
                    </Button>
                  </CardContent>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Main>
  );
};

export default AboutSideCover;
