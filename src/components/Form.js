/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import UploadFileIcon from '@mui/icons-material/UploadFile';

const Form = () => {
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
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            กรอกรายละเอียดที่คุณต้องการ
          </Typography>
        </Box>
        <form>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                label="รายละเอียดของงาน"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField label="งบประมาณ" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField label="วันที่เริ่มงาน" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <Button
                startIcon={<UploadFileIcon />}
                fullWidth
                size={'large'}
                variant={'outlined'}
              >
                แนบรูปภาพ
              </Button>
            </Grid>
            <Grid item xs={6}>
              <TextField label="อีเมล" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField label="เบอร์ติดต่อ" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth size={'large'} variant={'contained'}>
                ส่งรายละเอียด
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default Form;
