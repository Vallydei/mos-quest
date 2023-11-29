import React from 'react';
import { Button, TextField } from '@mui/material';
import { useAppDispatch } from '../../redux/hooks';
import { thunkSignup } from '../../redux/slices/auth/createAsyncThunks';
import type { SignupFormData } from '../../types/auth';
import '../pages/css/SignupPage.css';

export default function SignupPage(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="formContainer">
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();

          const formData = Object.fromEntries(new FormData(e.currentTarget)) as SignupFormData;
          // console.log('смотри сюда', formData);
          void dispatch(thunkSignup(formData));
        }}
      >
        <h1 className="titleRegLog">Регистрация</h1>
        <TextField
          required
          label="Name"
          placeholder="Name"
          error={false && 'Invalid email address or password'}
          name="name"
          className="textField"
        />
        <TextField
          required
          label="E-mail"
          placeholder="E-mail"
          error={false && 'Invalid email address or password'}
          name="email"
          className="textField"
        />
        <TextField
          required
          label="Password"
          placeholder="Password"
          error={false && 'Invalid email address or password'}
          name="password"
          type="password"
          className="textField"
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
