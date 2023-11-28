import React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { TextField } from '@mui/material';
import { useParams } from 'react-router-dom';
import CarouselElement from '../ui/CarouselElement';
import CommentCard from '../ui/CommentCard';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import GoogleMaps from '../ui/GoogleMaps';
import { thunkPostCommentOfLocation } from '../../redux/slices/locations/locationAsyncThunks';
import type { CommentFormType } from '../../types/locationType/locationType';
import "./css/LocPage.css"; 
import "./css/LocationPage.css"

export default function LocationPage(): JSX.Element {
  const locations = useAppSelector((store) => store.locationsSlice.locations);
  const comments = useAppSelector((store) => store.locationsSlice.comments);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // if (user.status === 'authenticated')
    const formData = Object.fromEntries(new FormData(e.currentTarget)) as Omit<
      CommentFormType,
      'locationId'
    >;
    void dispatch(thunkPostCommentOfLocation({ ...formData, locationId: Number(id) }));
    e.currentTarget.reset();
  };
  const location = locations.find((el) => el?.id === Number(id));
  const commentsLocations = comments.filter((el) => el.locationId === Number(id));

  return (
    <Box>
      <div className="locationContainer">
        <div className="columnContainer">
          <div className="carouselContainer">
            <CarouselElement images={location?.Images} />
          </div>
          <div className="mapContainer">
            <GoogleMaps map={location?.map} />
          </div>
        </div>

        <div className="columnContainer">
          <div className="CardContent">
            <Typography fontSize="xl" fontWeight="lg">
              {location?.title}
            </Typography>

            <Sheet
              sx={{
                bgcolor: 'white',
                borderRadius: 'sm',
                p: 1.5,
                my: 1.5,
                display: 'flex',
                gap: 2,
                '& > div': { flex: 1 },
              }}
              className="CardContent" // Add the class for CardContent animation
            >
              <div>
                <Typography fontWeight="lg">{location?.description}</Typography>
              </div>
            </Sheet>
            <Button variant="outlined" color="neutral">
              OnePlaceChallenge
            </Button>
          </div>
          <div className="commentsField" style={{ color: 'white' }}>
            <h3>Комментарии</h3>
            <br />
            {commentsLocations.map((comment) => (
              <CommentCard key={comment.id} comment={comment} />
            ))}

            <form onSubmit={(e) => submitHandler(e)} noValidate className="inputComments">
              <TextField
                size="medium"
                rows="5"
                id="outlined-required"
                label="Оставьте комментарий"
                className="commentTextArea"
                name="text"
              />
              <Button type="submit" variant="outlined" color="neutral">
                Отправить
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Box>
  );
}
