import React from 'react';
import { Button, TextField } from '@mui/material';
import type { LoginFormData } from '../../types/auth';
import { useAppDispatch } from '../../redux/hooks';
import { thunkLogin } from '../../redux/slices/auth/createAsyncThunks';
import './LoginPage.css'; // Путь к вашему CSS-файлу

export default function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.currentTarget)) as LoginFormData;
        void dispatch(thunkLogin(formData));
      }}
    >
      <h1>Войти</h1>
      <TextField
        required
        label="E-mail"
        placeholder="E-mail"
        error={false && 'Invalid email address or password'}
        name="email"
        style={{ color: 'white', backgroundColor: 'white', borderRadius: '10px' }} // Установите белый цвет текста
        inputProps={{ style: { color: 'white' } }} // Приоритет цвета для инпута
      />

      <TextField
        required
        label="Password"
        placeholder="Password"
        error={false && 'Invalid email address or password'}
        name="password"
        style={{ color: 'white', backgroundColor: 'white', borderRadius: '10px' }} // Установите белый цвет текста
        inputProps={{ style: { color: 'white' } }} // Приоритет цвета для инпута
      />

      <div>
        <Button type="submit" color="success" variant="contained" size="large">
          Submit
        </Button>
      </div>
    </form>
  );
}
