import * as React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Person from '@mui/icons-material/Person';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { thunkLogout } from '../../redux/slices/auth/createAsyncThunks';
import logo from '../../../public/logo.png';

const navVariants = {
  initial: {
    y: -50,
    x: '-50%',
    opacity: 0,
  },
  animate: {
    y: 0,
    x: '-50%',
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    y: -50,
    opacity: 0,
  },
};

function NavbarFixed(): JSX.Element {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((store) => store.authSlice);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={navVariants}
      className="fixed z-[999] top-4 left-1/2 -translate-x-1/2 rounded-full p-1 bg-white bg-opacity-[.08] backdrop-blur-lg border border-white border-opacity-[.08]"
    >
      <ul
        role="menubar"
        className="flex items-center gap-2 text-sm font-medium font-jakarta text-white"
      >
        <li color="inherit" role="none" className="p-4 hover:opacity-50">
          Hello, {auth.user.status === 'authenticated' ? auth.user.name : 'Guest'}
        </li>

        <Link to="/">
          <li color="inherit" className="p-4 hover:opacity-50" role="menuitem" aria-label="Home">
            <img src={logo} alt="Logo" style={{ height: '50px' }} />
          </li>
        </Link>

        <Link to="/locations">
          <li color="inherit" className="p-4 hover:opacity-50" role="menuitem">
            Локации
          </li>
        </Link>

        <Link to="/themepage">
          {' '}
          <li color="inherit" className="p-4 hover:opacity-50" role="menuitem">
            Категории квестов
          </li>
        </Link>

        {auth.user.status === 'authenticated' ? (
          <>
            <Link to="/account">
              <li
                color="inherit"
                className="p-4 hover:opacity-50"
                role="menuitem"
                aria-label="Profile"
              >
                <Person /> Личный кабинет
              </li>
            </Link>

            <Link to="/logout">
              {' '}
              <button
                className="font-jakarta text-sm px-4 py-2 rounded-3xl text-white font-medium bg-[#171719] border border-white border-opacity-[.08] hover:border-opacity-25"
                role="menuitem"
                onClick={() => void dispatch(thunkLogout())}
              >
                Выйти
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="font-jakarta text-sm px-4 py-2 rounded-3xl text-white font-medium bg-[#171719] border border-white border-opacity-[.08] hover:border-opacity-25">
                Вход
              </button>
            </Link>

            <Link to="/signup">
              {' '}
              <button className="font-jakarta text-sm px-4 py-2 rounded-3xl text-white font-medium bg-[#171719] border border-white border-opacity-[.08] hover:border-opacity-25">
                Регистрация
              </button>
            </Link>
          </>
        )}
      </ul>
    </motion.div>
  );
}
export default NavbarFixed;
