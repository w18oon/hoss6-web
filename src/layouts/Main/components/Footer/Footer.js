import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Link from '@mui/material/Link';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box
            display={'flex'}
            href="/"
            title="theFront"
            width={80}
          >
            {/* <Box
              component={'img'}
              src={
                mode === 'light'
                  ? 'https://assets.maccarianagency.com/the-front/logos/logo.svg'
                  : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'
              }
              height={1}
              width={1}
            /> */}
            <Typography>
              {'โลโก้'}
            </Typography>
          </Box>
          <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
            <Link href={'/'}>
              <Box
                display={'flex'}
                alignItems={'center'}
                aria-describedby={'test'}
                sx={{ cursor: 'pointer' }}
              >
                <Typography>
                  {'หน้าแรก'}
                </Typography>
              </Box>
            </Link>
            {/* <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/"
                color="text.primary"
                variant={'subtitle2'}
              >
                {'หน้าแรก'}
              </Link>
            </Box> */}
            {/* <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/docs/introduction"
                color="text.primary"
                variant={'subtitle2'}
              >
                Documentation
              </Link>
            </Box>
            <Box marginTop={1}>
              <Button
                variant="outlined"
                color="primary"
                component="a"
                target="blank"
                href="https://mui.com/store/items/the-front-landing-page/"
                size="small"
              >
                Purchase now
              </Button>
            </Box> */}
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          &copy; 2021, All rights reserved
          {/* &copy; theFront. 2021, Maccarian. All rights reserved */}
        </Typography>
        <Typography
          align={'center'}
          variant={'caption'}
          color="text.secondary"
          component={'p'}
        >
          When you visit or interact with our sites, services or tools, we or
          our authorised service providers may use cookies for storing
          information to help provide you with a better, faster and safer
          experience and for marketing purposes.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
