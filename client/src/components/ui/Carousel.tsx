import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Item from '../ui/CarouselItem';

export default function Carousel(): JSX.Element {

    const items = [
        {
          id: 1,
          name: 'Random Name #1',
          description: 'Probably the most random thing you have ever seen!',
        },
        { id: 2, name: 'Random Name #2', description: 'Hello World!' },
      ];
    
      return (
        <Carousel>
          {items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </Carousel>
      );

}
