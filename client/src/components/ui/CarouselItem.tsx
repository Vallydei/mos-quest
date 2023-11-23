import React from 'react';
import { Button, Paper } from '@mui/material';

type ItemProps = {
  item: { name: string; description: string };
};

export default function Item({ item }: ItemProps): JSX.Element {
  return (
    <Paper>
      <h2>{item.name}</h2>
      <p>{item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}
