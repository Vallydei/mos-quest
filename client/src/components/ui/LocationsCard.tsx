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
import MoreVertIcon from '@mui/icons-material/MoreVert';

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

export default function RecipeReviewCard(): JSX.Element {
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
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="BAR Pink PIG"
        subheader="November 23, 2023"
      />
      <a href="/location/:id">
        <CardMedia
          component="img"
          height="194"
          image="https://kartinki.pics/uploads/posts/2022-03/1647532093_1-kartinkin-net-p-kartinki-bara-1.jpg"
          alt="Описание локации"
        />
      </a>
      <CardContent sx={{ color: 'white' }}>
        <Typography variant="body2" color="black" fontWeight="bold">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
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
        <CardContent sx={{ color: 'black' }}>
          <Typography paragraph fontWeight="bold">Method:</Typography>
          <Typography paragraph fontWeight="bold">
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph fontWeight="bold">
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan.
          </Typography>
          <Typography />
          <Typography />
        </CardContent>
      </Collapse>
    </Card>
  );
}
