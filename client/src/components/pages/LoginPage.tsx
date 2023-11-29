import React from 'react';
import { Button, TextField, Grow } from '@mui/material';
import { useAppDispatch } from '../../redux/hooks';
import { thunkLogin } from '../../redux/slices/auth/createAsyncThunks';
import type { LoginFormData } from '../../types/auth';
import './css/LoginPage.css';

export default function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const [cardVisible, setCardVisible] = React.useState(false);

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
            console.log('смотри сюда', formData);
            void dispatch(thunkLogin(formData));
          }}
        >
          <h1 className="titleRegLog">Вход</h1>
          <TextField
            className="textField"
            required
            label="E-mail"
            placeholder="E-mail"
            error={false && 'Invalid email address or password'}
            name="email"
          />
          <TextField
            required
            className="textField"
            label="Password"
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
