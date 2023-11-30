import React, { useState } from 'react';
import { ListItemText, List, Grow } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import { styled } from '@mui/system';
import './css/ThemePage.css';
import './css/AnimatedModal.scss';
import { Link } from 'react-router-dom';
import Modal from '../ui/AnimateModal';

const AnimatedListItemButton = styled(ListItemButton)(() => ({
  width: '100%',
  height: 200,
  borderRadius: 10,
  fontWeight: 'bold',
}));

export default function ThemePage(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='themeCont'>
      <List className="themeContainer" component="nav" aria-label="mailbox folders">
        <h1 className="headerTheme">Тематический гид</h1>
        <Grow in timeout={1000}>
          <Link to="/quest/1" className="link">
            <AnimatedListItemButton
              className="listItem1"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(true);
              }}
            >
              <ListItemText primary={<p className="titleTheme">18+</p>} />
            </AnimatedListItemButton>
          </Link>
        </Grow>

        <Grow in timeout={1000}>
          <Link to="/quest/2" className="link">
            <AnimatedListItemButton className="listItem2" divider>
              <ListItemText primary={<p className="titleTheme">Geek Stuff</p>} />
            </AnimatedListItemButton>
          </Link>
        </Grow>

        <Grow in timeout={1000}>
          <Link to="/quest/3" className="link">
            <AnimatedListItemButton className="listItem3">
              <ListItemText primary={<p className="titleTheme">Культурный отдых</p>} />
            </AnimatedListItemButton>
          </Link>
        </Grow>
      </List>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
