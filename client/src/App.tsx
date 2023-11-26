import React from 'react';
import '@fontsource/inter';
import { Route, Routes } from 'react-router-dom';
import { Box, Container, CssBaseline } from '@mui/material';
import NavBar from './components/ui/NavBar';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import QuestPage from './components/pages/QuestPage';
import 'react-toastify/dist/ReactToastify.css';
import ThemePage from './components/pages/ThemePage';
import PrivateRouter from './components/HOC/PrivateRouter';
import { useAppSelector } from './redux/hooks';
import LocationsPage from './components/pages/LocationsPage';
import LocationPage from './components/pages/LocationPage';
import MainPage from './components/pages/MainPage';

function App(): JSX.Element {
  const user = useAppSelector((state) => state.authSlice.user.status);

  return (
    <>
      <CssBaseline />
      <NavBar />
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100vw',height: '170vh', background: '#008080' }}>
        <Container component="main" sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/quest" element={<QuestPage />} />
            <Route path="/location/:id" element={<LocationPage />} />
            <Route element={<PrivateRouter isAllowed={user === 'authenticated'} />} />
            <Route path="/" element={<MainPage/>} />
            <Route path="/themepage" element={<ThemePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </Container>
      </Box>
    </>
  );
}

export default App;
