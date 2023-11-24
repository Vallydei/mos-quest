import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { TextField } from '@mui/material';
import CarouselElement from '../ui/CarouselElement';
import CommentCard from '../ui/CommentCard';

export default function LocationPage(): JSX.Element {
  const location = {
    id: 1,
    title: 'Location Description',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rerum debitis facilis consequuntur quos unde dicta nihil! Quisquam voluptatum, eius est distinctio veniam asperiores rem quae illum nostrum dolorum neque.',
    adress:
      'https://www.google.com/maps/dir//%D0%9A%D0%BE%D1%82+%D0%A8%D1%80%D0%B5%D0%B4%D0%B8%D0%BD%D0%B3%D0%B5%D1%80%D0%B0,+%D0%A1%D0%B0%D0%B4%D0%BE%D0%B2%D0%B0%D1%8F-%D0%9A%D1%83%D0%B4%D1%80%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F+%D1%83%D0%BB.,+8%2F12,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+123001/@55.761421,37.5868939,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x46b54a36f3be9bbb:0xdac0aef1bc084b8a!2m2!1d37.5867713!2d55.7614489!3e0?entry=ttu',
    mapImg:
      'https://static-maps.yandex.ru/1.x/?size=632,200&l=map&pt=37.6218123,54.1904387,pm2gnm&z=15&ll=37.6218123,54.1904387',
  };

  const comments = [
    {
      id: 1,
      text: 'Lorem Lorem Lorem Lorem Lorem',
      userId: 1,
      locationId: 1,
      User: { id: 1, name: 'Ivan', avatar: '' },
    },
    {
      id: 2,
      text: 'Romano Romano Romano Romano Romano',
      userId: 1,
      locationId: 1,
      User: { id: 1, name: 'Eugin', avatar: '' },
    },
    {
      id: 3,
      text: 'Vouce Vouce Vouce Vouce Vouce Vouce',
      userId: 1,
      locationId: 1,
      User: { id: 1, name: 'Ivan', avatar: '' },
    },
    {
      id: 4,
      text: 'Vouce Vouce Vouce Vouce Vouce Vouce',
      userId: 1,
      locationId: 1,
      User: { id: 1, name: 'Valeriiy', avatar: '' },
    },
  ];
  return (
    <Box>
      <div className="locationContainer">
        <div className="columnContainer">
          <div className="carouselContainer">
            <CarouselElement />
          </div>
          <div className="mapContainer">
            <a target="_blank" href={location.adress} rel="noreferrer">
              <img className="imgLocationMap" src={location.mapImg} alt="locationMap" />
            </a>
          </div>
        </div>

        <div className="columnContainer">
          <div className="CardContent">
            <Typography fontSize="xl" fontWeight="lg">
              {location.title}
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
                <Typography fontWeight="lg">{location.description}</Typography>
              </div>
            </Sheet>
            <Button variant="outlined" color="neutral">
              OnePlaceChallenge
            </Button>
          </div>
          <div className="commentsField">
            <h3>Комментарии</h3>
            <br />
            {comments.map((comment) => (
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
