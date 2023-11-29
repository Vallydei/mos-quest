import React from 'react';
import '../pages/css/LocationPage.css';
import type { ImageType } from '../../types/locationType/locationType';

type ItemProps = {
  item: ImageType;
};

export default function Item({ item }: ItemProps): JSX.Element {
  return (
    <div className="Project">
      <img className="imgLocation" src={item.locationImg} alt="placePicture" />
    </div>
  );
}
