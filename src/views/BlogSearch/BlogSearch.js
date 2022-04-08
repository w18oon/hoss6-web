import React from 'react';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Breadcrumb, Result } from './components';

const BlogSearch = () => {
  return (
    <Main>
      <Box bgcolor={'alternate.main'}>
        <Container paddingY={2}>
          <Breadcrumb />
        </Container>
      </Box>
      <Container>
        <Result />
      </Container>
    </Main>
  );
};

export default BlogSearch;
