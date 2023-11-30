import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useAppDispatch } from '../../redux/hooks';
import { thunkConfirm, thunkSignup } from '../../redux/slices/auth/createAsyncThunks';
import type { SignupFormData } from '../../types/auth';
import '../pages/css/SignupLoginPage.css';
import { useNavigate } from 'react-router-dom';
import SingupModal from '../ui/SignUpModal';

export default function SignupPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [inputValue, setInputValue] = useState({
    name: '',
    email: '',
    password: '',
    confirmCode: '',
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
    <div className="formContainer">
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          void dispatch(thunkConfirm(inputValue));
          setShow(true);
        }}
      >
        <h1 className="titleRegLog">Регистрация</h1>
        <TextField
          onChange={changeHandler}
          required
          label="Имя"
          color="secondary"
          placeholder="Имя"
          error={false && 'Invalid email address or password'}
          name="name"
          value={inputValue.name}
          className="textField"
          color='secondary'
        />
        <TextField
          onChange={changeHandler}
          required
          label="E-mail"
          placeholder="E-mail"
          color="secondary"
          error={false && 'Invalid email address or password'}
          name="email"
          value={inputValue.email}
          className="textField"
          color='secondary'
        />
        <TextField
          onChange={changeHandler}
          required
          label="Пароль"
          placeholder="Пароль"
          color="secondary"
          error={false && 'Invalid email address or password'}
          name="password"
          type="password"
          value={inputValue.password}
          className="textField"
          color='secondary'
        />
        <TextField
          onChange={changeHandler}
          required
          label="Повторите пароль"
          placeholder="Пароль"
          color="secondary"
          error={false && 'Invalid email address or password'}
          name="password"
          type="password"
          className="textField"
          color='secondary'
        />

        <Button
          type="submit"
          variant="contained"
          size="large"
          color="secondary"
          className="buttonReg"
        >
          Submit
        </Button>
      </form>
    </div>
    <SingupModal changeHandler={changeHandler} inputValue={inputValue} show={show}/>
    </>
  );
}
