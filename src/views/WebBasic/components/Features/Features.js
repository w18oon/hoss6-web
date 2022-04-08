import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const mock = [
  {
    title: 300,
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    suffix: '+',
  },
  {
    title: 45,
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    suffix: '+',
  },
  {
    title: 99,
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    suffix: '%',
  },
];

const Features = () => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [viewPortEntered, setViewPortEntered] = useState(false);
  const setViewPortVisibility = (isVisible) => {
    if (viewPortEntered) {
      return;
    }

    setViewPortEntered(isVisible);
  };

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
        <Grid item xs={12} md={6} data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={4}>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Typography>
            <Typography component={'p'} color={'text.secondary'}>
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>
          <Box>
            <Grid container spacing={2}>
              {mock.map((item, i) => (
                <Grid key={i} item xs={12} md={4}>
                  <Typography variant="h4" color={'primary'} gutterBottom>
                    <Box fontWeight={600}>
                      <VisibilitySensor
                        onChange={(isVisible) =>
                          setViewPortVisibility(isVisible)
                        }
                        delayedCall
                      >
                        <CountUp
                          duration={2}
                          end={viewPortEntered ? item.title : 0}
                          start={0}
                          suffix={item.suffix}
                        />
                      </VisibilitySensor>
                    </Box>
                  </Typography>
                  <Typography component="p">{item.subtitle}</Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
        <Grid item container justifyContent={'center'} xs={12} md={6}>
          <Box height={1} width={1} maxHeight={800}>
            <Box
              component={LazyLoadImage}
              effect="blur"
              src={
                mode === 'light'
                  ? 'https://assets.maccarianagency.com/svg/illustrations/illustration1.svg'
                  : 'https://assets.maccarianagency.com/svg/illustrations/illustration1--dark.svg'
              }
              height={{ xs: 'auto', md: 1 }}
              maxHeight={{ xs: 300, md: 1 }}
              width={1}
              maxWidth={1}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Features;
