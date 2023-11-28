/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import type { IconButtonProps } from '@mui/material/IconButton';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import type { LocationType } from '../../types/locationType/locationType';
import { Link } from 'react-router-dom';

type ExpandMoreProps = {
  expand: boolean;
} & IconButtonProps;

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

type LocationsCardrops = {
  location: LocationType;
};

export default function LocationsCard({ location }: LocationsCardrops): JSX.Element {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = (): void => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, bgcolor: 'white', color: 'black' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            Quest
          </Avatar>
        }
        title={location?.title}
      />
     <Link to={`/location/${Number(location?.id)}`} style={{ textDecoration: 'none' }}>
        {location?.Images[4] ? (
          <CardMedia
            component="img"
            height="194"
            image={location?.Images[4].locationImg}
            alt="Описание локации"
          />
        ) : (
          <>Нет картинок</>
        )}
      </Link>
      <CardContent sx={{ color: 'white' }}>
        <Typography variant="body2" color="black" fontWeight="bold">
          {location?.shortDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph fontWeight="bold">
            {location?.description}{' '}
          </Typography>
          <Typography />
          <Typography />
        </CardContent>
      </Collapse>
    </Card>
  );
}
