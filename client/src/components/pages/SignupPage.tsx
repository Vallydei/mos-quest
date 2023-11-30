import React from 'react';
import { Button, TextField } from '@mui/material';
import { useAppDispatch } from '../../redux/hooks';
import { thunkSignup } from '../../redux/slices/auth/createAsyncThunks';
import type { SignupFormData } from '../../types/auth';
import '../pages/css/SignupLoginPage.css';
import { useNavigate } from 'react-router-dom';

export default function SignupPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div className="formContainer">
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();

          const formData = Object.fromEntries(new FormData(e.currentTarget)) as SignupFormData;

          void dispatch(thunkSignup(formData)).then(void navigate('/'));
        }}
      >
        <h1 className="titleRegLog">Регистрация</h1>
        <TextField
          required
          label="Имя"
          placeholder="Имя"
          error={false && 'Invalid email address or password'}
          name="name"
          className="textField"
          color='secondary'
        />
        <TextField
          required
          label="E-mail"
          placeholder="E-mail"
          error={false && 'Invalid email address or password'}
          name="email"
          className="textField"
          color='secondary'
        />
        <TextField
          required
          label="Пароль"
          placeholder="Пароль"
          error={false && 'Invalid email address or password'}
          name="password"
          type="password"
          className="textField"
          color='secondary'
        />
        <TextField
          required
          label="Повторите пароль"
          placeholder="Пароль"
          error={false && 'Invalid email address or password'}
          name="password"
          type="password"
          className="textField"
          color='secondary'
        />

        <Button
          type="submit"
          color="success"
          variant="contained"
          size="large"
          className="buttonReg"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
