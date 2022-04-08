/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ContactForm = () => {
  return (
    <Box>
      <Box
        padding={{ xs: 3, sm: 6 }}
        width={1}
        component={Card}
        boxShadow={1}
        marginBottom={4}
      >
        <Box marginBottom={4}>
          <Typography align={'center'} variant="h5" sx={{ fontWeight: 600 }}>
            ติดต่อเรา
          </Typography>
          <Typography color="text.secondary" align={'center'}>
            {
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
          </Typography>
        </Box>
        <form>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <TextField label="ชื่อ" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField label="นามสกุล" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField label="อีเมล" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="ข้อมูล"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth size={'large'} variant={'contained'}>
                ส่งข้อมูล
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default ContactForm;
