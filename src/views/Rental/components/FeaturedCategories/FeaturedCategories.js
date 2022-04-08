import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
// import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import BoltIcon from '@mui/icons-material/Bolt';
import BuildIcon from '@mui/icons-material/Build';
import CableIcon from '@mui/icons-material/Cable';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import KitchenIcon from '@mui/icons-material/Kitchen';
import LayersIcon from '@mui/icons-material/Layers';
import NextLink from 'next/link';

const mock = [
  {
    icon: <HomeIcon />,
    title: ''
  },
  {
    icon: <BoltIcon />,
    title: ''
  },
  {
    icon: <BuildIcon />,
    title: ''
  },
  {
    icon: <CableIcon />,
    title: ''
  },
  {
    icon: <ContentCopyIcon />,
    title: ''
  },
  {
    icon: <InvertColorsIcon />,
    title: ''
  },
  {
    icon: <KitchenIcon />,
    title: ''
  },
  {
    icon: <LayersIcon />,
    title: ''
  },

];

const FeaturedCategories = () => {
  const theme = useTheme();
  // const isMd = useMediaQuery(theme.breakpoints.up('md'), {
  //   defaultMatches: true,
  // });

  return (
    <Grid container spacing={3}>
      {mock.map((item, i) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          key={i}
        // data-aos={'fade-up'}
        // data-aos-delay={i * 100}
        // data-aos-offset={100}
        // data-aos-duration={600}
        >
          <Box component={Card} padding={4} width={1} height={1}>
            <NextLink href={'/categories'}>
              <Box alignItems={'center'} display={'flex'} flexDirection={'column'} sx={{ cursor: 'pointer' }}>
                <Box
                  component={Avatar}
                  width={50}
                  height={50}
                  marginBottom={2}
                  bgcolor={theme.palette.primary.main}
                  color={theme.palette.background.paper}
                  sx={{ justifyContent: 'center' }}
                >
                  {item.icon}
                </Box>
                <Typography
                  variant={'h6'}
                  gutterBottom
                  sx={{ fontWeight: 500 }}
                >
                  {`หมวดหมู่ที่ ${i + 1}`}
                </Typography>
                <Typography color="text.secondary">
                  {'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
                </Typography>

              </Box>
            </NextLink>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default FeaturedCategories;
