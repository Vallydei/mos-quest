import React from 'react';
import { Paper } from '@mui/material';
import '../pages/LocationPage.css';

type ItemProps = {
  item: { name: string; description: string; img: string };
};

export default function Item({ item }: ItemProps): JSX.Element {
  return (
    <Paper className="Project" elevation={10}>
      <img
        className="imgLocation"        
        src={item.img}
        alt=""
      />
      {/* <h2>{item.name}</h2>
      <p>{item.description}</p> */}

      {/* <Button className="CheckButton">Check it out!</Button> */}
    </Paper>
  );
}
