import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { thunkConfirm, thunkSignup } from '../../redux/slices/auth/createAsyncThunks';
import '../pages/css/SignupLoginPage.css';
import { useNavigate } from 'react-router-dom';
import SingupModal from '../ui/SignUpModal';
import { ToastContainer, toast } from 'react-toastify';
import { toggleError } from '../../redux/slices/auth';

export default function SignupPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [inputValue, setInputValue] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    confirmCode: '',
  });
  const error = useAppSelector((store) => store.authSlice.errorMessage);

  if (error) {
    toast.error(`${error}`, {
      position: 'bottom-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    setTimeout(() => {
      dispatch(toggleError());
      setShow(false);
    }, 100);
  }

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    
  };
  const isInvalid = inputValue.password === inputValue.confirmPassword ? false : true;

  const isInvalidEmail = !/^\S+@\S+\.\S+$/.test(inputValue.email); 
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
          />
          <TextField
            onChange={changeHandler}
            required
            label="E-mail"
            placeholder="E-mail"
            color="secondary"
            error={isInvalidEmail && 'Некорректный адрес электронной почты'}
            name="email"
            value={inputValue.email}
            className="textField"
          />
          <TextField
            onChange={changeHandler}
            required
            label="Пароль"
            placeholder="Пароль"
            color="secondary"
            error={isInvalid && 'Invalid email address or password'}
            name="password"
            type="password"
            value={inputValue.password}
            className="textField"
          />
          <TextField
            onChange={changeHandler}
            required
            label="Повторите пароль"
            placeholder="Пароль"
            color="secondary"
            error={isInvalid && 'Invalid email address or password'}
            name="confirmPassword"
            type="password"
            className="textField"
            value={inputValue.confirmPassword}
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            color="secondary"
            className="buttonReg"
            disabled={isInvalid || isInvalidEmail}
          >
            Submit
          </Button>
        </form>
      </div>
      <SingupModal
        changeHandler={changeHandler}
        inputValue={inputValue}
        setShow={setShow}
        show={show}
      />
      <ToastContainer className='toast'/>
    </>
  );
}
