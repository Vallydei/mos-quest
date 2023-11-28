import Person from '@mui/icons-material/Person';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { thunkLogout } from '../../../redux/slices/auth/createAsyncThunks';
import logo from '../../../../public/logo.png';

function NavbarDefault(): JSX.Element {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((store) => store.authSlice);
  return (
    <nav className="nav flex justify-between items-center px-10 py-5">
      <div>
        <Link to="/">
          <div
            color="inherit"
            className="text-xl text-white font-semibold"
            role="menuitem"
            aria-label="Home"
          >
            <img src={logo} alt="Logo" style={{ height: '50px' }} />
          </div>
        </Link>
      </div>

      <ul
        className="flex items-center gap-2 text-[#bdbdc0] font-medium font-jakarta"
        role="menubar"
      >
        <li color="inherit" role="none" className="p-4title">
          Hello, {auth.user.status === 'authenticated' ? auth.user.name : 'Guest'}
        </li>

        <Link to="/locations">
          <li color="inherit" className="p-3 hover:text-white" role="menuitem">
            Локации
          </li>
        </Link>

        <Link to="/themepage">
          {' '}
          <li color="inherit" className="p-3 hover:text-white" role="menuitem">
            Категории квестов
          </li>
        </Link>
      </ul>
      {auth.user.status === 'authenticated' ? (
        <>
          <Link to="/account">
            <li
              color="inherit"
              className="font-jakarta text-sm px-4 py-2 rounded-full text-white font-medium bg-white bg-opacity-[.08] border border-white border-opacity-[.08] hover:border-opacity-25"
              role="menuitem"
              aria-label="Profile"
            >
              <Person /> Личный кабинет
            </li>
          </Link>
          <ul
            className="flex items-center gap-2 text-[#bdbdc0] font-medium font-jakarta"
            role="menubar"
          >
            <Link to="/logout">
              <button
                className="font-jakarta text-sm px-4 py-2 rounded-full text-white font-medium bg-white bg-opacity-[.08] border border-white border-opacity-[.08] hover:border-opacity-25"
                role="menuitem"
                onClick={() => void dispatch(thunkLogout())}
              >
                Выйти
              </button>
            </Link>
          </ul>
        </>
      ) : (
        <ul
          className="flex items-center gap-2 text-[#bdbdc0] font-medium font-jakarta"
          role="menubar"
        >
          <Link to="/login">
            <button
              color="inherit"
              className="font-jakarta text-sm px-4 py-2 rounded-full text-white font-medium bg-white bg-opacity-[.08] border border-white border-opacity-[.08] hover:border-opacity-25"
              role="menuitem"
            >
              Вход
            </button>
          </Link>

          <Link className="direction" to="/signup">
            {' '}
            <button
              color="inherit"
              className="font-jakarta text-sm px-4 py-2 rounded-full text-white font-medium bg-white bg-opacity-[.08] border border-white border-opacity-[.08] hover:border-opacity-25"
              role="menuitem"
            >
              Регистрация
            </button>
          </Link>
        </ul>
      )}
    </nav>
  );
}
export default NavbarDefault;
