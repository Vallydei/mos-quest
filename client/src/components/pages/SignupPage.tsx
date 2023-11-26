import React from 'react';
import { Button, TextField } from '@mui/material';
import { useAppDispatch } from '../../redux/hooks';
import { thunkSignup } from '../../redux/slices/auth/createAsyncThunks';
import type { SignupFormData } from '../../types/auth';

export default function SignupPage(): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      

        const formData = Object.fromEntries(new FormData(e.currentTarget)) as SignupFormData;
        console.log('смотри сюда', formData);
        void dispatch(thunkSignup(formData));
      }}
    >
      <h1>Регистрация</h1>
      <TextField
        required
        label="Name"
        placeholder="Name"
        error={false && 'Invalid email address or password'}
        name="name"
        style={{ color: 'white', backgroundColor: 'white', borderRadius: '10px' }}
      />
      <TextField
        required
        label="E-mail"
        placeholder="E-mail"
        error={false && 'Invalid email address or password'}
        name="email"
        style={{ color: 'white', backgroundColor: 'white', borderRadius: '10px' }}
      />

      <TextField
        required
        label="Password"
        placeholder="Password"
        error={false && 'Invalid email address or password'}
        name="password"
        style={{ color: 'white', backgroundColor: 'white', borderRadius: '10px' }}
      />
      <div>
        <Button type="submit" color="success" variant="contained" size="large">
          Submit
        </Button>
      </div>
    </form>
    // <Form
    //   onSubmit={(e) => {
    //     e.preventDefault();
    //     const formData = Object.fromEntries(new FormData(e.currentTarget)) as SignupFormData;
    //     void dispatch(thunkSignup(formData));
    //   }}
    // >
    //   <Form.Group className="mb-3" controlId="formBasicName">
    //     <Form.Label>Name</Form.Label>
    //     <Form.Control name="name" type="text" placeholder="Name" />
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="formBasicEmail">
    //     <Form.Label>Email address</Form.Label>
    //     <Form.Control name="email" type="email" placeholder="Enter email" />
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="formBasicPassword">
    //     <Form.Label>Password</Form.Label>
    //     <Form.Control name="password" type="password" placeholder="Password" />
    //   </Form.Group>
    //   <Button variant="primary" type="submit">
    //     Submit
    //   </Button>
    // </Form>
  );
}
