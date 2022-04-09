import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Main from 'layouts/Main';
import ProfileLayout from 'components/ProfileLayout';

const MePage = () => {
  return (
    <Main>
      <ProfileLayout>
        <Box>
          <Typography variant="h6" gutterBottom fontWeight={700}>
            Change your private information
          </Typography>
          <Typography variant={'subtitle2'} color={'text.secondary'}>
            Please read our terms of use to be informed how we manage your private data.
          </Typography>
          <Box paddingY={4}>
            <Divider />
          </Box>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }} fontWeight={700}>
                ชื่อจริง
              </Typography>
              <TextField label="ชื่อจริง" variant="outlined" name={'firstname'} fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }} fontWeight={700}>
                นามสกุล
              </Typography>
              <TextField label="นามสกุล" variant="outlined" name={'lastname'} fullWidth />
            </Grid>
            <Grid item xs={12}>
              <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }} fontWeight={700}>
                รายละเอียด
              </Typography>
              <TextField
                label="รายละเอียด"
                variant="outlined"
                name={'desc'}
                multiline
                rows={5}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }} fontWeight={700}>
                อีเมล
              </Typography>
              <TextField label="อีเมล" variant="outlined" name={'firstname'} fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }} fontWeight={700}>
                เบอร์โทรศัพท์
              </Typography>
              <TextField label="เบอร์โทรศัพท์" variant="outlined" name={'lastname'} fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }} fontWeight={700}>
                วันเกิด
              </Typography>
              <TextField label="วันเกิด" variant="outlined" name={'firstname'} fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }} fontWeight={700}>
                ที่อยู่ปัจจุบัน
              </Typography>
              <TextField label="ที่อยู่ปัจจุบัน" variant="outlined" name={'lastname'} fullWidth />
            </Grid>
            <Grid item container xs={12}>
              <Box
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                alignItems={{ xs: 'stretched', sm: 'center' }}
                justifyContent={'space-between'}
                width={1}
                margin={'0 auto'}
              >
                <Box />
                <Button size={'large'} variant={'contained'}>
                  บันทึกข้อมูล
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </ProfileLayout>
    </Main>
  );
};

export default MePage;
