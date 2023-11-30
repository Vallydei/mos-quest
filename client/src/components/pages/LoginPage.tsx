import React, { useState } from 'react';
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

  const [inputValue, setInputValue] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    confirmCode: '',
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const isInvalid = inputValue.password === inputValue.confirmPassword ? false : true;

  const isInvalidEmail = !/^\S+@\S+\.\S+$/.test(inputValue.email);

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
            color="secondary"
            placeholder="E-mail"
            error={isInvalidEmail && 'Invalid email address'}
            name="email"
            onChange={changeHandler}
            value={inputValue.email}
          />
          <TextField
            required
            className="textField"
            label="Пароль"
            color="secondary"
            placeholder="Password"
            error={isInvalid && 'Invalid email address or password'}
            name="password"
            type="password"
            onChange={changeHandler}
            value={inputValue.password}
          />
          <TextField
            required
            color="secondary"
            className="textField"
            label="Повторите пароль"
            placeholder="Password"
            error={isInvalid && 'Invalid email address or password'}
            name="confirmPassword"
            type="password"
            onChange={changeHandler}
            value={inputValue.confirmPassword}
          />
          <Button className="buttonReg" type="submit" variant="contained" size="large" disabled={isInvalid || isInvalidEmail}>
            Login
          </Button>
        </form>
      </Grow>
    </div>
  );
}
