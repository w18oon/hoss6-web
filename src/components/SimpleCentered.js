/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ArticleIcon from '@mui/icons-material/Article';

const mock = [
  {
    title: '01/2022',
    subtitle: 'เป็นสมาชิก',
    icon: <AssignmentIndIcon />,
  },
  {
    title: '100%',
    subtitle: 'งานสำเร็จ',
    icon: <ThumbUpIcon />,
  },
  {
    title: '89 ครั้ง',
    subtitle: 'จำนวนการจ้างงาน',
    icon: <ArticleIcon />
  },
];

const SimpleCentered = () => {
  const theme = useTheme();
  return (
    <Grid container>
      {mock.map((item, i) => (
        <Grid item xs={12} md={4} key={i}>
          <Box width={1} height={1}>
            <Box
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <Box
                component={Avatar}
                width={60}
                height={60}
                marginBottom={2}
                bgcolor={alpha(theme.palette.primary.main, 0.1)}
                color={theme.palette.primary.main}
              >
                {item.icon}
              </Box>
              <Typography
                color={theme.palette.primary.main}
                variant={'h6'}
                gutterBottom
                sx={{ fontWeight: 500 }}
                align={'center'}
              >
                {item.title}
              </Typography>
              <Typography align={'center'} color="text.secondary">
                {item.subtitle}
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default SimpleCentered;
