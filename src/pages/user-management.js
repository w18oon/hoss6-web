import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

import Main from 'layouts/Main';
import ProfileLayout from 'components/ProfileLayout';
import SimpleTable from 'components/SimpleTable';

import { users } from '__mocks__/users';

const cols = [
  {
    key: 'firstname',
    val: 'ชื่อ',
  },
  {
    key: 'lastname',
    val: 'นามสกุล',
  },
  {
    key: 'type',
    val: 'ประเภท',
  },
  {
    key: 'date',
    val: 'วันที่สมัคร',
  },
];

const UserManagementPage = () => {
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
              การจัดการผู้ใช้งาน
            </Typography>
            <Button size={'large'} variant={'contained'}>
              เพิ่มข้อมูล
            </Button>
          </Box>
          <Box paddingY={4}>
            <Divider />
          </Box>
          <Box>
            <SimpleTable cols={cols} rows={users} />
          </Box>
        </Box>
      </ProfileLayout>
    </Main>
  );
};

export default UserManagementPage;
