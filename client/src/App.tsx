import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/ui/NavBar';
// import MainPage from './components/pages/MainPage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import QuestPage from './components/pages/QuestPage';
import 'react-toastify/dist/ReactToastify.css';
import AchievePage from './components/pages/AchievePage';
import ThemePage from './components/pages/ThemePage';
import PrivateRouter from './components/HOC/PrivateRouter';
import { useAppSelector } from './redux/hooks';

function App(): JSX.Element {
  const user = useAppSelector((state) => state.authSlice.user.status);
  return (
    <Container>
      <Row>
        <Col>
          <NavBar />
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center">
        <Col xs={12}>
          <Routes>
            <Route path="/" element={<QuestPage />} />
            <Route element={<PrivateRouter isAllowed={user === 'authenticated'} />}>
            <Route path="/achievements" element={<AchievePage />} />
            </Route>
            <Route path="/themepage" element={<ThemePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
