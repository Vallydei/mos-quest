import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Item from './CarouselItem';
import '../pages/LacationPage.css';

export default function CarouselElement(): JSX.Element {
  const items = [
    {
      id: 1,
      name: 'Random Name #1',
      description: 'Probably the most random thing you have ever seen!',
      img: 'https://cs14.pikabu.ru/post_img/big/2023/09/26/6/169571922916833865.jpg',
    },
    {
      id: 2,
      name: 'Random Name #2',
      description: 'Hello World!',
      img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/fb/93/1c/caption.jpg?w=1200&h=-1&s=1',
    },
    {
      id: 3,
      name: 'Random Name #3',
      description: 'Bla bla bla',
      img: 'https://media-cdn.tripadvisor.com/media/photo-s/19/c7/98/a1/caption.jpg',
    },
  ];

  return (
    <Carousel className="SecondExample">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Carousel>
  );
}
