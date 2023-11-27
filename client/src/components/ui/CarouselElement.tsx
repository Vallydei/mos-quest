import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Item from './CarouselItem';
import '../pages/css/LocationPage.css';
import type { ImageType } from '../../types/locationType/locationType';

type CarouselElementProp = {
  images: ImageType[];
};

export default function CarouselElement({ images }: CarouselElementProp): JSX.Element {
  return (
    <Carousel className="SecondExample">
      {images?.map((item) => <Item key={item.id} item={item} />)}
    </Carousel>
  );
}
