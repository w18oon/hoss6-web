import React from 'react';
import { PropTypes } from 'prop-types';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

import Main from 'layouts/Main';
import ProfileLayout from 'components/ProfileLayout';
import SimpleTable from 'components/SimpleTable';

import { jobs } from '__mocks__/jobs';

// 'ชื่องาน', 'รายละเอียด', 'หมวดหมู่', 'วันที่สร้าง'

const cols = [
  {
    key: 'name',
    val: 'ชื่องาน',
  },
  {
    key: 'desc',
    val: 'รายละเอียด',
  },
  {
    key: 'category',
    val: 'หมวดหมู่',
  },
  {
    key: 'createdAt',
    val: 'วันที่สร้าง',
  },
];

const JobPage = () => {
  return (
    <Main>
      <ProfileLayout>
        <Box>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'stretched', sm: 'center' }}
            justifyContent={'space-between'}
            width={1}
            margin={'0 auto'}
          >
            <Typography variant="h6" gutterBottom fontWeight={700}>
              งานของฉัน
            </Typography>
            <Button size={'large'} variant={'contained'}>
              เพิ่มข้อมูล
            </Button>
          </Box>
          <Box paddingY={4}>
            <Divider />
          </Box>
          <Box>
            <SimpleTable cols={cols} rows={jobs} />
          </Box>
        </Box>
      </ProfileLayout>
    </Main>
  );
};

export default JobPage;
