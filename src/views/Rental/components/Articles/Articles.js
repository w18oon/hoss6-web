import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ListItemText from '@mui/material/ListItemText';

const mock = [
  {
    title: 'Feature # 1',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Feature # 2',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Feature # 3',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

const Articles = () => {
  return (
    <Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid
            key={i}
            item
            xs={12}
            md={4}
            sx={{ display: 'flex', flexDirection: 'column' }}
          >
            <ListItemText
              primary={item.title}
              secondary={item.subtitle}
              primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
              secondaryTypographyProps={{ variant: 'subtitle1' }}
              sx={{
                '& .MuiListItemText-primary': {
                  fontWeight: 700,
                },
                margin: 0,
              }}
            />
            <Box sx={{ flexGrow: 1 }} />
            <Box marginTop={1}>
              <Button
                endIcon={
                  <Box
                    component={'svg'}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width={24}
                    height={24}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </Box>
                }
              >
                Learn more
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Articles;
