import React from 'react';
import { Paper } from '@mui/material';
import '../pages/css/LocationPage.css';
import type { ImageType } from '../../types/locationType/locationType';

type ItemProps = {
  item: ImageType;
};

export default function Item({ item }: ItemProps): JSX.Element {
  return (
    // <Paper className="Project" elevation={10}>
      <div className="Project">
        <img  className="imgLocation" src={item.locationImg} alt="placePicture" />
      </div>

    // </Paper>
  );
}
