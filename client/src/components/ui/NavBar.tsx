import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Home from '@mui/icons-material/Home';
import Person from '@mui/icons-material/Person';
import { thunkLogout } from '../../redux/slices/auth/createAsyncThunks';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

export default function NavBar(): JSX.Element {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((store) => store.authSlice);
  return (
    <Box component="nav" aria-label="My site" sx={{ flexGrow: 1 }}>
      <List role="menubar" orientation="horizontal">
        <ListDivider />
        <ListItem role="none">
          Hello, {auth.user.status === 'authenticated' ? auth.user.name : 'Guest'}
        </ListItem>
        <ListDivider />

        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="/" aria-label="Home">
            <Home /> Главная
          </ListItemButton>
        </ListItem>
        <ListDivider />
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="/locations">
            Locations
          </ListItemButton>
        </ListItem>
        <ListDivider />
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="/account">
            Личный кабинет
          </ListItemButton>
        </ListItem>
        <ListDivider />
        {/* {auth.user.status === 'authenticated' ? ( */}
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="/themepage">
            Категории квестов
          </ListItemButton>
        </ListItem>
        {/* ) : ( */}
        <>
          <ListItem role="none">
            <ListItemButton role="menuitem" component="a" href="/login">
              Login
            </ListItemButton>
          </ListItem>
          <ListItem role="none">
            <ListItemButton role="menuitem" component="a" href="/signup">
              SignUp
            </ListItemButton>
          </ListItem>
        </>
        {/* )} */}
        <ListItem role="none">
          <ListItemButton
            role="menuitem"
            onClick={() => void dispatch(thunkLogout())}
            component="a"
            href="/logout"
          >
            logout
          </ListItemButton>
        </ListItem>
        <ListItem role="none" sx={{ marginInlineStart: 'auto' }}>
          <ListItemButton
            role="menuitem"
            component="a"
            href="#horizontal-list"
            aria-label="Profile"
          >
            <Person />
          </ListItemButton>
        </ListItem>
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
