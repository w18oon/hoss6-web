/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Teaser = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column'}>
        <Grid
          item
          container
          alignItems={'center'}
          xs={12}
          md={6}
        // data-aos={isMd ? 'fade-right' : 'fade-up'}
        >
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              Lorem ipsum dolor sit amet{' '}
              <Typography color="primary" variant="inherit" component="span">
                consectetur
              </Typography>
            </Typography>
            <Typography variant={'h6'} component={'p'} color={'text.secondary'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
        >
          <Box maxWidth={490} width={1}>
            <Box
              component={'img'}
              src={
                'https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration4.svg'
              }
              width={1}
              height={1}
              sx={{
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Teaser;
