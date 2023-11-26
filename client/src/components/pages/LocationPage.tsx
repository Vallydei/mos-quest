import React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { TextField } from '@mui/material';
import { useParams } from 'react-router-dom';
import CarouselElement from '../ui/CarouselElement';
import CommentCard from '../ui/CommentCard';
import { useAppSelector } from '../../redux/hooks';

export default function LocationPage(): JSX.Element {
  const locations = useAppSelector((store) => store.locationsSlice.locations);
  const comments = useAppSelector((store) => store.locationsSlice.comments);
  const { id } = useParams();
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
            <a target="_blank" href={location?.adress} rel="noreferrer">
              <img className="imgLocationMap" src={location?.map} alt="locationMap" />
            </a>
          </div>
        </div>

        <div className="columnContainer">
          <div className="CardContent">
            <Typography fontSize="xl" fontWeight="lg">
              {location?.title}
            </Typography>

            <Sheet
              sx={{
                bgcolor: 'background.level1',
                borderRadius: 'sm',
                p: 1.5,
                my: 1.5,
                display: 'flex',
                gap: 2,
                '& > div': { flex: 1 },
              }}
            >
              <div>
                <Typography fontWeight="lg">{location?.description}</Typography>
              </div>
            </Sheet>
            <Button variant="outlined" color="neutral">
              OnePlaceChallenge
            </Button>
          </div>
          <div className="commentsField">
            <h3>Комментарии</h3>
            <br />
            {commentsLocations.map((comment) => (
              <CommentCard key={comment.id} comment={comment} />
            ))}

            <form noValidate className="inputComments">
              <TextField
                size="medium"
                rows="5"
                id="outlined-required"
                label="Оставьте комментарий"
                className="commentTextArea"
                name="comment"
              />
              <Button variant="outlined" color="neutral">
                Отправить
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Box>
  );
}
