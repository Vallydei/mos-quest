import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Home from '@mui/icons-material/Home';
import Person from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import { thunkLogout } from '../../redux/slices/auth/createAsyncThunks';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

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
              <Home /> Главная
            </ListItemButton>
          </ListItem>
        </Link>

        <ListDivider />
        <Link to="/locations">
          <ListItem role="none">
            <ListItemButton role="menuitem" component="a">
              Локации
            </ListItemButton>
          </ListItem>
        </Link>

        <ListDivider />
        <Link to="/themepage">
          {' '}
          <ListItem role="none">
            <ListItemButton role="menuitem" component="a">
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
                >
                  <Person /> Личный кабинет
                </ListItemButton>
              </ListItem>
            </Link>
            <ListDivider />
          </>
        ) : (
          <>
            <Link to="/login">
              <ListItem role="none">
                <ListItemButton role="menuitem" component="a">
                  Вход
                </ListItemButton>
              </ListItem>
            </Link>
            <ListDivider />
            <Link to="/signup">
              {' '}
              <ListItem role="none">
                <ListItemButton role="menuitem" component="a">
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
            >
              Выйти
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );
}
//     <NavBar className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">
//           Hello, {auth.user.status === 'authenticated' ? auth.user.name : 'Guest'}
//         </Navbar.Brand>
//         <Nav className="me-auto">
//           <Nav.Link as={Link} to="/">
//             Home
//           </Nav.Link>
//           <Nav.Link as={Link} to="/location">
//             Location
//           </Nav.Link>
//           {auth.user.status === 'authenticated' ? (
//             <p />
//           ) : (
//             <>
//               <Nav.Link as={Link} to="/login">
//                 Login
//               </Nav.Link>
//               <Nav.Link as={Link} to="/signup">
//                 Signup
//               </Nav.Link>
//             </>
//           )}

//           <Nav.Link as={Button} onClick={() => void dispatch(thunkLogout())}>
//             Logout
//           </Nav.Link>
//         </Nav>
//       </Container>
//     </Navbar>
//   );
// }
