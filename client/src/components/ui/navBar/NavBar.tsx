import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';

import Person from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import { thunkLogout } from '../../../redux/slices/auth/createAsyncThunks';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import logo from '../../../public/logo.png';
import './NavBar.css';

export default function NavBar(): JSX.Element {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((store) => store.authSlice);
  return (
    <Box component="nav" aria-label="My site" sx={{ flexGrow: 1 }}>
      <List role="menubar" orientation="horizontal">
        <ListItem role="none">
          Hello, {auth.user.status === 'authenticated' ? auth.user.name : 'Guest'}
        </ListItem>
        <ListDivider />

        <Link to="/">
          <ListItem role="none">
            <ListItemButton role="menuitem" component="a" aria-label="Home">
              <img src={logo} alt="Logo" style={{ height: '50px' }} />
            </ListItemButton>
          </ListItem>
        </Link>

        <ListDivider />
        <Link to="/locations">
          <ListItem role="none">
            <ListItemButton sx={{ marginTop: '7px' }} role="menuitem" component="a">
              Локации
            </ListItemButton>
          </ListItem>
        </Link>

        <ListDivider />
        <Link to="/themepage">
          {' '}
          <ListItem role="none">
            <ListItemButton sx={{ marginTop: '7px' }} role="menuitem" component="a">
              Категории квестов
            </ListItemButton>
          </ListItem>
        </Link>

        <ListDivider />
        {auth.user.status === 'authenticated' ? (
          <>
            <Link to="/account">
              <ListItem role="none" sx={{ marginInlineStart: 'auto' }}>
                <ListItemButton
                  role="menuitem"
                  component="a"
                  href="#horizontal-list"
                  aria-label="Profile"
                  sx={{ display: 'flex', alignItems: 'center' }}
                >
                  <Person sx={{ marginRight: '0.5rem', marginTop: '15px' }} /> Личный кабинет
                </ListItemButton>
              </ListItem>
            </Link>
            <ListDivider />
          </>
        ) : (
          <>
            <Link to="/login">
              <ListItem role="none">
                <ListItemButton role="menuitem" component="a" sx={{ marginTop: '7px' }}>
                  Вход
                </ListItemButton>
              </ListItem>
            </Link>
            <ListDivider />
            <Link to="/signup">
              {' '}
              <ListItem role="none">
                <ListItemButton role="menuitem" component="a" sx={{ marginTop: '7px' }}>
                  Регистрация
                </ListItemButton>
              </ListItem>
            </Link>
            <ListDivider />
          </>
        )}
        <Link to="/logout">
          {' '}
          <ListItem role="none">
            <ListItemButton
              role="menuitem"
              onClick={() => void dispatch(thunkLogout())}
              component="a"
              sx={{ marginTop: '7px' }}
            >
              Выйти
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );
}
