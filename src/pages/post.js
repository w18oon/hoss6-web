import React from 'react';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import Main from 'layouts/Main';
import Container from 'components/Container';

const mock = [
  {
    image: 'HtBlQdxfG9k.jpg',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
    title: 'Eiusmod tempor incididunt',
    author: {
      name: 'Clara Bertoletti',
      avatar: 'avatar-04.png',
    },
    date: '10 Sep',
  },
  {
    image: 'WEWTGkPUVT0.jpg',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus',
    title: 'Sed ut perspiciatis',
    author: {
      name: 'Jhon Anderson',
      avatar: 'avatar-02.png',
    },
    date: '02 Aug',
  },
  {
    image: 'p5i7uyPuHto.jpg',
    description: 'Qui blanditiis praesentium voluptatum deleniti atque corrupti',
    title: 'Unde omnis iste natus',
    author: {
      name: 'Chary Smith',
      avatar: 'avatar-03.png',
    },
    date: '05 Mar',
  },
  {
    image: 'NGGkGzslIaM.jpg',
    description: 'Qui blanditiis praesentium voluptatum deleniti atque corrupti',
    title: 'Unde omnis iste natus',
    author: {
      name: 'Chary Smith',
      avatar: 'avatar-01.png',
    },
    date: '09 Apr',
  },
];

const PostPage = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Main>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Box marginBottom={4}>
            <Typography fontWeight={700} variant={'h4'} gutterBottom>
              โพสต์งาน
            </Typography>
            <Typography color={'text.secondary'}>
              คำบรรยาย : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {mock.map((item, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                {/* <Link href={'/products'}> */}
                <Box
                  display={'block'}
                  width={1}
                  height={1}
                  sx={{
                    cursor: 'pointer',
                    textDecoration: 'none',
                    transition: 'all .2s ease-in-out',
                    '&:hover': {
                      transform: `translateY(-${theme.spacing(1 / 2)})`,
                    },
                  }}
                >
                  <Box
                    component={Card}
                    width={1}
                    height={1}
                    boxShadow={4}
                    display={'flex'}
                    flexDirection={'column'}
                    sx={{ backgroundImage: 'none' }}
                  >
                    <CardMedia
                      image={item.image}
                      title={item.title}
                      sx={{
                        height: { xs: 180, md: 240 },
                        position: 'relative',
                      }}
                    >
                      <Box
                        component={'svg'}
                        viewBox="0 0 2880 480"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        sx={{
                          position: 'absolute',
                          bottom: 0,
                          color: theme.palette.background.paper,
                          transform: 'scale(2)',
                          height: 'auto',
                          width: 1,
                          transformOrigin: 'top center',
                        }}
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z"
                          fill="currentColor"
                        />
                      </Box>
                    </CardMedia>
                    <Box component={CardContent} position={'relative'}>
                      <Typography variant={'h6'} gutterBottom>
                        {item.title}
                      </Typography>
                      <Typography color="text.secondary">{item.description}</Typography>
                    </Box>
                    <Box flexGrow={1} />
                    <Box padding={2} display={'flex'} flexDirection={'column'}>
                      <Box marginBottom={2}>
                        <Divider />
                      </Box>
                      <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        <Box display={'flex'} alignItems={'center'}>
                          <Avatar src={item.author.avatar} sx={{ marginRight: 1 }} />
                          <Typography color={'text.secondary'}>{item.author.name}</Typography>
                        </Box>
                        {/* <Typography color={'text.secondary'}>
                        {item.date}
                      </Typography> */}
                      </Box>
                    </Box>
                  </Box>
                </Box>
                {/* </Link> */}
              </Grid>
            ))}
            <Grid item container justifyContent={'center'} xs={12}>
              <Button variant={'outlined'} size={'large'}>
                โหลดข้อมูลเพิ่มเติม
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Main>
  );
};

export default PostPage;
