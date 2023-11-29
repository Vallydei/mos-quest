import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useAppSelector } from '../../redux/hooks';
import { toggleModal } from '../../redux/slices/auth';
import { thunkUpdateUser } from '../../redux/slices/auth/createAsyncThunks';
import type { SignupFormData } from '../../types/auth';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '3px solid #6d14b8',
  boxShadow: 24,
  p: 4,
};

export default function UserEditModal(): JSX.Element {
  const open = useAppSelector((store) => store.authSlice.addUserModalIsOpen);
  const user = useAppSelector((store) => store.authSlice.user);
  const dispatch = useDispatch();
  const handleClose = (): void => {
    dispatch(toggleModal());
  };

  return (
    <div>
      <Modal
        open={!!open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ backdropFilter: 'blur(5px)' }}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit User
          </Typography>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData();
              formData.append('id', user.id);
              formData.append('name', e.currentTarget.name.value);
              formData.append('email', e.currentTarget.email.value);
              formData.append('avatar', e.currentTarget.avatar.files[0]);
              console.log(e.currentTarget.name.value);
              

              // dispatch(thunkUpdateUser({ id: user.id, data: formData }));
              dispatch(thunkUpdateUser(formData));
              dispatch(toggleModal());
            }}
          >
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              name="name"
              defaultValue={user.name}
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              name="email"
              defaultValue={user.email}
            />
            <TextField
              id="phone"
              label="Phone"
              variant="outlined"
              fullWidth
              margin="normal"
              name="phone"
              defaultValue={user.phone ? user.phone : 'no phone'}
            />
            <TextField
              id="avatar"
              label="avatar"
              variant="outlined"
              fullWidth
              margin="normal"
              name="avatar"
              type="file"
              // defaultValue={user.avatar ? user.avatar : 'Нету'}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
