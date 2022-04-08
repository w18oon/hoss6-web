import React from 'react';
import { useTheme } from '@mui/material/styles';
import Main from 'layouts/Main';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from 'components/Container';
import UserCard from 'components/UserCard';
import ProductList from 'components/ProductList';
import RatingProduct from 'components/RatingProduct';

const UsersPage = () => {
  const theme = useTheme();
  return (
    <Main>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <UserCard />
        </Container>
      </Box>
      <Container>
        <Box marginBottom={4}>
          <Typography variant={'h5'}>{'งานของฉัน'}</Typography>
        </Box>
        <ProductList />
      </Container>
      <Container>
        <RatingProduct />
      </Container>
    </Main>
  );
};

export default UsersPage;
