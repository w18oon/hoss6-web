import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const users = [
  {
    avatar: '/avatar-01.png',
    firstname: 'Jhon',
    lastname: 'Anderson',
    reviewed: '13/2/2022',
    ratingScore: 5,
    feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    avatar: '/avatar-02.png',
    firstname: 'Chary',
    lastname: 'Smith',
    reviewed: '1/1/2022',
    ratingScore: 5,
    feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
];

const RatingProduct = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography variant={'h5'}>{'รีวิวจากผู้จ้างงาน'}</Typography>
      </Box>
      {users.map((user, i) => (
        <Box key={i}>
          <ListItem disableGutters sx={{ padding: 0 }}>
            <ListItemAvatar>
              <Avatar alt={`${user.firstname} ${user.lastname}`} src={user.avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={`${user.firstname} ${user.lastname}`}
              secondary={user.reviewed}
            />
          </ListItem>
          <Rating readOnly value={user.ratingScore} />
          <Typography color="text.secondary">{user.feedback}</Typography>
          <Box sx={{ py: 3 }}>
            <Divider />
          </Box>
        </Box>
      ))}
      <Box display={'flex'} justifyContent={'center'}>
        <Button variant="outlined">ดูข้อมูลเพิ่ม</Button>
      </Box>
    </Box>
  );
};

export default RatingProduct;
