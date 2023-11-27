import React from 'react';
import { Button, TextField, Grow } from '@mui/material';
import { styled } from '@mui/system';
import { useAppDispatch } from '../../redux/hooks';
import { thunkLogin } from '../../redux/slices/auth/createAsyncThunks';
import type { LoginFormData } from '../../types/auth';
import './css/LoginPage.css';

const styles = {
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  form: {
    width: '500px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.5s',
  },
  textField: {
    width: '100%',
    marginBottom: '20px',
  },
  button: {
    marginTop: '10px',
  },
};

const AnimatedTextField = styled(TextField)(({ theme }) => ({
  ...styles.textField,
  transition: 'transform 0.3s',
  '&:focus': {
    transform: 'scale(1.05)',
  },
}));

const AnimatedButton = styled(Button)(({ theme }) => ({
  ...styles.button,
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

export default function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const [cardVisible, setCardVisible] = React.useState(false);

  React.useEffect(() => {
    // Trigger the entrance animation when the component mounts
    setCardVisible(true);
  }, []);

  return (
    <div style={styles.formContainer}>
      <Grow in={cardVisible} timeout={500}>
        <form
          style={styles.form}
          onSubmit={(e) => {
            e.preventDefault();

            const formData = Object.fromEntries(new FormData(e.currentTarget)) as LoginFormData;
            console.log('смотри сюда', formData);
            void dispatch(thunkLogin(formData));
          }}
        >
          <h1>Вход</h1>
          <AnimatedTextField
            required
            label="E-mail"
            placeholder="E-mail"
            error={false && 'Invalid email address or password'}
            name="email"
          />
          <AnimatedTextField
            required
            label="Password"
            placeholder="Password"
            error={false && 'Invalid email address or password'}
            name="password"
            type="password"
          />
          <AnimatedButton type="submit" color="success" variant="contained" size="large">
            Login
          </AnimatedButton>
        </form>
      </Grow>
    </div>
  );
}
