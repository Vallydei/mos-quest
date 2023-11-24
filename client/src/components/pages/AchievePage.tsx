import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import Checkbox from '@mui/material/Checkbox';
import Grow from '@mui/material/Grow';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';
import './AchievePage.css';

const icons = [<BeachAccessIcon />, <AccessAlarmIcon />, <ThreeDRotationIcon />];

export default function AchievePage(): React.JSX.Element {
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div className='achievement-container'>
      <h1>Мои достижения</h1>
      <List dense className='list-container'>
        {[0, 1, 2, 3, 4, 5].map((value) => {
          const labelId = `checkbox-list-secondary-label-${value}`;
          return (
            <Grow in timeout={500} key={value}>
              <ListItem
                key={value}
                disablePadding
                className='list-item'
                sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }} // Add hover effect
              >
                <ListItemButton>
                  <ListItemAvatar>{icons[value % icons.length]}</ListItemAvatar>
                  <ListItemText id={labelId} primary={`Ачивка ${value + 1}`} />
                  <ListItemSecondaryAction>
                    <Checkbox
                      className='checkbox-icon'
                      edge="end"
                      onChange={handleToggle(value)}
                      checked={checked.indexOf(value) !== -1}
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </ListItemSecondaryAction>
                </ListItemButton>
              </ListItem>
            </Grow>
          );
        })}
      </List>
    </div>
  );
}
