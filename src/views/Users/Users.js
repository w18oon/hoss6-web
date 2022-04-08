import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Categories,
  Courses,
  Hero,
  PromoNumbers,
  Reviews,
  Subscription,
} from './components';

import UserCard from 'components/UserCard';

const Users = () => {
  const theme = useTheme();

  return (
    <Main>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <UserCard />
        </Container>
      </Box>
      <Container>
        <PromoNumbers />
      </Container>
    </Main>
  );
};

export default Users;
