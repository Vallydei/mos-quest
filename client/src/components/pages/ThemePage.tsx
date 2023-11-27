import React from 'react';
import { Divider, ListItemText, List, Typography, Grow } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import { styled } from '@mui/system';
import './css/ThemePage.css';
import { Link } from 'react-router-dom';

const AnimatedListItemButton = styled(ListItemButton)(({ theme }) => ({
  width: '100%',
  height: 200,
  borderRadius: 20,
  fontWeight: 'bold',
  transition: 'transform 0.3s', 
  '&:hover': {
    transform: 'scale(1.1)', 
  },
}));

export default function ThemePage(): JSX.Element {
  return (
    <div >
      <h1 style={{ color: 'white', fontSize: '30px', textAlign: 'center' }}>Тематический гид</h1>
      <List className='themeContainer' component="nav" aria-label="mailbox folders">
        <Grow in timeout={1000}>
          <Link to="/quest/1" className='link'>
            <AnimatedListItemButton className="listItem1">
              <ListItemText
                primary={<Typography style={{ color: 'white', fontSize: '40px' }}>18+</Typography>}
              />
            </AnimatedListItemButton>
          </Link>
        </Grow>
        {/* <Divider /> */}
        <Grow in timeout={1000}>
        <Link to="/quest/2" className='link'>
          <AnimatedListItemButton className="listItem2" divider>
            <ListItemText
              primary={
                <Typography style={{ color: 'white', fontSize: '40px' }}>Geek Stuff</Typography>
              }
            />
          </AnimatedListItemButton>
          </Link>
        </Grow>
        {/* <Divider /> */}
        <Grow in timeout={1000}>
        <Link to="/quest/3" className='link'>
          <AnimatedListItemButton className="listItem3">
            <ListItemText
              primary={
                <Typography style={{ color: 'white', fontSize: '40px' }}>
                  Культурный отдых
                </Typography>
              }
            />
          </AnimatedListItemButton>
         </Link>
        </Grow>
        {/* <Divider light /> */}
      </List>
    </div>
  );
}
