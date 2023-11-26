import React from 'react';
import { Divider, ListItemText, List, Typography, Grow } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import { styled } from '@mui/system';
import './css/ThemePage.css';

const AnimatedListItemButton = styled(ListItemButton)(({ theme }) => ({
  width: '100%',
  height: 200,
  borderRadius: 20,
  fontWeight: 'bold',
  transition: 'transform 0.3s', // Smooth transition for the transform property
  '&:hover': {
    transform: 'scale(1.1)', // Increase size on hover
  },
}));

export default function ThemePage(): JSX.Element {
  return (
    <div>
      <h1>Тематический гид</h1>
      <List component="nav" aria-label="mailbox folders">
        <Grow in timeout={1000}>
          <AnimatedListItemButton className="listItem1">
            <ListItemText primary={<Typography style={{ color: 'white', fontSize: '40px' }}>18+</Typography>} />
          </AnimatedListItemButton>
        </Grow>
        <Divider />
        <Grow in timeout={1000}>
          <AnimatedListItemButton className="listItem2" divider>
            <ListItemText primary={<Typography style={{ color: 'white', fontSize: '40px' }}>Geek Stuff</Typography>} />
          </AnimatedListItemButton>
        </Grow>
        <Divider />
        <Grow in timeout={1000}>
          <AnimatedListItemButton className="listItem3">
            <ListItemText primary={<Typography style={{ color: 'white', fontSize: '40px' }}>Культурный отдых</Typography>} />
          </AnimatedListItemButton>
        </Grow>
        <Divider light />
      </List>
    </div>
  );
}
