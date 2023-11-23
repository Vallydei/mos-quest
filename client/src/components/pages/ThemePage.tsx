import React from 'react';
import { Divider, ListItemText, List, Typography } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import './ThemePage.css'; 

export default function ThemePage(): JSX.Element {
  return (
    <div>
      <h1>Тематический гид</h1>
      <List component="nav" aria-label="mailbox folders">
        <ListItemButton className="listItem1 listItemButton">
          <ListItemText primary={<Typography style={{ color: 'white', fontSize: '30px' }}>18+</Typography>}/>
        </ListItemButton>
        <Divider />
        <ListItemButton divider className="listItem2 listItemButton">
          <ListItemText primary={<Typography style={{ color: 'white', fontSize: '30px' }}>Geek Stuff</Typography>}/>
        </ListItemButton>
        <Divider />
        <ListItemButton className="listItem3 listItemButton">
          <ListItemText primary={<Typography style={{ color: 'white', fontSize: '30px' }}>Культурный отдых</Typography>}/>
        </ListItemButton>
        <Divider light />
      </List> 
    </div> 
  )
}