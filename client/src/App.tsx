import React from 'react';
import '@fontsource/inter';
import { Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import NavBar from './components/ui/NavBar';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import QuestPage from './components/pages/QuestPage';
import 'react-toastify/dist/ReactToastify.css';
import AchievePage from './components/pages/AchievePage';
import ThemePage from './components/pages/ThemePage';
import PrivateRouter from './components/HOC/PrivateRouter';
import { useAppSelector } from './redux/hooks';
import LocationsPage from './components/pages/LocationsPage'
import LocationPage from './components/pages/LocationPage';

function App(): JSX.Element {
  const user = useAppSelector((state) => state.authSlice.user.status);
  return (
    <Container>
      <NavBar />

      <Routes>
          <Route path="/locations" element={<LocationsPage />} />
        <Route path="/" element={<QuestPage />} />
        <Route path="/location/:id" element={<LocationPage />} />{' '}
        <Route element={<PrivateRouter isAllowed={user === 'authenticated'} />}>
          <Route path="/achievements" element={<AchievePage />} />
        </Route>
        <Route path="/themepage" element={<ThemePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Container>
  );
}

export default App;
