import React from 'react';
import '@fontsource/inter';
import { Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import NavBar from './components/ui/NavBar';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import QuestPage from './components/pages/QuestPage';
import 'react-toastify/dist/ReactToastify.css';
import LocationPage from './components/pages/LocationPage';

function App(): JSX.Element {
  return (
    <Container>
      <NavBar />

      <Routes>
        <Route path="/" element={<QuestPage />} />
        <Route path="/location/:id" element={<LocationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Container>
  );
}

export default App;
