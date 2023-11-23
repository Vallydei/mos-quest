import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { thunkLogout } from '../../redux/slices/auth/createAsyncThunks';

export default function NavBar(): JSX.Element {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((store) => store.authSlice);
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          Hello, {auth.user.status === 'authenticated' ? auth.user.name : 'Guest'}
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/themepage">
              ThemePage
            </Nav.Link>
          {auth.user.status === 'authenticated' ? (
            <Nav.Link as={Link} to="/achievements">
              Achievements
            </Nav.Link>
          ) : (
            <>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/signup">
                Signup
              </Nav.Link>
            </>
          )}

          <Nav.Link as={Button} onClick={() => void dispatch(thunkLogout())}>
            Logout
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
