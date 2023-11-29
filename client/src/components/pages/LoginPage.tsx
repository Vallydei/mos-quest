import React from 'react';
import { Button, TextField, Grow } from '@mui/material';
import { useAppDispatch } from '../../redux/hooks';
import { thunkLogin } from '../../redux/slices/auth/createAsyncThunks';
import type { LoginFormData } from '../../types/auth';
import './css/SignupLoginPage.css';
import { useNavigate } from 'react-router-dom';

export default function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const [cardVisible, setCardVisible] = React.useState(false);
  const navigate = useNavigate();
  React.useEffect(() => {
    setCardVisible(true);
  }, []);

  return (
    <div className="formContainer">
      <Grow in={cardVisible} timeout={500}>
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();

            const formData = Object.fromEntries(new FormData(e.currentTarget)) as LoginFormData;
            void dispatch(thunkLogin(formData)).then(void navigate('/'));
          }}
        >
          <h1 className="titleRegLog">Вход</h1>
          <TextField
            className="textField"
            required
            label="E-mail"
            color='secondary'
            placeholder="E-mail"
            error={false && 'Invalid email address or password'}
            name="email"
          />
          <TextField
            required
            className="textField"
            label="Пароль"
            color='secondary'
            placeholder="Password"
            error={false && 'Invalid email address or password'}
            name="password"
            type="password"
          />
          <TextField
            required
            color='secondary'
            className="textField"
            label="Повторите пароль"
            placeholder="Password"
            error={false && 'Invalid email address or password'}
            name="password"
            type="password"
          />
          <Button className="buttonReg" type="submit" variant="contained" size="large">
            Login
          </Button>
        </form>
      </Grow>
    </div>
  );
}
