import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import type { CommentEditType } from '../../types/locationType/locationType';
import {
  thunkDeleteCommentOfLocation,
  thunkEditCommentOfLocation,
} from '../../redux/slices/locations/locationAsyncThunks';
import { UserType } from '../../types/auth';

type CommentCardProps = {
  comment: {
    id: number;
    text: string;
    userId: number;
    locationId: number;
    User: UserType;
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
          {!comment.User.avatar ? (
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
          ) : (
            <img
              src={`http://localhost:3001/img/${comment.User.avatar}`}
              alt="аватарка"
              className="avatar"
            />
          )}
          <div>
            <div className="userNameTitle">
              <h3>{comment.User.name}</h3>
            </div>

            <p className="textContainer">{comment.text}</p>

 
          </div>
                     {user.status === 'authenticated' && user.id === comment.userId && (
              <div className='btnsContainer'>
                {' '}
                <button
                 className="button trashEditIcons"
                  onClick={(e) => {
                    e.preventDefault();
                    setEdit(true);
                  }}
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    width="20"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#422163"
                      d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"
                    />
                  </svg>
                </button>
                <button
                  className="button trashEditIcons"
                  onClick={(e) => {
                    e.preventDefault();
                    void dispatch(thunkDeleteCommentOfLocation(comment.id));
                  }}
                  type="button"
                >
                  <svg
                    className="fas fa-regular fa-trash-can fa-bounce"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    width="23"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="#422163"
                      d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"
                    />
                  </svg>
                  {/* <i className="fas fa-regular fa-trash-can fa-bounce" style={{ color: '#663399' }}/> */}
                </button>
              </div>
            )}
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
              <textarea            
               
                id="outlined-required"
                placeholder="Редактировать комментарий"
                className="commentTextArea editTextArea"
                name="text"
                defaultValue={comment.text}
              />
              <button type="submit" className='buttonReg locationBtn editBtn'>
                Сoхранить
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
