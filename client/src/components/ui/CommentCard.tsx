import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import type { CommentEditType } from '../../types/locationType/locationType';
import { thunkDeleteCommentOfLocation, thunkEditCommentOfLocation } from '../../redux/slices/locations/locationAsyncThunks';

type CommentCardProps = {
  comment: {
    id: number;
    text: string;
    userId: number;
    locationId: number;
    User: { id: number; name: string; avatar: string };
  };
};

export default function CommentCard({ comment }: CommentCardProps): JSX.Element {
  const user = useAppSelector((store) => store.authSlice.user);
  const [edit, setEdit] = useState(false);
  const dispatch = useAppDispatch();
  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { id } = comment;
    const formData = Object.fromEntries(new FormData(e.currentTarget)) as Omit<
      CommentEditType,
      'id'
    >;

    void dispatch(thunkEditCommentOfLocation({ ...formData, id: Number(id) }));
    e.currentTarget.reset();
  };

  return (
    <div>
      {edit === false ? (
        <div className="commentContainer">
          <svg
            className="avatar"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 256 256"
            enableBackground="new 0 0 256 256"
            xmlSpace="preserve"
          >
            <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
            <g>
              <g>
                <g>
                  <path
                    fill="#000000"
                    d="M116.6,10.4c-16.9,1.8-35.2,7.9-49.6,16.5C51.4,36.4,36.4,51.4,26.9,67c-11.7,19.4-17.8,43.3-16.8,65.5c1.3,29.4,12.7,56.3,32.9,77.2c10,10.4,20.3,17.9,33.2,24.2c17,8.4,32.6,11.9,51.9,11.9c19.3,0,35-3.6,51.9-11.9c12.9-6.3,23.2-13.9,33-24c17.5-18.2,28.1-39.9,32-65.4c1.3-8.4,1.3-24.7,0-33c-2-13.2-5.3-23.8-11-35.4c-19.5-39.9-58.8-65-103.3-66C125.6,10,119.3,10.1,116.6,10.4z M139.3,47.7c16.7,4.2,29.9,18.1,33.3,35c1.2,6,0.9,15.7-0.8,21.3c-6.3,21.9-28.2,36-50.6,32.5c-15.8-2.5-29.3-13.2-35.1-27.8c-4.3-10.9-4.3-23.7,0.1-34.3C94.8,53.6,117.4,42.2,139.3,47.7z M174.9,156.5c10.9,2,20.5,6.1,28.1,11.9c4.8,3.7,10.2,9.5,10.2,11.1c0,0.6-1.4,3.1-3.1,5.6c-25.4,36.4-71.6,51.7-113.7,37.7C76.2,216,58.3,202.6,46,185.1c-1.8-2.5-3.1-5-3.1-5.6c0-1.6,5.9-7.9,10.5-11.3c9.2-6.8,20.2-10.9,33.4-12.3c2.3-0.3,21.9-0.4,43.6-0.4C165.7,155.5,170.4,155.6,174.9,156.5z"
                  />
                </g>
              </g>
            </g>
          </svg>
          <div>
            <h3>{comment.User.name}</h3>
            <p>{comment.text}</p>
          
          {(user.status === 'authenticated') && (user.id === comment.userId) && (
        <> {' '}
        <button
          onClick={(e) => {
            e.preventDefault();
            setEdit(true);
          }}
          type="button"
        >
          редактировать
        </button>
        <button onClick={(e) => {
            e.preventDefault();
           void dispatch(thunkDeleteCommentOfLocation(comment.id))
          }} type="button">удалить</button></>
             
         
          )}
          </div>
        </div>
      ) : (
        <div className="commentContainer">
          <svg
            className="avatar"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 256 256"
            enableBackground="new 0 0 256 256"
            xmlSpace="preserve"
          >
            <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
            <g>
              <g>
                <g>
                  <path
                    fill="#000000"
                    d="M116.6,10.4c-16.9,1.8-35.2,7.9-49.6,16.5C51.4,36.4,36.4,51.4,26.9,67c-11.7,19.4-17.8,43.3-16.8,65.5c1.3,29.4,12.7,56.3,32.9,77.2c10,10.4,20.3,17.9,33.2,24.2c17,8.4,32.6,11.9,51.9,11.9c19.3,0,35-3.6,51.9-11.9c12.9-6.3,23.2-13.9,33-24c17.5-18.2,28.1-39.9,32-65.4c1.3-8.4,1.3-24.7,0-33c-2-13.2-5.3-23.8-11-35.4c-19.5-39.9-58.8-65-103.3-66C125.6,10,119.3,10.1,116.6,10.4z M139.3,47.7c16.7,4.2,29.9,18.1,33.3,35c1.2,6,0.9,15.7-0.8,21.3c-6.3,21.9-28.2,36-50.6,32.5c-15.8-2.5-29.3-13.2-35.1-27.8c-4.3-10.9-4.3-23.7,0.1-34.3C94.8,53.6,117.4,42.2,139.3,47.7z M174.9,156.5c10.9,2,20.5,6.1,28.1,11.9c4.8,3.7,10.2,9.5,10.2,11.1c0,0.6-1.4,3.1-3.1,5.6c-25.4,36.4-71.6,51.7-113.7,37.7C76.2,216,58.3,202.6,46,185.1c-1.8-2.5-3.1-5-3.1-5.6c0-1.6,5.9-7.9,10.5-11.3c9.2-6.8,20.2-10.9,33.4-12.3c2.3-0.3,21.9-0.4,43.6-0.4C165.7,155.5,170.4,155.6,174.9,156.5z"
                  />
                </g>
              </g>
            </g>
          </svg>
          <div>
            <h3>{comment.User.name}</h3>
            <form
              onSubmit={(e) => {
                submitHandler(e);
                setEdit(false);
              }}
              noValidate
              className="inputComments"
            >
              <TextField
                size="medium"
                rows="5"
                id="outlined-required"
                label="Редактировать комментарий"
                className="commentTextArea"
                name="text"
                defaultValue={comment.text}
              />
              <Button type="submit" variant="outlined">
                сoхранить
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
