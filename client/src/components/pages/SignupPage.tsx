import React from 'react';
import { Button, TextField } from '@mui/material';
import { useAppDispatch } from '../../redux/hooks';
import { thunkSignup } from '../../redux/slices/auth/createAsyncThunks';
import type { SignupFormData } from '../../types/auth';

const styles = {
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Center vertically on the screen
  },
  form: {
    width: '500px', // Increased width
    padding: '20px',
    display: 'flex', // Center inputs horizontally
    flexDirection: 'column', // Align inputs vertically
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    animation: 'fadeIn 0.5s ease-in', // Add fade-in animation
  },
  textField: {
    width: '100%', // Make inputs of equal length
    marginBottom: '20px',
  },
  button: {
    marginTop: '10px',
  },
};

export default function SignupPage(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div style={styles.formContainer}>
      <form
        style={styles.form}
        onSubmit={(e) => {
          e.preventDefault();

          const formData = Object.fromEntries(new FormData(e.currentTarget)) as SignupFormData;
          // console.log('смотри сюда', formData);
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
          style={styles.textField}
        />
        <TextField
          required
          label="E-mail"
          placeholder="E-mail"
          error={false && 'Invalid email address or password'}
          name="email"
          style={styles.textField}
        />
        <TextField
          required
          label="Password"
          placeholder="Password"
          error={false && 'Invalid email address or password'}
          name="password"
          type="password"
          style={styles.textField}
        />
        <div>
          <Button
            type="submit"
            color="success"
            variant="contained"
            size="large"
            style={styles.button}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
