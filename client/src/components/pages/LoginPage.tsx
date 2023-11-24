import React from 'react';
import { Button, TextField } from '@mui/material';
import type { LoginFormData } from '../../types/auth';
import { useAppDispatch } from '../../redux/hooks';
import { thunkLogin } from '../../redux/slices/auth/createAsyncThunks';

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
      />

      <TextField
        required
        label="Password"
        placeholder="Password"
        error={false && 'Invalid email address or password'}
        name="password"
      />
      <div>
        <Button type="submit" color="success" variant="contained" size="large">
          Submit
        </Button>
      </div>
    </form>
  );
}
// {/* <Form.Group className="mb-3" controlId="formBasicEmail">
//   <Form.Label>Email address</Form.Label>
//   <Form.Control type="email" name="email" placeholder="Enter email" />
// </Form.Group> */}

// // eslint-disable-next-line no-lone-blocks
// {/* <Form.Group className="mb-3" controlId="formBasicPassword">
//   <Form.Label>Password</Form.Label>
//   <Form.Control type="password" name="password" placeholder="Password" />
// </Form.Group>
// <Button type="submit">Submit</Button> */}
